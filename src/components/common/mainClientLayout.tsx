"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/common/header";
import { ContactForm } from "@/components/sections/contactForm";
import { ReadingProgress } from "@/components/sections/readingProgress";
import { fadeIn } from "@/lib/animations";
import {
  ContactFormProvider,
  useContactForm,
} from "@/lib/providers/contactFormProvider";

interface MainClientLayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, openForm, closeForm } = useContactForm();

  return (
    <>
      <motion.div variants={fadeIn} initial="initial" animate="animate">
        <ReadingProgress />

        <div className="noise-overlay fixed inset-0 pointer-events-none z-60 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay" />

        <Header onStartProject={openForm} />

        <main className="relative">{children}</main>

        <ContactForm isOpen={isOpen} onClose={closeForm} />
      </motion.div>
    </>
  );
}

export function MainClientLayout({ children }: MainClientLayoutProps) {
  return (
    <ContactFormProvider>
      <LayoutContent>{children}</LayoutContent>
    </ContactFormProvider>
  );
}
