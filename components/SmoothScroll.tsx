"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Global inertia / smooth scrolling (Lenis). Drives the window scroll, so
// framer-motion's useScroll/whileInView keep working. Disabled for users who
// prefer reduced motion. `syncTouch` extends the smoothing to touch devices.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
    });

    // Expose so other components (e.g. the mobile menu) can stop/start scrolling.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
