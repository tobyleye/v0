import { links, roles } from "@/content/site";

export function ExperienceList() {
  return (
    <>
      <ol className="mt-3.5 border-b border-line lg:mt-6">
        {roles.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="flex flex-col gap-1 border-t border-line py-[18px] lg:grid lg:grid-cols-[140px_1fr] lg:gap-6 lg:py-5"
          >
            <span className="text-[13px] text-muted lg:text-sm">
              {role.period}
            </span>
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <h3 className="text-[17px] font-semibold lg:text-lg">
                {role.title} · {role.company}
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-soft">
                {role.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <a
        href={links.resume}
        className="mt-3.5 flex min-h-12 items-center self-start text-[15px] font-semibold text-accent underline-offset-4 hover:underline lg:mt-3 lg:min-h-0"
      >
        View full résumé <span aria-hidden="true">&nbsp;→</span>
      </a>
    </>
  );
}
