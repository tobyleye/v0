import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[728px] flex-col items-start justify-center gap-4 px-6">
      <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase lg:text-[13px]">
        404
      </p>
      <h1 className="font-display text-[44px] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[60px]">
        Page not found
      </h1>
      <p className="text-base leading-[1.65] text-ink-soft lg:text-[17px]">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-accent px-[22px] text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
      >
        Take me home
      </Link>
    </main>
  );
}
