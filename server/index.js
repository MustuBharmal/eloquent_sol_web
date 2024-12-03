const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Email Transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Routes
app.post(
  "/send-email",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message is required"),
    body("interest").notEmpty().withMessage("Interest is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, interest } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to:`${process.env.RECEIVER_EMAIL}`,
      subject: `New Inquiry: ${interest}`,
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email. Please try again." });
    }
  }
);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
