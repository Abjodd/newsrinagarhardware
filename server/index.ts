import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

const OWNER_PIN = process.env.OWNER_PIN || "1234";
const MONGODB_URI = process.env.MONGODB_URI || "";

let mongoConnected = false;
let mongoose: any = null;
let Message: any = null;

// In-memory message storage as fallback
const inMemoryMessages: any[] = [];

async function initMongo() {
  if (!MONGODB_URI) {
    console.log("⚠️  MongoDB not configured. Using in-memory storage. Messages will be lost on server restart.");
    return;
  }

  try {
    // @ts-ignore - mongoose is optional
    mongoose = await import("mongoose").then((m) => m.default);

    const messageSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      company: { type: String },
      service: { type: String, required: true },
      message: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      status: { type: String, enum: ["new", "read", "replied"], default: "new" },
      notes: { type: String },
    });

    Message = mongoose.model("Message", messageSchema);

    await mongoose.connect(MONGODB_URI);
    mongoConnected = true;
    console.log("✓ Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB setup failed:", error);
    mongoose = null;
    Message = null;
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

  // Message routes
  app.post("/api/messages", async (req, res) => {
    try {
      const { name, email, phone, company, service, message } = req.body;

      if (!name || !email || !service || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newMsg = {
        _id: Date.now().toString(),
        name,
        email,
        phone: phone || "",
        company: company || "",
        service,
        message,
        createdAt: new Date(),
        status: "new",
        notes: ""
      };

      if (mongoConnected && Message) {
        try {
          const dbMessage = new Message(newMsg);
          await dbMessage.save();
          return res.status(201).json({
            success: true,
            message: "Message saved successfully",
            id: dbMessage._id
          });
        } catch (dbError) {
          console.error("MongoDB save failed, using in-memory:", dbError);
        }
      }

      // Fallback to in-memory storage
      inMemoryMessages.push(newMsg);
      console.log(`✓ Message saved (in-memory): ${name} - ${email}`);
      res.status(201).json({
        success: true,
        message: "Thank you! We'll get back to you soon.",
        id: newMsg._id
      });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  app.get("/api/messages", verifyOwnerPin, async (req, res) => {
    try {
      if (mongoConnected && Message) {
        try {
          const messages = await Message.find({}).sort({ createdAt: -1 });
          return res.json({ success: true, messages });
        } catch (dbError) {
          console.error("MongoDB fetch failed:", dbError);
        }
      }

      // Return in-memory messages
      const sortedMessages = [...inMemoryMessages].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      res.json({ success: true, messages: sortedMessages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.get("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      if (mongoConnected && Message) {
        try {
          const message = await Message.findById(req.params.id);
          if (message) return res.json({ success: true, message });
        } catch (dbError) {
          console.error("MongoDB fetch failed:", dbError);
        }
      }

      // Search in-memory
      const message = inMemoryMessages.find(m => m._id === req.params.id);
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
      const { status, notes } = req.body;

      if (mongoConnected && Message) {
        try {
          const message = await Message.findByIdAndUpdate(
            req.params.id,
            { status, notes },
            { new: true }
          );
          if (message) return res.json({ success: true, message });
        } catch (dbError) {
          console.error("MongoDB update failed:", dbError);
        }
      }

      // Update in-memory
      const message = inMemoryMessages.find(m => m._id === req.params.id);
      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }

      message.status = status || message.status;
      message.notes = notes || message.notes;
      res.json({ success: true, message });
    } catch (error) {
      console.error("Error updating message:", error);
      res.status(500).json({ error: "Failed to update message" });
    }
  });

  app.delete("/api/messages/:id", verifyOwnerPin, async (req, res) => {
    try {
      if (mongoConnected && Message) {
        try {
          const message = await Message.findByIdAndDelete(req.params.id);
          if (message) return res.json({ success: true, message: "Message deleted" });
        } catch (dbError) {
          console.error("MongoDB delete failed:", dbError);
        }
      }

      // Delete from in-memory
      const index = inMemoryMessages.findIndex(m => m._id === req.params.id);
      if (index === -1) {
        return res.status(404).json({ error: "Message not found" });
      }

      inMemoryMessages.splice(index, 1);
      res.json({ success: true, message: "Message deleted" });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Failed to delete message" });
    }
  });

  return app;
}
