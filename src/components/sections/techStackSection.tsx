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
    { name: "TypeScript", iconName: "Code", description: t("desc_typing") },
    { name: "Tailwind", iconName: "PaintBrush", description: t("desc_css") },
    { name: "Figma", iconName: "BoundingBox", description: t("desc_design") },
    { name: "React", iconName: "Lightning", description: t("desc_react") },
    { name: "Node.js", iconName: "Database", description: t("desc_runtime") },
    { name: "Vercel", iconName: "Cloud", description: t("desc_cloud") },
    {
      name: "React Native",
      iconName: "DeviceMobile",
      description: t("desc_mobile"),
    },
  ];

  const secondaryTools = [
    "Framer Motion",
    "Three.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "GraphQL",
    "Prisma",
    "Supabase",
    "AWS",
    "Python",
    "Git",
    "Linux",
    "TanStack Query",
    "Biome",
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-tech"
    >
      <div className="relative z-10  px-6">
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-yellow-600 dark:bg-yellow-500" />
              <span className="text-yellow-600 dark:text-yellow-500 text-[10px] font-mono tracking-[0.5em] uppercase font-bold">
                {t("tag")}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-foreground dark:text-white leading-[0.85] tracking-tighter uppercase">
              {t("title_top")} <br />
              <span className="outline-text-global">{t("title_bottom")}</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-muted-foreground text-sm font-light leading-relaxed border-l border-border dark:border-zinc-800 pl-6">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <SectionAnimationWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border dark:bg-zinc-900/50 border border-border dark:border-zinc-900 mb-24">
          {primaryTech.map((tech, index) => (
            <TechCardClient key={tech.name} tech={tech} index={index} />
          ))}
        </SectionAnimationWrapper>

        <FadeInAnimationWrapper className="space-y-4">
          <div className="flex items-center gap-6 mb-8 px-2">
            <p className="text-[9px] text-muted-foreground/60 dark:text-zinc-600 tracking-[0.6em] uppercase font-mono whitespace-nowrap font-bold">
              {t("marquee_label")}
            </p>
            <div className="h-px w-full bg-border dark:bg-zinc-900" />
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
