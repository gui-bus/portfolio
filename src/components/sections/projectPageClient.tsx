"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRightIcon,
  CpuIcon,
  TargetIcon,
  RocketLaunchIcon,
  CornersOutIcon,
  CalendarIcon,
  UserIcon,
  IdentificationCardIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/projectsData";
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  scaleIn,
} from "@/lib/animations";

interface TechMarqueeProps {
  techStack: string[];
}

function HUDCorner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute p-2 opacity-20 group-hover:opacity-100 transition-opacity duration-500",
        className,
      )}
    >
      <CornersOutIcon
        size={16}
        weight="bold"
        className="text-blue-600 dark:text-blue-500"
      />
    </div>
  );
}

function TechMarquee({ techStack }: TechMarqueeProps) {
  const duplicated = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden py-24 border-y border-border dark:border-white/5 bg-muted/5 backdrop-blur-sm">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -1500] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((tech, index) => (
          <div key={index} className="flex items-center gap-8">
            <span
              className="text-6xl md:text-8xl font-black uppercase tracking-widest italic transition-colors duration-500"
              style={{
                color: index % 2 === 0 ? "inherit" : "transparent",
                WebkitTextStroke:
                  index % 2 === 0 ? "none" : "1px var(--border)",
              }}
            >
              {tech}
            </span>
            <div className="w-4 h-4 rotate-45 bg-blue-600 dark:bg-blue-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: string;
  icon: React.ElementType;
}

function StatItem({ label, value, icon: Icon }: StatItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col gap-2 p-8 border border-border dark:border-white/10 bg-background transition-all duration-500 hover:bg-muted/5 group overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-1 h-0 transition-all duration-700 group-hover:h-full bg-blue-600 dark:bg-blue-500" />
      <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-500">
        <Icon
          size={20}
          weight="thin"
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-black">
          {label}
        </span>
      </div>
      <span className="text-2xl font-bold text-foreground uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
        {value}
      </span>
      <div className="absolute bottom-2 right-2 opacity-5 group-hover:opacity-20 transition-opacity text-blue-600 dark:text-blue-500">
        <Icon size={40} weight="fill" />
      </div>
    </motion.div>
  );
}

interface NextProjectFooterProps {
  nextProject: Project | undefined;
  label: string;
  cta: string;
  tProjects: ReturnType<typeof useTranslations>;
}

function NextProjectFooter({
  nextProject,
  label,
  cta,
  tProjects,
}: NextProjectFooterProps) {
  if (!nextProject) return null;

  const title = tProjects(`${nextProject.slug}.title`);

  return (
    <Link href={`/project/${nextProject.slug}`} className="block">
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative min-h-[60vh] flex items-center justify-center cursor-pointer group overflow-hidden border-t border-border dark:border-white/5 bg-background grid-projects"
      >
        <div className="relative z-10 text-center px-6">
          <motion.span
            variants={fadeInUp}
            className="text-blue-600 dark:text-blue-500 font-mono text-xs tracking-[0.6em] uppercase mb-10 block font-black"
          >
            {"//"} {label}
          </motion.span>
          <motion.h2
            variants={scaleIn}
            className="text-6xl md:text-9xl font-black text-foreground dark:text-white leading-[0.75] tracking-tighter uppercase transition-transform duration-1000 group-hover:scale-105 italic"
          >
            {title}
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-20 flex justify-center">
            <div className="px-16 py-8 border border-border dark:border-white/10 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 backdrop-blur-xl flex items-center gap-8 shadow-2xl relative">
              <span className="text-sm font-mono uppercase tracking-[0.5em] font-black">
                {cta}
              </span>
              <ArrowRightIcon
                size={24}
                weight="bold"
                className="transition-transform group-hover:translate-x-4"
              />
            </div>
          </motion.div>
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

  const title = tProjects(`${project.slug}.title`);
  const description = tProjects(`${project.slug}.description`);
  const category = tProjects(`${project.slug}.category`);
  const challenge = tProjects(`${project.slug}.challenge`);
  const solution = tProjects(`${project.slug}.solution`);
  const techStack = project.techStack;
  const results = tProjects.raw(`${project.slug}.results`) as string[];

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div
      className="text-foreground font-sans transition-colors duration-500 overflow-hidden"
      ref={containerRef}
    >
      <div className="noise-overlay fixed inset-0 pointer-events-none z-60 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay" />

      <main className="relative pt-20">
        {/* Immersive Hero Section */}
        <section
          ref={heroRef}
          className="relative h-[90vh] flex items-center justify-center overflow-hidden grid-hero"
        >
          <motion.div
            className="relative z-10 text-center px-6 max-w-[95vw]"
            style={{ y: titleY }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-center gap-12"
            >
              <motion.h1
                variants={scaleIn}
                className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground dark:text-white leading-[0.75] tracking-tighter uppercase italic"
              >
                {title}
              </motion.h1>

              <motion.div variants={fadeInUp} className="max-w-3xl">
                <p className="text-xl md:text-3xl font-light leading-relaxed uppercase tracking-wider italic text-foreground/80">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Technical Stats Bar */}
        <section className="relative z-20 -mt-20 px-6 md:px-12 lg:px-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-450 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border dark:bg-white/10 border border-border dark:border-white/10 shadow-2xl"
          >
            <StatItem
              label={t("label_category")}
              value={category}
              icon={IdentificationCardIcon}
            />
            <StatItem
              label={t("label_year")}
              value={project.year}
              icon={CalendarIcon}
            />
            <StatItem
              label={t("label_role")}
              value={t("role_value")}
              icon={UserIcon}
            />
            <StatItem
              label={t("label_status")}
              value={t("status_value")}
              icon={ShieldCheckIcon}
            />
          </motion.div>
        </section>

        {/* Narrative Section */}
        <section className="relative py-48 px-6 md:px-12 lg:px-24  grid-approach dark:border-white/5">
          <div className="max-w-450 mx-auto space-y-48">
            {/* ROW 1: [TEXTOS] [IMAGEM] */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <motion.div
                className="lg:col-span-5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 border border-blue-600/20 flex items-center justify-center bg-blue-600/5 dark:bg-blue-500/5">
                    <TargetIcon
                      size={24}
                      weight="thin"
                      className="text-blue-600 dark:text-blue-500"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.5em] font-black text-blue-600 dark:text-blue-500">
                    {"//"} {t("challenge_tag")}
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-foreground dark:text-white uppercase tracking-tighter mb-12 leading-[0.8] italic">
                  {t("challenge_title_top")} <br />
                  <span className="outline-text-global">
                    {t("challenge_title_bottom")}
                  </span>
                </h2>
                <div className="relative p-12 border border-border dark:border-white/5 bg-muted/5 overflow-hidden group">
                  <HUDCorner className="top-0 left-0" />
                  <HUDCorner className="bottom-0 right-0 rotate-180" />
                  <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed italic relative z-10">
                    &quot;{challenge}&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7 aspect-video bg-muted/10 border border-border dark:border-white/5 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.1)]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
              >
                <Image
                  src={project.images.hero}
                  alt={title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 border-20 border-background/10 pointer-events-none z-20" />
              </motion.div>
            </div>

            {/* ROW 2: [IMAGEM] [TEXTOS] */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <motion.div
                className="lg:col-span-7 order-2 lg:order-1 aspect-video bg-muted/10 border border-border dark:border-white/5 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.1)]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
              >
                <Image
                  src={project.images.hero}
                  alt={`${title} Detail`}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 border-20 border-background/10 pointer-events-none z-20" />
              </motion.div>

              <motion.div
                className="lg:col-span-5 order-1 lg:order-2"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 border border-blue-600/20 flex items-center justify-center bg-blue-600/5 dark:bg-blue-500/5">
                    <CpuIcon
                      size={24}
                      weight="thin"
                      className="text-blue-600 dark:text-blue-500"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.5em] font-black text-blue-600 dark:text-blue-500">
                    {"//"} {t("execution_tag")}
                  </span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-foreground dark:text-white uppercase tracking-tighter mb-12 leading-[0.8] italic text-right lg:text-left">
                  {t("execution_title_top")} <br />
                  <span className="outline-text-global">
                    {t("execution_title_bottom")}
                  </span>
                </h2>
                <div className="prose prose-2xl dark:prose-invert max-w-none font-light leading-relaxed text-muted-foreground border-r-4 border-blue-600 dark:border-blue-500 pr-12 text-right lg:text-left lg:border-r-0 lg:border-l-4 lg:pr-0 lg:pl-12">
                  <p>{solution}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TechMarquee techStack={techStack} />

        {/* Results HUD */}
        <section className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden  text-foreground grid-services border-t border-border dark:border-white/5">
          <div className="max-w-450 mx-auto relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-center text-center mb-40"
            >
              <motion.div variants={fadeInUp}>
                <RocketLaunchIcon
                  size={80}
                  weight="thin"
                  className="mb-12 animate-pulse text-blue-600 dark:text-blue-500"
                />
              </motion.div>
              <motion.h2
                variants={scaleIn}
                className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-16 italic"
              >
                {t("impact_title_top")} <br />
                <span className="outline-text-global italic">
                  {t("impact_title_bottom")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
            >
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-16 md:p-24 border border-border bg-muted/5 backdrop-blur-3xl relative overflow-hidden transition-all duration-700 hover:bg-muted/10 hover:border-blue-600/50 dark:hover:border-blue-500/50"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 text-blue-600 dark:text-blue-500">
                    <ChartBarIcon size={250} weight="fill" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-12">
                    <div className="flex items-center gap-10">
                      <span className="text-8xl md:text-[10rem] font-black opacity-10 group-hover:opacity-100 transition-all duration-700 leading-none text-blue-600 dark:text-blue-500">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] group-hover:translate-x-6 transition-transform duration-700">
                      {result}
                    </p>
                  </div>
                  <HUDCorner className="bottom-0 left-0 -rotate-90 opacity-40" />
                  <HUDCorner className="top-0 right-0 rotate-90 opacity-40" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <NextProjectFooter
          nextProject={nextProject}
          label={t("next_project_label")}
          cta={t("cta_case_study")}
          tProjects={tProjects}
        />
      </main>
    </div>
  );
}
