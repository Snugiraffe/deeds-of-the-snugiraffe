"use client";

import { useState } from "react";

const copy = {
  en: {
    eyebrow: "Deeds of the Snugiraffe",
    title: "Translation Portfolio",
    body: "Welcome! I built this website (in an attempt to) keep track of my projects in the wild and wonderful world of boardgame localisation. Take a peek, perhaps you’ll even find something familiar.",
    nav: ["Projects", "About", "Contact"],
  },
  de: {
    eyebrow: "Taten der Snugiraffe",
    title: "Übersetzungsportfolio",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in der bunten Welt der Brettspiellokalisierung unterwegs. Schau dich um, vielleicht findest du sogar etwas Vertrautes.",
    nav: ["Projekte", "Über mich", "Kontakt"],
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "de">("en");
  const text = copy[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFDB61] text-[#001AE6]">
      <div className="relative min-h-screen px-8 py-10 md:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute left-[7%] top-[13%] text-7xl rotate-[-18deg]">♟</div>
          <div className="absolute right-[14%] top-[10%] text-8xl rotate-[12deg]">☽</div>
          <div className="absolute left-[17%] bottom-[14%] text-8xl rotate-[20deg]">✦</div>
          <div className="absolute right-[8%] bottom-[18%] text-7xl rotate-[-10deg]">⚂</div>
          <div className="absolute left-[48%] top-[40%] text-9xl rotate-[8deg]">▧</div>
        </div>

        <div className="relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <section className="max-w-2xl">
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

            <p className="mb-4 text-2xl font-black tracking-wide md:text-4xl">
              {text.eyebrow}
            </p>

            <h1 className="mb-8 max-w-xl text-5xl font-black leading-none tracking-tight md:text-7xl">
              {text.title}
            </h1>

            <p className="max-w-xl text-xl font-semibold leading-relaxed md:text-2xl">
              {text.body}
            </p>
          </section>

          <nav className="justify-self-start md:justify-self-center">
            <div className="flex w-72 flex-col gap-5">
              {text.nav.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-3xl border-4 border-[#001AE6] bg-[#FFDB61]/70 px-8 py-5 text-3xl font-black shadow-[8px_8px_0_#001AE6] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#001AE6]"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}