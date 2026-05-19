export type Experience = {
  id: string;
  role: string;
  company: string;
  companyShort: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  bullets: string[];
  tech: string[];
  color: string;
};

export const experiences: Experience[] = [
  {
    id: "thaddeus",
    role: "Full Stack Developer",
    company: "Thaddeus Resource Center",
    companyShort: "Thaddeus",
    location: "CA, USA",
    period: "May 2025 – Present",
    startDate: "2025-05",
    endDate: "Present",
    current: true,
    summary:
      "Building full-stack features across operational workflows using React.js, SQL, and REST APIs — shipping auth improvements, performance gains, and production issue fixes.",
    bullets: [
      "25% responsiveness improvement across user-facing workflows — React.js, JavaScript, SQL, REST APIs.",
      "5+ operational workflows rebuilt end-to-end with reusable React components, API logic, and database-driven data flows.",
      "30% defect reduction by implementing and hardening secure authentication workflows and resolving production bugs.",
      "Maintained Git-based development workflows, technical documentation, code reviews, and release readiness across the team.",
    ],
    tech: ["React.js", "JavaScript", "SQL", "REST APIs", "Git", "Authentication"],
    color: "sky",
  },
  {
    id: "quantana",
    role: "Full Stack Developer",
    company: "Quantana Pvt Ltd",
    companyShort: "Quantana",
    location: "India",
    period: "May 2022 – Jul 2023",
    startDate: "2022-05",
    endDate: "2023-07",
    current: false,
    summary:
      "Built responsive React.js interfaces and REST APIs, created reusable component libraries, and shipped features across Agile sprints with consistent code review and testing.",
    bullets: [
      "20% increase in user engagement — responsive React.js UI built with JavaScript, HTML5, CSS3, and REST APIs.",
      "35% build time reduction by creating a reusable React component and API library shared across the codebase.",
      "30% performance improvement achieved through component-level optimisation and elimination of redundant re-renders.",
      "Collaborated in Agile workflows covering code reviews, debugging, testing, and coordinated feature deployments.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git", "Agile"],
    color: "violet",
  },
  {
    id: "sowdha",
    role: "Full-Stack Engineer",
    company: "Sri Sowdha Ventures",
    companyShort: "Sri Sowdha",
    location: "India",
    period: "Apr 2021 – Apr 2022",
    startDate: "2021-04",
    endDate: "2022-04",
    current: false,
    summary:
      "Developed four responsive web applications, integrated frontend UIs with backend services, and automated data workflows using Python and Google Sheets API.",
    bullets: [
      "4 responsive web apps delivered with HTML, CSS, JavaScript, and REST APIs — 35% mobile usability improvement.",
      "20% data retrieval latency reduction by optimising frontend-to-backend service integration.",
      "10 hours/week saved by automating data workflows with Python and Google Sheets API — 90% error reduction.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python", "Google Sheets API", "REST APIs"],
    color: "emerald",
  },
];
