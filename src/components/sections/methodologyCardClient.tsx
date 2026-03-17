"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Wind, PencilCircle, Code, Icon } from "@phosphor-icons/react";
import { fadeInUp } from "@/lib/animations";

const iconsMap: Record<string, Icon> = {
  Wind,
  PencilCircle,
  Code,
};

interface MethodologyCardClientProps {
  step: {
    id: string;
    title: string;
    desc: string;
    iconName: string;
    tag: string;
  };
}

export function MethodologyCardClient({ step }: MethodologyCardClientProps) {
  const IconComponent = iconsMap[step.iconName] || Code;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const line = card.querySelector(".animated-line");
    
    const tl = gsap.timeline({ paused: true });
    tl.to(line, { width: "100%", duration: 0.5, ease: "power2.out" });

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      className="group relative bg-background p-10 md:p-14 overflow-hidden transition-colors hover:bg-muted/50 dark:hover:bg-zinc-900/20"
    >
      <div className="absolute inset-0 bg-blue-500/[0.03] dark:bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <span className="text-4xl font-black text-muted/20 dark:text-zinc-900 group-hover:text-muted/40 dark:group-hover:text-zinc-800 transition-colors">
            {step.id}
          </span>
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent
              size={32}
              weight="thin"
              className="text-blue-600 dark:text-blue-500"
            />
          </motion.div>
        </div>

        <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-2 block font-bold">
          [{step.tag}]
        </span>
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-foreground">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-light">
          {step.desc}
        </p>
      </div>

      <div className="animated-line absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500" />
    </motion.div>
  );
}
