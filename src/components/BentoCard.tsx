import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  delay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-[#070b14]/90 border border-neutral-200 dark:border-blue-300/10 p-4 md:p-6 hover:border-neutral-300 dark:hover:border-blue-300/25 transition-colors duration-300 shadow-sm dark:shadow-[0_0_0_1px_rgba(59,130,246,0.02),0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur ${colSpan} ${rowSpan} ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default BentoCard;
