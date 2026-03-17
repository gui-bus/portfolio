"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Cpu, Target, Rocket } from "lucide-react";
import Link from "next/link";
import { ReadingProgress } from "@/components/sections/readingProgress";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/projects-data";
import { useTranslations } from "next-intl";

interface TechMarqueeProps {
  techStack: string[];
  color: string;
}

function TechMarquee({ techStack, color }: TechMarqueeProps) {
  const duplicated = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden py-12 border-y border-border bg-muted/30 backdrop-blur-sm">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((tech, index) => (
          <div key={index} className="flex items-center gap-6">
            <span
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic"
              style={{
                color: index % 2 === 0 ? color : "transparent",
                WebkitTextStroke:
                  index % 2 === 0 ? "none" : "1px var(--marquee-stroke)",
              }}
            >
              {tech}
            </span>
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
        ))}
      </motion.div>
      <style jsx>{`
        div {
          --marquee-stroke: theme("colors.zinc.300");
        }
        :global(.dark) div {
          --marquee-stroke: theme("colors.zinc.800");
        }
      `}</style>
    </div>
  );
}

interface NextProjectFooterProps {
  nextProject: Project | undefined;
  label: string;
  cta: string;
}

function NextProjectFooter({
  nextProject,
  label,
  cta,
}: NextProjectFooterProps) {
  if (!nextProject) return null;

  return (
    <Link href={`/project/${nextProject.slug}`}>
      <motion.section className="relative min-h-[60vh] flex items-center justify-center cursor-pointer group overflow-hidden border-t border-border">
        <div
          className="absolute inset-0 z-0 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000 scale-110 group-hover:scale-100"
          style={{
            backgroundImage: `url(${nextProject.images.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 text-center px-6">
          <span className="text-blue-600 dark:text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">
            {label}
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-foreground leading-none tracking-tighter">
            {nextProject.title}
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="px-8 py-4 border border-foreground/10 group-hover:border-blue-500 transition-colors bg-foreground/5 backdrop-blur-sm flex items-center gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                {cta}
              </span>
              <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </motion.section>
    </Link>
  );
}

interface ProjectPageClientProps {
  project: Project;
  nextProject: Project | undefined;
}

export function ProjectPageClient({
  project,
  nextProject,
}: ProjectPageClientProps) {
  const t = useTranslations("ProjectPage");
  const tProjects = useTranslations("Projects");

  const description = tProjects(`${project.slug}.description`);
  const category = tProjects(`${project.slug}.category`);
  const challenge = tProjects(`${project.slug}.challenge`);
  const solution = tProjects(`${project.slug}.solution`);

  let results: string[] = [];
  try {
    results = tProjects.raw(`${project.slug}.results`) as string[];
  } catch (e) {
    results = project.fullCaseStudy.results;
  }

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-background text-muted-foreground font-sans transition-colors duration-500">
      <ReadingProgress />
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[60] opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay" />

      <main className="relative">
        <motion.div
          className="fixed top-8 left-8 z-[70]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 border border-border bg-background/50 backdrop-blur-md flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-sm">
              <ArrowLeft className="w-4 h-4 text-foreground" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors hidden md:block font-bold">
              {t("btn_exit")}
            </span>
          </Link>
        </motion.div>

        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden border-b border-border"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${project.images.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale: heroScale,
              opacity: heroOpacity,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent z-1" />

          <motion.div
            className="relative z-10 text-center px-6"
            style={{ y: titleY }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-500 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
                {category}
              </span>
              <span className="text-muted-foreground/60 font-mono text-[9px] tracking-widest uppercase font-bold">
                {t("label_release")}
                {project.year}
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black text-foreground leading-none tracking-[-0.05em] uppercase">
              {project.title}
            </h1>

            <p className="mt-8 text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed uppercase tracking-widest italic">
              {description}
            </p>
          </motion.div>
        </section>

        <section className="relative py-32 px-6 overflow-hidden">
          <div className="">
            <div className="grid md:grid-cols-12 gap-16 md:gap-24">
              <motion.div
                className="md:col-span-5 space-y-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                    <span className="text-blue-600 dark:text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                      {t("challenge_tag")}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter mb-8 leading-tight">
                    {t("challenge_title_top")} <br />{" "}
                    <span className="outline-text">
                      {t("challenge_title_bottom")}
                    </span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light tracking-wide italic border-l-2 border-blue-500 pl-6">
                    {challenge}
                  </p>
                </div>

                <div className="p-8 border border-border bg-muted/20 backdrop-blur-sm">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-6 font-bold">
                    {t("tech_stack_label")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground font-mono text-[9px] border border-border font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-7 space-y-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                    <span className="text-blue-600 dark:text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                      {t("execution_tag")}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter mb-8 leading-tight">
                    {t("execution_title_top")} <br />{" "}
                    <span className="outline-text">
                      {t("execution_title_bottom")}
                    </span>
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      {solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TechMarquee techStack={project.techStack} color={project.color} />

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-500 mx-auto mb-6" />
              <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-[-0.05em]">
                {t("impact_title_top")}{" "}
                <span className="outline-text">{t("impact_title_bottom")}</span>
              </h2>
            </div>

            <div className="grid gap-4">
              {results.map((result: string, index: number) => (
                <motion.div
                  key={index}
                  className="group flex items-center justify-between p-8 border border-border hover:border-blue-500/50 bg-muted/10 transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-muted-foreground/20 font-black text-4xl group-hover:text-blue-500/30 transition-colors">
                      0{index + 1}
                    </span>
                    <p className="text-foreground/80 text-lg font-light tracking-wide">
                      {result}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-border group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:animate-pulse transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <NextProjectFooter
          nextProject={nextProject}
          label={t("next_project_label")}
          cta={t("cta_case_study")}
        />
      </main>
    </div>
  );
}
