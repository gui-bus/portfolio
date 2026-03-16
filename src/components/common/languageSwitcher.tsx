"use client";
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChecksIcon } from "@phosphor-icons/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";

const flagCodes: Record<string, string> = {
  en: "US",
  pt: "BR",
};

export function LanguageSwitcher() {
  const t = useTranslations("Locale");
  const currentLocale = useLocale();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
    router.refresh();
  };

  if (!mounted) {
    return (
      <div className="h-10 w-20 rounded-full bg-muted/30 border border-border/50 animate-pulse" />
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-4 rounded-full bg-muted/30 border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300 font-bold uppercase tracking-tighter cursor-pointer"
        >
          <div className="mr-2 flex items-center justify-center overflow-hidden rounded-sm border border-border/10">
            <ReactCountryFlag
              countryCode={flagCodes[currentLocale]}
              svg
              style={{
                width: '1.2em',
                height: '0.9em',
              }}
              title={flagCodes[currentLocale]}
            />
          </div>
          {currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 rounded-2xl p-2 border-border/50 bg-background/80 backdrop-blur-xl"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer mb-1 last:mb-0",
              currentLocale === loc
                ? "bg-primary/10 text-primary font-bold"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center overflow-hidden rounded-sm border border-border/10">
                <ReactCountryFlag
                  countryCode={flagCodes[loc]}
                  svg
                  style={{
                    width: '1.4em',
                    height: '1em',
                  }}
                  title={flagCodes[loc]}
                />
              </div>
              <span className="uppercase tracking-tighter">{t(loc)}</span>
            </div>
            {currentLocale === loc && <ChecksIcon weight="bold" size={16} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
