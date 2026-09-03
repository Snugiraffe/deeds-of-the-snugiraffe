"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "de";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("snugiraffe-language");

    if (savedLanguage === "en" || savedLanguage === "de") {
      setLanguageState(savedLanguage);
    }
  }, []);

  function setLanguage(language: Language) {
    setLanguageState(language);
    localStorage.setItem("snugiraffe-language", language);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}