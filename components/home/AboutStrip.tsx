"use client";

import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ScrambleText from "@/components/ScrambleText";

const stats = [
  { to: 50, suffix: "+", label: "Progetti" },
  { to: 4, suffix: "+", label: "Anni" },
  { to: 100, suffix: "%", label: "Soddisfazione" },
];

export default function AboutStrip() {
  return (
    <section className="border-y border-accent/20 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="section-label">/ Chi siamo</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-ink md:text-5xl">
            <ScrambleText as="span" text="Siamo Zero Web Lab." />
            <span className="block text-muted">
              Trasformiamo idee in esperienze digitali memorabili.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i + 1}>
              <div className="text-center lg:text-left">
                <p className="font-display text-5xl text-accent md:text-6xl">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
