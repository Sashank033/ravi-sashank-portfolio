"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { Download, Mail, Linkedin, Zap } from "lucide-react";
import { profile } from "@/data/profile";

export default function ResumeSection() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="resume-heading"
    >
      <SectionReveal>
        <div className="relative glass border border-sky-500/20 rounded-3xl p-10 md:p-14
          overflow-hidden text-center">
          {/* BG glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 via-transparent to-violet-500/8 pointer-events-none" />
          <div className="blob blob-sky w-80 h-80 -top-20 -right-20 opacity-20 pointer-events-none" />

          <div className="relative">
            <span className="badge bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6 inline-flex">
              <Zap className="w-3 h-3" />
              Available Immediately
            </span>

            <h2
              id="resume-heading"
              className="font-syne font-extrabold text-4xl md:text-5xl text-slate-100 mb-4"
            >
              Want the full picture?
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-base mb-10 leading-relaxed">
              My resume covers all experience, projects, and technical skills in detail.
              I&apos;m actively interviewing and available to start immediately.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={profile.resume}
                download
                className="btn-primary px-8 py-3.5"
                aria-label="Download resume PDF"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-ghost px-8 py-3.5"
                aria-label="Go to contact section"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-8 py-3.5"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <p className="text-slate-500 text-xs mt-8">
              {profile.location} · {profile.email} · {profile.phone}
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
