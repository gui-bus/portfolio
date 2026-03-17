"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  CornersOutIcon,
  Icon,
  CodeIcon,
  PaintBrushIcon,
  LightningIcon,
  RocketLaunchIcon,
  StackIcon,
  ShieldCheckIcon,
  CpuIcon,
} from "@phosphor-icons/react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconsMap: Record<string, Icon> = {
  Code: CodeIcon,
  PaintBrush: PaintBrushIcon,
  Lightning: LightningIcon,
  RocketLaunch: RocketLaunchIcon,
  Stack: StackIcon,
  ShieldCheck: ShieldCheckIcon,
  Cpu: CpuIcon,
};

interface ServiceModuleClientProps {
  cap: {
    title: string;
    iconName: string;
    tag: string;
    desc: string;
  };
  isLarge?: boolean;
  ctaText?: string;
}

function ModuleCorner() {
  return (
    <div className="absolute top-0 left-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
      <CornersOutIcon size={12} weight="bold" className="text-yellow-500" />
    </div>
  );
}

export function ServiceModuleClient({
  cap,
  isLarge = false,
  ctaText,
}: ServiceModuleClientProps) {
  const IconComponent = iconsMap[cap.iconName] || CodeIcon;

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative bg-muted/5 dark:bg-white2 border border-border dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-yellow-500/50",
        isLarge ? "lg:col-span-2 lg:row-span-2 p-8 md:p-12" : "p-6 md:p-8",
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity text-yellow-600 dark:text-yellow-500">
        <IconComponent size={isLarge ? 200 : 120} weight="fill" />
      </div>

      <ModuleCorner />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div
            className={cn(
              "flex items-center justify-center rounded-none border border-border dark:border-white/10 bg-background transition-all duration-500 group-hover:border-yellow-500/50",
              isLarge
                ? "w-16 h-16 md:w-20 md:h-20"
                : "w-12 h-12 md:w-14 md:h-14",
            )}
          >
            <IconComponent
              size={isLarge ? 40 : 28}
              weight="thin"
              className="text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform"
            />
          </div>
        </div>

        <div className="mt-auto">
          <span
            className={cn(
              "font-mono uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-500 block mb-2 font-black",
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
              className="inline-flex items-center gap-3 mt-8 text-[10px] font-mono font-black uppercase tracking-widest text-yellow-600 dark:text-yellow-500 border-b border-yellow-600/20 pb-1 hover:border-yellow-600 transition-all"
            >
              {ctaText} <ArrowUpRightIcon size={14} weight="bold" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-yellow-500/[0.03] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
    </motion.div>
  );
}
