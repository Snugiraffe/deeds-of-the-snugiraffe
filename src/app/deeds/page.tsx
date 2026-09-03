"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function DeedsPage() {
  const { language, setLanguage } = useLanguage();
  const ui = {
    en: {
      back: "← Home",
      title: "Deeds",
    },
    de: {
      back: "← Startseite",
      title: "Taten",
    },
  };
  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">
      <Link href="/" className="body-font text-xl underline">
         {ui[language].back}
      </Link>
      <h1 className="display-font mb-10 text-5xl font-black md:text-7xl">
        {ui[language].title}
      </h1>
      <div className="mb-8 flex gap-3 text-sm font-bold tracking-[0.2em]">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "underline underline-offset-4" : "opacity-60"}
              >
                EN
              </button>
              <span>/</span>
              <button
                onClick={() => setLanguage("de")}
                className={language === "de" ? "underline underline-offset-4" : "opacity-60"}
              >
                DE
              </button>
            </div>

      <div className="grid max-w-4xl gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/deeds/${project.slug}`}
            className="rounded-3xl border-4 border-[#001AE6] bg-[#FFDF9D]/75 p-6 shadow-[8px_8px_0_#001AE6] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#001AE6]"
          >
            <h2 className="display-font text-3xl font-black">
              {project.title[language]}
            </h2>
            <p className="body-font mt-2 text-xl">
              {project.publisher} · {project.role[language]}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}