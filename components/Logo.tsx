import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Zero Web Lab — Home"
      className={`group inline-flex items-center gap-3 text-ink transition-opacity hover:opacity-80 ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="font-display text-2xl uppercase tracking-ultra">
        ZERO<span className="text-accent">.</span>WEB LAB
      </span>
    </Link>
  );
}
