"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  XIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TicketIcon,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const contactSchema = z.object({
  name: z.string().min(2, "Min 2 characters"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  project_type: z.string().min(1, "Required"),
  budget: z.string().min(1, "Required"),
  deadline: z.string().min(1, "Required"),
  message: z.string().min(10, "Min 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const t = useTranslations("Contact");
  const searchParams = useSearchParams();
  const referral = searchParams.get("referral");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      project_type: "type_fullstack",
      budget: "budget_range_2",
      deadline: "deadline_2",
    },
  });

  const selectedType = watch("project_type");
  const selectedBudget = watch("budget");
  const selectedDeadline = watch("deadline");

  const projectTypes = [
    { key: "type_fullstack", label: t("type_fullstack") },
    { key: "type_design", label: t("type_design") },
    { key: "type_consulting", label: t("type_consulting") },
    { key: "type_other", label: t("type_other") },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "4fc93430-7b53-491f-a7ed-8cb2c3b3fd46");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("company", data.company || "N/A");
    formData.append("project_type", t(data.project_type));
    formData.append("budget", t(data.budget));
    formData.append("deadline", t(data.deadline));
    formData.append("message", data.message);
    formData.append("from_name", "Portfolio Inquiry");
    formData.append("subject", `New Project Inquiry from ${data.name}`);

    if (referral) {
      formData.append("referral_source", referral);
      formData.append("discount_applied", "10% Referral Discount");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 4000);
      } else {
        alert("System Error: Unable to process protocol. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Connection Error: Protocol failed. Check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/80 dark:bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl h-full bg-background border-l border-border dark:border-white/5 p-8 md:p-16 overflow-y-auto overflow-x-hidden shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 250 }}
          >
            {/* Cinematic Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-muted-foreground hover:text-yellow-600 transition-all z-20 group"
            >
              <XIcon size={32} weight="thin" className="group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(202,138,4,0.3)]"
                >
                  <CheckCircleIcon size={56} weight="bold" />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                    {t("success_title")}
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto text-lg font-light leading-relaxed uppercase tracking-wider">
                    {t("success_message")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-16">
                  {referral && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-4 bg-yellow-600/10 border border-yellow-600/20 rounded-sm flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-yellow-600 flex-shrink-0 flex items-center justify-center text-white rounded-sm">
                        <TicketIcon size={24} weight="bold" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[10px] font-mono uppercase font-black text-yellow-600 tracking-widest">
                          {t("referral_badge")}
                        </h4>
                        <p className="text-xs text-muted-foreground uppercase font-light leading-relaxed tracking-wider">
                          {t("referral_text", { name: referral })}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-yellow-600 dark:bg-yellow-500" />
                    <span className="text-[10px] font-mono tracking-[0.5em] text-yellow-600 dark:text-yellow-500 uppercase font-black">
                      {t("form_tag")}
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.8]">
                    {t("form_title_top")} <br />
                    <span className="outline-text-form italic">
                      {t("form_title_bottom")}
                    </span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <div
                        className={cn(
                          "group border-b transition-colors py-2",
                          errors.name
                            ? "border-red-500"
                            : "border-border dark:border-white/10 focus-within:border-yellow-600 dark:focus-within:border-yellow-500",
                        )}
                      >
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black group-focus-within:text-yellow-600 transition-colors">
                          {t("label_name")}
                        </label>
                        <input
                          {...register("name")}
                          className="w-full bg-transparent outline-none text-foreground pt-2 text-lg font-light italic placeholder:text-muted-foreground/20"
                          placeholder={t("placeholder_name")}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-mono uppercase font-black tracking-widest">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div
                        className={cn(
                          "group border-b transition-colors py-2",
                          errors.email
                            ? "border-red-500"
                            : "border-border dark:border-white/10 focus-within:border-yellow-600 dark:focus-within:border-yellow-500",
                        )}
                      >
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black group-focus-within:text-yellow-600 transition-colors">
                          {t("label_email")}
                        </label>
                        <input
                          {...register("email")}
                          className="w-full bg-transparent outline-none text-foreground pt-2 text-lg font-light italic placeholder:text-muted-foreground/20"
                          placeholder={t("placeholder_email")}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-mono uppercase font-black tracking-widest">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="group border-b border-border dark:border-white/10 focus-within:border-yellow-600 dark:focus-within:border-yellow-500 transition-colors py-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black group-focus-within:text-yellow-600 transition-colors">
                      {t("label_company")}
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-transparent outline-none text-foreground pt-2 text-lg font-light italic placeholder:text-muted-foreground/20"
                      placeholder={t("placeholder_company")}
                    />
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black">
                      {t("label_project")}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type.key}
                          type="button"
                          onClick={() => setValue("project_type", type.key)}
                          className={cn(
                            "px-6 py-3 border text-[10px] font-mono uppercase tracking-widest font-black transition-all",
                            selectedType === type.key
                              ? "bg-yellow-600 border-yellow-600 text-white shadow-[0_0_20px_rgba(202,138,4,0.2)]"
                              : "border-border dark:border-white/5 text-muted-foreground hover:border-yellow-600 dark:hover:border-yellow-500 bg-muted/5 dark:bg-transparent",
                          )}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black">
                        {t("label_budget")}
                      </label>
                      <div className="flex flex-col gap-2">
                        {[
                          "budget_range_1",
                          "budget_range_2",
                          "budget_range_3",
                          "budget_range_4",
                        ].map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setValue("budget", range)}
                            className={cn(
                              "px-5 py-3 border text-[10px] font-mono uppercase text-left transition-all font-black tracking-widest",
                              selectedBudget === range
                                ? "bg-foreground dark:bg-white text-background dark:text-black border-foreground dark:border-white shadow-lg"
                                : "border-border dark:border-white/5 text-muted-foreground hover:border-yellow-600/40 hover:bg-yellow-600/5",
                            )}
                          >
                            {t(range)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black">
                        {t("label_deadline")}
                      </label>
                      <div className="flex flex-col gap-2">
                        {[
                          "deadline_1",
                          "deadline_2",
                          "deadline_3",
                          "deadline_4",
                        ].map((dl) => (
                          <button
                            key={dl}
                            type="button"
                            onClick={() => setValue("deadline", dl)}
                            className={cn(
                              "px-5 py-3 border text-[10px] font-mono uppercase text-left transition-all font-black tracking-widest",
                              selectedDeadline === dl
                                ? "bg-foreground dark:bg-white text-background dark:text-black border-foreground dark:border-white shadow-lg"
                                : "border-border dark:border-white/5 text-muted-foreground hover:border-yellow-600/40 hover:bg-yellow-600/5",
                            )}
                          >
                            {t(dl)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div
                      className={cn(
                        "group border-b transition-colors py-2",
                        errors.message
                          ? "border-red-500"
                          : "border-border dark:border-white/10 focus-within:border-yellow-600 dark:focus-within:border-yellow-500",
                      )}
                    >
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 font-black group-focus-within:text-yellow-600 transition-colors">
                        {t("label_briefing")}
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-transparent outline-none text-foreground pt-2 text-lg font-light italic resize-none placeholder:text-muted-foreground/20"
                        placeholder={t("placeholder_briefing")}
                      />
                    </div>
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-mono uppercase font-black tracking-widest">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-8 bg-yellow-600 text-white font-black text-xs md:text-sm uppercase tracking-[0.5em] flex items-center justify-center gap-6 hover:bg-foreground dark:hover:bg-white dark:hover:text-black transition-all shadow-[0_20px_40px_rgba(202,138,4,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? t("btn_sending") : t("btn_send")}{" "}
                    <ArrowRightIcon size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
