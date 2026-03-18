"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  ArrowsOutSimpleIcon,
  Icon,
  PaperPlaneTiltIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

const iconsMap: Record<string, Icon> = {
  GithubLogo: GithubLogoIcon,
  LinkedinLogo: LinkedinLogoIcon,
  InstagramLogo: InstagramLogoIcon,
  EnvelopeSimple: EnvelopeSimpleIcon,
};

interface ContactModuleClientProps {
  title: string;
  value: string;
  iconName: string;
  href: string;
  className?: string;
}

export function ContactModuleClient({
  title,
  value,
  iconName,
  href,
  className,
}: ContactModuleClientProps) {
  const IconComponent = iconsMap[iconName] || EnvelopeSimpleIcon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className={cn(
        "group relative bg-muted/5 dark:bg-white/2 border border-border dark:border-white/5 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-yellow-500/50 flex flex-col justify-between min-h-40",
        className,
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity text-yellow-600 dark:text-yellow-500">
        <IconComponent size={80} weight="fill" />
      </div>

      <div className="flex justify-between items-start text-yellow-600 dark:text-yellow-500">
        <div className="w-10 h-10 border border-border dark:border-white/10 flex items-center justify-center bg-background group-hover:border-yellow-500/50 transition-colors">
          <IconComponent size={20} weight="thin" />
        </div>
      </div>

      <div>
        <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground block mb-1 font-bold">
          {title}
        </span>
        <p className="text-sm font-bold text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
          {value}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500">
        <ArrowsOutSimpleIcon size={10} />
      </div>
    </motion.a>
  );
}

export function ContactCTAClient({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-between px-8 py-6 bg-yellow-600 dark:bg-yellow-500 text-white font-black text-xs uppercase tracking-[0.4em] max-w-md w-full shadow-2xl hover:bg-foreground dark:hover:bg-white dark:hover:text-black transition-all duration-500 group cursor-pointer"
    >
      {label}
      <PaperPlaneTiltIcon
        size={20}
        weight="bold"
        className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
      />
    </motion.button>
  );
}
