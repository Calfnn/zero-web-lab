"use client";

import { motion } from "framer-motion";

// Card entrance that mirrors the hero pills (smooth glide + fade), but rising
// from the bottom. Reusable wrapper for cards inside Server Components.
export default function CardReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.3, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
    >
      {children}
    </motion.div>
  );
}
