// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- CORS + JSON ----------
app.use(
  cors({
    origin: "*", // Vercel, localhost sab allowed
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// ---------- MongoDB ----------
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in env");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ---------- Schema & Model ----------
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// ---------- Resend client ----------
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

if (!resendApiKey) {
  console.warn("⚠️ RESEND_API_KEY not set. Emails will NOT be sent.");
}

// ---------- Routes ----------
app.get("/", (_req, res) => {
  res.send("🚀 API is running successfully!");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📩 Incoming contact:", { name, email });

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required." });
    }

    // 1️⃣ Save to DB
    const newContact = await Contact.create({ name, email, message });
    console.log("✅ Contact saved with id:", newContact._id);

    // 2️⃣ Try sending email via Resend
    let emailSent = false;

    if (resend && process.env.EMAIL_TO) {
      try {
        const result = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.EMAIL_TO,
          subject: `New portfolio contact from ${name}`,
          html: `
            <h2>New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <p>Stored in MongoDB with id: ${newContact._id}</p>
          `,
        });

        console.log("✅ Resend email result:", result);
        emailSent = true;
      } catch (emailErr) {
        console.error("⚠️ Resend email failed:", emailErr);
      }
    } else {
      console.warn("⚠️ RESEND_API_KEY or EMAIL_TO missing, skipping email");
    }

    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Message saved & email sent successfully!"
        : "Message saved successfully! (Email could not be sent.)",
      id: newContact._id,
      emailSent,
    });
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error.",
    });
  }
});

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
