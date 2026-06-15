"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Global inertia / smooth scrolling (Lenis). Drives the window scroll, so
// framer-motion's useScroll/whileInView keep working. Disabled for users who
// prefer reduced motion. `syncTouch` extends the smoothing to touch devices.
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
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
      lenisRef.current = null;
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // On every route change, jump back to the top of the new page. Lenis keeps its
  // own scroll state, so without this it would keep the previous page's offset.
  useEffect(() => {
    const reset = () => {
      const lenis = lenisRef.current;
      // `force` bypasses a stopped/locked Lenis (e.g. after the mobile menu).
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    };
    reset();
    // Run again after the new page has painted: on mobile the layout/height
    // often isn't ready on the first pass, so the first jump gets ignored.
    const raf = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
