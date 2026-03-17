"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass, PaintBrush, Code, RocketLaunch, Icon } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { fadeInUp } from "@/lib/animations";

const iconsMap: Record<string, Icon> = {
  MagnifyingGlass,
  PaintBrush,
  Code,
  RocketLaunch,
};

interface WorkflowCardClientProps {
  step: {
    id: string;
    title: string;
    iconName: string;
    desc: string;
  };
  cardLabel: string;
}

export function WorkflowCardClient({ step, cardLabel }: WorkflowCardClientProps) {
  const IconComponent = iconsMap[step.iconName] || Code;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const line = cardRef.current.querySelector(".progress-line");
    
    const tl = gsap.timeline({ paused: true });
    tl.to(line, { width: "100%", duration: 0.8, ease: "power3.inOut" });

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    cardRef.current.addEventListener("mouseenter", handleMouseEnter);
    cardRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
        cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      className="group relative bg-background dark:bg-[#050505] p-10 flex flex-col justify-between min-h-[350px] transition-all hover:bg-muted/30 dark:hover:bg-zinc-900/20"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="text-[10px] font-mono text-muted-foreground/50 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-500/50 transition-colors font-bold">
          {cardLabel}{step.id}
        </span>
        <motion.div
          whileHover={{ rotate: -10, scale: 1.2 }}
          className="text-muted-foreground dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors"
        >
          <IconComponent size={28} weight="thin" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-foreground transition-colors">
          {step.title}
        </h3>
        <p className="text-muted-foreground dark:text-zinc-500 text-sm font-light leading-relaxed group-hover:text-foreground/80 dark:group-hover:text-zinc-400 transition-colors">
          {step.desc}
        </p>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-12 bg-border dark:bg-zinc-900 group-hover:bg-blue-600/30 dark:group-hover:bg-blue-500/30 transition-colors hidden lg:block" />

      <div className="progress-line absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500" />
    </motion.div>
  );
}
