import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Configure transporter via ENV vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_TO, // destination email, e.g. your address
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p>${(message || "").replace(/\n/g, "<br/>")}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
