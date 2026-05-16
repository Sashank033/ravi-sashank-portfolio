"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Sparkles, Cpu, GitBranch, Search, Shield, Layers } from "lucide-react";

const aiCapabilities = [
  {
    icon: Cpu,
    title: "OpenAI API Integration",
    desc: "Connected LLM APIs to real application workflows — resume parsing, ATS scoring, and job-description analysis using structured prompt engineering.",
  },
  {
    icon: Search,
    title: "ATS Keyword Matching",
    desc: "Built an analyzer that compares resume content against job descriptions, scoring alignment and surfacing 15+ specific skill gaps per analysis.",
  },
  {
    icon: GitBranch,
    title: "Graceful Fallback Logic",
    desc: "When OpenAI API is unavailable, the system switches to local keyword frequency matching seamlessly — ensuring feature reliability without API dependency.",
  },
  {
    icon: Layers,
    title: "LLM Workflow Design",
    desc: "Designed multi-step LLM workflows for document-level understanding — not just single-prompt calls — covering chunking, context management, and response parsing.",
  },
  {
    icon: Shield,
    title: "Responsible AI Use",
    desc: "Applied rate limiting, error handling, and output validation when working with AI API responses to prevent hallucinations from propagating to end users.",
  },
  {
    icon: Sparkles,
    title: "Practical AI Products",
    desc: "AI features built to solve real user problems — job seekers preparing applications, not AI for the sake of showing off technology.",
  },
];

export default function AISection() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="ai-heading"
    >
      <SectionReveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="tag-violet">AI Engineering</span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
        </div>
        <h2 id="ai-heading" className="section-title text-slate-100 mb-2">
          AI-Integrated{" "}
          <span className="text-gradient-violet">Development</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mb-12">
          I build AI features that are practical, reliable, and production-safe — not just demos.
        </p>
      </SectionReveal>

      {/* Hero AI card */}
      <SectionReveal delay={0.1}>
        <div className="glass border border-violet-500/20 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-sky-500/5 pointer-events-none" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-violet text-xs">Featured AI Project</span>
              </div>
              <h3 className="font-syne font-bold text-slate-100 text-2xl mb-3">
                ApplyWise AI — ATS Resume Analyzer
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                A full-stack platform that uses OpenAI API to parse resumes, score them against job descriptions,
                detect skill gaps, and surface actionable improvements — with a local keyword-matching fallback
                for API-free environments.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenAI API", "Prompt Engineering", "PDF Parsing", "ATS Scoring", "Skill Gap Detection", "Local Fallback"].map((tag) => (
                  <span key={tag} className="tag-violet text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Tests Passing", value: "100" },
                { label: "Skill Gaps Detected", value: "15+" },
                { label: "Workflow Modules", value: "6+" },
                { label: "DB Entities", value: "6+" },
              ].map((m) => (
                <div key={m.label} className="glass border border-violet-500/15 rounded-xl p-3 text-center">
                  <p className="font-syne font-bold text-xl text-violet-400">{m.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Capabilities grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiCapabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="glass border border-white/[0.07] rounded-2xl p-5
                hover:border-violet-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20
                flex items-center justify-center mb-4">
                <Icon className="w-4.5 h-4.5 text-violet-400 w-[18px] h-[18px]" />
              </div>
              <h3 className="font-syne font-semibold text-slate-200 text-sm mb-2">{cap.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{cap.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
