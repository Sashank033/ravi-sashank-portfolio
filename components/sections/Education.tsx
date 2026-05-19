"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { education } from "@/data/education";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const colorMap: Record<string, { icon: string; text: string; border: string }> = {
  sky: {
    icon: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    text: "text-sky-400",
    border: "hover:border-sky-500/30",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    text: "text-violet-400",
    border: "hover:border-violet-500/30",
  },
};

export default function Education() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 xl:px-32 pb-24 max-w-7xl mx-auto"
      aria-labelledby="education-heading"
    >
      <SectionReveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="tag text-xs md:text-[13px] uppercase tracking-[0.12em]">Education</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
        </div>
        <h2 id="education-heading" className="section-title text-slate-100 mb-10">
          Academic{" "}
          <span className="text-gradient-sky">Foundation</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
        {education.map((edu, i) => {
          const colors = colorMap[edu.color];
          return (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass border border-white/[0.07] rounded-2xl p-6 transition-all duration-300
                ${colors.border} hover:-translate-y-0.5`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="mb-4">
                <span className={`font-syne font-bold text-sm ${colors.text} uppercase tracking-widest`}>
                  {edu.schoolShort}
                </span>
                <h3 className="font-syne font-bold text-slate-100 text-xl mt-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className={`text-base font-medium ${colors.text} mt-0.5`}>{edu.field}</p>
              </div>

              <p className="mb-5 text-[15px] leading-7 text-slate-300">{edu.description}</p>

              <div className="flex flex-col gap-1.5 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <p className="text-slate-400 text-sm">{edu.school}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
