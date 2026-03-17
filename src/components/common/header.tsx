"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./themeToggle";
import { LanguageSwitcher } from "./languageSwitcher";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";
import { Logo } from "./logo";

interface NavItemProps {
  item: { key: string; href: string };
  t: (key: string) => string;
}

function NavItem({ item, t }: NavItemProps) {
  return (
    <a
      href={item.href}
      className="text-[10px] font-mono font-black text-muted-foreground/60 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-500 transition-all relative group uppercase tracking-[0.2em] flex items-center gap-2"
    >
      <span className="w-0 h-px bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-3" />
      {t(item.key)}
    </a>
  );
}

interface CtaProps {
  scrolled: boolean;
  text: string;
  onClick: () => void;
}

function CTA({ scrolled, text, onClick }: CtaProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden px-10 py-3.5 rounded-none font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 cursor-pointer",
        scrolled
          ? "bg-blue-600 dark:bg-blue-500 text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black"
          : "bg-foreground dark:bg-white text-background dark:text-black hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white",
      )}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
    </motion.button>
  );
}

interface HeaderProps {
  onStartProject: () => void;
}

export function Header({ onStartProject }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "work", href: "#projects" },
    { key: "about", href: "#methodology" },
    { key: "services", href: "#services" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-700 ease-in-out px-6 md:px-12",
        scrolled
          ? "bg-background/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-border dark:border-white/5 py-4"
          : "bg-transparent py-10",
      )}
    >
      <div className="max-w-450 mx-auto flex items-center justify-between">
        <motion.a
          href="/"
          className="relative z-10 block"
          whileHover={{ opacity: 0.7, x: -2 }}
          transition={{ duration: 0.3 }}
        >
          <Logo width={scrolled ? 100 : 120} height={36} />
        </motion.a>

        <nav
          className={cn(
            "hidden lg:flex items-center border transition-all duration-700 rounded-none px-10 py-3 backdrop-blur-md",
            scrolled
              ? "bg-muted/10 dark:bg-white/2 border-border dark:border-white/5"
              : "bg-transparent border-transparent",
          )}
        >
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <NavItem key={item.key} item={item} t={t} />
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="h-8 w-px bg-border dark:bg-white/10 hidden sm:block mx-2" />

          <CTA scrolled={scrolled} text={t("cta")} onClick={onStartProject} />
        </div>
      </div>
    </motion.header>
  );
}
