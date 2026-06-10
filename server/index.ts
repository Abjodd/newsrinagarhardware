import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

const OWNER_PIN = "272335";
const MONGODB_URI = process.env.MONGODB_URI || "";

// ─── MongoDB native driver (no mongoose) ────────────────────────────────────
let cachedDb: any = null;

async function getDb() {
  if (cachedDb) return cachedDb;
  if (!MONGODB_URI) return null;

  try {
    const { MongoClient } = await import("mongodb");
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    await client.connect();
    const dbName = MONGODB_URI.split("/").pop()?.split("?")[0] || "contacts";
    cachedDb = client.db(dbName);
    console.log("✓ Connected to MongoDB:", dbName);
    return cachedDb;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    return null;
  }
}

// ─── In-memory fallback ──────────────────────────────────────────────────────
const inMemoryMessages: any[] = [];

// ─── Server ──────────────────────────────────────────────────────────────────
export async function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const verifyOwnerPin = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.headers["x-owner-pin"] !== OWNER_PIN) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };

  app.get("/api/ping", (_req, res) => {
    res.json({ message: process.env.PING_MESSAGE ?? "ping" });
  });

  app.get("/api/demo", handleDemo);

  // POST /api/messages — public contact form submission
  app.post("/api/messages", async (req, res) => {
    try {
      const { name, email, phone, company, service, message } = req.body;
      if (!name || !email || !service || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const doc = {
        name,
        email,
        phone: phone || "",
        company: company || "",
        service,
        message,
        createdAt: new Date(),
        status: "new",
        notes: "",
      };

      const db = await getDb();
      if (db) {
        const result = await db.collection("messages").insertOne(doc);
        return res.status(201).json({ success: true, id: result.insertedId });
      }

      const fallbackDoc = { ...doc, _id: Date.now().toString() };
      inMemoryMessages.push(fallbackDoc);
      res.status(201).json({ success: true, id: fallbackDoc._id });
    } catch (err) {
      console.error("POST /api/messages error:", err);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  // GET /api/messages — owner only
  app.get("/api/messages", verifyOwnerPin, async (_req, res) => {
    try {
      const db = await getDb();
      if (db) {
        const messages = await db
          .collection("messages")
          .find({})
          .sort({ createdAt: -1 })
          .toArray();
        return res.json({ success: true, messages });
      }

      const sorted = [...inMemoryMessages].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      res.json({ success: true, messages: sorted });
    } catch (err) {
      console.error("GET /api/messages error:", err);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // GET /api/messages/:id
  app.get("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      const db = await getDb();
      if (db) {
        const { ObjectId } = await import("mongodb");
        const message = await db
          .collection("messages")
          .findOne({ _id: new ObjectId(req.params.id) });
        if (message) return res.json({ success: true, message });
      }

      const message = inMemoryMessages.find((m) => m._id === req.params.id);
      if (!message) return res.status(404).json({ error: "Not found" });
      res.json({ success: true, message });
    } catch (err) {
      console.error("GET /api/messages/:id error:", err);
      res.status(500).json({ error: "Failed to fetch message" });
    }
  });

  // PATCH /api/messages/:id
  app.patch("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      const { status, notes } = req.body;
      const update: any = {};
      if (status !== undefined) update.status = status;
      if (notes !== undefined) update.notes = notes;

      const db = await getDb();
      if (db) {
        const { ObjectId } = await import("mongodb");
        const result = await db
          .collection("messages")
          .findOneAndUpdate(
            { _id: new ObjectId(req.params.id) },
            { $set: update },
            { returnDocument: "after" }
          );
        if (result) return res.json({ success: true, message: result });
      }

      const message = inMemoryMessages.find((m) => m._id === req.params.id);
      if (!message) return res.status(404).json({ error: "Not found" });
      Object.assign(message, update);
      res.json({ success: true, message });
    } catch (err) {
      console.error("PATCH /api/messages/:id error:", err);
      res.status(500).json({ error: "Failed to update message" });
    }
  });

  // DELETE /api/messages/:id
  app.delete("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      const db = await getDb();
      if (db) {
        const { ObjectId } = await import("mongodb");
        const result = await db
          .collection("messages")
          .findOneAndDelete({ _id: new ObjectId(req.params.id) });
        if (result) return res.json({ success: true });
      }

      const index = inMemoryMessages.findIndex((m) => m._id === req.params.id);
      if (index === -1) return res.status(404).json({ error: "Not found" });
      inMemoryMessages.splice(index, 1);
      res.json({ success: true });
    } catch (err) {
      console.error("DELETE /api/messages/:id error:", err);
      res.status(500).json({ error: "Failed to delete message" });
    }
  });

  return app;
}
