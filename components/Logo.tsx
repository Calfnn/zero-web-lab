import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Zero Web Lab — Home"
      className={`font-display text-2xl uppercase tracking-ultra text-ink transition-opacity hover:opacity-80 ${className}`}
    >
      ZERO<span className="text-accent">.</span>WEB LAB
    </Link>
  );
}
