"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CaretLeftIcon, CaretRightIcon, PlusIcon } from "@phosphor-icons/react";
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
  tProjects: (key: string) => string;
}

function ProjectCard({ project, index, tProjects }: ProjectCardProps) {
  const description = tProjects(`${project.slug}.description`);

  return (
    <div className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%] px-4">
      <Link href={`/project/${project.slug}`} className="block group">
        <div className="relative aspect-[16/10] md:aspect-[16/8] bg-muted/20 dark:bg-zinc-900/10 border border-border dark:border-zinc-800/50 overflow-hidden transition-all duration-700 group-hover:border-blue-500/50">
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex items-center gap-3">
            <span className="text-[10px] font-mono text-white bg-blue-600 px-2 py-0.5 font-bold">
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
          <div className="absolute inset-0 z-10 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-700" />

          <div className="absolute inset-0 z-20 p-6 md:p-12 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.slice(0, 3).map((tag: string) => (
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
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed line-clamp-2 max-w-md">
                  {description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-none border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                  <ArrowUpRightIcon
                    size={24}
                    weight="light"
                    className="text-white group-hover:rotate-45 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[2px] h-0 bg-blue-600 group-hover:h-full transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700 delay-100" />
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
      className="relative py-24 bg-background transition-colors duration-500 overflow-hidden grid-projects"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <div className="px-6 mb-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-4 mb-6"
              variants={fadeInUp}
            >
              <span className="text-blue-600 dark:text-blue-500 text-[10px] font-mono tracking-[0.4em] uppercase underline underline-offset-8 font-bold">
                {t("tag")}
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.h2
                className="text-5xl md:text-8xl font-black text-foreground dark:text-white leading-[0.8] tracking-tighter uppercase"
                variants={fadeInUp}
              >
                {t("title_top")} <br />
                <span className="outline-text-global">{t("title_bottom")}</span>
              </motion.h2>

              <div className="flex items-center gap-4">
                <button
                  onClick={scrollPrev}
                  className="w-12 h-12 flex items-center justify-center border border-border dark:border-white/10 hover:border-blue-600 transition-colors"
                >
                  <CaretLeftIcon size={20} />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-12 h-12 flex items-center justify-center border border-border dark:border-white/10 hover:border-blue-600 transition-colors"
                >
                  <CaretRightIcon size={20} />
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

        <div className="flex justify-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1 transition-all duration-500 ${
                index === selectedIndex
                  ? "w-12 bg-blue-600"
                  : "w-4 bg-border dark:bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center p-12 md:p-24 border border-dashed border-border dark:border-zinc-800 bg-muted/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
              <span className="text-[12vw] font-black uppercase whitespace-nowrap tracking-tighter">
                {t("decorative_label")}
              </span>
            </div>

            <PlusIcon
              size={32}
              weight="bold"
              className="text-blue-600 dark:text-blue-500 mb-8 transition-transform duration-700 group-hover:rotate-180"
            />

            <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.4em] mb-4 text-center">
              {t("more_projects")}
            </p>

            <motion.button
              onClick={openForm}
              className="relative flex items-center gap-4 text-foreground dark:text-white font-black text-2xl md:text-5xl uppercase tracking-tighter transition-all hover:text-blue-600 dark:hover:text-blue-500 text-center cursor-pointer"
            >
              {t("cta_contact")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
