"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const previews = [
  {
    num: "01",
    title: "Web Design",
    description: "Siti su misura, veloci e scalabili, pensati per emozionare e convertire.",
  },
  {
    num: "02",
    title: "Branding",
    description: "Identità visive coerenti che rendono il tuo brand riconoscibile ovunque.",
  },
  {
    num: "03",
    title: "E-Commerce",
    description: "Negozi online performanti con checkout ottimizzati che vendono davvero.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading label="/ Servizi" title="Cosa facciamo" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {previews.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
                  <h3 className="font-display text-3xl uppercase tracking-wide text-ink">
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
