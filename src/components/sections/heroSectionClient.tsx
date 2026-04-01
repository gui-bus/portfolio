"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";

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
    <motion.div
      variants={{
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}

export function HeroDescriptionAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.33, 1, 0.68, 1],
          },
        },
      }}
      className="flex flex-col xl:flex-row gap-12 lg:gap-24 items-start"
    >
      {children}
    </motion.div>
  );
}

export function HeroImageAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        animate: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.5,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="relative w-full xl:w-auto mt-8 xl:mt-0"
    >
      {children}
    </motion.div>
  );
}
