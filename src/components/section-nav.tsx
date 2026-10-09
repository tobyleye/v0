"use client";

import { sections } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = sections.map((section) => section.id);

export function SectionNav() {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Sections"
      className="hidden flex-col gap-1 text-[13px] font-semibold tracking-[0.1em] uppercase lg:flex"
    >
      {sections.map((section) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            className={`group flex items-center gap-4 self-start py-2.5 transition-colors duration-200 ${
              isActive ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            <span
              aria-hidden="true"
              className={`transition-[width,background-color] duration-200 ${
                isActive
                  ? "h-[1.5px] w-16 bg-ink"
                  : "h-px w-8 bg-rule group-hover:w-16 group-hover:bg-ink"
              }`}
            />
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
