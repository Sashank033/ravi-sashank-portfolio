"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import MatrixText from "@/components/ui/MatrixText";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import { skillCategories } from "@/data/skills";
import {
  Monitor, Server, Database, Cloud, Sparkles,
  TestTube, Wrench, Layers, BarChart3, GitBranch, FileDown, Star
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Server, Database, Cloud, Sparkles, TestTube, Wrench, Layers, BarChart3, GitBranch, FileDown,
};

const colorMap: Record<string, {
  tab: string; icon: string; text: string; pill: string; featuredPill: string; featuredIcon: string;
}> = {
  sky: {
    tab:  "border-sky-500/50 text-sky-400 bg-sky-500/10",
    icon: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    text: "text-sky-400",
    pill: "hover:border-sky-500/35 hover:text-sky-300 hover:bg-sky-500/6",
    featuredPill: "border-sky-400/35 bg-sky-500/10 text-sky-200 shadow-[0_0_18px_rgba(14,165,233,0.14)] hover:border-sky-400/55 hover:bg-sky-500/14",
    featuredIcon: "text-sky-300",
  },
  violet: {
    tab:  "border-violet-500/50 text-violet-400 bg-violet-500/10",
    icon: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    text: "text-violet-400",
    pill: "hover:border-violet-500/35 hover:text-violet-300 hover:bg-violet-500/6",
    featuredPill: "border-violet-400/35 bg-violet-500/10 text-violet-200 shadow-[0_0_18px_rgba(167,139,250,0.14)] hover:border-violet-400/55 hover:bg-violet-500/14",
    featuredIcon: "text-violet-300",
  },
  emerald: {
    tab:  "border-emerald-500/50 text-emerald-400 bg-emerald-500/10",
    icon: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    text: "text-emerald-400",
    pill: "hover:border-emerald-500/35 hover:text-emerald-300 hover:bg-emerald-500/6",
    featuredPill: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.14)] hover:border-emerald-400/55 hover:bg-emerald-500/14",
    featuredIcon: "text-emerald-300",
  },
  amber: {
    tab:  "border-amber-500/50 text-amber-400 bg-amber-500/10",
    icon: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    text: "text-amber-400",
    pill: "hover:border-amber-500/35 hover:text-amber-300 hover:bg-amber-500/6",
    featuredPill: "border-amber-400/35 bg-amber-500/10 text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.14)] hover:border-amber-400/55 hover:bg-amber-500/14",
    featuredIcon: "text-amber-300",
  },
};

export default function Skills() {
  const [active, setActive] = useState("all");
  const [matrixKey, setMatrixKey] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wasHeadingInView = useRef(false);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-80px", amount: 0.4 });

  const displayed =
    active === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.category === active);

  useEffect(() => {
    if (isHeadingInView && !wasHeadingInView.current) {
      setMatrixKey((key) => key + 1);
      wasHeadingInView.current = true;
      return;
    }

    if (!isHeadingInView) {
      wasHeadingInView.current = false;
    }
  }, [isHeadingInView]);

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto" aria-labelledby="skills-heading">

      <SectionReveal>
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow">Skills</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-violet-500/40 to-transparent" />
        </div>
        <h2 ref={headingRef} id="skills-heading" className="section-title text-slate-100 mb-2">
          <MatrixText text="Technical" triggerKey={matrixKey} />{" "}
          <MatrixText text="Toolkit" className="text-gradient-violet" triggerKey={matrixKey} />
        </h2>
        <p className="mb-10 max-w-lg">
          <AnimatedShinyText variant="text" className="text-sm">
          Languages, frameworks, tools, and platforms I use across the full stack.
          </AnimatedShinyText>
        </p>
      </SectionReveal>

      {/* Category tabs */}
      <SectionReveal delay={0.08}>
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              border transition-all duration-200
              ${active === "all"
                ? "border-sky-500/50 text-sky-400 bg-sky-500/10"
                : "border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20"}`}
          >
            All
          </button>
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = active === cat.category;
            const c = colorMap[cat.color];
            return (
              <button
                key={cat.category}
                onClick={() => setActive(cat.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  border transition-all duration-200
                  ${isActive
                    ? c.tab
                    : "border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20"}`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.category}
              </button>
            );
          })}
        </div>
      </SectionReveal>

      {/* Skill grid — categories as cards, skills as pills */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {displayed.map((cat, catIdx) => {
          const Icon = iconMap[cat.icon];
          const c = colorMap[cat.color];
          return (
            <motion.div
              key={cat.category}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: catIdx * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass border border-white/[0.07] rounded-2xl p-5
                hover:border-sky-500/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <p className={`font-syne font-semibold text-base leading-snug ${c.text}`}>{cat.category}</p>
              </div>

              {/* Skills as pill badges — no percentages */}
              <div className="flex flex-wrap items-start gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-pill inline-flex w-fit max-w-full shrink-0 items-center gap-1 whitespace-nowrap ${
                      skill.featured ? c.featuredPill : c.pill
                    }`}
                  >
                    {skill.featured && (
                      <Star
                        className={`h-3 w-3 shrink-0 ${c.featuredIcon}`}
                        aria-hidden="true"
                        fill="currentColor"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
