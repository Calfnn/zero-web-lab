"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

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

// Module-level flag: false until the app has mounted once in the browser.
// (Never set on the server, since effects don't run there.)
let hasMounted = false;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const animateIn = hasMounted;

  useEffect(() => {
    hasMounted = true;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
