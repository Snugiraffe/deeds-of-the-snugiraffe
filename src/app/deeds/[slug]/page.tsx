"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const [language, setLanguage] = useState<"en" | "de">("en");

  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return <main className="p-10 text-[#001AE6]">Project not found.</main>;
  }

  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">
      <Link href="/deeds" className="body-font text-xl underline">
        ← Back to deeds
      </Link>

      <article className="mt-10 max-w-3xl rounded-3xl border-4 border-[#001AE6] bg-[#FFDB61]/75 p-8 shadow-[8px_8px_0_#001AE6]">
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

        <h1 className="display-font mb-4 text-5xl font-black">
          {project.title[language]}
        </h1>

        <p className="body-font mb-2 text-xl">
          {project.publisher} · {project.year}
        </p>

        <p className="body-font mb-8 text-xl font-bold">
          {project.role[language]}
        </p>

        <p className="body-font text-2xl leading-relaxed">
          {project.description[language]}
        </p>
      </article>
    </main>
  );
}