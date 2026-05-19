"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import TextScramble from "@/components/ui/TextScramble";
import { profile } from "@/data/profile";
import { Code2, Layers, Cpu, Users } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    label: "Frontend Engineering",
    desc: "React component architecture, Next.js App Router, TypeScript, Tailwind CSS — responsive, accessible, and performant by default.",
    color: "sky",
  },
  {
    icon: Layers,
    label: "Full-Stack Ownership",
    desc: "I ship features end-to-end: REST APIs, PostgreSQL schemas, Prisma ORM, auth workflows, and cloud deployment on Vercel and AWS.",
    color: "violet",
  },
  {
    icon: Cpu,
    label: "AI-Integrated Products",
    desc: "OpenAI API integration with graceful fallbacks, prompt engineering, ATS matching, and LLM-powered feature development.",
    color: "emerald",
  },
  {
    icon: Users,
    label: "Production Mindset",
    desc: "Agile workflows, Git discipline, Jest + RTL test coverage, code reviews, and shipping reliable software under real constraints.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  sky:     "bg-sky-500/10     text-sky-400     border border-sky-500/20",
  violet:  "bg-violet-500/10  text-violet-400  border border-violet-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  amber:   "bg-amber-500/10   text-amber-400   border border-amber-500/20",
};

const hoverMap: Record<string, string> = {
  sky:     "hover:border-sky-500/25",
  violet:  "hover:border-violet-500/25",
  emerald: "hover:border-emerald-500/25",
  amber:   "hover:border-amber-500/25",
};

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto" aria-labelledby="about-heading">

      <SectionReveal>
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow">About</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </div>

        <h2 id="about-heading" className="section-title text-slate-100 mb-5">
          <TextScramble text="I ship full-stack products." />{" "}
          <TextScramble text="End to end." className="text-gradient-sky" />
        </h2>
      </SectionReveal>

      <div className="grid lg:grid-cols-2 gap-14 mt-2 items-start">

        {/* ── Text ── */}
        <div className="space-y-5">
          <SectionReveal delay={0.08}>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              I&apos;m a Full Stack Developer with 3+ years of production experience across the
              complete web stack, React UIs, Node.js APIs, PostgreSQL databases, cloud
              infrastructure on AWS, and AI integrations using OpenAI&apos;s API.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.14}>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              My work is driven by a product first mindset: build reusable components,
              write maintainable code, optimize for real user impact, and ship with confidence.
              I&apos;ve delivered measurable improvements by 25% faster page responsiveness,
              35% reduction in build time, 60% less manual operations work, by focusing
              on architecture, not just features.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Based in Denton, TX (DFW). Open To Relocate  for Full Stack, Software Engineer,
              and Frontend roles — Remote, Hybrid, or On-site.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.27}>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "3+ Years Experience",
                "MS Computer Science",
                "Open To Relocate ",
                "DFW / Remote / Relocatable",
              ].map((tag) => (
                <span key={tag} className="badge bg-sky-500/8 text-sky-400 border border-sky-500/15 text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <SectionReveal key={p.label} delay={i * 0.08} direction="right">
              <div
                className={`glass border border-white/[0.07] rounded-2xl p-5
                  transition-all duration-300 ${hoverMap[p.color]} hover:-translate-y-1 h-full`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colorMap[p.color]}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <p className="font-syne font-semibold text-slate-200 text-sm mb-2 leading-snug">{p.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
