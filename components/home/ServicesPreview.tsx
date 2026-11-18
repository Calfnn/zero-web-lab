"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services as previews } from "@/lib/data";

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading label="/ Servizi" title="Cosa facciamo" />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {previews.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 1.3, ease: [0.23, 0.86, 0.39, 0.96] }}
            >
              <Link
                href="/servizi"
                className="group relative block h-full overflow-hidden rounded-2xl border border-ink/10 bg-surface p-8 transition-all duration-300 hover:border-accent hover:shadow-[0_0_50px_var(--accent-glow)]"
              >
                {/* Big background number */}
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[120px] leading-none text-accent opacity-[0.08] transition-opacity duration-300 group-hover:opacity-20">
                  {item.num}
                </span>

                <div className="relative">
                  <h3 className="font-sans font-bold text-3xl tracking-tight text-gradient">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex text-2xl text-accent transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
