// Custom inline SVG icons for the six services, indexed 0–5.
const icons = [
  // 0 — Web Design & Sviluppo (code brackets)
  <>
    <path d="M9 8l-5 4 5 4" />
    <path d="M15 8l5 4-5 4" />
    <path d="M13 6l-2 12" />
  </>,
  // 1 — UI/UX Design (layout)
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 9v11" />
  </>,
  // 2 — Brand Identity (sparkle)
  <>
    <path d="M12 3l2.2 6.3L20 12l-5.8 2.7L12 21l-2.2-6.3L4 12l5.8-2.7z" />
  </>,
  // 3 — E-Commerce (cart)
  <>
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M2 3h3l2.4 12.4a1 1 0 001 .8h9.2a1 1 0 001-.8L21 7H6" />
  </>,
  // 4 — SEO & Performance (gauge)
  <>
    <path d="M12 14l4-4" />
    <path d="M3.5 18a9 9 0 1117 0" />
    <circle cx="12" cy="14" r="1.2" />
  </>,
  // 5 — Manutenzione & Supporto (wrench)
  <>
    <path d="M14.7 6.3a4 4 0 00-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 005.2-5.4l-2.7 2.7-2.3-.6-.6-2.3z" />
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
