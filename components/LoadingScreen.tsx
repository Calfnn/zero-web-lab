"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TEXT = "ZERO WEB LAB";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Only show the loading screen once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("zw-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("zw-loaded", "1");
    }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <h1 className="flex flex-wrap justify-center font-display text-5xl uppercase tracking-ultra text-ink sm:text-7xl">
            {TEXT.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={char === " " ? "w-4" : ""}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
