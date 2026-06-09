// Zero Web Lab brand mark: a rounded square split by a diagonal gap into two
// solid triangles (top-left + bottom-right), evoking a "Z" / "0".
// Solid fill, no outlines — uses currentColor so it adapts to light/dark surfaces.
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      {/* Top-left triangle — rounded top-left corner, hypotenuse on x+y=57 */}
      <path d="M6 20 A14 14 0 0 1 20 6 L51 6 L6 51 Z" />
      {/* Bottom-right triangle — rounded bottom-right corner, hypotenuse on x+y=71 */}
      <path d="M58 13 L58 44 A14 14 0 0 1 44 58 L13 58 Z" />
    </svg>
  );
}
