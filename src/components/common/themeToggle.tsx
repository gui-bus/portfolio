"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useThemeTransition } from "@/lib/hooks/useThemeTransition";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeTransition();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex p-1 rounded-full bg-muted/30 border border-border/50 w-21 h-10.5" />
    );
  }

  const isLight = theme === "light";

  return (
    <div className="flex p-1 rounded-full bg-muted/30 border border-border/50 backdrop-blur-sm relative overflow-hidden group">
      <div
        className={cn(
          "absolute h-8.5 w-8.5 rounded-full bg-background shadow-sm transition-all duration-300 ease-in-out z-0",
          isLight ? "translate-x-0" : "translate-x-10.5",
        )}
      />

      <button
        onClick={() => (isLight ? null : toggleTheme())}
        disabled={isLight}
        className={cn(
          "relative z-10 p-2 rounded-full transition-colors duration-300 cursor-pointer",
          isLight
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground",
        )}
        title="Light Mode"
      >
        <SunIcon weight={isLight ? "fill" : "bold"} size={18} />
      </button>

      <button
        onClick={() => (!isLight ? null : toggleTheme())}
        disabled={!isLight}
        className={cn(
          "relative z-10 p-2 rounded-full transition-colors duration-300 cursor-pointer",
          !isLight
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground",
        )}
        title="Dark Mode"
      >
        <MoonIcon weight={!isLight ? "fill" : "bold"} size={18} />
      </button>
    </div>
  );
}
