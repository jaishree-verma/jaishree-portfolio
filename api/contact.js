import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    await sendgrid.send({
      to: "jaishree.verma.work@gmail.com", // your inbox
      from: process.env.VERIFIED_SENDER,   // must be verified in SendGrid
      subject: `New message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
