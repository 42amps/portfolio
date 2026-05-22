'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO_CONTENT } from "@/constants/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  const roles = PORTFOLIO_CONTENT.personal.roles?.length
    ? PORTFOLIO_CONTENT.personal.roles
    : [PORTFOLIO_CONTENT.personal.surname];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative"
    >
      <div>
        <h1 className="text-3xl md:text-5xl -mt-10 font-bold text-neutral-950 dark:text-white tracking-tight mb-2">
          {PORTFOLIO_CONTENT.personal.name}{" "}
          <span className="inline-block min-w-[12ch] align-baseline">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={roles[roleIndex]}
                initial={false}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-300 dark:via-sky-300 dark:to-cyan-200"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>
      <div className="flex items-center md:mb-4 gap-3">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-green-600 dark:text-green-500 whitespace-nowrap">
          {PORTFOLIO_CONTENT.personal.availability}
        </span>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
}
