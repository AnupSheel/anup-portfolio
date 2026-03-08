export const RESUME_URL =
  "https://cdn.hercules.app/file_VFilwUb3haa2m7efC9uSyNHf";

export const PROJECTS = [
  {
    title: "Smart Bill Submetering",
    company: "Bynry",
    description:
      "Led frontend development of a smart utility billing system with authentication, RBAC, and permission management. Designed scalable architecture with reusable components and optimized UI performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "RBAC"],
    image: "https://cdn.hercules.app/file_hJeBT3nZPPG5UGq6F7cQPVeP",
    type: "professional" as const,
  },
  {
    title: "Smart360 Platform",
    company: "Bynry",
    description:
      "Led frontend development for a large-scale enterprise platform. Built scalable dashboards and reusable UI components, designed architecture for complex data workflows.",
    tags: ["React", "TypeScript", "Dashboards", "Data Workflows"],
    image: "https://cdn.hercules.app/file_YahooDZ1BNlmCYX0OW9RWR0S",
    type: "professional" as const,
  },
  {
    title: "Field Force Mobile App",
    company: "Bynry",
    description:
      "Built a cross-platform mobile app with offline-first data handling using Zustand and Realm. Enabled seamless data sync in low-connectivity environments.",
    tags: ["React Native", "Zustand", "Realm", "Offline-First"],
    image: "https://cdn.hercules.app/file_K0a7AH1fV1l1u9gZ0Xtz6eag",
    type: "professional" as const,
  },
  {
    title: "Recipe Vlog Web App",
    company: "Personal Project",
    description:
      "Built a full CRUD application for managing and browsing recipes. Designed an admin panel for recipe management with API integration using Axios for seamless data handling.",
    tags: ["Angular", "HTML", "CSS", "Bootstrap", "Axios"],
    image: "https://cdn.hercules.app/file_mArjoC0oecc03ijnAfPho2G6",
    type: "personal" as const,
  },
  {
    title: "Amazon Clone",
    company: "Personal Project",
    description:
      "Built a responsive e-commerce UI replicating the Amazon shopping experience with product listings, navigation, and modern layout using pure HTML5 and CSS3.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    image: "https://cdn.hercules.app/file_FzD5Px6Dzj7TT44EtMDtR6km",
    type: "personal" as const,
  },
];

export const SKILL_CATEGORIES = [
  { name: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { name: "Frontend", items: ["React", "Angular", "React Native"] },
  {
    name: "State Management",
    items: ["Zustand", "Context API", "TanStack Query"],
  },
  { name: "UI Frameworks", items: ["Tailwind CSS", "Material UI", "Ng-Zorro"] },
  { name: "Database", items: ["MySQL", "Realm"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { name: "Testing", items: ["Jasmine", "Karma", "Jest"] },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Bynry Technologies Pvt. Ltd.",
    companyDescription:
      "SaaS product company building solutions for utility and energy management",
    period: "Jan 2025 — Present",
    highlights: [
      "Led frontend development and delivered scalable product features",
      "Built high-performance applications using React, TypeScript, Tailwind CSS",
      "Developed cross-platform features using React Native",
      "Implemented authentication and RBAC-based access control",
      "Optimized rendering and API handling for improved performance",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bynry Technologies Pvt. Ltd.",
    companyDescription:
      "SaaS product company building solutions for utility and energy management",
    period: "Apr 2024 — Jan 2025",
    highlights: [
      "Developed UI using Angular, React, Tailwind CSS, and Material UI",
      "Built reusable components and improved frontend architecture",
      "Integrated REST APIs and handled service-layer logic",
      "Performed unit testing using Jasmine and Karma",
    ],
  },
  {
    role: "Associate Consultant — Oracle HCM ERP",
    company: "Mastek India Ltd.",
    companyDescription:
      "Global IT services company specializing in enterprise digital transformation",
    period: "May 2022 — Apr 2023",
    highlights: [
      "Supported Oracle HCM modules for enterprise clients",
      "Configured and resolved system issues",
      "Gathered requirements and delivered solutions",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Electronics and Telecommunication",
    school: "Sinhgad College of Engineering, Pune",
    period: "2019 — 2022",
  },
  {
    degree: "Diploma",
    field: "Electronics and Telecommunication",
    school: "Government Polytechnic, Nagpur",
    period: "2016 — 2019",
  },
];

export const NAV_ITEMS = [
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  "contact",
] as const;

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
