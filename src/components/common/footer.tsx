"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpIcon, ActivityIcon } from "@phosphor-icons/react";
import { Logo } from "./logo";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const navItems = [
    { key: "work", href: "#projects" },
    { key: "about", href: "#methodology" },
    { key: "services", href: "#services" },
    { key: "contact", href: "#contact" },
  ];

  const socialItems = [
    { name: "GitHub", href: "https://github.com/guibus" },
    { name: "LinkedIn", href: "https://linkedin.com/in/guibus" },
    { name: "Instagram", href: "https://instagram.com/guibus.dev" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background dark:bg-[#050505] border-t border-border dark:border-white/5 overflow-hidden transition-colors pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <Logo width={130} height={40} />
            <p className="text-muted-foreground max-w-sm text-sm font-medium leading-relaxed">
              Desenvolvendo interfaces de alta performance e sistemas escaláveis
              com foco em experiência do usuário e excelência técnica.
            </p>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-500 font-bold">
                {t("links_label")}
              </span>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-yellow-600 dark:hover:text-white transition-colors font-bold uppercase tracking-widest"
                  >
                    {tHeader(item.key)}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-500 font-bold">
                {t("social_label")}
              </span>
              <nav className="flex flex-col gap-4">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-yellow-600 dark:hover:text-white transition-colors font-bold uppercase tracking-widest"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="hidden sm:flex flex-col gap-6 items-end"
            >
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground hover:text-yellow-600 dark:hover:text-white transition-colors cursor-pointer"
              >
                Back to top
                <div className="p-2 border border-border dark:border-white/10 group-hover:border-yellow-600 transition-colors">
                  <ArrowUpIcon
                    weight="bold"
                    size={14}
                    className="group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-mono text-muted-foreground dark:text-zinc-500 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} GUIBUS.DEV
            </p>
            <div className="hidden md:block h-3 w-px bg-border dark:bg-zinc-800" />
            <p className="text-[10px] font-mono text-muted-foreground dark:text-zinc-500 uppercase tracking-widest font-bold">
              {t("copyright_label")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 bg-yellow-600/5 dark:bg-yellow-500/10 px-4 py-2 border border-yellow-600/10 dark:border-yellow-500/10">
              <ActivityIcon
                weight="bold"
                size={12}
                className="text-yellow-600 dark:text-yellow-500 animate-pulse"
              />
              <span className="text-[9px] font-mono text-yellow-600 dark:text-yellow-500 uppercase tracking-widest font-bold">
                {t("status_label")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
