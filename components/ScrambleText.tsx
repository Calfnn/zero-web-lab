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
  /** Length of the scramble in animation frames. */
  duration?: number;
  /** Re-scramble every N ms while in view. 0 disables the periodic replay. */
  repeat?: number;
};

// Text that "decodes" with a scramble effect. Triggers:
//   - the first time it scrolls into view,
//   - on hover,
//   - and periodically every `repeat` ms while visible (desynced per instance).
export default function ScrambleText({
  text,
  className = "",
  style,
  as: Tag = "span",
  duration = 26,
  repeat = 6000,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  const scramble = () => {
    cancelAnimationFrame(rafRef.current);
    let frame = 0;
    const run = () => {
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          const revealAt = (i / text.length) * duration;
          return frame >= revealAt
            ? ch
            : CHARS[(Math.random() * CHARS.length) | 0];
        })
        .join("");
      setDisplay(out);
      frame++;
      if (frame <= duration) rafRef.current = requestAnimationFrame(run);
      else setDisplay(text);
    };
    run();
  };

  // First time it enters the viewport.
  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      scramble();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // Periodic replay while in view (random offset so instances don't sync up).
  useEffect(() => {
    if (!repeat || !inView) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(scramble, repeat);
    }, repeat + Math.random() * 2000);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, repeat]);

  // Cleanup any pending frame on unmount.
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={style}
      aria-label={text}
      onMouseEnter={scramble}
    >
      {display}
    </Tag>
  );
}
