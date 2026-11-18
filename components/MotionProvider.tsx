"use client";

import { MotionConfig } from "framer-motion";

// Makes every framer-motion animation respect the OS "reduce motion" setting
// (transforms are skipped, opacity fades are kept).
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
