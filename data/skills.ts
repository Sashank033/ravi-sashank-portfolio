export type SkillCategory = {
  category: string;
  icon: string;
  color: string;
  skills: { name: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "sky",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Responsive Design" },
      { name: "Component Architecture" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "violet",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js API Routes" },
      { name: "REST APIs" },
      { name: "Authentication" },
      { name: "API Integrations" },
      { name: "Python" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "emerald",
    skills: [
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "SQL" },
      { name: "Database Design" },
      { name: "Query Optimization" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    color: "amber",
    skills: [
      { name: "AWS S3" },
      { name: "AWS EC2" },
      { name: "AWS RDS" },
      { name: "AWS Lambda" },
      { name: "AWS IAM" },
      { name: "Vercel" },
      { name: "Git / GitHub" },
      { name: "CI/CD Concepts" },
    ],
  },
  {
    category: "AI Integration",
    icon: "Sparkles",
    color: "violet",
    skills: [
      { name: "OpenAI API" },
      { name: "LLM API Integration" },
      { name: "Prompt Engineering" },
      { name: "AI-Powered Features" },
      { name: "ATS Keyword Matching" },
    ],
  },
  {
    category: "Testing & Quality",
    icon: "TestTube",
    color: "emerald",
    skills: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "API Testing" },
      { name: "Debugging" },
      { name: "Browser DevTools" },
      { name: "Production Issue Resolution" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "sky",
    skills: [
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Prisma Studio" },
      { name: "Google Sheets API" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "Layers",
    color: "amber",
    skills: [
      { name: "Full Stack Development" },
      { name: "Agile / Scrum" },
      { name: "Code Reviews" },
      { name: "Documentation" },
      { name: "Application Security" },
    ],
  },
];
