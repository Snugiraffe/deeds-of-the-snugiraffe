"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    back: "← Back to Who's Ben?",
    title: "The more business-like version",
    intro: `My CV, references`,
    cvLabel: "Curriculum Vitae",
    open: "Open PDF",
    download: "Download",
  },
  de: {
    back: "← Zurück zu Wer ist Ben?",
    title: "Die weniger schmuckhafte Version",
    intro: `Lebenslauf, Arbeitszeugnisse`,
    cvLabel: "Lebenslauf",
    open: "PDF öffnen",
    download: "Herunterladen",
  },
};
const documents = {
  en: {
    cv: "/documents/CV_ben-shipham.pdf",
    thumbnail: "/images/documents/thumbnail-cv-2026-en.webp",
  },
  de: {
    cv: "/documents/Lebenslauf_ben-shipham.pdf",
    thumbnail: "/images/documents/thumbnail-cv-2026-de.webp",
  },
};

export default function CvPage() {
  const { language, setLanguage } = useLanguage();
  const text = copy[language];
  const document = documents[language];

  return (
    <main className="min-h-screen px-8 py-10 text-[var(--snug-blue)] md:px-16">
      <Link href="/about" className="body-font text-xl underline">
        {text.back}
      </Link>

      <article className="mt-10 max-w-3xl rounded-3xl border-4 border-[var(--snug-blue)] bg-[#FFDF9D]/75 p-8 shadow-[8px_8px_0_var(--snug-blue)]">
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

        <h1 className="display-font mb-8 text-4xl font-black md:text-5xl">
          {text.title}
        </h1>

        <p className="project-blurb-font mb-10 text-2xl leading-snug">
          {text.intro}
        </p>
        <div className="max-w-sm">
  <a
    href={document.cv}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={document.thumbnail}
      alt={text.cvLabel}
      className="h-auto w-full rounded-xl border-4 border-[var(--snug-blue)]"
    />
  </a>

  <h2 className="display-font mt-5 text-2xl font-black">
    {text.cvLabel}
  </h2>

  <div className="body-font mt-2 flex gap-5 text-xl">
    <a
      href={document.cv}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
    >
      {text.open}
    </a>

    <a
      href={document.cv}
      download
      className="underline underline-offset-4"
    >
      {text.download}
    </a>
  </div>
</div>
      </article>
    </main>
    );
}