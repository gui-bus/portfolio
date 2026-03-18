"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@phosphor-icons/react";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border dark:border-white/5 overflow-hidden transition-colors pt-32 pb-12 grid-footer">
      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10">
        <div className="absolute -top-12 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black uppercase whitespace-nowrap tracking-tighter italic outline-text-footer">
            GUIBUS.DEV
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 relative items-center"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 flex flex-col gap-10"
          >
            <Logo width={140} height={45} />
          </motion.div>

          {/* Links Column */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row justify-between items-center gap-12">
            <motion.div variants={fadeInUp} className="flex items-center gap-12">
              <nav className="flex flex-wrap justify-center sm:justify-start gap-x-12 gap-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-yellow-600 dark:hover:text-white transition-colors font-black uppercase tracking-[0.2em]"
                  >
                    {tHeader(item.key)}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-8 items-end justify-end"
            >
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground hover:text-yellow-600 dark:hover:text-white transition-colors cursor-pointer font-black"
              >
                {t("back_to_top")}
                <div className="p-3 border border-border dark:border-white/10 group-hover:border-yellow-600 group-hover:bg-yellow-600/5 transition-all">
                  <ArrowUpIcon
                    weight="bold"
                    size={16}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full md:w-auto">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] font-black">
              © {new Date().getFullYear()} GUIBUS.DEV
            </p>
            <div className="hidden md:block h-px w-12 bg-border dark:bg-white/5" />
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] font-black">
              {t("copyright_label")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
