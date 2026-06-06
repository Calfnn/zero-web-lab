"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DotGrid from "@/components/DotGrid";

const TITLE_WORDS = ["PROGETTIAMO", "IL TUO MONDO", "DIGITALE"];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title: each line rises from below with a slight 3D tilt + stagger.
      // The line wrappers keep overflow:hidden during the reveal so the words
      // are clipped as they slide up; once the entrance is done we switch them
      // to overflow:visible so the mouse parallax can move the text freely
      // without clipping the edges ("inside a box").
      gsap.from(".hero-word", {
        yPercent: 120,
        rotateX: -55,
        opacity: 0,
        transformOrigin: "50% 100%",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.13,
        delay: 0.2,
        onComplete: () => gsap.set(".hero-line", { overflow: "visible" }),
      });

      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Parallax on mousemove for the pattern, blob and title lines.
  useEffect(() => {
    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      if (patternRef.current)
        patternRef.current.style.transform = `translate(${tx * 30}px, ${ty * 30}px) scale(1.08)`;
      if (blobRef.current)
        blobRef.current.style.transform = `translate(${tx * -80}px, ${ty * -80}px)`;
      if (titleRef.current) {
        const t = titleRef.current;
        // 3D tilt (rotateX/rotateY) + 2D translate, driven by mouse position.
        const rx = (-ty * 9).toFixed(2); // up -> tilts towards the bottom
        const ry = (tx * 9).toFixed(2); // sideways tilt
        t.style.transform = `translate3d(${tx * 14}px, ${ty * 14}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;

        // Per-line depth so the lines parallax slightly within the tilted plane.
        const lines = t.querySelectorAll<HTMLElement>(".hero-word");
        lines.forEach((line, i) => {
          const depth = (i + 1) * 5;
          line.style.transform = `translate(${tx * depth}px, ${ty * depth}px)`;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Dot-grid background */}
      <div
        ref={patternRef}
        className="absolute inset-[-30px] -z-10 transition-transform duration-300 ease-out"
        aria-hidden
      >
        <DotGrid className="h-full w-full" opacity={0.55} />
      </div>

      {/* Green glow blob bottom-right */}
      <div
        ref={blobRef}
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[600px] w-[600px] rounded-full bg-accent opacity-20 blur-[160px] transition-transform duration-500 ease-out"
        aria-hidden
      />

      <div className="container-page">
        {/* Perspective wrapper enables the 3D tilt of the title below */}
        <div style={{ perspective: "1000px" }}>
          {/* Massive title: per-line stagger entrance + mouse-driven 3D tilt */}
          <h1
            ref={titleRef}
            className="hero-title relative font-display uppercase leading-[0.82] tracking-wide text-ink transition-transform duration-200 ease-out [transform-style:preserve-3d]"
            style={{ fontSize: "clamp(64px, 11vw, 152px)" }}
          >
            {TITLE_WORDS.map((word, i) => (
              <span key={i} className="hero-line block overflow-hidden pb-[0.06em]">
                <span className="hero-word inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <p className="hero-fade mt-8 max-w-xl text-lg text-muted md:text-xl">
          Siti web, brand identity e esperienze digitali che convertono.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <Link href="/progetti" className="btn-primary">
            Scopri i nostri lavori →
          </Link>
          <Link href="/contatti" className="btn-ghost">
            Contattaci
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-ultra text-ink/40">
        Scroll ↓
      </div>
    </section>
  );
}
