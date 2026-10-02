"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    back: "← Back to Who's Ben?",
    title: "Rambling biography",
    body: `So, you really want to know more about me? I’m honestly touched. 
Just a quick word of warning, though: Below, you will find a good 1,200 words about why I love translating boardgames. If you came here looking for a more business-oriented assessment of why I think I’m good at it and what skills I can bring to the table specifically, you probably want to go back a page and try the other button.

My name is Ben Shipham (well, yes, my mother calls me Benjamin, but it makes me uncomfortable and just isn’t very snappy, is it?). I have a place and date of birth and I live at an address, but such trifling technical issues are of only passing interest in view of the opportunity I have here to regale you with a captivating story. If and when such details are deemed pertinent, the other button is there for you.

So, where to start? I might begin by telling you of my experience in the fields of technical translation, of how a profession offering fascinating insights across the breadth of human endeavour gradually shifted to become a descent into drudgery, or of how the insidious influences of corporate greed sent creeping tendrils of machine intelligence to tug at such foundations of livelihood as my profession was once able to offer myself and my family. But I’m not, in fact, going to do that, because I don’t believe it would ultimately lead to much captivation.

So my tale will instead begin with a bright-eyed and curious young lad born to a German mother and an English father, a lad who from an early age preferred stories over stamina, reading over ruckus, and snakes and ladders and ludo and chess over football. With both English and German ringing in his ears, and his spending weeks at a time with those of his family abroad from home (who were the German part at first, then later the English part), the two languages and their inherent cultural influences were native to him from the very first. While his friends played cricket and tennis, this boy would head off to Narnia and Middle-Earth or travel untold light-years to distant galaxies with Perry Rhodan. Chess, the good old Whot! card game, and the old copy of Othello the library didn’t want to keep were companions on rainy afternoons, and even many sunny ones, too! 

Imagine the boy’s amazement when he first stumbled across Heroquest in a toy shop! What was this? A board game, but with little toy heroes and monsters? And wait! There was a space version, too? Oh, but what wonders board games could hold! Hardly a surprise then that Dungeons & Dragons, Warhammer 40,000, and Battletech would steal away his attention at school, with whole days given over to quests, and lists, and tactics, and builds. 

Alas, as we all know, most of the people around us expect us to grow up and get a sensible haircut and wear sensible clothes and get a job and not play with toys when we’re adults. Well, at least so it was when our protagonist came of age, and so prospective careers needed to be sought. The most cursory of glances at his grades would show many to be just shy of mediocre, but grades in two subjects towered head and shoulders above the rest: English and German (we all saw that coming, I suppose). It was now that the harshest of realities struck home for our boy. As almost anyone working with languages will tell you, true language skills require both talent and tuition. However, while muddling and dodging his way through his school career had worked (just), it proved less of a viable strategy for university. The fundamental distractedness of a young adult (and perhaps poor choices with respect to his circle of friends) played havoc with all aspirations to an actual degree. 

Here, however, as we find our story’s hero stumbling bereft of purpose from casual job to casual job, fortune deigns to throw him a bone: Seated amongst the ex-pats in a small local pub, a stranger mentions in passing that a nearby company is looking for translators. On a whim, young Ben (he’s 25, which still counts as young) sends off an application and, to the surprise of many, lands the job. 

Right place and right time have handed him a true windfall, as he and five other young hopefuls are now taken under the wing of an experienced and wonderfully helpful team of professionals, who will instruct them in the tools and workings of the localisation business. CAT tools and style guides, customer terminology and deadlines, business meetings, workflows, and bullshit bingo: There’s as much world-building going on here as you’d find in any pulp fantasy fiction. 

Many of the following years are filled with learning and honing a craft that he has quickly come to love, but business forces are funnelling him down a path filled with car manufacturers’ bureaucracy, and for those with a keen eye, the drudgery alluded to above has begun to show its outlines on the horizon. Still, life is good and confidence (or is it naiveté?) is boundless, and when the thorns on every rose and the greener grass on that other hill paint life as a freelancer with a sheen both golden and appealing, Ben heeds the call of adventure. Later, his arms around his wife and two daughters, he will look back upon this decision as probably the best one he ever made.

We’ll now skip forward a few years (lest the reader’s undoubtedly already waning attention become completely unrecoverable) and find Ben recovering from the tender ministrations of toddlers and pre-school infants. As a freelancer and as a dad, Ben has been able to bring board games back into his life. And oh, but what wonders board games now hold! Mage Knight, Ghost Stories, Middle-Earth Quest! Court of the Dead, Nemesis, Gloomhaven! Ticket to Ride, Gaia Project, Sword & Sorcery! From immersive storytelling to insanely opulent to sprawling table-hog, from delicately beautiful to brain-bustingly puzzley to delightfully fiddly! 

With regular sleeping patterns Ben’s wits, too, are returning to him, and the realisation is dawning that the subject matter of his contracts has become a death sentence to mental health, intellectual challenge, and general joie de vivre. Something must be done, and board games are the answer. Here lies before him a landscape of beautiful things whose purpose is to bring people together and celebrate the best of human nature: ingenuity, companionship, the banter and teasing of friendly competition, something real and healthy to simply share. And many of these modern games are full of words. So. Many. Words. There must be a need for translators in this industry, too. 

Much to our lad’s chagrin, his first introductions and applications elicit no responses. It is not until he fervently and candidly begs a certain publisher to ignore his many years of experience and simply pay him the shockingly low rate they offer their part-time undergraduate freelancers that he finally finds some purchase in the games industry. Further perseverance (and attending SPIEL and Berlin Con) then helps him pave his slow way into partnerships with some of the loveliest and most pleasant people he has ever had the privilege of working with. And with the humblest of expectations but the greatest of hopes, Ben continues to chase project after project in his quest to earn a living through games!`,
  },
  de: {
    back: "← Zurück zu Wer ist Ben?",
    title: "Langatmige Lebenserzählung",
    body: `Du willst also wirklich mehr über mich wissen? Das rührt mich, ganz ehrlich.
Gleich vorweg aber noch ein schneller Hinweis: Hier folgen jetzt knapp 1,300 Wörter, die darlegen, warum ich das Übersetzen von Spielen liebe. Falls du auf der Suche nach einer eher geschäftlich-orientierten Einschätzung meiner Befähigung dazu bist und mehr darüber erfahren möchtest, was ich konkret an Fertigkeiten zu bieten habe, dann bist du mit der anderen Schaltfläche auf der vorigen Seite vermutlich besser bedient.

Ich heiße Ben Shipham (ja, gut, meine Mutter nennt mich Benjamin, aber das gefällt mir nicht so und hat auch nicht denselben Flair, oder?). Ich habe Geburtsort und -datum und wohne in einem Wohnort, aber welchen Wert haben denn schon solche technischen Kleinigkeiten angesichts der Gelegenheit, dich hier mit einer mitreißenden Geschichte zu unterhalten. Käme einmal der Zeitpunkt, da technische Kleinigkeiten für gut und nützlich erachtet würden, naja, die andere Schaltfläche rennt nicht weg.

Wo wollen wir beginnen? Ich könnte direkt mit meiner Erfahrung im Bereich technischer Übersetzung einsteigen, erzählen, wie ein Beruf voller faszinierender Einsichten in den Reichtum menschlichen Strebens sich stetig verwandelte in den Treibsand der Eintönigkeit. Oder davon, wie der stille Einfluss konzerngesteuerter Gier mit schleichenden Ausläufern maschineller Intelligenz das bisschen Fundament aushöhlte, aus dem Menschen meines Berufsstandes dereinst einmal den Lebensunterhalt für eine Familie zu schöpfen vermochten. Könnte ich machen. Ich verspreche mir davon aber nicht besonders viel mitreißende Geschichte, also lass ich das lieber.

Stattdessen soll meine Erzählung beginnen mit dem Kind einer deutschen Mutter und eines englischen Vaters. Dieser lebensfrohe, neugierige Knabe mochte von klein auf lieber Geschichten als Geraufe, lieber Worte als Weitwurf, lieber Leiterspiel und Mensch-ärger-dich-nicht und Schach als Fußball. Mit Englisch im einen und Deutsch im anderen Ohr und den häufigen und wochenlangen Aufenthalten bei der Verwandtschaft im jeweiligen Ausland (zu Beginn war das Deutschland, später dann England), saugte unser Knabe beide Sprachen mitsamt den ihnen innewohnenden kulturellen Prägungen gleichermaßen mit der Muttermilch auf. Derweil seine Freunde Cricket spielten oder Tennis, machte sich der Knabe auf nach Narnia und Mittelerde oder reiste mit Perry Rhodan unzählige Lichtjahre zu weit entfernten Galaxien. Schach, das gute alte Mau-Mau und die aus der Bücherei ausgemusterte schrammelige Ausgabe des Othello-Spiels hielten ihn an verregneten Tagen und selbst an so manchem sonnigen bei Laune.

Nun stelle man sich sein Staunen vor, als ihm in einem Spielwarengeschäft Heroquest vor die Füße fiel. Was hatten wir denn hier? Ein Brettspiel, aber mit kleinen Helden- und Monsterfiguren? Und warte nein! Es gibt auch eine Weltraumversion davon? Oh, mit welch Wundern konnten Brettspiele aufwarten! So kam es kaum überraschend, dass Dungeons & Dragons, Warhammer 40,000 und Battletech seine ganze Aufmerksamkeit verschlangen und ganze Tage (ja, auch in der Schule) dem Ausarbeiten von Abenteuern und Listen und Taktiken und Charakterfertigkeiten gewidmet wurden.

Wie wir wohl alle aus Erfahrung wissen, kommt im Leben der Augenblick, an dem so gut wie alle um uns herum erwarten, dass wir erwachsen werden, uns vernünftig frisieren und kleiden, einen Beruf aufnehmen und als Volljährige nicht mehr mit Spielsachen spielen. So erging es jedenfalls unserem Protagonisten mit Erreichen des einschlägigen Alters und von daher stand die Auslotung von Karriereaussichten an. Bereits der flüchtigste Blick auf seine Noten offenbarte die Mittelmäßigkeit seiner unternommenen Anstrengungen in Sachen schulischer Leistungen. Abgesehen von den Noten in zwei Fächern, die die anderen mit großem Abstand überflügelten: Englisch und Deutsch (na gut, das dürfte jetzt niemanden wirklich überraschen). Hier allerdings traf blanke Realität auf bloße Wunschvorstellung. So gut wie niemand, der auch nur entfernt mit Sprachen arbeitet, wird es abstreiten: Echte Sprachfertigkeiten kommen nicht vom Talent allein, sie wollen geschult werden. Leider erwies sich die in den Jahren des Schulbankdrückens einigermaßen erfolgreiche Strategie des Durchwurschtelns als weniger geeigneter Ansatz für ein Universitätsstudium. Die Hoffnungen auf einen tatsächlichen Bildungsabschluss wurden von der grundlegenden Ablenkbarkeit eines jungen Mannes und seinem nicht immer sorgfältig abgewägtem Umgang dann nach nicht allzu langer Zeit begraben.

So finden wir unseren Helden wieder, wie er denn recht ziellos von einem Gelegenheitsjob zum nächsten durch unsere Geschichte taumelt, als sich das Schicksal seiner erbarmt und ihm einen Strohhalm reicht: Umgeben von Ausgewanderten in einem kleinen Irish Pub erwähnt ein Unbekannter beiläufig ein Unternehmen, das wohl Übersetzer suche. Aus reiner Impulsivität zimmert der junge Ben (25 Jahre ist er, das zählt noch als jung) eine Bewerbung zusammen und wird, zur allseitigen Überraschung, auch tatsächlich eingestellt.

Zur rechten Zeit am rechten Ort stellt sich als wahrhaftiger Glücksfall heraus, denn Ben darf sich jetzt mit fünf weiteren Kandidaten in die Obhut sehr erfahrener Profis begeben, die freundlich und aufopferungsvoll in Welt und Werkzeuge der Lokalisierung einführen. CAT-Tools und Style Guides, Kundenterminologie und Lieferziele, Team-Meetings, Arbeitsanweisungen und Bullshit-Bingo: Hier wird allemal so viel Weltenkunde erfunden wie in jedem Fantasy-Groschenroman.

Die nächsten Jahre über verdingt sich Ben mit dem Erlernen und dem Schärfen eines Handwerks, das er schnell lieben gelernt hat. Doch gleichzeitig tragen ihn die Ströme der Wirtschaftswelt einem Strudel aus bürokratischer Automobillobpreisung entgegen und wer sehenden Auges ist, dem offenbaren sich hier schon recht deutlich die Anzeichen des eingangs erwähnten Treibsands. Nichtsdestotrotz ist das Leben schön und Vertrauen in die Zukunft (oder doch Naivität?) grenzenlos und mit der Erkenntnis, dass es keine Rose ohne Dornen gibt und dass die Kirschen im Garten nebenan doch die süßeren sein könnten, malt sich Ben ein Leben als Freiberufler aus in Farben bunter als das Leben selbst. Diesem Ruf der Freiheit folgt er sodann in ein neues Abenteuer. Viel später in seinem Leben, seine Frau und seine zwei Töchter fest in den Armen, wird Ben diese Entscheidung zufrieden als die vermutlich beste bezeichnen, die er je getroffen hat.

Wir überspringen an dieser Stelle ein paar Jahre (um die geneigte Leserschaft doch noch bis zum Ende der Erzählung bei der Stange halten zu können) und treffen auf einen Ben, der die zarten Zuneigungen von Krabbelkindern und Kindergartenzwergen langsam aber sicher hinter sich lässt. Er ist Freiberufler und Vater und jetzt, endlich, kann er wieder Raum schaffen in seinem Leben für Brettspiele! Und mit welch neuen Wundern Brettspiele nun aufwarten: Mage Knight, Ghost Stories, Abenteuer in Mittelerde! Court of the Dead, Nemesis, Gloomhaven! Zug um Zug, Gaia Project, Sword & Sorcery! Vom Eintauchen ins erzählerische Spiel über ausufernd schmuckhaft bis hin zum übergroßen Tischbesetzer, von filigraner Kunstfertigkeit über hirnschmelzende Lösungssuchen bis hin zu tausend ineinandergreifenden Kleinteilen!

Die allmähliche Wiederherstellung vernünftiger Schlafrhythmen bringt auch eine allmähliche Wiederherstellung allgemeiner Vernunftbegabung mit sich und damit geht die Erkenntnis einher, dass die Inhalte seiner Aufträge nunmehr zur Antithese geistiger Gesundheit, intellektueller Forderung und allgemeiner Lebensfreude verkommen sind. Es muss etwas geschehen und Brettspiele sind die Lösung. Vor ihm auf dem Tisch (und manchmal auch auf dem Boden daneben) liegt eine Welt ausgebreitet, die erfüllt ist von wunderschönen Dingen, deren Zweck es ist, Menschen zusammenzuführen. Hier werden die besten Aspekte menschlicher Natur gewürdigt: Einfallsreichtum, Teilhabe, der messerscharfe Witz im Austausch beim freundlichen Wettstreit, etwas, das echt ist und gesund und von Gemeinsamkeit lebt. Und viele der Spiele dieser Tage sind voller Text. So. Viel. Text. Diese Branche braucht mit Sicherheit auch Übersetzer. 

Erstes Klinkenputzen und Initiativbewerbungen auf gut Glück treffen zur nicht unerheblichen Enttäuschung unserer Hauptfigur auf nichts als Schweigen im Walde. Erst mit eindringlichem Flehen bei einem recht bekannten Verlag, über die sämtlichen Jahre der Berufserfahrung hinwegzusehen und ihn doch bitte für das lachhafte Zubrot arbeiten zu lassen, das studentischen Aushilfskräften geboten wird, kann Ben Fuß fassen in der Spielebranche. Mit ungeschwächtem Eifer (und Anwesenheit auf der SPIEL und der Berlin Con) schreitet Ben Stück um kleinstes Stück seinen Weg weiter, bis in Partnerschaften mit einigen der liebenswürdigsten und angenehmsten Menschen, mit denen er je zusammenarbeiten durfte. Und so jagt er auch heute noch, mit bescheidensten Erwartungen und dennoch größter Zuversicht, Projekt um Projekt hinterher in seiner Quest, seinen Lebensunterhalt mit Spielen zu bestreiten!`,
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
      </article>
    </main>
  );
}