import type { CSSProperties, ElementType } from "react";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** HTML tag to render (h1, h2, span, …). */
  as?: ElementType;
  /** Kept for API compatibility; no longer used. */
  duration?: number;
};

// Scramble animation disabled (testing mobile scroll performance):
// renders the title as plain static text.
export default function ScrambleText({
  text,
  className = "",
  style,
  as: Tag = "span",
}: Props) {
  return (
    <Tag className={className} style={style}>
      {text}
    </Tag>
  );
}
