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
      className="relative py-32 bg-background text-foreground overflow-hidden transition-colors duration-500 grid-approach"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className=" px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-600 dark:text-blue-500 mb-4 block font-bold">
              {t("tag")}
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-foreground">
              {t("title_top")} <br />
              <span className="outline-text-global">{t("title_outline")}</span> <br />
              {t("title_bottom")}
            </h2>
          </div>

          <div className="lg:col-span-4 border-l border-border pl-8 pb-2">
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          {steps.map((step) => (
            <MethodologyCardClient
              key={step.id}
              step={step}
            />
          ))}
        </SectionAnimationWrapper>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {["Clean Code", "UX-First", "High-Fidelity"].map((label) => (
              <span
                key={label}
                className="text-[10px] font-mono text-muted-foreground uppercase border border-border px-3 py-1 bg-muted/20 font-bold"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-muted-foreground italic font-bold">
            {t("footer_text")}
          </p>
        </div>
      </div>
    </section>
  );
}
