"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export function ScrollArrowClient() {
  return (
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-16 h-16 rounded-full border border-border dark:border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all group"
    >
      <ArrowDown size={24} className="group-hover:text-white transition-colors" />
    </motion.a>
  );
}
