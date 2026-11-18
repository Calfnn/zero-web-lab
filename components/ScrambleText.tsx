"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** HTML tag to render (h1, h2, span, …). */
  as?: Tag;
  /** Kept for API compatibility; no longer used. */
  duration?: number;
  /** Extra content after the text (e.g. a colored dot), animated together. */
  suffix?: ReactNode;
};

// Light title entrance: the same fade + rise as the service cards, just
// softer (shorter travel). Plays once when the title scrolls into view.
// Only opacity/transform are animated, so it stays cheap on mobile.
export default function ScrambleText({
  text,
  className = "",
  style,
  as = "span",
  suffix,
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      // Inline spans ignore transforms, so make them inline-block.
      className={`${as === "span" ? "inline-block " : ""}${className}`}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.23, 0.86, 0.39, 0.96] }}
    >
      {text}
      {suffix}
    </MotionTag>
  );
}
