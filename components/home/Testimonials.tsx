"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="overflow-hidden border-t border-accent/20 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading label="/ Testimonianze" title="Dicono di noi" align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Giant decorative quote */}
          <span className="pointer-events-none absolute -left-4 -top-16 font-display text-[180px] leading-none text-accent opacity-20 md:-left-12">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              <p className="text-balance text-2xl font-light italic leading-relaxed text-ink md:text-3xl">
                {current.quote}
              </p>
              <footer className="mt-8">
                <p className="font-display text-2xl uppercase tracking-wide text-accent">
                  {current.name}
                </p>
                <p className="mt-1 text-sm text-muted">{current.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Testimonianza precedente"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Vai alla testimonianza ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-ink/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Testimonianza successiva"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
