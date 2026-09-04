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
    return <main className="p-10 text-[#001AE6]">Project not found.</main>;
  }

  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">
      <Link href="/deeds" className="body-font text-xl underline">
       {ui[language].back}
      </Link>

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
  <article className="rounded-3xl border-4 border-[#001AE6] bg-[#FFDF9D]/75 p-8 shadow-[8px_8px_0_#001AE6]">
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
</div>
    </main>
  );
}