"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase, GraduationCap, Zap, MapPin,
  TestTube, Cloud, GitBranch, Sparkles
} from "lucide-react";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";

const facts = [
  {
    icon: Briefcase,
    value: "3+ Years",
    label: "Production Experience",
    color: "sky",
  },
  {
    icon: GraduationCap,
    value: "MS-CS",
    label: "Univ. of South Florida",
    color: "violet",
  },
  {
    icon: Zap,
    value: "Immediate",
    label: "Start Availability",
    color: "emerald",
  },
  {
    icon: MapPin,
    value: "Denton, TX",
    label: "DFW · Remote · Open to Relo",
    color: "sky",
  },
  {
    icon: TestTube,
    value: "100 Tests",
    label: "Jest + RTL Coverage",
    color: "emerald",
  },
  {
    icon: Cloud,
    value: "AWS + Vercel",
    label: "Cloud Deployment",
    color: "amber",
  },
  {
    icon: GitBranch,
    value: "Full Stack",
    label: "React · Node · PostgreSQL",
    color: "violet",
  },
  {
    icon: Sparkles,
    value: "OpenAI API",
    label: "AI Integration",
    color: "violet",
  },
];

const colorMap: Record<string, { icon: string; text: string }> = {
  sky:     { icon: "bg-sky-500/10 border-sky-500/20 text-sky-400",         text: "text-sky-400"     },
  violet:  { icon: "bg-violet-500/10 border-violet-500/20 text-violet-400", text: "text-violet-400"  },
  emerald: { icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",text:"text-emerald-400"},
  amber:   { icon: "bg-amber-500/10 border-amber-500/20 text-amber-400",    text: "text-amber-400"   },
};

export default function RecruiterSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-24 xl:px-32 pb-20 max-w-7xl mx-auto"
      aria-label="Key facts snapshot"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="eyebrow">At a glance</span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </motion.div>

      {/* Horizontal strip — wraps on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {facts.map((fact, i) => {
          const Icon = fact.icon;
          const c = colorMap[fact.color];
          return (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass border border-white/[0.07] rounded-2xl p-4 flex flex-col gap-3
                hover:border-sky-500/15 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${c.icon}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className={`font-syne font-bold text-sm leading-none mb-1 ${c.text}`}>
                  {fact.value}
                </p>
                <AnimatedShinyText
                  variant="text"
                  className="text-[10px] leading-snug"
                >
                  {fact.label}
                </AnimatedShinyText>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
