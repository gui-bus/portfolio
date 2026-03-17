"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { ThemeToggle } from "./themeToggle";
import { LanguageSwitcher } from "./languageSwitcher";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";
import { Logo } from "./logo";

interface NavItemProps {
  item: { key: string; href: string };
  t: (key: string) => string;
  active: boolean;
  onClick?: () => void;
}

function NavItem({ item, t, active, onClick }: NavItemProps) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        "text-[10px] font-mono font-black transition-all relative group uppercase tracking-[0.2em] flex items-center gap-2 py-2",
        active
          ? "text-blue-600 dark:text-blue-500"
          : "text-muted-foreground/60 dark:text-zinc-500 hover:text-foreground dark:hover:text-white"
      )}
    >
      <motion.span 
        className={cn(
          "h-px bg-blue-600 dark:bg-blue-500 transition-all duration-300",
          active ? "w-3" : "w-0 group-hover:w-3"
        )}
      />
      {t(item.key)}
      {active && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-1 left-5 right-0 h-0.5 bg-blue-600/20 dark:bg-blue-500/20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
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
        "relative overflow-hidden px-6 md:px-10 py-3 rounded-none font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 cursor-pointer group",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations("Header");

  const navItems = [
    { key: "work", href: "#projects" },
    { key: "about", href: "#methodology" },
    { key: "services", href: "#services" },
    { key: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["projects", "methodology", "services", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className={cn(
          "fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out px-4 md:px-12 w-full",
          scrolled ? "py-4" : "py-8 md:py-10"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3",
          scrolled ? "bg-background/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-border dark:border-white/5 shadow-2xl" : "bg-transparent border-transparent"
        )}>
          <div className="flex items-center gap-12">
            <motion.a
              href="/"
              className="relative z-10 block shrink-0"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Logo width={scrolled ? 90 : 110} height={32} />
            </motion.a>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <NavItem 
                  key={item.key} 
                  item={item} 
                  t={t} 
                  active={activeSection === item.href.replace("#", "")}
                />
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <div className="h-8 w-px bg-border dark:bg-white/10 hidden sm:block mx-1" />

            <div className="hidden md:block">
              <CTA scrolled={scrolled} text={t("cta")} onClick={onStartProject} />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 bg-muted/30 dark:bg-white/3 border border-border dark:border-white/5 text-foreground cursor-pointer transition-colors hover:border-blue-600 dark:hover:border-blue-500"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <XIcon size={20} weight="bold" />
              ) : (
                <ListIcon size={20} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed inset-0 z-90 bg-background/98 dark:bg-[#050505]/98 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-8 mb-12">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-600 dark:text-blue-500 font-bold border-b border-border dark:border-white/5 pb-4">
                Navigation_Menu
              </span>
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "text-4xl font-black uppercase tracking-tighter transition-colors flex items-center gap-4 group",
                        activeSection === item.href.replace("#", "")
                          ? "text-blue-600 dark:text-blue-500"
                          : "text-foreground hover:text-blue-600 dark:hover:text-blue-500"
                      )}
                    >
                      <span className="text-xs font-mono tracking-widest text-muted-foreground/40 group-hover:text-blue-600/40">
                        0{index + 1}
                      </span>
                      {t(item.key)}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-8 border-t border-border dark:border-white/5 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  Preferences
                </span>
                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
              
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onStartProject();
                }}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white py-6 font-black text-xs uppercase tracking-[0.4em] hover:bg-foreground dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {t("cta")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
