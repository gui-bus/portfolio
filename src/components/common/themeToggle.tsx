"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useThemeTransition } from "@/lib/hooks/useThemeTransition";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const { resolvedTheme, toggleTheme } = useThemeTransition();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) {
    return <div className="w-17.5 h-10 bg-muted/30 dark:bg-white/3 border border-border dark:border-white/5 animate-pulse" />;
  }

  const isLight = resolvedTheme === "light";

  return (
    <div className="flex bg-muted/30 dark:bg-white/3 border border-border dark:border-white/5 p-1 relative overflow-hidden group h-10 backdrop-blur-md">
      <motion.div
        className={cn(
          "absolute h-8 w-8 z-0",
          isLight 
            ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
            : "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        )}
        initial={false}
        animate={{
          x: isLight ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      />

      <button
        onClick={() => (isLight ? null : toggleTheme())}
        className={cn(
          "relative z-10 p-2 transition-colors duration-300 flex items-center justify-center w-8 group/sun cursor-pointer",
          isLight ? "text-white" : "text-muted-foreground/50 dark:text-zinc-600 hover:text-foreground dark:hover:text-zinc-400"
        )}
        title={t("light")}
      >
        <SunIcon 
          weight={isLight ? "fill" : "bold"} 
          size={16} 
          className={cn(
            "transition-transform duration-500",
          )}
        />
      </button>

      <button
        onClick={() => (!isLight ? null : toggleTheme())}
        className={cn(
          "relative z-10 p-2 transition-colors duration-300 flex items-center justify-center w-8 group/moon cursor-pointer",
          !isLight ? "text-white" : "text-muted-foreground/50 dark:text-zinc-600 hover:text-foreground dark:hover:text-zinc-400"
        )}
        title={t("dark")}
      >
        <MoonIcon 
          weight={!isLight ? "fill" : "bold"} 
          size={16} 
          className={cn(
            "transition-transform duration-500",
          )}
        />
      </button>
    </div>
  );
}
