"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const { language, setLanguage } = useLanguage();
  const ui = {
    en: {
      back: "← Deeds",
      clickMe: "↑ Click me!",
    },
    de: {
      back: "← Taten",
      clickMe: "↑ Klick mich!",
    },
  };

  const project = projects.find((item) => item.slug === params.slug);
  

  if (!project) {
    return <main className="p-10 text-[var(--snug-blue)]">Project not found.</main>;
  }

  return (
    <main className="min-h-screen px-8 py-10 text-[var(--snug-blue)] md:px-16">
      <Link href="/deeds" className="body-font text-xl underline">
       {ui[language].back}
      </Link>

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
  <article className="rounded-3xl border-4 border-[var(--snug-blue)] bg-[#FFDF9D]/75 p-8 shadow-[8px_8px_0_var(--snug-blue)]">
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

    <h1 className="display-font mb-4 text-4xl font-black">
      {project.title[language]}
    </h1>

    <p className="body-font mb-2 text-xl">
      {project.publisher} · {project.year}
    </p>

    <p className="body-font mb-8 text-xl font-bold">
      {project.role[language]}
    </p>

    <p className="project-blurb-font whitespace-pre-line text-2xl font-bold leading-snug">
      {project.description[language]}
    </p>
  </article>

  {project.cover && (
    <div>
    <a
    href={project.cover[language].bggUrl}
    target="_blank"
    rel="noopener noreferrer"
    >
    <img
      src={project.cover[language].image}
      alt={project.title[language]}
      className="w-full rounded-2xl"
    />
    </a>
   
    <p className="body-font mt-2 text-center text-lg font-bold">
      {ui[language].clickMe}
    </p>
    </div>
  
  )}
  {project.downloads && (
  <div className="mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
    {project.downloads.map((item) => (
      <div key={item.file}>
        <a
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={item.thumbnail}
            alt={item.title[language]}
            className="block h-auto w-full rounded-xl border-4 border-[var(--snug-blue)]"
          />
        </a>

        <h2 className="display-font mt-5 text-2xl font-black">
          {item.title[language]}
        </h2>

        <div className="body-font mt-2 flex gap-5 text-xl">
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {language === "en" ? "Open PDF" : "PDF öffnen"}
          </a>

          <a
            href={item.file}
            download
            className="underline underline-offset-4"
          >
            {language === "en" ? "Download" : "Herunterladen"}
          </a>
        </div>
      </div>
    ))}
  </div>
  )}
</div>
    </main>
  );
}