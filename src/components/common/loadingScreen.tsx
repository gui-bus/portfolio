"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { useTranslations } from "next-intl";
import { Cpu, Globe, ShieldCheck, CornersOut } from "@phosphor-icons/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const t = useTranslations("Loading");
  const [progress, setProgress] = useState(0);

  const steps = useMemo(
    () => [
      { label: t("init"), icon: Globe },
      { label: t("kernel"), icon: Cpu },
      { label: t("assets"), icon: CornersOut },
      { label: t("ready"), icon: ShieldCheck },
    ],
    [t],
  );

  const currentStep = useMemo(() => {
    if (progress < 25) return 0;
    if (progress < 60) return 1;
    if (progress < 90) return 2;
    return 3;
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const StepIcon = steps[currentStep].icon;

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background dark:bg-[#050505] flex flex-col items-center justify-center p-6 overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
    >
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--blue-600)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-md w-full relative">
        <div className="absolute -top-32 -left-12 opacity-10">
          <span className="font-mono text-[120px] font-black select-none">
            LOAD
          </span>
        </div>

        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <Logo width={140} height={46} />
            <div className="flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-[9px] text-muted-foreground tracking-[0.3em] uppercase font-bold">
                {t("version")}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-mono text-3xl font-black text-blue-600 dark:text-blue-500 italic">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="w-full h-1 bg-muted dark:bg-zinc-900 overflow-hidden relative">
            <motion.div
              className="h-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="absolute top-4 left-0 w-full flex justify-between px-1 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-2 w-px bg-foreground" />
            ))}
          </div>
        </div>

        <div className="bg-muted/30 dark:bg-white/[0.02] border border-border dark:border-white/5 p-6 backdrop-blur-sm relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <StepIcon size={40} weight="thin" />
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-none border border-blue-600/30 flex items-center justify-center">
                  <StepIcon size={18} className="text-blue-600 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-blue-600 font-black uppercase tracking-widest mb-1">
                    [ PROCESS_STEP_0{currentStep + 1} ]
                  </span>
                  <span className="font-mono text-[11px] text-foreground font-bold uppercase tracking-tight">
                    {steps[currentStep].label}...
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="h-px w-full bg-linear-to-r from-border via-transparent to-transparent dark:from-white/5" />

            <div className="flex flex-col gap-1 opacity-40 font-mono text-[8px] uppercase tracking-widest">
              <p>{`> checksum_verification: pass`}</p>
              <p>{`> memory_allocation: optimized`}</p>
              <p>{`> interface_sync: 0x${Math.round(progress * 255)
                .toString(16)
                .padStart(4, "0")}`}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center opacity-30">
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest italic">
            Connection: Secure_TLS
          </span>
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest">
            {new Date().toISOString().split("T")[0]}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
