"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Copy, Check
} from "lucide-react";
import { profile } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";
import TypewriterText from "@/components/ui/TypewriterText";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";
import SocialIconGroup from "@/components/ui/SocialIconGroup";
import LocationTag from "@/components/ui/LocationTag";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";

const CONTACT_TYPEWRITER_PHRASES = [
  "AI-powered Products" ,
  "Full Stack Web Applications",
  "Scalable backend APIs" ,
  "Database-driven Dashboards" ,
  "Modern SaaS Experiences",
];

const CALENDLY_URL = "https://calendly.com/ravisashankdhulipala/30min";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

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
      <SectionReveal className="relative">
        <div className="absolute right-40 top-10 z-10 hidden w-48 flex-col items-center md:flex">
          <div
            className="contact-avatar-badge relative h-24 w-24 overflow-visible rounded-full"
            aria-label="Ravi Sashank profile photo"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-sky-400/55 bg-navy-900 shadow-[0_0_24px_rgba(56,189,248,0.26),0_18px_48px_rgba(0,0,0,0.42)]">
              <div className="flex h-full w-full items-center justify-center bg-sky-500/10 font-syne text-xl font-bold text-sky-300">
                RS
              </div>
              {!avatarFailed && (
                <Image
                  src="/profile.jpg"
                  alt="Ravi Sashank profile photo"
                  fill
                  sizes="96px"
                  className="object-cover object-[50%_30%]"
                  priority={false}
                  onError={() => setAvatarFailed(true)}
                />
              )}
            </div>
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-navy-950 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <LocationTag />
          </div>
          <AnimatedShinyText className="mt-1.5">
            ✨ Hover to see my local time ⤴
          </AnimatedShinyText>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="tag">Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
        </div>
        <h2 id="contact-heading" className="section-title text-slate-100 mb-2">
          Let&apos;s{" "}
          <span className="text-gradient-sky">Work Together</span>
        </h2>
        <div className="mb-3 min-h-[1.5rem]">
          <TypewriterText
            staticText="Let's Build : "
            phrases={CONTACT_TYPEWRITER_PHRASES}
            className="block font-syne text-sm font-semibold leading-relaxed text-slate-500"
            phraseClassName="text-sky-400"
            phraseMinWidthClassName="inline-block sm:min-w-[17rem]"
            cursorClassName="text-sky-400"
            typeSpeed={52}
            deleteSpeed={30}
            pauseMs={1550}
          />
        </div>
        <p className="max-w-xl mb-12">
          <AnimatedShinyText variant="text" className="text-sm leading-relaxed">
            I&apos;m actively looking for Full Stack, Software Engineer, and Frontend roles.
            Reach out directly or book a quick call below.
          </AnimatedShinyText>
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

          <SocialIconGroup className="w-full" />

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

        {/* Right — Calendly booking */}
        <SectionReveal className="lg:col-span-3" delay={0.15} direction="right">
          <div className="glass border border-sky-500/15 rounded-2xl p-5 md:p-7 shadow-[0_24px_70px_rgba(14,165,233,0.08)]">
            <div className="mb-5">
              <span className="badge bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px]">
                15 min intro call
              </span>
             
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Schedule a time to discuss full-stack, frontend, software engineering, or
                AI-integrated roles.
              </p>
            </div>

            <CalendlyEmbed
              url={CALENDLY_URL}
              title="Intro Call with Ravi Sashank Dhulipala"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
