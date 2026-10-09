"use client";

import { useEffect, useRef } from "react";
import { sections } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = sections.map((section) => section.id);

export function MobileTabBar() {
  const active = useActiveSection(sectionIds);
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the active tab in view when the bar overflows horizontally.
  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !tab) return;
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    list.scrollTo({ left, behavior: "auto" });
  }, [active]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 border-y border-line bg-paper lg:hidden"
    >
      <div
        ref={listRef}
        className="relative mx-auto flex max-w-[728px] gap-[22px] overflow-x-auto px-6 text-xs font-semibold tracking-[0.1em] uppercase [scrollbar-width:none]"
      >
        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-h-12 items-center border-b-2 whitespace-nowrap transition-colors duration-200 ${
                isActive
                  ? "border-ink text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {section.shortLabel}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
