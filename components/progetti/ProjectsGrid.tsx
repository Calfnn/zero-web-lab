"use client";

import { motion } from "framer-motion";
import Placeholder from "@/components/Placeholder";

// Number of skeleton tiles shown until real projects are available.
const TILES = 6;

export default function ProjectsGrid() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-page">
        {/* Masonry-ish skeleton grid — sfocata: progetti reali in arrivo */}
        <div className="relative">
          <div
            className="grid auto-rows-[260px] grid-cols-1 gap-6 select-none blur-[7px] pointer-events-none sm:grid-cols-2 lg:grid-cols-3"
            aria-hidden
          >
            {Array.from({ length: TILES }, (_, i) => (
              <SkeletonTile key={i} index={i} />
            ))}
          </div>

          {/* Etichetta in chiaro sopra alla griglia sfocata */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-32">
            <span className="rounded-full border border-accent/30 bg-background/60 px-6 py-3 text-base font-medium tracking-wide text-ink backdrop-blur-sm">
              Presto Disponibili
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkeletonTile({ index }: { index: number }) {
  // Make every third tile span two rows for a bento/masonry feel
  const tall = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: index * 0.06, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 ${
        tall ? "sm:row-span-2" : ""
      }`}
    >
      <Placeholder className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="relative flex h-full flex-col justify-end gap-3 p-6">
        <div className="h-6 w-24 rounded-full border border-accent/40 bg-accent/10" />
        <div className="h-8 w-1/2 rounded-full bg-ink/25" />
      </div>
    </motion.div>
  );
}
