// A dark noise-textured placeholder used in place of real project imagery.
export default function Placeholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-noise relative flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
      {label && (
        <span className="font-display text-6xl uppercase tracking-wide text-white/10">
          {label}
        </span>
      )}
    </div>
  );
}
