"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface ContactFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    const referral = searchParams.get("referral");
    if (referral) {
      requestAnimationFrame(() => openForm());
    }
  }, [searchParams]);

  return (
    <ContactFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
}
