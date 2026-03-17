import { getTranslations } from "next-intl/server";
import { Logo } from "./logo";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tHeader = await getTranslations("Header");

  const navItems = [
    { key: "work", href: "#projects" },
    { key: "about", href: "#methodology" },
    { key: "services", href: "#services" },
    { key: "contact", href: "#contact" },
  ];

  const socialItems = ["GitHub", "LinkedIn", "Instagram"];

  return (
    <footer className="relative py-24 bg-background dark:bg-[#050505] border-t border-border dark:border-white/5 overflow-hidden transition-colors grid-footer">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-[0.4] dark:opacity-[0.1]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-blue-600/50 to-transparent dark:via-blue-500/30" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Logo width={160} height={52} />
              <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed uppercase tracking-wider">
                Crafting digital experiences with precision, purpose, and a
                touch of future-forward design.
              </p>
            </div>

            <h4 className="text-4xl md:text-6xl font-black uppercase text-foreground dark:text-white leading-[0.9] tracking-tighter">
              {t("title_top")} <br />
              <span className="outline-text-footer">{t("title_bottom")}</span>
            </h4>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-12">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-500" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 font-bold">
                  {t("links_label")}
                </span>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-blue-600 dark:hover:text-white transition-all font-medium uppercase tracking-[0.2em] group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-4" />
                    {tHeader(item.key)}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-500" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 font-bold">
                  {t("social_label")}
                </span>
              </div>
              <nav className="flex flex-col gap-4">
                {socialItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs text-muted-foreground hover:text-blue-600 dark:hover:text-white transition-all font-medium uppercase tracking-[0.2em] group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-[9px] font-mono text-muted-foreground dark:text-zinc-600 uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} GUIBUS.DEV
            </p>
            <div className="hidden sm:block h-4 w-[1px] bg-border dark:bg-zinc-800" />
            <p className="text-[9px] font-mono text-muted-foreground dark:text-zinc-600 uppercase tracking-[0.3em] font-bold text-center">
              {t("copyright_label")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 bg-blue-600/5 dark:bg-blue-500/10 px-5 py-2.5 border border-blue-600/10 dark:border-blue-500/10 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
              </div>
              <span className="text-[9px] font-mono text-blue-600 dark:text-blue-500 uppercase tracking-widest font-black">
                {t("status_label")}
              </span>
            </div>

            <div className="flex items-center gap-3 bg-muted/30 dark:bg-white/[0.02] px-5 py-2.5 border border-border dark:border-white/5 backdrop-blur-sm">
              <span className="text-[9px] font-mono text-foreground/60 dark:text-white/60 uppercase tracking-widest font-black">
                {t("loc_label")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
