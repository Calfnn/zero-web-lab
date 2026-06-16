"use client";

import { motion } from "framer-motion";
import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.15, duration: 1.3, ease: [0.23, 0.86, 0.39, 0.96] }}
      className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-surface p-8 transition-all duration-300 hover:border-accent hover:shadow-[0_0_50px_var(--accent-glow)]"
    >
      <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[110px] leading-none text-accent opacity-[0.06] transition-opacity duration-300 group-hover:opacity-15">
        {service.num}
      </span>

      <div className="relative">
        <div className="mb-6 flex w-fit rounded-xl border border-accent/30 bg-accent/10 p-3 text-accent">
          <ServiceIcon index={index} />
        </div>

        <h3 className="font-sans font-bold text-3xl tracking-tight text-gradient">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {/* Feature list — always visible: these features are the offer itself */}
        <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink/90">
              <span className="mt-0.5 shrink-0 text-accent">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
