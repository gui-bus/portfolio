import { getTranslations } from "next-intl/server";
import { WorkflowCardClient } from "./workflowCardClient";
import { SectionAnimationWrapper } from "@/components/common/sectionAnimationWrapper";

export async function WorkflowSection() {
  const t = await getTranslations("Workflow");

  const workflow = [
    {
      id: "01",
      title: t("step1_title"),
      iconName: "MagnifyingGlass",
      desc: t("step1_desc"),
    },
    {
      id: "02",
      title: t("step2_title"),
      iconName: "PaintBrush",
      desc: t("step2_desc"),
    },
    {
      id: "03",
      title: t("step3_title"),
      iconName: "Code",
      desc: t("step3_desc"),
    },
    {
      id: "04",
      title: t("step4_title"),
      iconName: "RocketLaunch",
      desc: t("step4_desc"),
    },
  ];

  return (
    <section
      id="workflow"
      className="relative py-32 bg-background text-foreground transition-colors duration-500 overflow-hidden grid-process"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none" />

      {/* Cinematic Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-yellow-600 dark:bg-yellow-500" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-yellow-600 dark:text-yellow-500 font-black">
              {t("tag")}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            {t("title_top")} <br />
            <span className="outline-text-process italic">{t("title_bottom")}</span>
          </h2>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border dark:bg-white/5 border border-border dark:border-white/5">
          {workflow.map((step) => (
            <WorkflowCardClient
              key={step.id}
              step={step}
              cardLabel={t("card_label")}
            />
          ))}
        </SectionAnimationWrapper>

        <div className="mt-16 flex justify-between items-center border-t border-border dark:border-white/5 pt-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-500 animate-pulse" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest text-nowrap font-black">
                {t("status_active")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-border dark:bg-white/10" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest text-nowrap font-black">
                {t("status_agile")}
              </span>
            </div>
          </div>
          <span className="hidden md:block text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-black opacity-40">
            {t("footer_text")}
          </span>
        </div>

        {/* Decorative Side Label */}
        <div className="hidden xl:block absolute top-0 -right-4 h-full pt-32 pointer-events-none">
          <div className="sticky top-32 rotate-90 origin-top-right">
            <span className="text-[9px] font-mono text-muted-foreground/20 uppercase tracking-[1.5em] font-black whitespace-nowrap">
              {t("tag")} — PROTOCOL_PIPELINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
