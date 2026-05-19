"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import { projects, type Project } from "@/data/projects";
import {
  ExternalLink, Github, Brain, MessageSquare, BarChart3, FileHeart,
  CheckCircle2, X, Sparkles, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Brain, MessageSquare, BarChart3, FileHeart };

const accentMap: Record<string, {
  border: string; text: string; tag: string;
  metricText: string; bg: string;
}> = {
  sky: {
    border: "hover:border-sky-500/30",
    text:   "text-sky-400",
    tag:    "tag",
    metricText: "text-sky-400",
    bg:     "bg-sky-500/10",
  },
  violet: {
    border: "hover:border-violet-500/30",
    text:   "text-violet-400",
    tag:    "tag-violet",
    metricText: "text-violet-400",
    bg:     "bg-violet-500/10",
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    text:   "text-emerald-400",
    tag:    "tag-emerald",
    metricText: "text-emerald-400",
    bg:     "bg-emerald-500/10",
  },
  amber: {
    border: "hover:border-amber-500/30",
    text:   "text-amber-400",
    tag:    "tag-amber",
    metricText: "text-amber-400",
    bg:     "bg-amber-500/10",
  },
};

const CATEGORIES = ["All", "Full Stack", "AI", "Dashboard", "Frontend", "Backend"];

/* ── Featured card (ApplyWise AI) ─────────────────────── */
function FeaturedProjectCard({
  project,
  onCaseStudy,
}: { project: Project; onCaseStudy: (p: Project) => void }) {
  const Icon = iconMap[project.icon];
  const a = accentMap[project.accentColor];

  return (
    <article
      className="featured-card p-7 md:p-9"
      aria-label={`Featured project: ${project.title}`}
    >
      {/* Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="badge bg-sky-500/10 text-sky-400 border border-sky-500/25 text-[10px] font-semibold uppercase tracking-wider">
          ★ Featured Project
        </span>
        {project.category.map((c) => (
          <span key={c} className={`${a.tag} text-[10px]`}>{c}</span>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">

        {/* Left */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                bg-gradient-to-br ${project.color}`}>
                <Icon className={`w-7 h-7 ${a.text}`} />
              </div>
            )}
            <div>
              <h3 className="font-syne font-extrabold text-slate-100 text-2xl leading-tight">
                {project.title}
              </h3>
              <p className={`text-sm font-medium ${a.text} mt-0.5`}>{project.subtitle}</p>
            </div>
          </div>

          <p className="text-slate-300 text-[15px] leading-relaxed">{project.tagline}</p>

          {/* Highlights */}
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${a.text}`} />
                <span className="text-sm text-slate-300">{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span key={t} className={`${a.tag} text-[11px]`}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right — metrics + CTAs */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2.5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="glass border border-white/[0.06] rounded-xl p-3.5 text-center"
              >
                <p className={`font-syne font-extrabold text-2xl leading-none ${a.metricText}`}>
                  {m.value}
                </p>
                <p className="text-slate-600 text-[10px] mt-1.5 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            {/* Live demo hidden until project deployments are available.
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-xs py-3"
              aria-label={`Live demo: ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-center text-xs py-3"
              aria-label={`GitHub: ${project.title}`}
            >
              <Github className="w-3.5 h-3.5" />
              View on GitHub
            </a>
            <button
              onClick={() => onCaseStudy(project)}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs
                font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20
                hover:bg-violet-500/18 transition-all duration-200"
              aria-label={`Case study: ${project.title}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Full Case Study
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Compact card (other projects) ────────────────────── */
function CompactProjectCard({
  project,
  onCaseStudy,
}: { project: Project; onCaseStudy: (p: Project) => void }) {
  const Icon = iconMap[project.icon];
  const a = accentMap[project.accentColor];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`glass border border-white/[0.07] rounded-2xl p-5
        flex flex-col gap-4 transition-all duration-300 ${a.border} hover:-translate-y-1`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Icon + title */}
      <div className="flex min-h-[6.25rem] items-start gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
          bg-gradient-to-br ${project.color}`}>
          {Icon && <Icon className={`w-6 h-6 ${a.text}`} />}
        </div>
        <div>
          <h3 className="font-syne font-bold text-slate-100 text-xl leading-tight">{project.title}</h3>
          <p className={`text-sm ${a.text} mt-1`}>{project.subtitle}</p>
        </div>
      </div>

      <p className="min-h-[5.75rem] text-[15px] leading-7 text-slate-300 line-clamp-4">
        {project.tagline}
      </p>

      {/* Key metric */}
      {project.metrics[0] && (
        <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className={`translate-y-[1px] font-syne font-bold text-2xl leading-none ${a.metricText}`}>
            {project.metrics[0].value}
          </p>
          <p className="text-slate-500 text-xs">{project.metrics[0].label}</p>
        </div>
      )}

      {/* Tech */}
      <div className="flex flex-wrap gap-1 mt-auto">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="px-2.5 py-1 rounded text-xs font-medium
            bg-white/[0.04] text-slate-500 border border-white/[0.07]">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2.5 py-1 rounded text-xs text-slate-500 border border-white/[0.05]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 border-t border-white/[0.05]">
        {/* Live demo hidden until project deployments are available.
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-medium
            bg-sky-500/8 text-sky-400 border border-sky-500/15 hover:bg-sky-500/15 transition-all"
          aria-label={`Demo: ${project.title}`}
        >
          <ExternalLink className="w-3 h-3" />
          Demo
        </a>
        */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium
            bg-white/[0.04] text-slate-400 border border-white/8 hover:bg-white/8 transition-all"
          aria-label={`GitHub: ${project.title}`}
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <button
          onClick={() => onCaseStudy(project)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium
            bg-violet-500/8 text-violet-400 border border-violet-500/15 hover:bg-violet-500/15 transition-all"
          aria-label={`Case study: ${project.title}`}
        >
          <Sparkles className="w-4 h-4" />
          Details
        </button>
      </div>
    </motion.article>
  );
}

/* ── Case Study Modal ──────────────────────────────────── */
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = iconMap[project.icon];
  const a = accentMap[project.accentColor];

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10
        bg-black/75 backdrop-blur-2xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong border border-white/10 rounded-3xl max-w-3xl w-full
          max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 glass-strong border-b border-white/[0.06]
          px-7 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center
                bg-gradient-to-br ${project.color}`}>
                <Icon className={`w-4.5 h-4.5 ${a.text} w-[18px] h-[18px]`} />
              </div>
            )}
            <div>
              <h3 className="font-syne font-bold text-slate-100">{project.title}</h3>
              <p className={`text-xs ${a.text}`}>{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 glass border border-white/10 rounded-xl flex items-center justify-center
              text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-7 py-7 space-y-7">
          <section className="glass border border-white/[0.06] rounded-2xl p-5">
            <p className="eyebrow mb-2">PROJECT Summary</p>
            <p className="text-slate-300 text-sm leading-relaxed">{project.caseStudy.overview}</p>
            {project.caseStudy.snapshot && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-4">
                {project.caseStudy.snapshot.map((item) => (
                  <span key={item} className={`${a.tag} text-[11px]`}>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass border border-red-500/10 rounded-2xl p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <p className="font-syne font-semibold text-red-400 text-sm">The Problem</p>
              </div>
              <p className="text-sm leading-6 text-slate-300">{project.problem}</p>
            </div>
            <div className="glass border border-emerald-500/10 rounded-2xl p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="font-syne font-semibold text-emerald-400 text-sm">My Solution</p>
              </div>
              <p className="text-sm leading-6 text-slate-300">{project.solution}</p>
            </div>
          </div>

          {/* Role */}
          <div className="glass border border-white/[0.06] rounded-2xl p-5">
            <p className="eyebrow mb-2">My Role</p>
            <p className="text-slate-300 text-sm">{project.role}</p>
          </div>

          {/* Deep dive */}
          {project.caseStudy.sections.length > 0 && (
            <div className="border-t border-white/[0.05] pt-6">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className={`h-4 w-4 ${a.text}`} />
                <p className="font-syne font-semibold text-slate-200">Engineering Deep Dive</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.caseStudy.sections.map((s) => (
                  <div key={s.title} className="glass border border-white/[0.06] rounded-xl p-4">
                    <p className={`font-syne font-semibold text-sm ${a.text} mb-2`}>{s.title}</p>
                    <p className="text-sm leading-6 text-slate-300">{s.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          <div className="border-t border-white/[0.05] pt-6">
            <p className="font-syne font-semibold text-slate-200 mb-4">Impact &amp; Metrics</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label}
                  className="glass border border-white/[0.06] rounded-xl p-3 text-center">
                  <p className={`font-syne font-extrabold text-xl ${a.metricText}`}>{m.value}</p>
                  <p className="text-slate-400 text-[10px] mt-1 font-medium">{m.label}</p>
                  {m.description && (
                    <p className="mt-1 text-[9px] leading-snug text-slate-600">{m.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Proof points */}
          <div className="border-t border-white/[0.05] pt-6">
            <p className="font-syne font-semibold text-slate-200 mb-4">What This Demonstrates</p>
            <div className="space-y-2">
              {project.caseStudy.proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${a.text}`} />
                  <p className="text-sm leading-6 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div>
            <p className="eyebrow mb-3">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className={`${a.tag} text-xs`}>{t}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-2 border-t border-white/[0.05]">
            {/* Live demo hidden until project deployments are available.
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5">
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            */}
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-xs py-2.5">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ── Main Export ───────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [caseStudy, setCaseStudy] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.id === "applywise-ai")!;
  const others = projects.filter((p) => p.id !== "applywise-ai");

  const filteredOthers =
    activeCategory === "All"
      ? others
      : others.filter((p) => p.category.includes(activeCategory));

  const showFeatured =
    activeCategory === "All" ||
    featuredProject.category.includes(activeCategory);

  return (
    <>
      <section id="projects" className="section-padding max-w-7xl mx-auto"
        aria-labelledby="projects-heading">

        <SectionReveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">Projects</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-sky-500/40 to-transparent" />
          </div>
          <h2 id="projects-heading" className="section-title text-slate-100 mb-2">
            Things I&apos;ve{" "}
            <span className="text-gradient-sky">Shipped</span>
          </h2>
          <p className="max-w-lg mb-8">
            <AnimatedShinyText variant="text" className="text-sm leading-relaxed">
              Real architectures solving real problems. Click &ldquo;Full Case Study&rdquo; or
              &ldquo;Details&rdquo; for the technical deep-dive.
            </AnimatedShinyText>
          </p>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                  ${activeCategory === cat
                    ? "border-sky-500/50 text-sky-400 bg-sky-500/10"
                    : "border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured project — ApplyWise AI */}
        <AnimatePresence mode="wait">
          {showFeatured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <FeaturedProjectCard
                project={featuredProject}
                onCaseStudy={setCaseStudy}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact grid — other projects */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredOthers.map((project) => (
              <CompactProjectCard
                key={project.id}
                project={project}
                onCaseStudy={setCaseStudy}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {caseStudy && (
          <CaseStudyModal project={caseStudy} onClose={() => setCaseStudy(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
