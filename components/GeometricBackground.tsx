"use client";

import ElegantShape from "@/components/ElegantShape";

type Variant = "ambient" | "section" | "hero";

type Shape = {
  delay: number;
  width: number;
  height: number;
  rotate: number;
  gradient: string;
  className: string;
};

// Three intensities of the same floating-shapes theme:
//   hero    — the full, rich set used behind the homepage headline
//   section — a softer trio for individual sections / inner-page heroes
//   ambient — a faint, viewport-fixed set that sits behind the whole site
const PRESETS: Record<Variant, Shape[]> = {
  hero: [
    {
      delay: 0.3,
      width: 840,
      height: 200,
      rotate: 12,
      gradient: "from-indigo-500/[0.15]",
      className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
    },
    {
      delay: 0.5,
      width: 700,
      height: 170,
      rotate: -15,
      gradient: "from-rose-500/[0.15]",
      className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]",
    },
    {
      delay: 0.4,
      width: 440,
      height: 115,
      rotate: -8,
      gradient: "from-violet-500/[0.15]",
      className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]",
    },
    {
      delay: 0.6,
      width: 300,
      height: 90,
      rotate: 20,
      gradient: "from-amber-500/[0.15]",
      className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]",
    },
    {
      delay: 0.7,
      width: 230,
      height: 65,
      rotate: -25,
      gradient: "from-cyan-500/[0.15]",
      className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]",
    },
  ],
  section: [
    {
      delay: 0.2,
      width: 720,
      height: 175,
      rotate: -12,
      gradient: "from-indigo-500/[0.10]",
      className: "left-[-8%] top-[8%]",
    },
    {
      delay: 0.35,
      width: 540,
      height: 145,
      rotate: 15,
      gradient: "from-rose-500/[0.10]",
      className: "right-[-6%] bottom-[6%]",
    },
    {
      delay: 0.5,
      width: 320,
      height: 90,
      rotate: -20,
      gradient: "from-violet-500/[0.08]",
      className: "left-[35%] bottom-[-12%]",
    },
  ],
  ambient: [
    {
      delay: 0.2,
      width: 840,
      height: 185,
      rotate: -10,
      gradient: "from-indigo-500/[0.06]",
      className: "left-[-12%] top-[8%]",
    },
    {
      delay: 0.4,
      width: 700,
      height: 160,
      rotate: 14,
      gradient: "from-rose-500/[0.06]",
      className: "right-[-10%] top-[55%]",
    },
    {
      delay: 0.6,
      width: 460,
      height: 115,
      rotate: -18,
      gradient: "from-violet-500/[0.05]",
      className: "left-[20%] bottom-[4%]",
    },
  ],
};

// Reusable decorative backdrop. `ambient` is fixed to the viewport (sits behind
// the whole site); `section`/`hero` are absolute and fill their (relative) parent.
export default function GeometricBackground({
  variant = "section",
}: {
  variant?: Variant;
}) {
  const position = variant === "ambient" ? "fixed -z-10" : "absolute z-0";

  return (
    <div
      aria-hidden
      className={`${position} inset-0 overflow-hidden pointer-events-none`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      {PRESETS[variant].map((shape, i) => (
        <ElegantShape
          key={i}
          delay={shape.delay}
          width={shape.width}
          height={shape.height}
          rotate={shape.rotate}
          gradient={shape.gradient}
          className={shape.className}
        />
      ))}
    </div>
  );
}
