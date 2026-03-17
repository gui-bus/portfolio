"use client";

import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  items: string[];
  direction?: "left" | "right";
}

export function InfiniteMarqueeClient({ items, direction = "left" }: InfiniteMarqueeProps) {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className="text-[10px] font-mono font-bold text-muted-foreground dark:text-zinc-700 border border-border dark:border-zinc-900 px-6 py-2 uppercase tracking-[0.3em] hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-600/30 dark:hover:border-blue-500/30 transition-all cursor-crosshair bg-muted/10 dark:bg-transparent"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
