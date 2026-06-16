"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** HTML tag to render (h1, h2, span, …). */
  as?: ElementType;
  /** Length of the scramble in milliseconds (independent of screen refresh rate). */
  duration?: number;
};

// Text that "decodes" with a scramble effect. Triggers once, the first time it
// scrolls into view (or on page load if already visible). No hover/tap re-trigger.
export default function ScrambleText({
  text,
  className = "",
  style,
  as: Tag = "span",
  duration = 750,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  const scramble = () => {
    cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const run = (now: number) => {
      // Progress is driven by elapsed time, so the scramble lasts `duration`
      // ms on every screen regardless of refresh rate (60/75/120 Hz).
      const elapsed = now - start;
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          const revealAt = (i / text.length) * duration;
          return elapsed >= revealAt
            ? ch
            : CHARS[(Math.random() * CHARS.length) | 0];
        })
        .join("");
      setDisplay(out);
      if (elapsed <= duration) rafRef.current = requestAnimationFrame(run);
      else setDisplay(text);
    };
    rafRef.current = requestAnimationFrame(run);
  };

  // First time it enters the viewport.
  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      scramble();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // Cleanup any pending frame on unmount.
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={style}
      aria-label={text}
    >
      {display}
    </Tag>
  );
}
