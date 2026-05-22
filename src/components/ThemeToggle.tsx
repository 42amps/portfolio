'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 h-9 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-300/60 bg-neutral-200 text-neutral-800 transition-colors hover:bg-neutral-300 dark:border-blue-300/10 dark:bg-white/5 dark:text-blue-100 dark:hover:bg-blue-500/10 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: resolvedTheme === "light" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {resolvedTheme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
