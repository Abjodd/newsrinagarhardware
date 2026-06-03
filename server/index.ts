import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { handleDemo } from "./routes/demo";
import { Message } from "./models/Message";

const MONGO_URI = process.env.MONGODB_URI || "";
const OWNER_PIN = process.env.OWNER_PIN || "1234";

let mongoConnected = false;

async function connectMongo() {
  if (mongoConnected) return;

  if (!MONGO_URI) {
    console.warn("MONGODB_URI not configured. Message saving will be disabled.");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    mongoConnected = true;
    console.log("✓ Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

export function createServer() {
  const app = express();

  // Connect to MongoDB
  connectMongo();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Middleware to verify owner PIN
  const verifyOwnerPin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const pin = req.headers["x-owner-pin"];
    if (pin !== OWNER_PIN) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Message routes
  app.post("/api/messages", async (req, res) => {
    try {
      if (!mongoConnected) {
        return res.status(503).json({ error: "Database not available" });
      }

      const { name, email, phone, company, service, message } = req.body;

      if (!name || !email || !service || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newMessage = new Message({
        name,
        email,
        phone: phone || "",
        company: company || "",
        service,
        message,
      });

      await newMessage.save();
      res.status(201).json({
        success: true,
        message: "Message saved successfully",
        id: newMessage._id
      });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  app.get("/api/messages", verifyOwnerPin, async (req, res) => {
    try {
      if (!mongoConnected) {
        return res.status(503).json({ error: "Database not available" });
      }

      const messages = await Message.find({}).sort({ createdAt: -1 });
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.get("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      if (!mongoConnected) {
        return res.status(503).json({ error: "Database not available" });
      }

      const message = await Message.findById(req.params.id);
      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }

      res.json({ success: true, message });
    } catch (error) {
      console.error("Error fetching message:", error);
      res.status(500).json({ error: "Failed to fetch message" });
    }
  });

  app.patch("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      if (!mongoConnected) {
        return res.status(503).json({ error: "Database not available" });
      }

      const { status, notes } = req.body;
      const message = await Message.findByIdAndUpdate(
        req.params.id,
        { status, notes },
        { new: true }
      );

      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }

      res.json({ success: true, message });
    } catch (error) {
      console.error("Error updating message:", error);
      res.status(500).json({ error: "Failed to update message" });
    }
  });

  app.delete("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      if (!mongoConnected) {
        return res.status(503).json({ error: "Database not available" });
      }

      const message = await Message.findByIdAndDelete(req.params.id);
      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }

      res.json({ success: true, message: "Message deleted" });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Failed to delete message" });
    }
  });

  return app;
}
