"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import { projects } from "@/lib/data";

const featured = projects.slice(0, 3);

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  return (
    <Link
      href="/progetti"
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 ${
        large ? "min-h-[320px] lg:min-h-full" : "min-h-[240px]"
      }`}
    >
      <Placeholder
        label={project.title.split(" ")[0]}
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="mb-3 inline-flex w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-wide text-accent">
          {project.category}
        </span>
        <h3
          className={`font-sans font-bold tracking-tight text-gradient ${
            large ? "text-4xl md:text-5xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>
        {/* Slide-up description */}
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-muted opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </Link>
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
              <ProjectCard project={featured[0]} large />
            </div>
            <ProjectCard project={featured[1]} />
            <ProjectCard project={featured[2]} />
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
