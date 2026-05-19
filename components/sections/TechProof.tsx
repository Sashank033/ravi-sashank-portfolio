"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import {
  Monitor, Server, Database, Shield,
  Sparkles, TestTube, Cloud, Gauge,
} from "lucide-react";

const areas = [
  {
    icon: Monitor,
    title: "React & Next.js",
    subtitle: "Frontend Engineering",
    color: "sky",
    items: [
      "App Router, SSR, ISR, and static generation",
      "TypeScript-first component architecture",
      "Custom hooks, context, and state patterns",
      "Tailwind CSS design systems",
      "Responsive, mobile-first by default",
    ],
  },
  {
    icon: Server,
    title: "Node.js & REST APIs",
    subtitle: "Backend Engineering",
    color: "violet",
    items: [
      "Express.js and Next.js API Routes",
      "Request validation, error handling middleware",
      "API orchestration across multiple services",
      "Sub-200ms response time targets achieved",
      "Google Sheets API and third-party integrations",
    ],
  },
  {
    icon: Database,
    title: "PostgreSQL & Prisma",
    subtitle: "Database Design",
    color: "emerald",
    items: [
      "Schema design across 6+ relational entities",
      "Prisma ORM — migrations, Studio, seeding",
      "SQL query optimization for performance",
      "Normalized data models with clear integrity",
      "AWS RDS for managed production databases",
    ],
  },
  {
    icon: Shield,
    title: "Auth & Security",
    subtitle: "Authentication Workflows",
    color: "amber",
    items: [
      "Secure session-based and token auth flows",
      "User-scoped data access and storage",
      "Production security issue resolution",
      "30% defect reduction through auth hardening",
      "Secure file upload pipelines with fallbacks",
    ],
  },
  {
    icon: Sparkles,
    title: "OpenAI API",
    subtitle: "AI Integration",
    color: "violet",
    items: [
      "LLM API calls with structured prompt design",
      "Resume-to-JD ATS scoring and gap detection",
      "Graceful local fallback when API unavailable",
      "Response validation to prevent hallucinations",
      "AI features used in production workflows",
    ],
  },
  {
    icon: TestTube,
    title: "Jest & RTL",
    subtitle: "Testing & Quality",
    color: "emerald",
    items: [
      "100 passing tests across 11 suites",
      "Unit tests for API routes and utilities",
      "Component tests with React Testing Library",
      "Postman for API contract testing",
      "Production issue debugging and resolution",
    ],
  },
  {
    icon: Cloud,
    title: "AWS & Vercel",
    subtitle: "Cloud & Deployment",
    color: "sky",
    items: [
      "S3 file storage with local filesystem fallback",
      "EC2, RDS, Lambda, and IAM experience",
      "Vercel deploy with preview + production envs",
      "Environment configuration management",
      "Git-based CI/CD release workflows",
    ],
  },
  {
    icon: Gauge,
    title: "Performance",
    subtitle: "Measured Impact",
    color: "amber",
    items: [
      "25% responsiveness improvement in production",
      "35% build time cut via reusable components",
      "20% data retrieval latency reduction",
      "60% manual operations time saved",
      "10 hrs/week automation via Python + Sheets API",
    ],
  },
];

const colorMap: Record<string, {
  icon: string; text: string; dot: string; border: string;
}> = {
  sky:     { icon: "bg-sky-500/10     border-sky-500/20 text-sky-400",     text: "text-sky-400",     dot: "bg-sky-400",     border: "hover:border-sky-500/20"     },
  violet:  { icon: "bg-violet-500/10  border-violet-500/20 text-violet-400",text: "text-violet-400",  dot: "bg-violet-400",  border: "hover:border-violet-500/20"  },
  emerald: { icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",text:"text-emerald-400",dot: "bg-emerald-400", border: "hover:border-emerald-500/20" },
  amber:   { icon: "bg-amber-500/10   border-amber-500/20 text-amber-400",  text: "text-amber-400",  dot: "bg-amber-400",   border: "hover:border-amber-500/20"   },
};

export default function TechProof() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="tech-proof-heading"
    >
      <SectionReveal>
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow">Capabilities</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-emerald-500/40 to-transparent" />
        </div>
        <h2 id="tech-proof-heading" className="section-title text-slate-100 mb-2">
          What I Build,{" "}
          <span className="text-gradient-emerald">and How.</span>
        </h2>
        <p className="max-w-xl mb-12">
          <AnimatedShinyText variant="text" className="text-sm leading-relaxed">
            Concrete capabilities across every layer of the stack — with
            real project context behind each one.
          </AnimatedShinyText>
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((area, i) => {
          const Icon = area.icon;
          const c = colorMap[area.color];
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.055, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className={`glass border border-white/[0.07] rounded-2xl p-5
                transition-all duration-300 ${c.border} hover:-translate-y-1`}
            >
              {/* Icon + titles */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                mb-4 border ${c.icon}`}>
                <Icon className="w-5 h-5" />
              </div>

              <p className={`font-syne font-bold text-sm leading-tight ${c.text}`}>
                {area.title}
              </p>
              <p className="text-slate-600 text-[10px] uppercase tracking-wider mb-4 mt-0.5">
                {area.subtitle}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className={`w-1 h-1 rounded-full shrink-0 mt-[7px] ${c.dot}`}
                    />
                    <span className="text-slate-400 text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
