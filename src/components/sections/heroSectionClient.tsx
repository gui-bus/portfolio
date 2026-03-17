"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface HeroSectionClientProps {
  children: React.ReactNode;
}

export function HeroSectionClient({ children }: HeroSectionClientProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
    >
      {children}
    </motion.div>
  );
}

export function HeroTitleAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="mb-12">
      {children}
    </motion.div>
  );
}

export function HeroDescriptionAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
    >
      {children}
    </motion.div>
  );
}
