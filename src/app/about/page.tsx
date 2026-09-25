"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    back: "← Back to homepage",
    title: "Who's Ben?",
    body: `Hi. I’m Ben. English and German have both been my native languages ever since I was able to speak, so I translate stuff for a living.
Since you’re here, you probably like boardgames as much as I do. In fact,I like them so much, I’ve dedicated all of my business efforts to translating boardgames for the past couple of years. These days, it’s covering the bills. Well, almost.
I used to do lots of other translation stuff, starting with working as an employed translator in a big company. That was 23 years ago. It was alright, at the time, but I moved on to being a freelancer seven years later, and that’s been my business model ever since. Most of what I translated was technical mumbojumbo for industrial clients. Boring, with a capital B.
Boardgames are much better fun and I get to use language in a far friendlier way. 

Perhaps you’re here because you want to get in touch. Go ahead, here’s my email:
shipham.translator(at)online.ms

If you have a boardgame project that would like to be translated or copy-edited, I’ll be delighted to discuss rates. I can do DTP/page layout work, too.

Aynway, I’m glad you stopped by and had a look around. 
May the cards come up in your favour and your dice treat you well!`,
  },
  de: {
    back: "← Zur Startseite",
    title: "Wer ist Ben?",
    body: `Hi. Ich bin Ben. Deutsch und Englisch sind meine Muttersprachen, seit ich sprechen kann, deshalb verdiene ich mit Übersetzung meinen Lebensunterhalt.
Da du hier bist, findest du Brettspiele wahrscheinlich auch so toll wie ich. Ich finde sie tatsächlich so toll, dass ich mein gesamtes Arbeitsleben in den letzten Jahren darauf ausgerichtet habe, nur noch Brettspiele zu übersetzen. Mittlerweile kann ich davon leben. Naja, fast. 
Früher habe ich alles Mögliche übersetzt, anfangs als angestellter Übersetzer in einer großen Firma. Das war vor 23 Jahren. das war ganz OK, damals, aber nach sieben Jahren habe ich mich selbständig gemacht. Und seitdem ist das mein Geschäftsmodell. Das meiste Zeug, das ich übersetzt habe, war Technikgedöns für Industriekunden. Laaangweilig, mit ganz vielen As.
Brettspiele machen viel mehr Spaß und ich darf Sprache auch viel freundlicher einsetzen.

Vielleicht bist du hier, weil du mich kontaktieren möchtest. Mach das gerne, hier ist meine E-mailadresse:
shipham.translator(at)online.ms

Hast du vielleicht ein Brettspielprojekt, das übersetzt oder lektoriert werden möchte? Dann lass uns doch über Preise sprechen. Ich mache auch Layoutarbeit / DTP.

Es hat mich jedenfalls gefreut, dass du vorbeigeschaut und dich hier umgesehen hast.
Ich wünsche dir ein gutes Blatt und Würfel, die günstig fallen!`,
  },
};

export default function AboutPage() {
  const { language, setLanguage } = useLanguage();
  const text = copy[language];

  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">
      <Link href="/" className="body-font text-xl underline">
        {text.back}
      </Link>

      <article className="mt-10 max-w-3xl rounded-3xl border-4 border-[#001AE6] bg-[#FFDF9D]/75 p-8 shadow-[8px_8px_0_#001AE6]">
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
      </article>
    </main>
  );
}