// Fine dot-grid background: small accent-green dots on a transparent layer.
// Pure CSS (a tiled radial-gradient) so it's razor-sharp and cheap to paint.
export default function DotGrid({
  className = "",
  opacity = 0.5,
  gap = 60,
  dot = 2,
  color = "#89F336",
  fadeBottom = false,
}: {
  className?: string;
  opacity?: number;
  /** Distance between dots, in px. */
  gap?: number;
  /** Dot radius, in px. */
  dot?: number;
  color?: string;
  /** Fade the grid out towards the bottom so it blends into the page. */
  fadeBottom?: boolean;
}) {
  const fadeMask = "linear-gradient(to bottom, #000 0%, #000 40%, transparent 92%)";
  return (
    <div
      aria-hidden
      className={className}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        ...(fadeBottom
          ? { WebkitMaskImage: fadeMask, maskImage: fadeMask }
          : {}),
      }}
    />
  );
}
