"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

const colorMap: Record<string, {
  dot: string;
  border: string;
  text: string;
  tag: string;
  badge: string;
  line: string;
}> = {
  sky: {
    dot:   "bg-sky-400 ring-sky-400/20 shadow-[0_0_10px_rgba(56,189,248,0.5)]",
    border:"hover:border-sky-500/25",
    text:  "text-sky-400",
    tag:   "tag",
    badge: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    line:  "from-sky-500/50",
  },
  violet: {
    dot:   "bg-violet-400 ring-violet-400/20 shadow-[0_0_10px_rgba(167,139,250,0.5)]",
    border:"hover:border-violet-500/25",
    text:  "text-violet-400",
    tag:   "tag-violet",
    badge: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    line:  "from-violet-500/40",
  },
  emerald: {
    dot:   "bg-emerald-400 ring-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.5)]",
    border:"hover:border-emerald-500/25",
    text:  "text-emerald-400",
    tag:   "tag-emerald",
    badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    line:  "from-emerald-500/30",
  },
};

/* Pull the metric prefix out of a bullet so it renders highlighted */
function HighlightedBullet({ text, accentClass }: { text: string; accentClass: string }) {
  // Match leading numbers like "25%", "35%", "4+", "$10", "10 hours", "sub-200ms"
  const match = text.match(/^([0-9][0-9a-zA-Z+%$\-/]*(?: hours?| hours\/week)?)\s/);
  if (match) {
    const metric = match[1];
    const rest = text.slice(metric.length).trimStart();
    return (
      <span className="text-slate-400 text-xs leading-relaxed">
        <span className={`font-syne font-bold ${accentClass}`}>{metric}</span>{" "}
        {rest}
      </span>
    );
  }
  return <span className="text-slate-400 text-xs leading-relaxed">{text}</span>;
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="experience-heading"
    >
      <SectionReveal>
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow">Experience</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-violet-500/40 to-transparent" />
        </div>
        <h2 id="experience-heading" className="section-title text-slate-100 mb-10">
          Work{" "}
          <span className="text-gradient-violet">History</span>
        </h2>
      </SectionReveal>

      <div className="relative max-w-3xl">
        {/* Vertical connector line */}
        <div
          className="absolute left-[18px] top-5 bottom-5 w-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(56,189,248,0.45), rgba(167,139,250,0.3), rgba(52,211,153,0.2), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5"
              >
                {/* Timeline dot */}
                <div className="shrink-0 flex flex-col items-center pt-1.5">
                  <div
                    className={`w-[14px] h-[14px] rounded-full ring-4 ring-[#020817] ${c.dot}`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 glass border border-white/[0.07] rounded-2xl p-6
                    transition-all duration-300 ${c.border} hover:-translate-y-0.5`}
                >
                  {/* Row 1: role + current badge */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-syne font-bold text-slate-100 text-base leading-tight">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="badge bg-emerald-500/10 text-emerald-400
                        border border-emerald-500/25 text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Row 2: company */}
                  <p className={`font-semibold text-sm ${c.text} mb-3`}>
                    {exp.company}
                  </p>

                  {/* Row 3: period + location */}
                  <div className="flex flex-wrap gap-4 text-[11px] text-slate-600 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullets — scannable, metrics front-loaded */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span
                          className={`w-1 h-1 rounded-full shrink-0 mt-[7px] ${c.dot.split(" ")[0]}`}
                        />
                        <HighlightedBullet text={b} accentClass={c.text} />
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className={`${c.tag} text-[10px]`}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
