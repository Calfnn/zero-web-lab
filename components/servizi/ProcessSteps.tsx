"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading label="/ Metodo" title="Il nostro processo" />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl text-accent">{step.num}</span>
                {i < processSteps.length - 1 && (
                  <span className="hidden flex-1 border-t border-dashed border-ink/20 lg:block" />
                )}
              </div>
              <h3 className="mt-4 font-sans font-bold text-2xl tracking-tight text-gradient">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
