import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="text-[13px] leading-[1.6] text-muted lg:text-sm">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
