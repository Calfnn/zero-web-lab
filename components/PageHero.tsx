"use client";

import { motion } from "framer-motion";
import GeometricBackground from "@/components/GeometricBackground";
import ScrambleText from "@/components/ScrambleText";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
};

// Shared hero used at the top of inner pages with an animated title.
export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <GeometricBackground variant="section" />
      <div
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent opacity-20 blur-[150px]"
        aria-hidden
      />
      <div className="container-page relative z-10">
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label"
          >
            {label}
          </motion.p>
        )}
        <ScrambleText
          as="h1"
          text={title}
          className="font-sans font-bold leading-[1.02] text-gradient"
          style={{ fontSize: "clamp(48px, 9vw, 120px)", letterSpacing: "-0.02em" }}
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
