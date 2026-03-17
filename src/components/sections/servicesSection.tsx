import { getTranslations } from "next-intl/server";
import { ServiceModuleClient } from "./serviceModuleClient";
import { SectionAnimationWrapper } from "@/components/common/sectionAnimationWrapper";

export async function ServicesSection() {
  const t = await getTranslations("Services");

  const capabilities = [
    {
      title: t("main_card_title"),
      iconName: "Stack",
      tag: t("main_card_tag"),
      desc: t("main_card_desc"),
    },
    {
      title: t("step1_title"),
      iconName: "Lightning",
      tag: t("step1_tag"),
      desc: t("step1_desc"),
    },
    {
      title: t("step2_title"),
      iconName: "Cpu",
      tag: t("step2_tag"),
      desc: t("step2_desc"),
    },
    {
      title: t("step3_title"),
      iconName: "PaintBrush",
      tag: t("step3_tag"),
      desc: t("step3_desc"),
    },
    {
      title: t("step4_title"),
      iconName: "ShieldCheck",
      tag: t("step4_tag"),
      desc: t("step4_desc"),
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-background text-foreground overflow-hidden transition-colors duration-500 grid-services"
    >
      <div className="max-w-350 mx-auto px-6 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-yellow-600 dark:bg-yellow-500" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-yellow-600 dark:text-yellow-500 font-black">
              {t("tag")}
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.8] uppercase max-w-4xl">
            {t("title_top")} <br />
            <span className="outline-text-global italic">{t("title_bottom")}</span>
          </h2>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceModuleClient
            isLarge
            ctaText={t("cta_initialize")}
            cap={{
              title: t("step5_title"),
              desc: t("step5_desc"),
              tag: t("step5_tag"),
              iconName: "Code",
            }}
          />

          {capabilities.map((cap) => (
            <ServiceModuleClient key={cap.title} cap={cap} />
          ))}
        </SectionAnimationWrapper>
      </div>
    </section>
  );
}
