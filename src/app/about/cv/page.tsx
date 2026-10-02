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
    diptransLabel: "IoL Level 7 Certificate",
    diptransOpen: "Open PDF",
    diptransDownload: "Download",
    dscLabel: "Reference Document Service Center (German)",
    dscOpen: "Open PDF",
    dscDownload: "Download",
    lionbridgeLabel: "Reference Lionbridge (German)",
    lionbridgeOpen: "Open PDF",
    lionbridgeDownload: "Download",
  },
  de: {
    back: "← Zurück zu Wer ist Ben?",
    title: "Die weniger schmuckhafte Version",
    intro: `Lebenslauf, Arbeitszeugnisse`,
    cvLabel: "Lebenslauf",
    open: "PDF öffnen",
    download: "Herunterladen",
    diptransLabel: "IoL Level 7 Urkunde",
    diptransOpen: "PDF öffnen",
    diptransDownload: "Herunterladen",
    dscLabel: "Arbeitszeugnis Document Service Center",
    dscOpen: "PDF öffnen",
    dscDownload: "Herunterladen",
    lionbridgeLabel: "Arbeitszeugnis Lionbridge",
    lionbridgeOpen: "PDF öffnen",
    lionbridgeDownload: "Herunterladen",
  },
};
const documents = {
  en: {
    cv: "/documents/CV_ben-shipham.pdf",
    thumbnail: "/images/documents/thumbnail-cv-2026-en.webp",
    diptrans: "/documents/diptrans.pdf",
    diptransThumbnail: "/images/documents/thumbnail-diptrans.webp",
    dsc: "/documents/Zeugnis_DSC.pdf",
    dscThumbnail: "/images/documents/thumbnail-zeugnis-dsc.webp",
    lionbridge: "/documents/Zeugnis_Lionbridge.pdf",
    lionbridgeThumbnail: "/images/documents/thumbnail-zeugnis-lionbridge.webp"
  },
  de: {
    cv: "/documents/Lebenslauf_ben-shipham.pdf",
    thumbnail: "/images/documents/thumbnail-cv-2026-de.webp",
    diptrans: "/documents/diptrans.pdf",
    diptransThumbnail: "/images/documents/thumbnail-diptrans.webp",
    dsc: "/documents/Zeugnis_DSC.pdf",
    dscThumbnail: "/images/documents/thumbnail-zeugnis-dsc.webp",
    lionbridge: "/documents/Zeugnis_Lionbridge.pdf",
    lionbridgeThumbnail: "/images/documents/thumbnail-zeugnis-lionbridge.webp"
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
        <div className="grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
         <a
         href={document.cv}
         target="_blank"
         rel="noopener noreferrer"
         className="block"
        >
    <img
      src={document.thumbnail}
      alt={text.cvLabel}
      className="aspect-[210/297] w-full rounded-xl border-4 border-[var(--snug-blue)] object-contain"
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
  <div>
  <a
    href={document.diptrans}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={document.diptransThumbnail}
      alt={text.diptransLabel}
      className="aspect-[210/297] w-full rounded-xl border-4 border-[var(--snug-blue)] object-contain"
    />
  </a>

  <h2 className="display-font mt-5 text-2xl font-black">
    {text.diptransLabel}
  </h2>

  <div className="body-font mt-2 flex gap-5 text-xl">
    <a
      href={document.diptrans}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
    >
      {text.open}
    </a>

    <a
      href={document.diptrans}
      download
      className="underline underline-offset-4"
    >
      {text.download}
    </a>
  </div>
  </div>
  <div>
  <a
    href={document.dsc}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={document.dscThumbnail}
      alt={text.dscLabel}
      className="aspect-[210/297] w-full rounded-xl border-4 border-[var(--snug-blue)] object-contain"
    />
  </a>

  <h2 className="display-font mt-5 text-2xl font-black">
    {text.dscLabel}
  </h2>

  <div className="body-font mt-2 flex gap-5 text-xl">
    <a
      href={document.dsc}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
    >
      {text.open}
    </a>

    <a
      href={document.dsc}
      download
      className="underline underline-offset-4"
    >
      {text.download}
    </a>
  </div>
</div>
    <div>
  <a
    href={document.lionbridge}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={document.lionbridgeThumbnail}
      alt={text.lionbridgeLabel}
      className="aspect-[210/297] w-full rounded-xl border-4 border-[var(--snug-blue)] object-contain"
    />
  </a>

  <h2 className="display-font mt-5 text-2xl font-black">
    {text.lionbridgeLabel}
  </h2>

  <div className="body-font mt-2 flex gap-5 text-xl">
    <a
      href={document.lionbridge}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
    >
      {text.open}
    </a>

    <a
      href={document.lionbridge}
      download
      className="underline underline-offset-4"
    >
      {text.download}
    </a>
  </div>
</div>
</div>
      </article>
    </main>
    );
}