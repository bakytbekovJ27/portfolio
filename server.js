const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mortolcombo@gmail.com", // Ваш Gmail
      pass: ""    // Пароль приложения (App Password)
    },
  });

  const mailOptions = {
    from: email,
    to: "mortolcombo@gmail.com", // Куда отправлять письма
    subject: `Message from ${firstName} ${lastName}`,
    text: `You received a message from ${firstName} ${lastName} (${phone}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ code: 200, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ code: 500, message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
