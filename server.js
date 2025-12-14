// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🌐 CORS + JSON middleware
app.use(
  cors({
    origin: "*", // Vercel, localhost, sab allowed
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// 🛢️ MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// 📄 Schema & Model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// 📧 Nodemailer transporter – Gmail SMTP + App Password
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // 465 = SSL
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // Gmail App Password (16 chars, no spaces)
  },
  logger: true,
  debug: true,
});

// Startup pe check (sirf log karega)
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Nodemailer verify error:", err.message);
  } else {
    console.log("✅ Nodemailer is ready to send emails");
  }
});

// 🔁 Health route
app.get("/", (_req, res) => {
  res.send("🚀 API is running successfully!");
});

// 📬 Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📩 Incoming contact:", { name, email });

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required." });
    }

    // 1) DB me save
    const newContact = await Contact.create({ name, email, message });
    console.log("✅ Contact saved with id:", newContact._id);

    // 2) Email bhejo
    const recipients = [
      process.env.EMAIL_TO,
      process.env.EMAIL_USER,
    ].filter(Boolean);

    if (recipients.length === 0) {
      console.error("❌ No EMAIL_TO / EMAIL_USER configured");
      return res.status(500).json({
        success: false,
        error:
          "Email configuration missing on server. Please try again later.",
      });
    }

    console.log("📧 Sending email to:", recipients);

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: recipients.join(", "),
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
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      "✅ Email sent. MessageId:",
      info.messageId,
      "| Response:",
      info.response
    );

    return res.status(201).json({
      success: true,
      message: "Message saved & email sent successfully!",
      id: newContact._id,
    });
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error.",
    });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
