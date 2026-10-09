import type { Project } from "@/content/site";
import { ProjectCarousel } from "./project-carousel";

export function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 text-xs font-medium text-accent lg:gap-2 lg:text-[13px]">
      {stack.map((tool) => (
        <li
          key={tool}
          className="rounded-full bg-accent-tint px-2.5 py-[5px] lg:px-3 lg:py-1.5"
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col gap-3.5 rounded-xl border border-line bg-surface p-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,28,26,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:-mx-6 lg:gap-4 lg:p-6">
      <ProjectCarousel project={project} />
      <div className="flex flex-col gap-0.5 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
        <h3 className="font-display text-[26px] font-medium lg:text-3xl">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0 after:rounded-xl"
            >
              {project.name} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-[13px] text-muted lg:text-sm">{project.client}</p>
      </div>
      <p className="text-[15px] leading-[1.65] text-ink-soft lg:text-base">
        {project.summary}
      </p>
      <StackTags stack={project.stack} />
    </article>
  );
}
