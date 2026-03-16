import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";
import { createAnimation } from "@/lib/animations/themeAnimations";

export function useThemeTransition() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (typeof window === "undefined") return;

    const animation = createAnimation();
    let styleElement = document.getElementById(
      "theme-transition-styles",
    ) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "theme-transition-styles";
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = animation.css;

    const currentTheme = resolvedTheme || theme;
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(async () => {
      setTheme(nextTheme);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }, [theme, resolvedTheme, setTheme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "t") {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  return { theme, toggleTheme };
}
