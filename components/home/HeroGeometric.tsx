"use client";

import { motion } from "framer-motion";
import GeometricBackground from "@/components/GeometricBackground";

export default function HeroGeometric({
  badge = "Zero Web Lab",
  title1 = "Progettiamo il tuo",
  title2 = "Mondo Digitale",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <GeometricBackground variant="hero" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            {/* Inline SVG circle (no lucide-react dependency) */}
            <svg className="h-2 w-2" viewBox="0 0 8 8" aria-hidden>
              <circle cx="4" cy="4" r="4" className="fill-rose-500/80" />
            </svg>
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#ffffff_0%,#e2e2e6_30%,#818cf8_68%,#fb7185_100%)]">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#ffffff_0%,#e2e2e6_30%,#818cf8_68%,#fb7185_100%)]">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Siti web, Landing ed esperienze digitali che convertono.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
