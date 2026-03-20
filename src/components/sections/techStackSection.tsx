import { getTranslations } from "next-intl/server";
import { TechCardClient } from "./techCardClient";
import {
  SectionAnimationWrapper,
  FadeInAnimationWrapper,
} from "@/components/common/sectionAnimationWrapper";
import { InfiniteMarqueeClient } from "./techStackMarqueeClient";

export async function TechStackSection() {
  const t = await getTranslations("TechStack");

  const primaryTech = [
    { name: "Next.js", iconName: "Globe", description: t("desc_frontend") },
    { name: "React", iconName: "Lightning", description: t("desc_react") },
    { name: "TypeScript", iconName: "Code", description: t("desc_typing") },
    { name: "Tailwind", iconName: "PaintBrush", description: t("desc_css") },
    { name: "Fastify", iconName: "Zap", description: t("desc_backend") },
    { name: "Figma", iconName: "BoundingBox", description: t("desc_design") },
    {
      name: "UX/UI Design",
      iconName: "UserFocus",
      description: t("desc_ux_ui"),
    },
    { name: "Vercel", iconName: "Cloud", description: t("desc_cloud") },
  ];

  const secondaryTools = [
    "TanStack Query",
    "Prisma",
    "PostgreSQL",
    "Zod",
    "Framer Motion",
    "Git",
    "Biome",
    "Node.js",
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-tech"
    >
      <div className="relative z-10 max-w-350 mx-auto px-6">
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-yellow-600 dark:bg-yellow-500" />
              <span className="text-yellow-600 dark:text-yellow-500 text-[10px] font-mono tracking-[0.5em] uppercase font-black">
                {t("tag")}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.8] tracking-tighter uppercase">
              {t("title_top")} <br />
              <span className="outline-text-global italic">
                {t("title_bottom")}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-muted-foreground text-lg font-light leading-relaxed border-l border-border dark:border-white/10 pl-8">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border dark:bg-white/5 border border-border dark:border-white/5 mb-24">
          {primaryTech.map((tech, index) => (
            <TechCardClient key={tech.name} tech={tech} index={index} />
          ))}
        </SectionAnimationWrapper>

        <FadeInAnimationWrapper className="space-y-4">
          <div className="flex items-center gap-6 mb-8 px-2">
            <p className="text-[9px] text-muted-foreground/60 dark:text-zinc-600 tracking-[0.6em] uppercase font-mono whitespace-nowrap font-black">
              {t("marquee_label")}
            </p>
            <div className="h-px w-full bg-border dark:bg-white/5" />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <InfiniteMarqueeClient items={secondaryTools} direction="left" />
            <InfiniteMarqueeClient
              items={[...secondaryTools].reverse()}
              direction="right"
            />
          </div>
        </FadeInAnimationWrapper>
      </div>
    </section>
  );
}
