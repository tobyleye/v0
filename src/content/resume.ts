// Content for the /resume page and the PDF printed from it (public/resume.pdf).

/** A run of text, or a linked run of text, inside a sentence. */
export type Segment = string | { text: string; href: string };

export type ResumeRole = {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: Segment[][];
};

export type ResumeProject = {
  name: string;
  href: string;
  description: string;
};

export const resume = {
  name: "Tobi Oyeleye",
  email: "hello@tobibuilds.dev",
  links: [
    { label: "tobibuilds.dev", href: "https://tobibuilds.dev" },
    { label: "github.com/tobyleye", href: "https://github.com/tobyleye" },
    {
      label: "linkedin.com/in/oluwatobi-oyeleye-1646357a/",
      href: "https://www.linkedin.com/in/oluwatobi-oyeleye-1646357a/",
    },
  ],
  skills: [
    {
      label: "Languages and frameworks:",
      value:
        "Typescript, Javascript, Nodejs, React, Next, Expressjs, SQL, Typescript, Socket.IO",
    },
    {
      label: "Tools and technologies:",
      value:
        "Rest API, GraphQL, Mongodb, Postgresql, Docker, Git, AWS(Amplify)",
    },
  ],
  roles: [
    {
      company: "Mentalyc",
      location: "Lagos, Nigeria (Remote)",
      role: "Senior Software Engineer",
      period: "2023 - 2026",
      highlights: [
        [
          "Built the recording and subscription features of Mentalyc’s core app.",
        ],
        ["Set up end-to-end CI/CD on GitHub for the platform."],
        [
          "Worked on the growth side across the content platform and SEO tooling.",
        ],
      ],
    },
    {
      company: "SOAR, Fate Foundation",
      location: "Lagos, Nigeria",
      role: "Lead frontend developer",
      period: "March 2022",
      highlights: [
        [
          "Single handedly led & built the frontend of ",
          { text: "SOAR", href: "https://soar.fatefoundation.org/" },
          ", a platform currently being used by over 8,000 entrepreneurs to start, grow and scale their business.",
        ],
        [
          "Saved cost by building an in-platform form builder used by admins to create application forms.",
        ],
        ["Collaborated with a team of 2 backend engineers and 2 designers."],
      ],
    },
    {
      company: "Africa Prudential Registrars",
      location: "Lagos, Nigeria (Remote)",
      role: "Frontend developer",
      period: "Sept 2021 - July 2022",
      highlights: [
        [
          "Led the development and maintenance of ",
          { text: "Easycoop", href: "https://myeasycoop.com/" },
          ". A cooperative solution used by over 2 million users.",
        ],
        [
          "Built and led the frontend effort on products that gave over 500,000 policemen access to housing loans.",
        ],
        [
          "Rebuilt & Improved existing notification system keeping users up to date at all times ensuring a smooth user experience.",
        ],
      ],
    },
    {
      company: "Estate Intel",
      location: "Lagos, Nigeria (Hybrid)",
      role: "Frontend developer",
      period: "July 2021 - March 2022",
      highlights: [
        [
          "Led the frontend development of ",
          { text: "Projects", href: "https://estateintel.com/app/projects" },
          " and several other products making way for our ",
          {
            text: "first round of $250k funding",
            href: "https://estateintel.com/estate-intel-joins-metaprop-accelerator-2021-cohort",
          },
          ".",
        ],
        [
          "Increased SEO ranking significantly by 135% after migrating web app from client-side to server side. Technologies used where Vuejs & NuxtJs.",
        ],
        [
          "Connected forms to salesforce which was helped to manage & prioritize clients demo requests.",
        ],
      ],
    },
    {
      company: "Xerde Limited",
      location: "Lagos, Nigeria (Hybrid)",
      role: "Software engineer",
      period: "July 2019 - Feb 2021",
      highlights: [
        [
          "I worked in a team of 3 frontend developers and was involved in the front-end development of Tudo, Africa's first and largest social fundraising & smart savings platform.",
        ],
        [
          "Collaborated with team members to develop an image editor which was embedded into Tudo eliminating the need to hire professional talent and saving costs.",
        ],
        [
          "Designed and developed an internal tool which was used to manage customers & resources.",
        ],
      ],
    },
  ] satisfies ResumeRole[],
  projects: [
    {
      name: "A Product Feedback App",
      href: "https://sleepy-colden-dee83d.netlify.app/",
      description:
        "a fullstack app for providing/collecting feedback on a feature from your colleagues within an organization. Built with built with expressjs, reactjs and graphql",
    },
    {
      name: "Bankie",
      href: "https://bankie.netlify.app/",
      description:
        "A progressive web application that generates ussd codes for banks in Nigeria",
    },
    {
      name: "You don’t Know",
      href: "https://youdontknow.netlify.app/",
      description:
        "A simple yet fun trivia application built with vuejs powered by Open Trivia API",
    },
  ] satisfies ResumeProject[],
  education: {
    degree: "B.Tech. Statistical Science",
    school: "Federal University of Technology, Akure, Nigeria.",
    period: "2012 - 2017",
  },
};
