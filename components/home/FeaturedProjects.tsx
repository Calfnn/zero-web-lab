"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";

// Skeleton card: no project names, just shapes (real projects coming soon).
function SkeletonCard({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 ${
        large ? "min-h-[320px] lg:min-h-full" : "min-h-[240px]"
      }`}
    >
      <Placeholder className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative flex h-full flex-col justify-end gap-3 p-6">
        <div className="h-6 w-24 rounded-full border border-accent/40 bg-accent/10" />
        <div className={`rounded-full bg-ink/25 ${large ? "h-10 w-2/3" : "h-7 w-1/2"}`} />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="border-t border-accent/20 py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label="/ Portfolio" title="Ultimi lavori" />
          <Link
            href="/progetti"
            className="text-sm font-semibold uppercase tracking-wide text-accent transition-transform hover:translate-x-1"
          >
            Vedi tutti i progetti →
          </Link>
        </div>

        {/* Asymmetric bento grid — sfocata: progetti reali in arrivo */}
        <div className="relative mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 select-none blur-[7px] pointer-events-none lg:grid-cols-3 lg:grid-rows-2"
            aria-hidden
          >
            <div className="lg:col-span-2 lg:row-span-2">
              <SkeletonCard large />
            </div>
            <SkeletonCard />
            <SkeletonCard />
          </motion.div>

          {/* Etichetta in chiaro sopra alla griglia sfocata */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-accent/30 bg-background/60 px-5 py-2 text-sm font-medium tracking-wide text-ink backdrop-blur-sm">
              Presto Disponibili
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
