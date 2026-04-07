"use client";

import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { useContactForm } from "@/lib/providers/contactFormProvider";
import {
  SectionAnimationWrapper,
  FadeInAnimationWrapper,
} from "@/components/common/sectionAnimationWrapper";
import { ContactCTAClient } from "./contactSectionClient";
import Image from "next/image";

interface ContactHeaderClientProps {
  statusText: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  ctaLabel: string;
}

export function ContactHeaderClient({
  statusText,
  titleTop,
  titleBottom,
  description,
  ctaLabel,
}: ContactHeaderClientProps) {
  const { openForm } = useContactForm();

  return (
    <SectionAnimationWrapper className="lg:col-span-8 border border-border dark:border-white/5 bg-muted/5 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none text-yellow-600 dark:text-yellow-500">
        <PaperPlaneTiltIcon size={300} weight="fill" />
      </div>

      <FadeInAnimationWrapper className="flex items-center gap-4 mb-8 group">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-yellow-600/20 group-hover:border-yellow-600/50 transition-colors duration-500">
          <Image 
            src="/images/profile.jpg" 
            alt="Guilherme Bustamante" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-yellow-600 dark:bg-yellow-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-yellow-600 dark:text-yellow-500 uppercase font-black">
            {statusText}
          </span>
        </div>
      </FadeInAnimationWrapper>

      <FadeInAnimationWrapper>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground dark:text-white leading-[0.8] tracking-tighter uppercase mb-8">
          {titleTop} <br />
          <span className="outline-text-contact">{titleBottom}</span>
        </h2>
      </FadeInAnimationWrapper>

      <FadeInAnimationWrapper>
        <p className="text-muted-foreground text-sm md:text-lg font-light max-w-xl leading-relaxed uppercase tracking-wider mb-12 font-bold">
          {description}
        </p>
      </FadeInAnimationWrapper>

      <ContactCTAClient onClick={openForm} label={ctaLabel} />
    </SectionAnimationWrapper>
  );
}
