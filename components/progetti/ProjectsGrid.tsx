"use client";

import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Placeholder from "@/components/Placeholder";
import { projects, type Project } from "@/lib/data";

const filters = ["Tutti", "Sito Vetrina", "Sito su Misura", "Branding"] as const;
type Filter = (typeof filters)[number];

export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("Tutti");

  const visible =
    active === "Tutti"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="pb-24 md:pb-32">
      <div className="container-page">
        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`relative rounded-full border px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "border-accent text-ink"
                    : "border-ink/20 text-ink/60 hover:border-ink/50 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </div>

        {/* Masonry-ish grid with layout animation — sfocata: progetti reali in arrivo */}
        <div className="relative">
          <LayoutGroup>
            <motion.div
              layout
              className="grid auto-rows-[260px] grid-cols-1 gap-6 select-none blur-[7px] pointer-events-none sm:grid-cols-2 lg:grid-cols-3"
              aria-hidden
            >
              <AnimatePresence mode="popLayout">
                {visible.map((project, i) => (
                  <ProjectTile key={project.title} project={project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

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

function ProjectTile({ project, index }: { project: Project; index: number }) {
  // Make every third tile span two rows for a bento/masonry feel
  const tall = index % 3 === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 1.1, delay: index * 0.06, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
        tall ? "sm:row-span-2" : ""
      }`}
    >
      <Placeholder
        label={project.title.split(" ")[0]}
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-wide text-accent">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h3 className="mt-3 font-sans font-bold text-3xl tracking-tight text-gradient">
          {project.title}
        </h3>

        {/* Hover overlay description + link */}
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
          <p className="mt-2 text-sm text-muted">{project.description}</p>
          <span className="mt-3 inline-flex text-sm font-semibold uppercase tracking-wide text-accent">
            Apri →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
