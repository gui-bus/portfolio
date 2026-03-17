"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Warning } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactSchema = z.object({
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
      project_type: "Full-stack",
      budget: "budget_range_2",
      deadline: "deadline_2",
    }
  });

  const selectedType = watch("project_type");
  const selectedBudget = watch("budget");
  const selectedDeadline = watch("deadline");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "4fc93430-7b53-491f-a7ed-8cb2c3b3fd46");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("company", data.company || "N/A");
    formData.append("project_type", data.project_type);
    formData.append("budget", t(data.budget));
    formData.append("deadline", t(data.deadline));
    formData.append("message", data.message);
    formData.append("from_name", "Portfolio Inquiry");
    formData.append("subject", `New Project Inquiry from ${data.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
            className="absolute inset-0 bg-background/80 dark:bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl h-full bg-background dark:bg-[#050505] border-l border-border dark:border-zinc-800 p-8 md:p-16 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors z-20"
            >
              <X size={32} weight="light" />
            </button>

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white"
                >
                  <CheckCircle size={56} weight="bold" />
                </motion.div>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground dark:text-white leading-none">
                  Inquiry Received.
                </h3>
                <p className="text-muted-foreground max-w-xs text-lg">
                  Protocol established. I will review your requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <div className="relative">
                <div className="mb-16">
                  <span className="text-[10px] font-mono tracking-[0.5em] text-blue-600 dark:text-blue-500 uppercase mb-4 block font-black">
                    PROJECT_INQUIRY_FORM
                  </span>
                  <h3 className="text-5xl font-black text-foreground dark:text-white tracking-tighter uppercase leading-none">
                    {t("form_title_top")} <br />{" "}
                    <span className="outline-text-form">{t("form_title_bottom")}</span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <div className={cn(
                        "group border-b transition-colors py-2",
                        errors.name ? "border-red-500" : "border-border dark:border-zinc-800 focus-within:border-blue-600 dark:focus-within:border-blue-500"
                      )}>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                          {t("label_name")}
                        </label>
                        <input
                          {...register("name")}
                          className="w-full bg-transparent outline-none text-foreground pt-2 font-light italic placeholder:text-muted-foreground/30"
                          placeholder={t("placeholder_name")}
                        />
                      </div>
                      {errors.name && <span className="text-[10px] text-red-500 font-mono uppercase">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <div className={cn(
                        "group border-b transition-colors py-2",
                        errors.email ? "border-red-500" : "border-border dark:border-zinc-800 focus-within:border-blue-600 dark:focus-within:border-blue-500"
                      )}>
                        <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                          {t("label_email")}
                        </label>
                        <input
                          {...register("email")}
                          className="w-full bg-transparent outline-none text-foreground pt-2 font-light italic placeholder:text-muted-foreground/30"
                          placeholder={t("placeholder_email")}
                        />
                      </div>
                      {errors.email && <span className="text-[10px] text-red-500 font-mono uppercase">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="group border-b border-border dark:border-zinc-800 focus-within:border-blue-600 dark:focus-within:border-blue-500 transition-colors py-2">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                      {t("label_company")}
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-transparent outline-none text-foreground pt-2 font-light italic placeholder:text-muted-foreground/30"
                      placeholder={t("placeholder_company")}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                      {t("label_project")}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["Full-stack", "UI/UX Design", "Consultoria", "Outro"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setValue("project_type", type)}
                          className={cn(
                            "px-5 py-2 border text-[10px] font-mono uppercase tracking-widest transition-all",
                            selectedType === type
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-border dark:border-zinc-900 text-muted-foreground hover:border-blue-600 dark:hover:border-blue-500 bg-muted/20 dark:bg-transparent"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                        {t("label_budget")}
                      </label>
                      <div className="flex flex-col gap-2">
                        {["budget_range_1", "budget_range_2", "budget_range_3", "budget_range_4"].map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setValue("budget", range)}
                            className={cn(
                              "px-4 py-2 border text-[9px] font-mono uppercase text-left transition-all",
                              selectedBudget === range
                                ? "bg-foreground dark:bg-white text-background dark:text-black border-foreground dark:border-white"
                                : "border-border dark:border-zinc-900 text-muted-foreground hover:border-blue-600/50"
                            )}
                          >
                            {t(range)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                        {t("label_deadline")}
                      </label>
                      <div className="flex flex-col gap-2">
                        {["deadline_1", "deadline_2", "deadline_3", "deadline_4"].map((dl) => (
                          <button
                            key={dl}
                            type="button"
                            onClick={() => setValue("deadline", dl)}
                            className={cn(
                              "px-4 py-2 border text-[9px] font-mono uppercase text-left transition-all",
                              selectedDeadline === dl
                                ? "bg-foreground dark:bg-white text-background dark:text-black border-foreground dark:border-white"
                                : "border-border dark:border-zinc-900 text-muted-foreground hover:border-blue-600/50"
                            )}
                          >
                            {t(dl)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className={cn(
                      "group border-b transition-colors py-2",
                      errors.message ? "border-red-500" : "border-border dark:border-zinc-800 focus-within:border-blue-600 dark:focus-within:border-blue-500"
                    )}>
                      <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                        {t("label_briefing")}
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-transparent outline-none text-foreground pt-2 font-light italic resize-none placeholder:text-muted-foreground/30"
                        placeholder={t("placeholder_briefing")}
                      />
                    </div>
                    {errors.message && <span className="text-[10px] text-red-500 font-mono uppercase">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-foreground dark:hover:bg-white dark:hover:text-black transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("btn_sending") : t("btn_send")}{" "}
                    <ArrowRight size={18} />
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
