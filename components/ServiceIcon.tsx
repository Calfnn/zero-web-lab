// Custom inline SVG icons for the three packages, indexed 0–2.
const icons = [
  // 0 — Landing Page (single document/page)
  <>
    <path d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </>,
  // 1 — Sito Vetrina (browser window, multi-page)
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <circle cx="6.5" cy="6.5" r="0.6" />
    <circle cx="8.8" cy="6.5" r="0.6" />
  </>,
  // 2 — Sito Avanzato / Custom (code brackets)
  <>
    <path d="M9 8l-5 4 5 4" />
    <path d="M15 8l5 4-5 4" />
    <path d="M13 6l-2 12" />
  </>,
];

export default function ServiceIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden
    >
      {icons[index] ?? icons[0]}
    </svg>
  );
}
