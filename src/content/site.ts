import type { StaticImageData } from "next/image";
import flourishOms1 from "./projects/flourish-oms-1.webp";
import flourishOms2 from "./projects/flourish-oms-2.webp";
import flourishOms3 from "./projects/flourish-oms-3.webp";
import flourishOms4 from "./projects/flourish-oms-4.webp";
import soar1 from "./projects/soar-1.webp";
import soar2 from "./projects/soar-2.webp";
import soar3 from "./projects/soar-3.webp";
import soar4 from "./projects/soar-4.webp";
import bankiePreview from "./previews/bankie.gif";
import pairQuestPreview from "./previews/pair-quest.gif";
import youDontKnowPreview from "./previews/you-dont-know.gif";

// All site copy lives here. Anything in [brackets] is a placeholder that still
// needs real content — search this file for "TODO" to find them.

export type SectionId = "work" | "experience" | "projects" | "about";

export type Section = {
  id: SectionId;
  /** Heading shown above the section. */
  title: string;
  /** Label in the desktop sidebar nav. */
  label: string;
  /** Shorter label for the mobile tab bar. */
  shortLabel: string;
};

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  name: string;
  client: string;
  summary: string;
  stack: string[];
  /** Shown as a slideshow on the project card, in this order. */
  images: ProjectImage[];
  /** Live product URL the card title links to; without one the title is plain text. */
  url: string | null;
};

export type Role = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export type SideProject = {
  name: string;
  description: string;
  /** Rows without a URL render as plain text instead of a link. */
  url: string | null;
  /** Looping GIF walkthrough shown next to the cursor while the row is hovered. */
  preview: StaticImageData | null;
};

export const profile = {
  name: "Oluwatobi Oyeleye",
  role: "Full-stack software engineer",
  bio: "I build products end to end, from the backend services to the interface people use.",
  availability: "Open to full-stack roles · Lagos, WAT",
  url: "https://tobibuilds.dev",
  description:
    "Oluwatobi Oyeleye is a full-stack software engineer in Lagos who builds products end to end, from backend services to the interface people use.",
};

export const links = {
  email: "hello@tobibuilds.dev",
  github: "https://github.com/tobyleye",
  // Carried over from the previous site's résumé page — confirm it is still current.
  linkedin: "https://www.linkedin.com/in/oluwatobi-oyeleye-1646357a/",
  // The résumé page; its PDF is printed from that page (see src/content/resume.ts).
  resume: "/resume",
  resumePdf: "/resume.pdf",
};

export const sections: Section[] = [
  { id: "work", title: "Selected work", label: "Work", shortLabel: "Work" },
  {
    id: "experience",
    title: "Experience",
    label: "Experience",
    shortLabel: "Experience",
  },
  {
    id: "projects",
    title: "Side projects",
    label: "Side projects",
    shortLabel: "Projects",
  },
  { id: "about", title: "About", label: "About", shortLabel: "About" },
];

export const projects: Project[] = [
  {
    name: "Soar",
    client: "FATE Foundation",
    summary:
      "As the sole frontend engineer, built user and admin dashboards and a form builder that rivals Google Forms, helping over 8,000 entrepreneurs start, grow and scale.",
    stack: ["React", "TypeScript"],
    images: [
      {
        src: soar1,
        alt: "Soar landing page with the headline “Welcome to SOAR” and an Explore button",
      },
      {
        src: soar2,
        alt: "Soar applicant dashboard listing open and completed programme applications with progress rings",
      },
      {
        src: soar3,
        alt: "Soar admin dashboard with charts of open, in-progress and completed applications",
      },
      {
        src: soar4,
        alt: "Soar applicant dashboard at a narrow, mobile width",
      },
    ],
    url: "https://soar.fatefoundation.org/",
  },
  {
    name: "Flourish OMS",
    client: "Flourish Africa",
    // TODO: replace "[What it does + impact.]" with a one-line description and a real figure.
    summary:
      "Lead frontend developer; built the order management system from the ground up. [What it does + impact.]",
    stack: ["Next.js", "Tailwind", "Node.js"],
    images: [
      {
        src: flourishOms1,
        alt: "Flourish OMS dashboard with an applications board and suggested programmes",
      },
      {
        src: flourishOms2,
        alt: "Flourish OMS finalist list with a side panel for adding and removing table columns",
      },
      {
        src: flourishOms3,
        alt: "Flourish OMS list of eligible grant programmes with progress bars and application counts",
      },
      {
        src: flourishOms4,
        alt: "Flourish OMS applications table with a filter panel open",
      },
    ],
    // Carried over from the previous site's projects page.
    url: "https://oms.flourishafrica.com/",
  },
];

export const roles: Role[] = [
  // TODO: Flourish Africa is not on the résumé — add its years.
  {
    period: "2023-2026",
    title: "Senior Software Engineer",
    company: "Mentalyc",
    summary:
      "Worked across the company's product, platform and growth stack, from recording and subscriptions in the core app to end-to-end CI/CD on GitHub, the content platform and SEO tooling.",
  },

  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    company: "Africa Prudential Registrars",
    summary:
      "Led development of Easycoop, a cooperative solution used by over 2 million users, and the frontend of products that gave over 500,000 policemen access to housing loans.",
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    company: "Estate Intel",
    summary:
      "Led frontend development of Projects and other products ahead of a first $250k funding round, and lifted SEO ranking by 135% by moving the app to server-side rendering.",
  },
  {
    period: "2019 — 2021",
    title: "Software Engineer",
    company: "Xerde Limited",
    summary:
      "Worked on the frontend of Tudo, a social fundraising and smart savings platform, including an embedded image editor and an internal tool for managing customers.",
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "Pair Quest",
    description: "Realtime multiplayer memory game, up to 4 players",
    url: "https://pairquest.vercel.app/",
    preview: pairQuestPreview,
  },
  {
    name: "Bankie",
    description: "PWA for Nigerian bank USSD codes",
    url: "https://bankie.netlify.app/",
    preview: bankiePreview,
  },
  {
    name: "You Don’t Know",
    description: "Quiz game with meme verdicts",
    url: "https://youdontknow.netlify.app/",
    preview: youDontKnowPreview,
  },
  {
    name: "Simon",
    description: "Simon clone — best score under 10",
    url: null,
    // TODO: Simon GIF for the hover preview.
    preview: null,
  },
];

export const about = {
  lead: "I care as much about a clean API and a sane schema as I do about an interface that feels fast. These days it’s mostly Go, TypeScript and React.",
  body: "Off the keyboard: FIFA, the gym, and a reading list that keeps growing.",
};
