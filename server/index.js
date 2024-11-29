const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// POST route for handling form data
app.post("/send-email", async (req, res) => {
  const { name, email, message, interest } = req.body;

  // Email Configuration
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "info@eloquentsolutions.in", // Replace with your receiving email
    subject: `New Inquiry: ${interest}`,
    text: `
      Name: ${name}
      Email: ${email}
      Interest: ${interest}
      Message: ${message}
    `,
    html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Interest:</strong> ${interest}</p>
    <p><strong>Message:</strong> ${message}</p>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
