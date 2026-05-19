"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

const colorMap: Record<string, {
  border: string;
  text: string;
  tag: string;
  bullet: string;
}> = {
  sky: {
    border:"border-sky-500/15 hover:border-sky-500/25",
    text:  "text-sky-400",
    tag:   "tag",
    bullet:"bg-sky-400",
  },
  violet: {
    border:"border-white/[0.07] hover:border-violet-500/25",
    text:  "text-violet-400",
    tag:   "tag-violet",
    bullet:"bg-violet-400",
  },
  emerald: {
    border:"border-white/[0.07] hover:border-emerald-500/25",
    text:  "text-emerald-400",
    tag:   "tag-emerald",
    bullet:"bg-emerald-400",
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
      <span className="text-base leading-8 text-slate-200">
        <span className={`font-syne font-bold ${accentClass}`}>{metric}</span>{" "}
        {rest}
      </span>
    );
  }
  return <span className="text-base leading-8 text-slate-200">{text}</span>;
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
        <h2 id="experience-heading" className="section-title text-slate-100 mb-6">
          Work{" "}
          <span className="text-gradient-violet">History</span>
        </h2>
      </SectionReveal>

      <SectionReveal>
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/8 px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]" />
          <span className="font-syne text-[11px] font-semibold tracking-[0.14em] text-slate-300 uppercase">
            3+ Years Full-Stack Experience
          </span>
        </div>
      </SectionReveal>

      <div className="relative max-w-5xl">
        {/* Vertical connector line */}
        <div
          className="absolute left-[13px] sm:left-[18px] top-4 bottom-6 w-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(56,189,248,0.45), rgba(167,139,250,0.3), rgba(52,211,153,0.2), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color];
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[6px] sm:left-[11px] top-7 z-10">
                  <div
                    className={
                      exp.current
                        ? "timeline-dot-current h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-[#020817]"
                        : "h-3.5 w-3.5 rounded-full border border-slate-500/40 bg-navy-950 ring-4 ring-[#020817]"
                    }
                    aria-hidden="true"
                  />
                </div>

                {/* Card */}
                <div
                  className={`glass ${c.border} rounded-2xl p-7 md:p-9
                    transition-all duration-300 hover:-translate-y-0.5`}
                >
                  {/* Row 1: role + current badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-syne text-3xl font-bold leading-tight text-slate-100">
                        {exp.role}
                      </h3>
                      <p className={`mt-2 font-syne text-lg font-semibold leading-snug ${c.text}`}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse motion-reduce:animate-none" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Period + location */}
                  <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="mb-6 text-base leading-8 text-slate-200">
                    {exp.summary}
                  </p>

                  {/* Bullets — scannable, metrics front-loaded */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 mt-[11px] ${c.bullet}`}
                        />
                        <HighlightedBullet text={b} accentClass={c.text} />
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className={`${c.tag} text-sm`}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
