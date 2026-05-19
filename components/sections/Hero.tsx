"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Download, ArrowDown, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import TypewriterText from "@/components/ui/TypewriterText";
import CountUpNumber from "@/components/ui/CountUpNumber";
import SocialIconGroup from "@/components/ui/SocialIconGroup";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";

const STATS = [
  { value: 3,   suffix: "+", label: "Years of\nFull-Stack Experience", color: "text-sky-400" },
  { value: 100, suffix: "",  label: "Tests Passing\nAcross 11 Suites",   color: "text-emerald-400" },
  { value: 6,   suffix: "+", label: "Workflow Modules\nBuilt End-to-End", color: "text-violet-400" },
  { value: 4,   suffix: "",  label: "Production\nProducts Shipped",       color: "text-amber-400" },
];

const HERO_TYPEWRITER_PHRASES = [
  "Full-Stack Web Applications",
  "AI-Powered Job Tools",
  "Responsive React Interfaces",
  "Scalable REST APIs",
  "PostgreSQL Dashboards",
  "Production-Ready User Experiences",
];

function StatCard({ stat, inView, index }: {
  stat: typeof STATS[0]; inView: boolean; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="stat-card group"
    >
      <p className={`stat-number ${stat.color}`}>
        <CountUpNumber value={stat.value} start={inView} delayMs={index * 120} durationMs={1250} />
        {stat.suffix}
      </p>
      <p className="stat-label whitespace-pre-line leading-relaxed">{stat.label}</p>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 xl:px-32
        pt-28 pb-16 overflow-hidden"
      aria-label="Hero — introduction"
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Ambient orbs — asymmetric, not centered rings */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] blob blob-sky opacity-[0.18]" />
      <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] blob blob-violet opacity-[0.13]" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] blob blob-emerald opacity-[0.10]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left column ─────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Status row */}
            <motion.div {...fadeUp(0.05)} className="flex flex-wrap items-center gap-2">
              <span className="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open To Relocate
              </span>
              <span className="badge bg-slate-800/60 text-slate-400 border border-white/8 text-[11px]">
                <MapPin className="w-3 h-3" />
                Denton, TX · DFW Area
              </span>
              <span className="badge bg-sky-500/8 text-sky-400 border border-sky-500/15 text-[11px]">
                Open to Remote · Hybrid · On-site
              </span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.h1
                {...fadeUp(0.12)}
                className="font-syne font-extrabold leading-[0.95] tracking-[-0.035em]"
              >
                <span className="block text-slate-100 text-[clamp(2.8rem,7vw,5.5rem)]">
                  V S Ravi Sashank
                </span>
                <span className="block text-gradient-hero text-[clamp(2.8rem,7vw,5.5rem)]">
                  Dhulipala
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.2)}
                className="font-syne font-semibold text-slate-400 text-lg md:text-xl mt-4 tracking-wide"
              >
                Full Stack Developer &amp; Software Engineer
              </motion.p>

              <motion.div
                {...fadeUp(0.24)}
                className="mt-4 min-h-[3.2rem] md:min-h-[2rem]"
              >
                <TypewriterText
                  staticText="I build"
                  phrases={HERO_TYPEWRITER_PHRASES}
                  className="block font-syne text-xl md:text-2xl font-bold leading-snug text-slate-200"
                  phraseClassName="text-gradient-hero"
                  phraseMinWidthClassName="inline-block md:min-w-[23rem]"
                  cursorClassName="text-sky-400"
                  typeSpeed={44}
                  deleteSpeed={26}
                  pauseMs={1350}
                />
              </motion.div>
            </div>

            {/* Headline */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-300 text-[15px] md:text-base leading-relaxed max-w-xl"
            >
              I build full stack web applications with React, Next.js, Node.js, PostgreSQL,
              and AWS, including AI Powered Features, REST APIs, and scalable data workflows.
              3+ years of production experience across multiple business domains.
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.37)} className="flex flex-wrap gap-3">
              <a
                href={profile.resume}
                download
                className="btn-primary"
                aria-label="Download resume PDF"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social icons + stack strip */}
            <motion.div
              {...fadeUp(0.43)}
              className="flex items-center gap-4 pt-1"
            >
              <SocialIconGroup variant="icons" items={["linkedin", "github"]} />
              <span className="w-px h-5 bg-white/10" />
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "OpenAI"].map((t) => (
                  <AnimatedShinyText
                    key={t}
                    variant="text"
                    className="text-sm transition-colors cursor-default"
                  >
                    {t}
                  </AnimatedShinyText>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column — animated stats card ─────── */}
          <div className="lg:col-span-5" ref={statsRef}>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass border border-white/[0.08] rounded-3xl p-6 relative overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.08)" }}
            >
              {/* Card ambient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 pointer-events-none" />

              <div className="relative">
                <p className="eyebrow mb-5">By the numbers</p>
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((stat, i) => (
                    <StatCard key={stat.label} stat={stat} inView={statsInView} index={i} />
                  ))}
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/[0.06]" />

                {/* Target roles */}
                <p className="eyebrow mb-3">Targeting</p>
                <div className="flex flex-wrap gap-1.5">
                  {profile.targetRoles.map((r) => (
                    <span key={r} className="tag-violet text-[11px]">{r}</span>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/[0.06]" />

                {/* Quick proof line */}
                <a
                  href="https://www.usf.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open University of South Florida website"
                  className="flex items-start gap-3 p-3 rounded-xl bg-sky-500/5 border border-sky-500/15
                    transition-all duration-200 hover:border-sky-500/30 hover:bg-sky-500/10
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <p className="text-sm leading-6 text-slate-300">
                    MS Computer Science · University of South Florida · May 2025
                  </p>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-1.5 mt-20 text-slate-600"
        >
          <span className="eyebrow">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
