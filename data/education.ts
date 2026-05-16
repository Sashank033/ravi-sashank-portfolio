export type Education = {
  degree: string;
  field: string;
  school: string;
  schoolShort: string;
  location: string;
  period: string;
  description: string;
  color: string;
};

export const education: Education[] = [
  {
    degree: "Master of Science",
    field: "Computer Science (MS-CS)",
    school: "University of South Florida",
    schoolShort: "USF",
    location: "Tampa, Florida",
    period: "Aug 2023 – May 2025",
    description:
      "Graduate-level study in computer science with focus on software engineering, algorithms, distributed systems, and applied computing.",
    color: "sky",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering (BTech-CS)",
    school: "Gandhi Institute of Technology and Management (GITAM)",
    schoolShort: "GITAM",
    location: "India",
    period: "Jun 2019 – May 2023",
    description:
      "Foundation in computer science engineering covering data structures, algorithms, software development, databases, and systems design.",
    color: "violet",
  },
];
