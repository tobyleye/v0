"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { sideProjects, type SideProject } from "@/content/site";

const row =
  "group flex flex-col gap-1 border-t border-line py-4 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6 lg:py-[18px]";

const LANDSCAPE_WIDTH = 320;
const PORTRAIT_WIDTH = 220;
const CURSOR_GAP = 20;
const EDGE_GAP = 12;

/** Previews keep their recording's shape: phone recordings stay portrait. */
function previewSize(preview: StaticImageData) {
  const width =
    preview.height > preview.width ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH;
  return {
    width,
    height: Math.round((width * preview.height) / preview.width),
  };
}

export function SideProjectList() {
  const previewRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef({ width: LANDSCAPE_WIDTH, height: 200 });
  // The last hovered project stays mounted so the preview can fade out.
  const [current, setCurrent] = useState<SideProject | null>(null);
  const [visible, setVisible] = useState(false);
  // Previews are only fetched once the mouse first reaches the list.
  const [armed, setArmed] = useState(false);

  // Follows the cursor without re-rendering, flipping to the other side of it
  // when the preview would run off the right or bottom edge.
  const follow = (event: PointerEvent) => {
    const preview = previewRef.current;
    if (!preview || event.pointerType !== "mouse") return;
    const { width, height } = sizeRef.current;
    let x = event.clientX + CURSOR_GAP;
    let y = event.clientY + CURSOR_GAP;
    if (x + width > window.innerWidth - EDGE_GAP) {
      x = event.clientX - CURSOR_GAP - width;
    }
    if (y + height > window.innerHeight - EDGE_GAP) {
      y = event.clientY - CURSOR_GAP - height;
    }
    preview.style.transform = `translate3d(${Math.max(EDGE_GAP, x)}px, ${Math.max(EDGE_GAP, y)}px, 0)`;
  };

  return (
    <>
      <ul
        className="mt-3.5 border-b border-line lg:mt-6"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setArmed(true);
        }}
        onPointerMove={follow}
      >
        {sideProjects.map((project) => {
          const content = (
            <>
              <span className="font-display text-[21px] transition-colors duration-200 group-hover:text-accent lg:text-[22px]">
                {project.name}
              </span>
              <span className="text-sm text-ink-soft lg:text-right lg:text-[15px]">
                {project.description}
              </span>
            </>
          );
          return (
            <li
              key={project.name}
              onPointerEnter={(event) => {
                if (event.pointerType !== "mouse" || !project.preview) return;
                sizeRef.current = previewSize(project.preview);
                follow(event);
                setCurrent(project);
                setVisible(true);
              }}
              onPointerLeave={() => setVisible(false)}
            >
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={row}
                >
                  {content}
                </a>
              ) : (
                <div className={row}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Decorative: the row text already names and describes each project. */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-20"
        style={current?.preview ? previewSize(current.preview) : undefined}
      >
        <div
          className={`relative size-full overflow-hidden rounded-lg border border-line bg-placeholder shadow-[0_12px_32px_rgba(26,28,26,0.16)] transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none ${
            visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {armed &&
            sideProjects.map(
              (project) =>
                project.preview && (
                  <Image
                    key={project.name}
                    src={project.preview}
                    alt=""
                    fill
                    sizes={`${LANDSCAPE_WIDTH}px`}
                    loading="eager"
                    unoptimized
                    className={`object-cover object-top ${
                      project.name === current?.name ? "" : "invisible"
                    }`}
                  />
                ),
            )}
        </div>
      </div>
    </>
  );
}
