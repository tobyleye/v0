import { links, profile } from "@/content/site";
import { SectionNav } from "./section-nav";

const outlineButton =
  "flex min-h-12 items-center justify-center rounded-lg border border-line-strong px-[18px] text-sm transition-colors duration-200 hover:border-accent hover:text-accent lg:text-[15px]";

export function Sidebar() {
  return (
    <header className="mx-auto flex w-full max-w-[728px] flex-col gap-[22px] px-6 pt-14 pb-7 lg:sticky lg:top-0 lg:col-span-5 lg:mx-0 lg:h-screen lg:max-w-none lg:gap-10 lg:overflow-y-auto lg:px-0 lg:py-[clamp(48px,13vh,120px)]">
      <div className="flex flex-col gap-3 lg:gap-4">
        <h1 className="font-display text-[44px] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[60px]">
          {profile.name}
        </h1>
        <p className="text-lg font-medium text-accent lg:text-xl">
          {profile.role}
        </p>
        <p className="text-base leading-[1.65] text-ink-soft lg:max-w-[420px] lg:text-[17px]">
          {profile.bio}
        </p>
      </div>

      <SectionNav />

      <p className="flex items-center gap-2.5 text-sm text-ink-soft lg:text-[15px]">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-accent"
        />
        {profile.availability}
      </p>

      <div className="flex flex-col gap-2.5 lg:flex-row lg:flex-wrap lg:gap-3">
        <a
          href={`mailto:${links.email}`}
          className="flex min-h-12 items-center justify-center rounded-lg bg-accent px-[22px] text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
        >
          Email<span className="lg:hidden">&nbsp;me</span>
        </a>
        <div className="grid grid-cols-3 gap-2 lg:contents">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={outlineButton}
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={outlineButton}
          >
            LinkedIn
          </a>
          <a href={links.resume} className={outlineButton}>
            Résumé
          </a>
        </div>
      </div>
    </header>
  );
}
