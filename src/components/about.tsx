import { about } from "@/content/site";

export function About() {
  return (
    <div className="mt-[18px] flex flex-col gap-3.5 lg:mt-6 lg:gap-4">
      <p className="font-display text-[21px] leading-normal lg:text-2xl">
        {about.lead}
      </p>
      <p className="text-[15px] leading-[1.65] text-ink-soft lg:text-base">
        {about.body}
      </p>
    </div>
  );
}
