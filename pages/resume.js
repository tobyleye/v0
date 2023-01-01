import Head from "next/head";
const workExperiences = [
  {
    company: "SOAR, Fate Foundation",
    location: "Lagos, Nigeria",
    role: "Lead frontend developer",
    period: "March 2022",
    highlights: [
      <p>
        Single handedly led the frontend development of{" "}
        <a href="https://soar.fatefoundation.org/">SOAR</a>, a fully
        customizable, responsive application intended to bring entrepreneurs a
        step closer to starting, growing and scaling their business'
      </p>,
      "Created an in-platform robust form builder which enables admins set-up and configure application forms for programs. With this in place we were able to boycott third-party solutions like google forms hence saving cost",
      "Integrated payment with paystack allowing the  foundation to receive payments for their paid programmes",
    ],
  },

  {
    company: "Africa Prudential Registrars",
    location: "Lagos, Nigeria (Remote)",
    role: "Frontend developer",
    period: "Sept 2021 - July 2022",

    highlights: [
      <p>
        led the development and maintenance of{" "}
        <a href="https://myeasycoop.com/">Easycoop</a>. A cooperative solution
        used by over 2 million users.
      </p>,
      "Rebuilt & Improved existing notification system keeping users up to date at all times.",
      "led the frontend development of a housing loan feature which gave policemen access to housing loans",
      "Migrate legacy react codes",
    ],
  },

  {
    company: "Estate Intel",
    location: "Lagos, Nigeria (Hybrid)",
    role: "Frontend developer",
    period: "July 2021 - March 2022",

    highlights: [
      // 'improved discoverability of company x services.'
      <p>
        Led the frontend development of{" "}
        <a href="https://estateintel.com/app/projects">Projects</a> and several
        other products making way for our{" "}
        <a href="https://estateintel.com/estate-intel-joins-metaprop-accelerator-2021-cohort">
          first round of $250k funding
        </a>
        .
      </p>,
      `Increased SEO ranking significantly by 135% after migrating web app from
        client-side to server side. Technologies used where Vuejs & NuxtJs`,
      `Built internal apis that interfaced with Salesforce and was used to
        collect potential clients requests`,
    ],
  },

  {
    company: "Azeelo Digital International",
    location: "London, UK (Remote)",
    role: "Frontend developer",
    period: "March 2021 - July 2021",

    highlights: [
      `Built and shipped the first mvp of a cloud-based sizing tool`,
      `I handled demo meetings with the client.`,
      `Led a team of two frontend engineers and oversaw deployment of new features`,
    ],
  },

  {
    company: "Xerde Limited",
    location: "Lagos, Nigeria (Hybrid)",
    role: "Software engineer",
    period: "Jan 2020 - Feb 2021",
    highlights: [
      `I worked in a team of 3 frontend developers and was involved in the front-end development of Tudo, Africa's first and largest social fundraising & smart savings platform.`,
      `Created a first of its kind, an in-platform image editor which was embedded into Tudo and was created for NGOs to create and share interactive images for campaigns eliminating the need to hire professional talent and saving costs.`,
      `Designed and developed an internal tool which was used to manage customers & resources and respond to abnormalities in the app`,
    ],
  },
];

const projects = [
  {
    name: "A Product Feedback App",
    link: "https://sleepy-colden-dee83d.netlify.app/",
    desc: `a fullstack app for providing/collecting feedback on a feature from your colleagues within an organization. Built with built with expressjs, reactjs and graphql`,
  },

  {
    name: "Bankie",
    link: `https://bankie.netlify.app/`,
    desc: `A progressive web application that generates ussd codes for banks in Nigeria`,
  },
  {
    name: "You don’t Know",
    link: `https://youdontknow.netlify.app/`,
    desc: `A simple yet fun trivia application built with vuejs powered by Open Trivia API`,
  },
];

export default function ResumePage() {
  return (
    <div className="resume">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:wght@200;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="layout">
        <header className="header">
          <div className="name-row">
            <h1 className="name">Tobi Oyeleye</h1>
            <div>
              Email:{" "}
              <a href="mailto:krisella74@gmail.com">Krisella74@gmail.com</a>
            </div>
          </div>
          <div className="links">
            <div>
              <a href="https://github.com/tobyleye">github.com/tobyleye</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/oluwatobi-oyeleye-1646357a/">
                linkedin.com/in/oluwatobi-oyeleye-1646357a/
              </a>
            </div>
          </div>
        </header>
        <section id="skills-summary">
          <h2>Skills Summary</h2>
          <ul>
            <li>
              <span className="bold">Languages and frameworks:</span>{" "}
              Typescript, Javascript, Nodejs, React, Next, Expressjs, SQL,
              Typescript, Socket.IO
            </li>
            <li>
              <span className="bold">Tools and technologies:</span> Rest API,
              GraphQL, Mongodb, Postgresql, Docker, Git
            </li>
          </ul>
        </section>

        <section id="work-experience">
          <h2>Work Experience</h2>
          <div className="work-list">
            {workExperiences.map((e) => {
              return (
                <div className="work">
                  <div className="company row">
                    <p className="bold">{e.company}</p>
                    <p>{e.location}</p>
                  </div>
                  <div className="role row">
                    <p className="role-name italics">{e.role}</p>
                    <p className="italics">{e.period}</p>
                  </div>
                  <ul className="highlights">
                    {e.highlights.map((h) => (
                      <li>{h}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((p, index) => (
              <li className="project" key={`project-${index}`}>
                <a className="bold" href={p.link}>
                  {p.name}
                </a>{" "}
                - {p.desc}
              </li>
            ))}
          </ul>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li className="education-item">
              <div className="education-row">
                <span className="bold">B.Tech. Statistical Science</span>,
                Federal University of Technology, Akure, Nigeria.{" "}
                <span className="bold period">2012 - 2017</span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        ul {
          margin-left: 16px;
          list-style: circle;
        }
        .resume {
          font-size: 13px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-family: "PT Serif", serif;
        }

        .resume {
          width: 840px;
          margin: auto;
          padding: 20px;
        }

        .layout {
          display: grid;
          gap: 20px;
        }

        .header .name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header .name {
          font-size: 35;
          margin-bottom: 5px;
        }

        .header .links > div:first-child {
          margin-bottom: 2px;
        }

        section {
          /* border: 1px solid brown; */
        }

        section h2 {
          border-bottom: 0.5px solid black;
          padding-bottom: 1px;
          font-size: 15px;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .bold {
          font-weight: 600;
        }

        .italics {
          font-style: italic;
        }

        .work-list {
          display: grid;
          gap: 14px;
        }
        .work .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .work .company {
          margin-bottom: 2px;
        }

        .work .role {
          margin-bottom: 4px;
        }
        .work .role-name {
          font-weight: 300;
          font-style: italic;
        }

        .work .highlights {
          display: grid;
          grid-gap: 5px;
        }

        .project-list {
          display: grid;
          gap: 4px;
        }

        .education-row {
          display: flex;
          align-items: center;
        }
        .education-row .period {
          margin-left: auto;
        }
        .space {
          display: inline-block;
          content: " ";
        }
        .space::after {
          content: "a";
          opacity: 0;
        }
      `}</style>

      <style global jsx>{`
        .resume a {
          border: 1px solid aqua;
        }
      `}</style>
    </div>
  );
}
