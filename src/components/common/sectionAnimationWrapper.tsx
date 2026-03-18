"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface SectionAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionAnimationWrapper({ children, className }: SectionAnimationWrapperProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInAnimationWrapper({ children, className }: SectionAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
