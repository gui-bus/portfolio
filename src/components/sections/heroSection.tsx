import {
  FingerprintIcon,
  CpuIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
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
    <section className="relative bg-background text-foreground flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 grid-hero py-44!">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20 pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />

      <div className="max-w-350 mx-auto w-full relative z-10">
        <HeroSectionClient>
          <div className="lg:col-span-10 flex flex-col">
            <HeroTitleAnimation>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-yellow-600 dark:bg-yellow-500" />
                  <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-500 uppercase tracking-[0.4em] font-black">
                    {t("location")}
                  </span>
                </div>
              </div>

              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black leading-[0.8] tracking-[-0.07em] uppercase text-foreground mb-12">
                {t("title_top")} <br />
                <span className="outline-text-global italic">
                  {t("title_bottom")}
                </span>
              </h1>
            </HeroTitleAnimation>

            <HeroDescriptionAnimation>
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl font-light text-muted-foreground leading-tight tracking-tight mb-12">
                  {t("description")}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-4 px-6 py-4 cinematic-card group hover:border-yellow-600/40 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-600/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    <CpuIcon
                      size={24}
                      weight="thin"
                      className="text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase tracking-widest font-black">
                        {t("stack_expert")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-6 py-4 cinematic-card group hover:border-yellow-600/40 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-600/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    <FingerprintIcon
                      size={24}
                      weight="thin"
                      className="text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase tracking-widest font-black">
                        {t("design_specialist")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <ScrollArrowClient />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground">
                        {t("status")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-black group-hover:text-yellow-600 transition-colors">
                        {t("cta_projects")}
                      </span>
                      <ArrowRightIcon
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </HeroDescriptionAnimation>
          </div>

          <div className="hidden lg:flex lg:col-span-2 h-full items-end justify-end pb-8">
            <div className="rotate-90 origin-bottom-right translate-x-full flex items-center gap-8">
              <span className="w-12 h-px bg-border/20" />
              <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-[1em] whitespace-nowrap font-bold">
                {t("branding")}
              </span>
            </div>
          </div>
        </HeroSectionClient>
      </div>
    </section>
  );
}
