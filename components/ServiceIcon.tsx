// Custom inline SVG icons for the four services, indexed 0–3.
const icons = [
  // 0 — Siti Vetrina & Landing Page (browser window)
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <circle cx="6.5" cy="6.5" r="0.6" />
    <circle cx="8.8" cy="6.5" r="0.6" />
  </>,
  // 1 — Siti Web su Misura (code brackets)
  <>
    <path d="M9 8l-5 4 5 4" />
    <path d="M15 8l5 4-5 4" />
    <path d="M13 6l-2 12" />
  </>,
  // 2 — Pagina Google (map pin)
  <>
    <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </>,
  // 3 — Manutenzione & Supporto (wrench)
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
