"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  CaretLeftIcon,
  CaretRightIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { projectsData, Project } from "@/lib/projectsData";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useContactForm } from "@/lib/providers/contactFormProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
  tProjects: ReturnType<typeof useTranslations>;
}

function ProjectCard({ project, index, tProjects }: ProjectCardProps) {
  const title = tProjects(`${project.slug}.title`);
  const description = tProjects(`${project.slug}.description`);
  const tags = tProjects.raw(`${project.slug}.tags`) as string[];

  return (
    <div className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%] px-4">
      <Link href={`/project/${project.slug}`} className="block group">
        <div className="relative aspect-[16/10] md:aspect-[16/8] bg-muted/20 dark:bg-zinc-900/10 border border-border dark:border-zinc-800/50 overflow-hidden transition-all duration-700 group-hover:border-yellow-500/50">
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex items-center gap-3">
            <span className="text-[10px] font-mono text-white bg-yellow-600 px-2 py-0.5 font-bold">
              0{index + 1}
            </span>
            <div className="h-px w-8 bg-white/20 hidden md:block" />
          </div>

          <div
            className="absolute inset-0 z-0 grayscale-[0.2] dark:grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${project.images.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 z-10 bg-yellow-600/0 group-hover:bg-yellow-600/5 transition-colors duration-700" />

          <div className="absolute inset-0 z-20 p-6 md:p-12 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags?.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[8px] font-mono uppercase border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold tracking-tighter"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-5xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                  {title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed line-clamp-2 max-w-md">
                  {description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-none border border-white/20 flex items-center justify-center group-hover:bg-yellow-600 group-hover:border-yellow-600 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                  <ArrowUpRightIcon
                    size={24}
                    weight="light"
                    className="text-white group-hover:rotate-45 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[2px] h-0 bg-yellow-600 group-hover:h-full transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-600 group-hover:w-full transition-all duration-700 delay-100" />
        </div>
      </Link>
    </div>
  );
}

export function ProjectsSection() {
  const t = useTranslations("ProjectsSection");
  const tProjects = useTranslations("Projects");
  const { openForm } = useContactForm();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-projects"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none" />

      {/* Cinematic Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="px-6 mb-24 max-w-[1400px] mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-px bg-yellow-600 dark:bg-yellow-500" />
              <span className="text-yellow-600 dark:text-yellow-500 text-[10px] font-mono tracking-[0.5em] uppercase font-black">
                {t("tag")}
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.8] tracking-tighter uppercase"
                variants={fadeInUp}
              >
                {t("title_top")} <br />
                <span className="outline-text-global italic">{t("title_bottom")}</span>
              </motion.h2>

              <div className="flex items-center gap-4">
                <button
                  onClick={scrollPrev}
                  className="w-14 h-14 flex items-center justify-center border border-border dark:border-white/10 hover:border-yellow-600 hover:bg-yellow-600/5 transition-all group"
                >
                  <CaretLeftIcon size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-14 h-14 flex items-center justify-center border border-border dark:border-white/10 hover:border-yellow-600 hover:bg-yellow-600/5 transition-all group"
                >
                  <CaretRightIcon size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                tProjects={tProjects}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1 transition-all duration-700 ${
                index === selectedIndex
                  ? "w-16 bg-yellow-600"
                  : "w-4 bg-border dark:bg-white/10 hover:bg-yellow-600/30"
              }`}
            />
          ))}
        </div>

        {/* Decorative Side Label */}
        <div className="hidden xl:block absolute top-0 -right-4 h-full pt-32 pointer-events-none">
          <div className="sticky top-32 rotate-90 origin-top-right">
            <span className="text-[9px] font-mono text-muted-foreground/20 uppercase tracking-[1.5em] font-black whitespace-nowrap">
              {t("tag")} — PROJECT_VAULT_2026
            </span>
          </div>
        </div>

        <div className="px-6 mt-32 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center p-16 md:p-32 relative overflow-hidden group border border-border dark:border-white/5 bg-muted/5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
              <span className="text-[12vw] font-black uppercase whitespace-nowrap tracking-tighter italic outline-text-global">
                {t("decorative_label")}
              </span>
            </div>

            <PlusIcon
              size={40}
              weight="bold"
              className="text-yellow-600 dark:text-yellow-500 mb-10 transition-transform duration-1000 group-hover:rotate-180"
            />

            <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.5em] mb-6 text-center font-black">
              {t("more_projects")}
            </p>

            <motion.button
              onClick={openForm}
              className="relative flex items-center gap-6 text-foreground font-black text-3xl md:text-6xl uppercase tracking-tighter transition-all hover:text-yellow-600 dark:hover:text-yellow-500 text-center cursor-pointer"
            >
              {t("cta_contact")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
