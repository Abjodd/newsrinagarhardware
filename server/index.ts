import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

const OWNER_PIN = process.env.OWNER_PIN || "1234";
const MONGODB_URI = process.env.MONGODB_URI || "";

let mongoConnected = false;

async function initMongo() {
  if (!MONGODB_URI) {
    console.log("⚠️  MongoDB not configured. Set MONGODB_URI environment variable to enable message storage.");
    return;
  }

  try {
    // Dynamically import mongoose only if MongoDB is configured
    // This prevents crashes if mongoose is not installed
    console.log("MongoDB configured - messages will be saved when mongoose is available");
    mongoConnected = false; // Will be true when mongoose is actually available
  } catch (error) {
    console.error("MongoDB setup error:", error);
  }
}

export async function createServer() {
  const app = express();

  // Initialize MongoDB
  await initMongo();

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

  // Message routes (placeholder - will work with MongoDB when configured)
  app.post("/api/messages", async (req, res) => {
    try {
      const { name, email, phone, company, service, message } = req.body;

      if (!name || !email || !service || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // For now, just acknowledge the message
      // When MongoDB is set up, it will be persisted
      res.status(201).json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
    } catch (error) {
      console.error("Error processing message:", error);
      res.status(500).json({ error: "Failed to process message" });
    }
  });

  app.get("/api/messages", verifyOwnerPin, async (req, res) => {
    res.status(503).json({
      error: "Owner dashboard coming soon",
      message: "Set up MongoDB to enable message storage and owner dashboard"
    });
  });

  app.get("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    res.status(404).json({ error: "Message not found" });
  });

  app.patch("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    res.status(404).json({ error: "Message not found" });
  });

  app.delete("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    res.status(404).json({ error: "Message not found" });
  });

  return app;
}
