import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import Link from "next/link";
import { links, profile } from "@/content/site";
import { resume, type Segment } from "@/content/resume";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${profile.name}, ${profile.role.toLowerCase()}.`,
  alternates: { canonical: "/resume" },
};

// Links keep the boxed look of the original résumé page.
const linkClass = "border border-[aqua]";

function Text({ segments }: { segments: Segment[] }) {
  return segments.map((segment, i) =>
    typeof segment === "string" ? (
      segment
    ) : (
      <a key={i} href={segment.href} className={linkClass}>
        {segment.text}
      </a>
    ),
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-1 border-b-[0.5px] border-black pb-px text-[15px] font-semibold">
      {children}
    </h2>
  );
}

const list = "ml-4 list-[circle]";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-paper text-black">
      <nav className="sticky top-0 z-10 border-b border-line bg-paper font-sans print:hidden">
        <div className="mx-auto flex max-w-[840px] items-center justify-between gap-4 px-5 py-2">
          <Link
            href="/"
            className="flex min-h-12 items-center text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
          >
            <span aria-hidden="true">←&nbsp;</span>
            {new URL(profile.url).host}
          </Link>
          <a
            href={links.resumePdf}
            download="Oluwatobi-Oyeleye-Resume.pdf"
            className="flex min-h-12 items-center justify-center rounded-lg bg-accent px-[22px] text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
      </nav>

      <main
        className={`${ptSerif.className} mx-auto grid max-w-[840px] gap-5 p-5 text-[13px] leading-normal`}
      >
        <header>
          <div className="flex flex-wrap items-center justify-between gap-x-4">
            <h1 className="mb-[5px] text-[2em] font-bold">{resume.name}</h1>
            <div>
              Email:{" "}
              <a href={`mailto:${resume.email}`} className={linkClass}>
                {resume.email}
              </a>
            </div>
          </div>
          <div>
            {resume.links.map((link, i) => (
              <div key={link.href} className={i === 0 ? "mb-0.5" : undefined}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </header>

        <section>
          <Heading>Skills Summary</Heading>
          <ul className={list}>
            {resume.skills.map((skill) => (
              <li key={skill.label}>
                <span className="font-semibold">{skill.label}</span>{" "}
                {skill.value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Heading>Work Experience</Heading>
          <div className="grid gap-3.5">
            {resume.roles.map((role) => (
              <div key={role.company}>
                <div className="mb-0.5 flex flex-wrap items-center justify-between gap-x-4">
                  <p className="font-semibold">{role.company}</p>
                  <p>{role.location}</p>
                </div>
                <div className="mb-1 flex flex-wrap items-center justify-between gap-x-4 italic">
                  <p className="font-light">{role.role}</p>
                  <p>{role.period}</p>
                </div>
                <ul className={`${list} grid gap-[5px]`}>
                  {role.highlights.map((highlight, i) => (
                    <li key={i}>
                      <Text segments={highlight} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Heading>Projects</Heading>
          <ul className={`${list} grid gap-1`}>
            {resume.projects.map((project) => (
              <li key={project.name}>
                <a href={project.href} className={`font-semibold ${linkClass}`}>
                  {project.name}
                </a>{" "}
                - {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Heading>Education</Heading>
          <ul className={list}>
            <li>
              <div className="flex flex-wrap items-center gap-x-1">
                <span>
                  <span className="font-semibold">
                    {resume.education.degree}
                  </span>
                  , {resume.education.school}
                </span>
                <span className="ml-auto font-semibold">
                  {resume.education.period}
                </span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
