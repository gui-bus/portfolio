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
      <div className=" px-6 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-yellow-600 dark:text-yellow-500 font-bold">
              {t("tag")}
            </span>
            <div className="h-px w-24 bg-yellow-500/20" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            {t("title_top")} <br />
            <span className="outline-text-process">{t("title_bottom")}</span>
          </h2>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border dark:bg-zinc-900/50 border border-border dark:border-zinc-900">
          {workflow.map((step) => (
            <WorkflowCardClient
              key={step.id}
              step={step}
              cardLabel={t("card_label")}
            />
          ))}
        </SectionAnimationWrapper>

        <div className="mt-12 flex justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-500 animate-pulse" />
              <span className="text-[9px] font-mono text-muted-foreground dark:text-zinc-600 uppercase tracking-widest text-nowrap font-bold">
                {t("status_active")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-border dark:bg-zinc-800" />
              <span className="text-[9px] font-mono text-muted-foreground dark:text-zinc-600 uppercase tracking-widest text-nowrap font-bold">
                {t("status_agile")}
              </span>
            </div>
          </div>
          <span className="hidden md:block text-[9px] font-mono text-muted-foreground/40 dark:text-zinc-800 uppercase tracking-widest font-bold">
            {t("footer_text")}
          </span>
        </div>
      </div>
    </section>
  );
}
