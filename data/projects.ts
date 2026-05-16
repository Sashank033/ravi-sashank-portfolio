export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string[];
  featured: boolean;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  architecture?: string;
  challenges?: string[];
  caseStudy: {
    overview: string;
    sections: { title: string; content: string }[];
    proofPoints: string[];
  };
  liveDemo: string;
  github: string;
  color: string;
  accentColor: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: "applywise-ai",
    title: "ApplyWise AI",
    subtitle: "Full-Stack AI Job Application & ATS Analyzer",
    tagline:
      "An end-to-end AI-powered job tracker that parses resumes, scores ATS compatibility, detects skill gaps, and visualizes your job search pipeline.",
    category: ["Full Stack", "AI", "Dashboard"],
    featured: true,
    problem:
      "Job seekers waste hours tailoring resumes without knowing if they pass ATS filters. There was no integrated tool that combined job tracking, resume analysis, AI-powered scoring, and skill gap detection in one workflow.",
    solution:
      "Built a full-stack platform with Next.js, TypeScript, Prisma, and PostgreSQL that parses uploaded resumes, scores them against job descriptions using OpenAI API (with local fallback), detects missing skills, and surfaces analytics across the entire job search pipeline.",
    role: "Solo Full-Stack Engineer — architected and built all 6+ modules from database schema to UI.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "OpenAI API",
      "Jest",
      "React Testing Library",
      "AWS S3",
      "Tailwind CSS",
    ],
    highlights: [
      "Resume upload with PDF parsing, local/S3 fallback, and user-scoped storage",
      "ATS analyzer using OpenAI API with local keyword fallback matching",
      "Detects 15+ skill gaps between resume and job description",
      "Analytics dashboard: status, response rate, ATS scores, top matches",
      "Prisma/PostgreSQL schema across 6+ core entities",
      "100 passing tests across 11 test suites with Jest and RTL",
      "6+ user workflow modules: upload, analyze, track, review, compare, report",
    ],
    metrics: [
      { label: "Test Suites", value: "11" },
      { label: "Tests Passing", value: "100" },
      { label: "Workflow Modules", value: "6+" },
      { label: "Skill Gaps Detected", value: "15+" },
      { label: "DB Entities", value: "6+" },
      { label: "Resume Workflows", value: "3+" },
    ],
    architecture:
      "Next.js App Router for SSR/SSG, Prisma ORM connected to PostgreSQL (AWS RDS / local), OpenAI API with graceful local fallback, AWS S3 for file storage with local filesystem fallback, Jest + RTL for full test coverage across API routes, hooks, utilities, and UI components.",
    challenges: [
      "Implementing reliable PDF parsing across diverse resume formats and encoding edge cases",
      "Designing a graceful fallback for OpenAI API calls during rate limits or outages using local keyword matching",
      "Modeling a flexible Prisma schema that supports user-scoped multi-resume, multi-job-analysis workflows",
      "Achieving 100 test cases across API routes, React hooks, utility functions, and UI components",
    ],
    caseStudy: {
      overview:
        "ApplyWise AI is the most technically complex project in this portfolio. It demonstrates full-stack architecture, AI API integration, database design, testing discipline, and practical product thinking applied to the real problem of job searching.",
      sections: [
        {
          title: "Resume Upload & Parsing",
          content:
            "Built a multi-layer upload pipeline supporting PDF parsing with local filesystem and S3 fallback. User-scoped storage ensures each user only accesses their own resume data.",
        },
        {
          title: "ATS Scoring Engine",
          content:
            "Integrates OpenAI API to analyze resume-to-job-description alignment. Includes a robust local fallback using keyword frequency analysis, ensuring the feature works even without API access.",
        },
        {
          title: "Skill Gap Detection",
          content:
            "Compares extracted skills from uploaded resume against job description requirements, surfacing a ranked list of missing or underrepresented skills with actionable suggestions.",
        },
        {
          title: "Analytics Dashboard",
          content:
            "A real-time dashboard displaying application status distribution, ATS score trends, response rates, and top-matched job roles — giving users full pipeline visibility.",
        },
        {
          title: "Database Architecture",
          content:
            "Prisma/PostgreSQL schema covers 6+ entities: Users, Resumes, Jobs, Analyses, Keywords, and Logs. Designed for extensibility with clear relational integrity.",
        },
        {
          title: "Testing Coverage",
          content:
            "100 tests across 11 suites covering API route handlers, custom React hooks, utility functions, and UI components using Jest and React Testing Library.",
        },
      ],
      proofPoints: [
        "Can architect and build a production-grade full-stack AI product from scratch",
        "Understands API design, error handling, and graceful degradation",
        "Writes maintainable, tested code across the full stack",
        "Designs normalized database schemas with Prisma ORM",
        "Integrates AI APIs responsibly with fallback logic",
        "Builds analytics dashboards with real business value",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033",
    color: "from-sky-500/20 to-violet-500/20",
    accentColor: "sky",
    icon: "Brain",
  },
  {
    id: "chat-desk",
    title: "Chat Desk",
    subtitle: "Full-Stack AI Chatbot Platform",
    tagline:
      "A real-time chatbot platform with saved history, authentication, REST APIs, and optimized PostgreSQL backends.",
    category: ["Full Stack", "Backend", "AI"],
    featured: true,
    problem:
      "Needed a full-stack chat platform with secure multi-user support, persistent message history, real-time responses, and robust reporting workflows — not just a simple chat widget.",
    solution:
      "Built a complete platform with React.js, Node.js, PostgreSQL, and REST APIs featuring authentication, message handling, API orchestration, optimized SQL queries, and sub-200ms API response times.",
    role: "Full-Stack Engineer — built frontend, backend services, database schema, and API orchestration.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "SQL",
    ],
    highlights: [
      "Real-time conversations with persistent saved chat history",
      "Secure authentication workflows with backend auth services",
      "Sub-200ms average API response times during testing",
      "PostgreSQL schemas with optimized SQL queries",
      "REST APIs for all frontend-backend communication",
      "Message handling, API orchestration, and reporting workflows",
    ],
    metrics: [
      { label: "API Response", value: "<200ms" },
      { label: "Auth Workflows", value: "Secure" },
      { label: "DB Schema", value: "Optimized" },
      { label: "Modules", value: "Multi" },
    ],
    caseStudy: {
      overview:
        "Chat Desk demonstrates backend architecture, authentication design, database optimization, and REST API development in a production-grade chat platform.",
      sections: [
        {
          title: "Authentication & Security",
          content:
            "Implemented backend authentication workflows with secure session management, protecting user data and message history.",
        },
        {
          title: "API Design",
          content:
            "Designed and built REST APIs for all communication between React frontend and Node.js backend, achieving consistent sub-200ms response times.",
        },
        {
          title: "Database Optimization",
          content:
            "Designed PostgreSQL schemas and optimized SQL queries for efficient message retrieval, data integrity, and scalable reporting workflows.",
        },
      ],
      proofPoints: [
        "Backend API design and Express.js service architecture",
        "Authentication system design and implementation",
        "PostgreSQL schema design and SQL query optimization",
        "Full-stack feature integration across React and Node.js",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033",
    color: "from-violet-500/20 to-emerald-500/20",
    accentColor: "violet",
    icon: "MessageSquare",
  },
  {
    id: "inventory-dashboard",
    title: "Inventory Management Dashboard",
    subtitle: "React Operations & Forecasting Dashboard",
    tagline:
      "A real-time inventory dashboard with run-out forecasting, low-stock alerts, and CSV/PDF export capabilities.",
    category: ["Dashboard", "Frontend", "Full Stack"],
    featured: true,
    problem:
      "Operations teams were tracking inventory manually with spreadsheets, leading to stock discrepancies, reactive restocking, and slow reporting cycles.",
    solution:
      "Built a React dashboard using regression.js for run-out forecasting with real-time stock updates, automated low-stock alerts, and one-click CSV/PDF export — cutting manual tracking time by 60%.",
    role: "Frontend & Full-Stack Engineer — designed and built all UI, hooks, forecasting logic, and export workflows.",
    tech: ["React.js", "JavaScript", "regression.js", "CSV Export", "PDF Export", "Tailwind CSS"],
    highlights: [
      "Real-time stock updates with 15% reduction in tracking discrepancies",
      "Run-out forecasting using regression.js, reducing manual tracking time by 60%",
      "Automated low-stock alerts with configurable thresholds",
      "CSV/PDF exports for inventory reports and operational visibility",
      "Reusable React hooks and components, improving maintainability by 20%",
    ],
    metrics: [
      { label: "Tracking Discrepancies", value: "-15%" },
      { label: "Manual Tracking Time", value: "-60%" },
      { label: "Maintainability Gain", value: "+20%" },
      { label: "Export Formats", value: "2 (CSV/PDF)" },
    ],
    caseStudy: {
      overview:
        "Inventory Dashboard showcases complex React component architecture, data visualization, reusable hook patterns, and practical UI engineering for operational workflows.",
      sections: [
        {
          title: "Forecasting Engine",
          content:
            "Integrated regression.js to build a statistical run-out forecasting model that predicts stock depletion dates from historical consumption data.",
        },
        {
          title: "Reusable Architecture",
          content:
            "Refactored dashboard logic into custom React hooks and shared components, cutting duplication and improving maintainability by 20%.",
        },
        {
          title: "Export Workflows",
          content:
            "Built CSV and PDF export pipelines for inventory snapshots and reports, enabling faster operations reviews.",
        },
      ],
      proofPoints: [
        "Advanced React component and hooks architecture",
        "Data visualization and operational dashboard design",
        "Statistical forecasting integration",
        "Reusable UI pattern implementation",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033",
    color: "from-emerald-500/20 to-sky-500/20",
    accentColor: "emerald",
    icon: "BarChart3",
  },
  {
    id: "medical-report-generator",
    title: "Patient Medical Report Generator",
    subtitle: "Healthcare React App with PDF Generation",
    tagline:
      "A responsive React app that captures patient intake data and generates clean, printable medical reports — reducing report creation time by 70%.",
    category: ["Frontend", "Full Stack"],
    featured: false,
    problem:
      "Healthcare staff were manually typing patient intake data into reports, creating a slow, error-prone process with inconsistent formatting and no digital audit trail.",
    solution:
      "Built a responsive React.js app with reusable form components and PDF generation, producing clean healthcare-style documentation and cutting report creation time by 70%.",
    role: "Frontend Engineer — designed and built all form components, PDF layout logic, and responsive UI.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "PDF Generation"],
    highlights: [
      "70% reduction in report creation time",
      "Reusable form components for patient intake data capture",
      "Clean PDF generation with healthcare-style formatting",
      "Fully responsive UI for tablet and desktop workflows",
      "Structured documentation output for clinical records",
    ],
    metrics: [
      { label: "Report Creation Time", value: "-70%" },
      { label: "UI", value: "Responsive" },
      { label: "Output", value: "PDF Ready" },
    ],
    caseStudy: {
      overview:
        "Medical Report Generator demonstrates form engineering, PDF layout handling, and responsive design for domain-specific applications.",
      sections: [
        {
          title: "Form Engineering",
          content:
            "Built a modular, reusable form component system that captures structured patient intake data with validation and error handling.",
        },
        {
          title: "PDF Generation",
          content:
            "Implemented PDF layout handling to produce printable, healthcare-style documentation with consistent formatting and structured data.",
        },
      ],
      proofPoints: [
        "Domain-specific UI component design",
        "PDF generation and layout handling",
        "Reusable form architecture",
        "Responsive design for professional workflows",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033",
    color: "from-amber-500/20 to-violet-500/20",
    accentColor: "amber",
    icon: "FileHeart",
  },
];
