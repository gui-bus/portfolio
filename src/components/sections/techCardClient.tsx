"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Icon,
  Globe,
  Code,
  PaintBrush,
  BoundingBox,
  Lightning,
  Database,
  Cloud,
  DeviceMobile,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { fadeInUp } from "@/lib/animations";

const iconsMap: Record<string, Icon> = {
  Globe,
  Code,
  PaintBrush,
  BoundingBox,
  Lightning,
  Database,
  Cloud,
  DeviceMobile,
};

interface TechCardClientProps {
  tech: {
    name: string;
    iconName: string;
    description: string;
  };
  index: number;
}

export function TechCardClient({ tech, index }: TechCardClientProps) {
  const IconComponent = iconsMap[tech.iconName] || Code;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const floatingAnimation = gsap.to(cardRef.current, {
      y: -10,
      duration: 2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1,
    });

    return () => {
      floatingAnimation.kill();
    };
  }, [index]);

  return (
    <motion.div variants={fadeInUp} className="group relative">
      <div
        ref={cardRef}
        className="relative p-10 h-full flex flex-col items-start justify-between min-h-[220px] bg-background dark:bg-zinc-900/10 border border-border dark:border-zinc-800/50 hover:border-blue-600 dark:hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
      >
        <span className="text-[10px] font-mono text-muted-foreground/40 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-500/50 transition-colors font-bold">
          0{index + 1}
        </span>

        <div className="relative z-10 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-500"
          >
            <IconComponent size={32} weight="thin" />
          </motion.div>
          <div>
            <h4 className="font-bold text-foreground text-xl tracking-tight uppercase italic">
              {tech.name}
            </h4>
            <p className="text-[9px] text-muted-foreground/60 dark:text-zinc-600 mt-1 uppercase tracking-[0.2em] font-mono group-hover:text-blue-600 dark:group-hover:text-zinc-400 transition-colors">
              {tech.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-blue-600/[0.03] dark:from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
