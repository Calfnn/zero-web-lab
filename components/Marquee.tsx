const ITEMS = [
  "WEB DESIGN",
  "BRANDING",
  "SEO",
  "UI/UX",
  "E-COMMERCE",
  "SVILUPPO WEB",
];

export default function Marquee() {
  // Duplicate the list so the loop is seamless (animation shifts by -50%)
  const sequence = [...ITEMS, ...ITEMS];

  return (
    <div className="relative flex overflow-hidden border-y border-ink/10 bg-surface py-6">
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 font-display text-4xl uppercase tracking-wide md:text-5xl ${
                i % 2 === 0 ? "text-ink" : "text-accent"
              }`}
            >
              {item}
            </span>
            <span className="font-display text-4xl text-accent md:text-5xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
