"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "@/content/site";

const arrowButton =
  "absolute top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/95 text-ink opacity-0 shadow-[0_2px_8px_rgba(26,28,26,0.12)] transition-opacity duration-200 group-hover:opacity-100 hover:text-accent focus-visible:opacity-100 [@media(hover:hover)]:flex";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={
          direction === "left"
            ? "M10 3.5 5.5 8l4.5 4.5"
            : "M6 3.5 10.5 8 6 12.5"
        }
      />
    </svg>
  );
}

/**
 * Cover slideshow for a project card. A native scroll-snap track, so it swipes
 * on touch; the arrows are for mouse and keyboard.
 */
export function ProjectCarousel({ project }: { project: Project }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { images } = project;

  if (images.length === 0) {
    return (
      <div className="flex h-[190px] items-center justify-center rounded-lg bg-placeholder text-[13px] text-muted lg:h-[280px] lg:text-sm">
        [{project.name} screenshot]
      </div>
    );
  }

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const wrapped = (next + images.length) % images.length;
    track.scrollTo({ left: wrapped * track.clientWidth });
  };

  return (
    // Sits above the card's stretched link so it can be swiped.
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${project.name} screenshots`}
      className="relative z-10 h-[190px] overflow-hidden rounded-lg bg-placeholder lg:h-[280px]"
    >
      <div
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          setIndex(Math.round(track.scrollLeft / track.clientWidth));
        }}
        className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, i) => (
          <div
            key={image.src.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
            className="relative h-full w-full shrink-0 snap-start"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, (min-width: 728px) 648px, 100vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => goTo(index - 1)}
            className={`${arrowButton} left-3`}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => goTo(index + 1)}
            className={`${arrowButton} right-3`}
          >
            <Chevron direction="right" />
          </button>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center"
          >
            <div className="flex gap-1.5 rounded-full bg-ink/55 px-2 py-1.5">
              {images.map((image, i) => (
                <span
                  key={image.src.src}
                  className={`size-1.5 rounded-full transition-colors duration-200 ${
                    i === index ? "bg-white" : "bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
