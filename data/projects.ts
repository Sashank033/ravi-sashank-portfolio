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
  metrics: { label: string; value: string; description?: string }[];
  architecture?: string;
  challenges?: string[];
  caseStudy: {
    overview: string;
    snapshot?: string[];
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
    subtitle: "Full Stack AI Job Application & ATS Analyzer",
    tagline:
      "An end to end AI powered job tracker that parses resumes, scores ATS compatibility, detects skill gaps, and visualizes your job search pipeline.",
    category: ["Full Stack", "AI", "Dashboard"],
    featured: true,
    problem:
      "Job seekers waste hours tailoring resumes manually and lack a clear way to compare resumes against job descriptions, missing keywords, and ATS requirements.",
    solution:
      "Built a full stack AI workflow that parses resumes, compares them against job descriptions, scores fit, detects missing skills, and visualizes job-search performance through dashboards.",
    role: "Owned the end to end architecture across UI, API routes, Prisma/PostgreSQL models, resume parsing, OpenAI scoring workflows, analytics dashboard, and Jest/RTL testing.",
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
      "Resume upload with PDF parsing, local/S3 fallback, and user scoped storage",
      "ATS analyzer using OpenAI API with local keyword fallback matching",
      "Detects 15+ skill gaps between resume and job description",
      "Analytics dashboard: status, response rate, ATS scores, top matches",
      "Prisma/PostgreSQL schema across 6+ core entities",
      "100 passing tests across 11 test suites with Jest and RTL",
      "6+ user workflow modules: upload, analyze, track, review, compare, report",
    ],
    metrics: [
      { label: "Tests Passing", value: "100", description: "Jest + RTL coverage across core workflows" },
      { label: "Test Suites", value: "11", description: "API, hooks, utilities, and UI validation" },
      { label: "Workflow Modules", value: "6+", description: "Upload, analyze, track, compare, review, report" },
      { label: "Skill Gaps Detected", value: "15+", description: "Resume to job keyword and requirement gaps" },
      { label: "DB Entities", value: "6+", description: "Relational Prisma/PostgreSQL data model" },
      { label: "Resume Workflows", value: "3+", description: "Parsing, scoring, and improvement workflows" },
    ],
    architecture:
      "Next.js App Router for SSR/SSG, Prisma ORM connected to PostgreSQL (AWS RDS / local), OpenAI API with graceful local fallback, AWS S3 for file storage with local filesystem fallback, Jest + RTL for full test coverage across API routes, hooks, utilities, and UI components.",
    challenges: [
      "Implementing reliable PDF parsing across diverse resume formats and encoding edge cases",
      "Designing a graceful fallback for OpenAI API calls during rate limits or outages using local keyword matching",
      "Modeling a flexible Prisma schema that supports user scoped multi resume, multi job analysis workflows",
      "Achieving 100 test cases across API routes, React hooks, utility functions, and UI components",
    ],
    caseStudy: {
      overview:
        "A production style AI job application platform that helps job seekers parse resumes, score ATS fit, detect skill gaps, and track applications through OpenAI-powered analysis, PostgreSQL data modeling, analytics dashboards, and tested full-stack workflows.",
      snapshot: [
        "Next.js + TypeScript",
        "PostgreSQL + Prisma",
        "OpenAI API",
        "Resume Parsing",
        "ATS Scoring",
        "100 Tests / 11 Suites",
      ],
      sections: [
        {
          title: "Resume Upload & Parsing",
          content:
            "Built the upload and parsing flow for PDF resumes, with user scoped storage and fallback handling so resume data can be processed reliably before scoring.",
        },
        {
          title: "ATS Scoring Engine",
          content:
            "Designed the scoring workflow that compares resume content against job descriptions, evaluates fit, and surfaces missing skills in a recruiter-friendly analysis flow.",
        },
        {
          title: "Database Architecture",
          content:
            "Modeled the core Prisma/PostgreSQL schema across users, resumes, jobs, analyses, keywords, and logs with clear relationships for extensible workflows.",
        },
        {
          title: "Analytics Dashboard",
          content:
            "Built dashboards for application status, ATS score trends, response rates, and matched roles so users can understand their job search pipeline at a glance.",
        },
        {
          title: "Testing Coverage",
          content:
            "Covered API routes, hooks, utilities, and UI components with Jest and React Testing Library, reaching 100 passing tests across 11 suites.",
        },
        {
          title: "Fallback & Reliability",
          content:
            "Added graceful fallback behavior for AI analysis so keyword matching can still provide useful results when external API calls are unavailable.",
        },
      ],
      proofPoints: [
        "Full stack architecture from database to UI",
        "AI API integration with practical fallback logic",
        "Resume parsing and ATS style keyword matching",
        "PostgreSQL/Prisma schema design",
        "Tested production style workflows",
        "Dashboard and analytics product thinking",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033/applywise-ai.git",
    color: "from-sky-500/20 to-violet-500/20",
    accentColor: "sky",
    icon: "Brain",
  },
  {
    id: "chat-desk",
    title: "Chat Desk AI",
    subtitle: "A Full Stack Multi Chat Platform with seamless login to multiple users",
    tagline:
      "A real time chatbot platform with saved history, authentication, REST APIs, and optimized PostgreSQL backends.",
    category: ["Full Stack", "Backend", "AI"],
    featured: true,
    problem:
      "Teams need reliable chat platforms that can support authenticated users, persistent message history, fast API responses, and clean frontend-backend communication without fragile state handling.",
    solution:
      "Built a full-stack chat platform with React, Node.js, REST APIs, PostgreSQL, authentication workflows, message handling services, and optimized SQL queries to support saved conversations and sub-200ms API response times.",
    role: "Owned frontend interfaces, backend API services, authentication flows, PostgreSQL schema design, message history workflows, API orchestration, and reporting-ready data structures.",
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
      "Real time conversations with persistent saved chat history",
      "Secure authentication workflows with backend auth services",
      "Sub-200ms average API response times during testing",
      "PostgreSQL schemas with optimized SQL queries",
      "REST APIs for all frontend-backend communication",
      "Message handling, API orchestration, and reporting workflows",
    ],
    metrics: [
      { label: "API Response", value: "<200ms", description: "Average response target during application testing" },
      { label: "Auth Workflows", value: "Secure", description: "Protected access for saved user conversations" },
      { label: "DB Schema", value: "Optimized", description: "PostgreSQL models for chat history retrieval" },
      { label: "Platform Scope", value: "Multi", description: "Frontend, APIs, auth, data, and reporting flows" },
    ],
    caseStudy: {
      overview:
        "Chat Desk AI is a full-stack chatbot platform that combines secure authentication, REST API orchestration, PostgreSQL-backed chat history, optimized data retrieval, and modular backend services for real-time-style user conversations.",
      snapshot: [
        "React + Node.js",
        "REST APIs",
        "PostgreSQL",
        "Authentication",
        "Saved Chat History",
        "Sub-200ms Responses",
      ],
      sections: [
        {
          title: "Authentication & Security",
          content:
            "Implemented secure user authentication workflows and session-based access patterns to protect user data and saved message history.",
        },
        {
          title: "REST API Architecture",
          content:
            "Designed API routes for chat creation, message handling, history retrieval, and frontend-backend communication with consistent response handling.",
        },
        {
          title: "PostgreSQL Data Modeling",
          content:
            "Designed database schemas for users, conversations, messages, and reporting workflows to support reliable persistence and retrieval.",
        },
        {
          title: "API Performance",
          content:
            "Optimized backend queries and response handling to achieve sub-200ms average API responses during application testing.",
        },
        {
          title: "Frontend Chat Experience",
          content:
            "Built responsive React interfaces for real-time-style conversations, saved history, and clean user interaction flows.",
        },
        {
          title: "Maintainability",
          content:
            "Separated frontend, backend, auth, API orchestration, and database logic into modular workflows for easier debugging and future scaling.",
        },
      ],
      proofPoints: [
        "Full-stack ownership across React, Node.js, REST APIs, and PostgreSQL",
        "Authentication workflow implementation and protected user data handling",
        "Backend API design for chat, history, and reporting workflows",
        "Database schema design and SQL query optimization",
        "Modular architecture for maintainable and scalable feature development",
        "Practical product thinking around user conversations and saved history",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033/chatdesk.git",
    color: "from-violet-500/20 to-emerald-500/20",
    accentColor: "violet",
    icon: "MessageSquare",
  },
  {
    id: "inventory-dashboard",
    title: "Inventory Management Dashboard",
    subtitle: "React Operations & Forecasting Dashboard",
    tagline:
      "A real time inventory dashboard with run out forecasting, low stock alerts, and CSV/PDF export capabilities.",
    category: ["Dashboard", "Frontend", "Full Stack"],
    featured: true,
    problem:
      "Operations teams relied on manual inventory tracking, which made stock levels harder to monitor, delayed reporting, and increased the chance of stock discrepancies.",
    solution:
      "Built a React operations dashboard with run-out forecasting, low-stock visibility, reusable UI logic, and CSV/PDF export workflows to make inventory review faster and more consistent.",
    role: "Owned the dashboard UI, reusable React components, forecasting workflow, export logic, and data presentation patterns for operational users.",
    tech: ["React.js", "JavaScript", "regression.js", "CSV Export", "PDF Export", "Tailwind CSS"],
    highlights: [
      "Real time stock updates with 15% reduction in tracking discrepancies",
      "Run out forecasting using regression.js, reducing manual tracking time by 60%",
      "Automated low stock alerts with configurable thresholds",
      "CSV/PDF exports for inventory reports and operational visibility",
      "Reusable React hooks and components, improving maintainability by 20%",
    ],
    metrics: [
      { label: "Tracking Discrepancies", value: "-15%", description: "Improved visibility into inventory changes" },
      { label: "Manual Tracking Time", value: "-60%", description: "Reduced spreadsheet-heavy review work" },
      { label: "Maintainability Gain", value: "+20%", description: "Reusable hooks and component patterns" },
      { label: "Export Formats", value: "2", description: "CSV and PDF reporting workflows" },
    ],
    caseStudy: {
      overview:
        "Inventory Management Dashboard is a React operations tool focused on forecasting, stock visibility, export workflows, and reusable UI patterns for inventory-heavy teams.",
      snapshot: [
        "React.js",
        "JavaScript",
        "regression.js",
        "Forecasting",
        "CSV Export",
        "PDF Export",
      ],
      sections: [
        {
          title: "Forecasting Engine",
          content:
            "Integrated regression.js to estimate inventory run-out timing from usage patterns, helping users identify stock risk before it becomes urgent.",
        },
        {
          title: "Reusable React Architecture",
          content:
            "Organized dashboard behavior into reusable hooks and shared components to reduce duplication and make future dashboard changes easier.",
        },
        {
          title: "Export Workflows",
          content:
            "Built CSV and PDF export flows so inventory snapshots could be shared, reviewed, and archived outside the application.",
        },
        {
          title: "Operational UI Design",
          content:
            "Designed the interface around fast scanning, status awareness, and repeated operational use instead of a marketing-style dashboard.",
        },
      ],
      proofPoints: [
        "React component architecture for dashboard workflows",
        "Forecasting integration with practical operational value",
        "Reusable hooks and UI patterns for maintainability",
        "CSV/PDF export workflow implementation",
        "Product thinking around inventory visibility and reporting",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033/inventory_dashboard.git",
    color: "from-emerald-500/20 to-sky-500/20",
    accentColor: "emerald",
    icon: "BarChart3",
  },
  {
    id: "medical-report-generator",
    title: "Patient Medical Report Generator",
    subtitle: "Healthcare React App with PDF Generation",
    tagline:
      "A responsive React app that captures patient intake data and generates clean, printable medical reports, reducing report creation time by 70%.",
    category: ["Frontend", "Full Stack"],
    featured: false,
    problem:
      "Healthcare-style reporting workflows can become slow and inconsistent when patient intake information is manually copied into report templates.",
    solution:
      "Built a responsive React app with structured intake forms, reusable form components, and PDF generation so reports can be created faster with cleaner formatting.",
    role: "Owned the form UI, reusable component structure, PDF layout logic, responsive behavior, and report-generation workflow.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "PDF Generation"],
    highlights: [
      "70% reduction in report creation time",
      "Reusable form components for patient intake data capture",
      "Clean PDF generation with healthcare-style formatting",
      "Fully responsive UI for tablet and desktop workflows",
      "Structured documentation output for clinical records",
    ],
    metrics: [
      { label: "Report Creation Time", value: "-70%", description: "Faster structured report generation" },
      { label: "Responsive UI", value: "Yes", description: "Designed for desktop and tablet workflows" },
      { label: "PDF Output", value: "Ready", description: "Clean printable report generation" },
    ],
    caseStudy: {
      overview:
        "Patient Medical Report Generator is a responsive React application that turns structured patient intake data into clean, printable PDF reports for healthcare-style workflows.",
      snapshot: [
        "React.js",
        "JavaScript",
        "Reusable Forms",
        "PDF Generation",
        "Responsive UI",
      ],
      sections: [
        {
          title: "Form Engineering",
          content:
            "Built reusable form components for structured patient intake data, keeping the workflow organized and easier to maintain.",
        },
        {
          title: "PDF Generation",
          content:
            "Implemented report layout logic to produce clean PDF-ready documents with consistent formatting and structured patient information.",
        },
        {
          title: "Responsive Workflow",
          content:
            "Designed the interface to remain usable across desktop and tablet-style screen sizes for practical intake and reporting workflows.",
        },
        {
          title: "Maintainable UI Patterns",
          content:
            "Separated form fields, report data, and output logic into reusable pieces so future sections can be added without rewriting the app.",
        },
      ],
      proofPoints: [
        "Domain-specific UI component design",
        "Reusable form architecture for structured data capture",
        "PDF generation and layout handling",
        "Responsive design for professional workflows",
        "Product thinking around reducing repetitive reporting work",
      ],
    },
    liveDemo: "LIVE_DEMO_URL_HERE",
    github: "https://github.com/Sashank033/Patient_Report_Generator.git",
    color: "from-amber-500/20 to-violet-500/20",
    accentColor: "amber",
    icon: "FileHeart",
  },
];
