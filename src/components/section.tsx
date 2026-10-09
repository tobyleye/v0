"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { Section as SectionMeta } from "@/content/site";

type Props = {
  section: SectionMeta;
  className?: string;
  children: ReactNode;
};

/** A page section with its uppercase label and a short fade-up on first view. */
export function Section({ section, className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Anything already on screen stays put; only sections below the fold animate in.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.dataset.reveal = "shown";
    };
  }, []);

  return (
    <section
      ref={ref}
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={`flex flex-col ${className}`}
    >
      <h2
        id={`${section.id}-heading`}
        className="text-xs font-semibold tracking-[0.1em] text-muted uppercase lg:text-[13px]"
      >
        {section.title}
      </h2>
      {children}
    </section>
  );
}
