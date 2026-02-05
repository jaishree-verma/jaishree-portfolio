import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await sgMail.send({
      to: process.env.EMAIL_TO, // your inbox
      from: process.env.EMAIL_FROM, // verified sender
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(4000, () => console.log("✅ Backend running on port 4000"));
