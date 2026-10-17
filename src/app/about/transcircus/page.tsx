"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    back: "← Back to Who's Ben?",
    title: "Translation Circus, huh? What's that then?",
    body: `You may have noticed that some of my deeds have an extra tag line saying “Translation Circus”. If you’re not active in the industry, or perhaps even if you are, you’ll perhaps not know what that’s supposed to mean, so let me fill you in a bit. 
Translation Circus is a subdivision of the German boardgame publishing house Board Game Circus. Unlike a full-blown publisher, Translation Circus acts as a localisation agency. They take on translation, page layout, and copy-editing jobs, which they then complete by outsourcing the various parts of a given job to freelancers like myself. You can see from my website that I do a fair bit of work for them. 
Translation Circus itself is a fairly small team of absolutely the loveliest people I’ve ever worked with. They’re wonderfully competent and comfortingly laid-back all at once and have brought me together with many other lovely, competent, and laid-back people, for which I’m very grateful!

If you’re a game designer or publisher with localisation needs, I’d naturally be delighted to work you directly. But if you’re looking for languages beyond English and German, or if I’m not quite what you’re looking for, reach out to them. Go on, you know you want to:`,
  },
  de: {
    back: "← Zurück zu Wer ist Ben?",
    title: "Also, was ist jetzt Translation Circus?",
    body: `Wahrscheinlich hast du gesehen, dass einige meiner Taten die Infozeile „Translation Circus“ haben. Falls du nicht selbst aus der Branche stammst, oder vielleicht sogar trotzdem, wirft das womöglich Fragen auf, deshalb will ich ein paar Worte dazu sagen.
Translation Circus ist eine Untersparte des deutschen Brettspieleverlags Board Game Circus. Anders als ein Verlag agiert Translation Circus eher als Lokalisierungsagentur. Sie übernehmen Übersetzungs-, DTP- und Copyedit-Aufträge, die sie erfüllen, indem sie die verschiedenen Arbeitspakete als Unteraufträge an Freiberufler wie mich mit vergeben. Wie ihr hier auf der Website sehen könnt, arbeite ich des Öfteren für sie.
Translation Circus besteht aus einem recht kleinen Team aus den wirklich liebsten Menschen, mit denen ich je zusammengearbeitet habe. Sie sind wundervoll kompetent und dabei herzerwärmend entspannt und haben mich in Kontakt gebracht mit noch mehr lieben, kompetenten und entspannten Menschen, wofür ich sehr dankbar bin.

Falls du selbst Spiele entwickelst oder verlegst, freue ich mich natürlich sehr, wenn ich dir direkt mit Lokalisierungsaufträgen helfen kann. Solltest du aber Lokalisierungsbedarf über Deutsch und Englisch hinaus haben oder mein Angebot vielleicht nicht das Richtige für dich sein, kontaktiere sie mal. Na los, trau dich:`,
  },
};
export default function BiographyPage() {
  const { language, setLanguage } = useLanguage();
  const text = copy[language];

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

        <p className="project-blurb-font whitespace-pre-line text-2xl leading-snug">
          {text.body}
        </p>
        <p className="project-blurb-font mt-0 text-xl md:text-2xl">
           <a
           href="mailto:translation@boardgamecircus.com"
           className="underline underline-offset-4"
             >
          translation@boardgamecircus.com
            </a>.
        </p>
      </article>
    </main>
  );
}