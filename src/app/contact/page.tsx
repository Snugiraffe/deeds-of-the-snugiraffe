"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const ui = {
  en: {
    back: "← Back to homepage",
    services: "Translation | Editing | DTP",
  },
  de: {
    back: "← Zur Startseite",
    services: "Übersetzung | Lektorat | DTP",
  },
};

const email = "shipham.translator@online.ms";

export default function ContactPage() {
  const { language, setLanguage } = useLanguage();

  return (
    <main className="min-h-screen px-8 py-10 text-[var(--snug-blue)] md:px-16">
      <div className="mb-8 flex gap-3 text-sm font-bold tracking-[0.2em]">
        <button
          onClick={() => setLanguage("en")}
          className={
            language === "en"
              ? "underline underline-offset-4"
              : "opacity-60"
          }
        >
          EN
        </button>

        <span>/</span>

        <button
          onClick={() => setLanguage("de")}
          className={
            language === "de"
              ? "underline underline-offset-4"
              : "opacity-60"
          }
        >
          DE
        </button>
      </div>

      <Link href="/" className="body-font text-xl underline">
        {ui[language].back}
      </Link>

      <section className="mt-48 max-w-4xl md:ml-24">
        <a
          href={`mailto:${email}`}
          className="display-font inline-block text-5xl font-black leading-none md:text-7xl"
        >
          BEN SHIPHAM
        </a>

        <p className="project-blurb-font mt-4 text-2xl md:text-3xl">
          {ui[language].services}
        </p>

        <div className="project-blurb-font mt-12 space-y-1 text-xl md:text-2xl">
          <p>+49 176 499 664 39</p>

          <a
            href={`mailto:${email}`}
            className="block w-fit underline underline-offset-4"
          >
            {email}
          </a>

        </div>
      </section>
    </main>
  );
}