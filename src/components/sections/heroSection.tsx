import { FingerprintIcon, CpuIcon } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import {
  HeroSectionClient,
  HeroTitleAnimation,
  HeroDescriptionAnimation,
} from "./heroSectionClient";
import { ScrollArrowClient } from "./heroScrollArrowClient";

export async function HeroSection() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative min-h-screen bg-background text-foreground flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden py-32 transition-colors duration-500 grid-hero">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20 pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-blue-600/50 to-transparent" />

      <div className="max-w-450 mx-auto w-full relative z-10 mt-20 md:mt-0">
        <HeroSectionClient>
          <div className="lg:col-span-9 flex flex-col">
            <HeroTitleAnimation>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-blue-600 dark:bg-blue-500" />
                <span className="text-[10px] font-mono text-blue-600 dark:text-blue-500 uppercase tracking-[0.4em] font-black">
                  {t("location")}
                </span>
              </div>

              <h1 className="text-[12vw] lg:text-[9vw] font-black leading-[0.8] tracking-[-0.06em] uppercase text-foreground">
                {t("title_top")} <br />
                <span className="outline-text-global italic">
                  {t("title_bottom")}
                </span>
              </h1>
            </HeroTitleAnimation>

            <HeroDescriptionAnimation>
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl font-light text-muted-foreground leading-tight tracking-tight mb-8">
                  {t("description")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 border border-border dark:border-white/5 bg-muted/5 backdrop-blur-sm group hover:border-blue-600/30 transition-colors">
                    <CpuIcon
                      size={20}
                      weight="thin"
                      className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                      {t("stack_expert")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 border border-border dark:border-white/5 bg-muted/5 backdrop-blur-sm group hover:border-blue-600/30 transition-colors">
                    <FingerprintIcon size={20} weight="thin" className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />

                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                      {t("design_specialist")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-2">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground">
                    {t("status")}
                  </span>
                </div>

                <ScrollArrowClient />
              </div>
            </HeroDescriptionAnimation>
          </div>

          <div className="hidden lg:flex lg:col-span-3 h-full items-end justify-end pb-8">
            <div className="rotate-90 origin-bottom-right translate-x-full">
              <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-[1em] whitespace-nowrap font-bold">
                {t("branding")}
              </span>
            </div>
          </div>
        </HeroSectionClient>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 border-t border-border dark:border-white/5 flex items-center px-6 md:px-12 lg:px-16 justify-between opacity-40">
        <span className="text-[8px] font-mono uppercase tracking-[0.5em]">
          {t("branding")}
        </span>
        <span className="text-[8px] font-mono">
          COORD: 23.1791° S, 45.8872° W
        </span>
      </div>
    </section>
  );
}
