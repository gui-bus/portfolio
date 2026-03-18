"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckIcon, CaretDownIcon } from "@phosphor-icons/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";

const flagCodes: Record<string, string> = {
  en: "US",
  pt: "BR",
  es: "ES",
  de: "DE",
  fr: "FR",
};

export function LanguageSwitcher() {
  const t = useTranslations("Locale");
  const currentLocale = useLocale();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
    router.refresh();
  };

  if (!mounted) {
    return (
      <div className="h-9 w-20 bg-muted dark:bg-zinc-900/50 border border-border dark:border-zinc-800 animate-pulse" />
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none cursor-pointer">
        <div className="h-10 px-4 flex items-center gap-3 bg-muted/30 dark:bg-white/3 border border-border dark:border-white/5 hover:border-yellow-600 dark:hover:border-yellow-500 transition-all group backdrop-blur-md">
          <ReactCountryFlag
            countryCode={flagCodes[currentLocale]}
            svg
            className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
            style={{ width: "1.2em", height: "0.9em" }}
          />

          <span className="text-[10px] font-mono font-bold text-muted-foreground dark:text-zinc-400 group-hover:text-foreground dark:group-hover:text-white uppercase tracking-[0.2em] transition-colors">
            {currentLocale}
          </span>
          <CaretDownIcon
            size={10}
            weight="bold"
            className="text-muted-foreground/50 dark:text-zinc-600 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-48 rounded-none border border-border dark:border-white/10 bg-background/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-110 animate-in fade-in zoom-in-95 duration-200"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              "flex items-center justify-between px-3 py-2.5 rounded-none transition-all cursor-pointer mb-1 last:mb-0 font-mono text-[10px] uppercase tracking-wider group",
              currentLocale === loc
                ? "bg-yellow-600 dark:bg-yellow-500 text-white"
                : "text-muted-foreground hover:bg-muted/50 dark:hover:bg-white/5 hover:text-foreground dark:hover:text-white",
            )}
          >
            <div className="flex items-center gap-3">
              <ReactCountryFlag
                countryCode={flagCodes[loc]}
                svg
                className={cn(
                  "rounded-sm transition-transform group-hover:scale-110",
                  currentLocale === loc ? "opacity-100" : "opacity-60",
                )}
                style={{ width: "1.4em", height: "1em" }}
              />
              <span className="font-bold tracking-widest">{t(loc)}</span>
            </div>
            {currentLocale === loc && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CheckIcon weight="bold" size={14} />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
