import { getTranslations } from "next-intl/server";
import { MethodologyCardClient } from "./methodologyCardClient";
import { SectionAnimationWrapper } from "@/components/common/sectionAnimationWrapper";

export async function MethodologySection() {
  const t = await getTranslations("Methodology");

  const steps = [
    {
      id: "01",
      title: t("step1_title"),
      desc: t("step1_desc"),
      iconName: "Wind",
      tag: t("step1_tag"),
    },
    {
      id: "02",
      title: t("step2_title"),
      desc: t("step2_desc"),
      iconName: "PencilCircle",
      tag: t("step2_tag"),
    },
    {
      id: "03",
      title: t("step3_title"),
      desc: t("step3_desc"),
      iconName: "Code",
      tag: t("step3_tag"),
    },
  ];

  return (
    <section
      id="methodology"
      className="relative py-44 bg-background text-foreground overflow-hidden transition-colors duration-500 grid-approach"
    >


      <div className="max-w-350 mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-yellow-600 dark:bg-yellow-500" />
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-yellow-600 dark:text-yellow-500 font-black">
                {t("tag")}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-foreground">
              {t("title_top")} <br />
              <span className="outline-text-global italic">
                {t("title_outline")}
              </span>{" "}
              <br />
              {t("title_bottom")}
            </h2>
          </div>

          <div className="lg:col-span-4 border-l border-border pl-8 pb-2">
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xs">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((step) => (
            <MethodologyCardClient key={step.id} step={step} />
          ))}
        </SectionAnimationWrapper>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-12">
          <div className="flex flex-wrap gap-4">
            {[
              t("label_performance"),
              t("label_experience"),
              t("label_scalability"),
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border backdrop-blur-sm group hover:border-yellow-600/30 transition-colors"
              >
                <div className="w-1 h-1 rounded-full bg-yellow-600 dark:bg-yellow-500" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase font-black tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
              {t("footer_text")}
            </p>
            <div className="hidden lg:block h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
