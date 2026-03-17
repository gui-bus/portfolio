"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CornersOut,
  Icon,
  Code,
  PaintBrush,
  Lightning,
  RocketLaunch,
  Stack,
  ShieldCheck,
  Cpu,
} from "@phosphor-icons/react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconsMap: Record<string, Icon> = {
  Code,
  PaintBrush,
  Lightning,
  RocketLaunch,
  Stack,
  ShieldCheck,
  Cpu,
};

interface ServiceModuleClientProps {
  cap: {
    title: string;
    iconName: string;
    tag: string;
    desc: string;
  };
  index: number;
  isLarge?: boolean;
  ctaText?: string;
}

function ModuleCorner() {
  return (
    <div className="absolute top-0 left-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
      <CornersOut size={12} weight="bold" className="text-blue-500" />
    </div>
  );
}

export function ServiceModuleClient({
  cap,
  index,
  isLarge = false,
  ctaText,
}: ServiceModuleClientProps) {
  const IconComponent = iconsMap[cap.iconName] || Code;

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative bg-muted/5 dark:bg-white/[0.02] border border-border dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/50",
        isLarge ? "lg:col-span-2 lg:row-span-2 p-8 md:p-12" : "p-6 md:p-8",
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity text-blue-600 dark:text-blue-500">
        <IconComponent size={isLarge ? 200 : 120} weight="fill" />
      </div>

      <ModuleCorner />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-blue-500/50 group-hover:h-4 transition-all duration-500" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div
            className={cn(
              "flex items-center justify-center rounded-none border border-border dark:border-white/10 bg-background transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
              isLarge
                ? "w-16 h-16 md:w-20 md:h-20"
                : "w-12 h-12 md:w-14 md:h-14",
            )}
          >
            <IconComponent
              size={isLarge ? 40 : 28}
              weight="thin"
              className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform"
            />
          </div>

          <span className="text-[10px] font-mono text-muted-foreground/40 font-bold group-hover:text-blue-500 transition-colors uppercase tracking-widest">
            {isLarge ? "CORE_SYS" : `MODULE_ID_0${index}`}
          </span>
        </div>

        <div className="mt-auto">
          <span
            className={cn(
              "font-mono uppercase tracking-[0.3em] text-blue-600 dark:text-blue-500 block mb-2 font-black",
              isLarge ? "text-[10px] md:text-xs" : "text-[8px] md:text-[9px]",
            )}
          >
            {cap.tag}
          </span>
          <h3
            className={cn(
              "font-black uppercase tracking-tighter text-foreground mb-4 leading-none",
              isLarge
                ? "text-3xl md:text-5xl lg:text-6xl"
                : "text-xl md:text-2xl",
            )}
          >
            {cap.title}
          </h3>
          <p
            className={cn(
              "text-muted-foreground font-light leading-relaxed line-clamp-3",
              isLarge ? "text-lg max-w-md" : "text-xs md:text-sm",
            )}
          >
            {cap.desc}
          </p>

          {isLarge && ctaText && (
            <motion.a
              href="#contact"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-3 mt-8 text-[10px] font-mono font-black uppercase tracking-widest text-blue-600 dark:text-blue-500 border-b border-blue-600/20 pb-1 hover:border-blue-600 transition-all"
            >
              {ctaText} <ArrowUpRight size={14} weight="bold" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/[0.03] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
    </motion.div>
  );
}
