const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");
const nodemailer = require("nodemailer");

// SMTP password is a secret: set it once with
//   firebase functions:secrets:set SMTP_PASS
const smtpPass = defineSecret("SMTP_PASS");

// Non-secret config comes from functions/.env at deploy time.
const smtpHost = defineString("SMTP_HOST", { default: "smtpout.secureserver.net" });
const smtpPort = defineString("SMTP_PORT", { default: "465" });
const smtpSecure = defineString("SMTP_SECURE", { default: "true" });
const smtpUser = defineString("SMTP_USER");
const receiverEmail = defineString("CONTACT_RECEIVER_EMAIL");

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

exports.sendContactEmail = onRequest(
  { region: "us-central1", secrets: [smtpPass], maxInstances: 3 },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, error: "Method not allowed." });
      return;
    }

    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: "Name, email, and message are required." });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost.value(),
        port: Number(smtpPort.value()),
        secure: smtpSecure.value() === "true",
        auth: {
          user: smtpUser.value(),
          pass: smtpPass.value(),
        },
      });

      // GoDaddy (and most SMTP relays) reject mail whose From is not the
      // authenticated mailbox — so send from ourselves and set Reply-To.
      await transporter.sendMail({
        from: `"VAVTRONICS Website" <${smtpUser.value()}>`,
        replyTo: `"${name}" <${email}>`,
        to: receiverEmail.value(),
        subject: `New contact form submission from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "-"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, error: "Failed to send email." });
    }
  }
);
