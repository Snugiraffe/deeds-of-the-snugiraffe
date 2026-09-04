"use client";

import Link from "next/link";
import { projects } from "@/content/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function DeedsPage() {
  const { language, setLanguage } = useLanguage();

  const ui = {
    en: {
      back: "← Back to homepage",
      title: "Deeds",
    },
    de: {
      back: "← Zur Startseite",
      title: "Taten",
    },
  };

  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  let currentYear = "";

  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">

      
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
            

      <Link href="/" className="body-font text-xl underline">
        {ui[language].back}
      </Link>
    
      <h1 className="display-font mb-10 mt-10 text-5xl font-black md:text-7xl">
        {ui[language].title}
      </h1>

      
      
      <div className="max-w-3xl md:ml-24">
        {sortedProjects.map((project) => {
          const showYear = project.year !== currentYear;

          if (showYear) {
            currentYear = project.year;
          }

          return (
            <div key={project.slug}>
              {showYear && (
                <h2 className="display-font mb-4 mt-10 text-3xl font-black">
                  {project.year}
                </h2>
              )}

              <Link
                href={`/deeds/${project.slug}`}
                className="body-font mb-5 block rounded-3xl border-4 border-[#001AE6] bg-[#FFDF9D]/75 p-4 text-2xl shadow-[8px_8px_0_#001AE6] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#001AE6]"
              >
                {project.title[language]}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}