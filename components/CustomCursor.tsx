"use client";

import { useEffect, useRef } from "react";

// Custom cursor with two layers:
// - an inner dot that tracks the pointer EXACTLY (written on every mousemove,
//   no smoothing) so it always feels precise;
// - an outer ring that follows with a light spring/lerp for a fluid feel and
//   grows + turns accent over interactive elements.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on devices with a fine pointer (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-active");

    // Target = real pointer position; ring position eases toward it.
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let visible = false;
    let raf = 0;

    const setRingState = (hovering: boolean, pressed: boolean) => {
      ring.classList.toggle("cursor-ring--hover", hovering);
      ring.classList.toggle("cursor-ring--press", pressed);
      dot.classList.toggle("cursor-dot--hover", hovering);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      // Inner dot: exact, immediate — this is what makes it feel precise.
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        // Snap the ring to the pointer on first appearance to avoid a fly-in.
        rx = tx;
        ry = ty;
      }

      const interactive = (e.target as HTMLElement).closest(
        'a, button, input, textarea, select, label, [role="button"], .cursor-grow'
      );
      setRingState(Boolean(interactive), false);
    };

    const onDown = () => setRingState(ring.classList.contains("cursor-ring--hover"), true);
    const onUp = () =>
      setRingState(ring.classList.contains("cursor-ring--hover"), false);

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const render = () => {
      // Critically-damped-ish easing for the ring. Higher factor = snappier.
      rx += (tx - rx) * 0.35;
      ry += (ty - ry) * 0.35;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  // Always render the layers so the refs exist on first render; they stay
  // invisible (opacity:0) until the effect activates them on a fine pointer.
  return (
    <>
      {/* Precise inner dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      {/* Smoothed outer ring */}
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
