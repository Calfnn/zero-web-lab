"use client";

import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

type Props = {
  label?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
};

// Section heading with a clip-path "reveal from bottom" animation.
export default function SectionHeading({
  label,
  title,
  className = "",
  align = "left",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`section-label ${align === "center" ? "justify-center" : ""}`}
        >
          {label}
        </motion.span>
      )}
      <ScrambleText
        as="h2"
        text={title}
        className="display-heading text-5xl text-ink sm:text-6xl md:text-7xl"
      />
    </div>
  );
}
