import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Configure your SMTP transporter (replace with your real credentials or use environment variables)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email. Most SMTP relays (GoDaddy included) reject mail
    // whose From is not the authenticated mailbox — send from ourselves
    // and set Reply-To to the visitor.
    await transporter.sendMail({
      from: `"VAVTRONICS Website" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Company address
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email." }), { status: 500 });
  }
}