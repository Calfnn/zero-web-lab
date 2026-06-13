import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Zero Web Lab — Home"
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      {/* New brand mark (lettermark "ZERO" with gradient "o") */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* Horizontal brand lockup (~5:1) — sized by height, width auto */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-wide.svg"
        alt="Zero Web Lab"
        className="h-8 w-auto shrink-0 md:h-9"
      />
    </Link>
  );
}
