/**
 * Contact Form API Route
 * ─────────────────────────────────────────────────────────────
 * This is a ready-to-activate Next.js API route for the contact form.
 *
 * TO ACTIVATE WITH RESEND (recommended):
 *   1. npm install resend
 *   2. Add RESEND_API_KEY to your .env.local
 *   3. Uncomment the Resend block below and remove the placeholder response
 *
 * TO ACTIVATE WITH NODEMAILER + SMTP:
 *   1. npm install nodemailer @types/nodemailer
 *   2. Add SMTP_HOST, SMTP_USER, SMTP_PASS to .env.local
 *   3. Uncomment the Nodemailer block below
 * ─────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, message } = body;

    // ── Basic validation ──────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── OPTION 1: Resend ──────────────────────────────────────
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: "ravisashankdhulipala@gmail.com",
    //   subject: `Portfolio Contact: ${role || "New Message"} from ${name}`,
    //   html: `
    //     <h2>New Contact from Portfolio</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || "—"}</p>
    //     <p><strong>Role/Opportunity:</strong> ${role || "—"}</p>
    //     <hr/>
    //     <p>${message.replace(/\n/g, "<br/>")}</p>
    //   `,
    // });

    // ── OPTION 2: Nodemailer ──────────────────────────────────
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: "ravisashankdhulipala@gmail.com",
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\n\n${message}`,
    // });

    // ── Placeholder response (remove once real handler is active) ──
    console.log("Contact form submission:", { name, email, company, role, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
