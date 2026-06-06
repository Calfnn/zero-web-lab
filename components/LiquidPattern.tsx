// Organic "liquid camo" pattern rendered as thin accent-blue contour lines.
// Built entirely with an SVG filter so it's resolution-independent and static:
//   feTurbulence  -> smooth fractal noise (the organic blobs)
//   feColorMatrix -> threshold one channel into solid blobs (in alpha)
//   feMorphology  -> shrink a copy of the blobs
//   feComposite   -> blob minus shrunk = a thin outline of each blob
//   feFlood + in  -> paint those outlines accent-blue
export default function LiquidPattern({
  className = "",
  opacity = 0.28,
  seed = 7,
  baseFrequency = 0.013,
  fadeBottom = false,
}: {
  className?: string;
  opacity?: number;
  seed?: number;
  baseFrequency?: number;
  /** Fade the pattern out towards the bottom so it blends into the page
      instead of ending in a hard edge. */
  fadeBottom?: boolean;
}) {
  const fadeMask = "linear-gradient(to bottom, #000 0%, #000 40%, transparent 92%)";
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        opacity,
        ...(fadeBottom
          ? { WebkitMaskImage: fadeMask, maskImage: fadeMask }
          : {}),
      }}
    >
      <defs>
        <filter
          id="liquid-camo"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={0.5}
            seed={seed}
            stitchTiles="stitch"
            result="noise"
          />
          {/* Threshold the red channel into hard blobs: alpha = 16*R - 7 */}
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    16 0 0 0 -7"
            result="blob"
          />
          {/* A slightly eroded copy of the blobs (bigger radius = thicker line) */}
          <feMorphology
            in="blob"
            operator="erode"
            radius="3"
            result="eroded"
          />
          {/* Edge = blob with the eroded part cut out -> thin outline */}
          <feComposite in="blob" in2="eroded" operator="out" result="edge" />
          {/* Colour the outline accent-blue */}
          <feFlood floodColor="#2C6BFF" result="green" />
          <feComposite in="green" in2="edge" operator="in" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#liquid-camo)" />
    </svg>
  );
}
