"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Robust page transition.
//
// We deliberately DON'T use <AnimatePresence mode="wait">: that waits for the
// previous page's exit animation to finish before mounting the next one, and
// if that exit is interrupted (or a stale dev bundle races) it can deadlock and
// leave the new page blank until a full reload.
//
// Instead we key a motion.div by pathname: every navigation remounts it and the
// new page is mounted IMMEDIATELY, then fades in. On the very first render we
// skip the enter animation (initial={false}) so the page is visible instantly
// even if hydration is slow.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={isFirst.current ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
