"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Send, Copy, Check, Loader2
} from "lucide-react";
import { profile } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async (text: string, type: "email" | "phone") => {
    await copyToClipboard(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    /**
     * ─── HOW TO CONNECT THIS FORM ──────────────────────────────────────────
     *
     * Option 1 — Formspree (easiest, free tier available):
     *   1. Go to https://formspree.io and create a form
     *   2. Replace the fetch URL below with your Formspree endpoint
     *   3. Remove the simulated delay / toggle to real fetch
     *
     *   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json" },
     *     body: JSON.stringify(form),
     *   });
     *   if (res.ok) setStatus("success"); else setStatus("error");
     *
     * Option 2 — EmailJS (client-side, no backend):
     *   import emailjs from "@emailjs/browser";
     *   await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
     *
     * Option 3 — Next.js API Route (app/api/contact/route.ts):
     *   const res = await fetch("/api/contact", {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json" },
     *     body: JSON.stringify(form),
     *   });
     *
     * Option 4 — Resend (recommended for Next.js):
     *   Use the /api/contact route with the Resend SDK
     *   https://resend.com/docs/send-with-nextjs
     * ────────────────────────────────────────────────────────────────────────
     */

    // Simulated submission — replace with real handler above
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm(initialForm);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      canCopy: true,
      copyType: "email" as const,
      copied: copiedEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\D/g, "")}`,
      canCopy: true,
      copyType: "phone" as const,
      copied: copiedPhone,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
      canCopy: false,
      copyType: null,
      copied: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ravisashankdhulipala",
      href: profile.linkedin,
      canCopy: false,
      copyType: null,
      copied: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sashank033",
      href: profile.github,
      canCopy: false,
      copyType: null,
      copied: false,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <SectionReveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="tag">Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
        </div>
        <h2 id="contact-heading" className="section-title text-slate-100 mb-2">
          Let&apos;s{" "}
          <span className="text-gradient-sky">Work Together</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mb-12">
          I&apos;m actively looking for Full Stack, Software Engineer, and Frontend roles.
          Reach out directly or use the form below.
        </p>
      </SectionReveal>

      <div className="grid lg:grid-cols-5 gap-8 items-start">

        {/* Left — contact info */}
        <div className="lg:col-span-2 space-y-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="glass border border-white/[0.07] rounded-xl p-4 flex items-center
                  justify-between gap-4 hover:border-sky-500/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20
                    flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-slate-300 text-xs hover:text-sky-400 transition-colors truncate
                          max-w-[180px] block"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-xs">{link.value}</p>
                    )}
                  </div>
                </div>
                {link.canCopy && (
                  <button
                    onClick={() => handleCopy(
                      link.copyType === "email" ? profile.email : profile.phone,
                      link.copyType!
                    )}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500
                      hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-200 shrink-0"
                    aria-label={`Copy ${link.label}`}
                  >
                    {link.copied
                      ? <Check className="w-3.5 h-3.5 text-emerald-400" />
                      : <Copy className="w-3.5 h-3.5" />
                    }
                  </button>
                )}
              </motion.div>
            );
          })}

          {/* Availability notice */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="glass border border-emerald-500/20 rounded-xl p-5 mt-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-syne font-semibold text-emerald-400 text-sm">Open To Relocate</p>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              I&apos;m actively interviewing for Full Stack, Software Engineer, and Frontend Developer roles.
              Open to remote, hybrid, and on-site positions in DFW and beyond.
            </p>
          </motion.div>
        </div>

        {/* Right — form */}
        <SectionReveal className="lg:col-span-3" delay={0.15} direction="right">
          <div className="glass border border-white/[0.07] rounded-2xl p-7">

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30
                  flex items-center justify-center">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-syne font-bold text-slate-100 text-xl">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-ghost text-xs mt-2 py-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-400 text-xs mb-1.5">
                      Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`form-input ${errors.name ? "border-red-500/50" : ""}`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, name: e.target.value }));
                        if (errors.name) setErrors((p) => ({ ...p, name: "" }));
                      }}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-[10px] mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-slate-400 text-xs mb-1.5">
                      Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? "border-red-500/50" : ""}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, email: e.target.value }));
                        if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                      }}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-[10px] mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-slate-400 text-xs mb-1.5">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-input"
                      placeholder="Company name (optional)"
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    />
                  </div>

                  {/* Role/Opportunity */}
                  <div>
                    <label htmlFor="contact-role" className="block text-slate-400 text-xs mb-1.5">
                      Role / Opportunity
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Full Stack Developer"
                      value={form.role}
                      onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-slate-400 text-xs mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className={`form-input resize-none ${errors.message ? "border-red-500/50" : ""}`}
                    placeholder="Tell me about the opportunity, role, or just say hello..."
                    value={form.message}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, message: e.target.value }));
                      if (errors.message) setErrors((p) => ({ ...p, message: "" }));
                    }}
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-[10px] mt-1">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs mb-4 glass border border-red-500/20 rounded-lg px-4 py-3">
                    Something went wrong. Please email me directly at {profile.email}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60
                    disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  aria-label="Send message"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-[10px] text-center mt-4">
                  {/* Connect to Formspree, EmailJS, or a Next.js API route — see comments above */}
                  Your message is handled securely. I typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
