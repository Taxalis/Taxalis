import Link from "next/link";
import Image from "next/image";
import { Nav, Footer } from "@/app/components/Nav";
import Icon, { IconName } from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";

const VALUES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "shield",
    title: "Genauigkeit",
    desc: "Saubere, nachvollziehbare Buchhaltung ist die Basis für gute Entscheidungen – und für die Zusammenarbeit mit Ihrem Steuerberater.",
  },
  {
    icon: "lock",
    title: "Diskretion",
    desc: "Ihre Zahlen und die Daten Ihrer Mitarbeiter werden streng vertraulich und DSGVO-konform behandelt.",
  },
  {
    icon: "server",
    title: "Digitalität",
    desc: "Belege, Auswertungen und Kommunikation laufen vollständig digital – ortsunabhängig und jederzeit nachvollziehbar.",
  },
  {
    icon: "users",
    title: "Persönliche Betreuung",
    desc: "Ein fester Ansprechpartner kennt Ihr Unternehmen und ist direkt erreichbar – ohne Warteschleifen.",
  },
];

const APPROACH = [
  {
    n: "01",
    title: "Kennenlernen & Bedarfsanalyse",
    desc: "Im kostenlosen Erstgespräch verstehen wir Ihre aktuelle Situation, Ihre Prozesse und welche Leistungen für Sie sinnvoll sind.",
  },
  {
    n: "02",
    title: "Digitales Setup",
    desc: "Wir richten gemeinsam mit Ihnen digitale Abläufe für Belege, Lohnbuchhaltung oder Büroorganisation ein – einfach und ohne Mehraufwand für Sie.",
  },
  {
    n: "03",
    title: "Zuverlässige laufende Betreuung",
    desc: "Wir übernehmen die vereinbarten Aufgaben Monat für Monat termingerecht – Sie behalten jederzeit den Überblick über Ihre Zahlen.",
  },
  {
    n: "04",
    title: "Enge Abstimmung mit Ihrem Steuerberater",
    desc: "Für Jahresabschlüsse, Steuererklärungen und steuerliche Beratung bereiten wir alle Unterlagen vollständig auf und arbeiten direkt mit Ihrer Steuerkanzlei zusammen.",
  },
];

export default function UeberUns() {
  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-emerald-600">
                  Startseite
                </Link>
                <span>/</span>
                <span className="text-slate-600">Über uns</span>
              </nav>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                <Icon name="map-pin" size={14} />
                Persönlich. Digital. Aus Berlin.
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Ihr verlässlicher Partner für Buchhaltung, Lohn und Büroorganisation
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Taxalis Consulting steht für eine moderne, digitale Backoffice-Betreuung, die genauso zuverlässig ist wie
                persönlich. Wir entlasten kleine und mittlere Unternehmen in Berlin von Buchhaltung, Lohnabrechnung und
                administrativen Aufgaben – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Kostenloses Erstgespräch
                  <Icon name="arrow-right" size={16} />
                </a>
                <Link
                  href="/#leistungen"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </Reveal>

            <Reveal className="delay-150">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/70 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/office.jpg"
                  alt="Arbeitsplatz von Taxalis Consulting in Berlin"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap gap-2">
                    {["Gegründet von Jannik Roloff", "Berlin – Charlottenburg", "IHK-ausgebildet"].map((b) => (
                      <span key={b} className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-slate-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Unsere Geschichte</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Wer wir sind</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Taxalis Consulting wurde von Jannik Roloff in Berlin-Charlottenburg gegründet – mit dem Ziel, kleinen
                  und mittleren Unternehmen eine moderne, digitale Alternative zur klassischen Backoffice-Organisation
                  zu bieten. Jannik Roloff ist ausgebildeter Kaufmann und hat sich auf Buchhaltung und Finanzbuchhaltung
                  spezialisiert (IHK-Abschluss). Wir sind tätig gemäß § 6 Nr. 3 und 4 StBerG und kennen die
                  Herausforderungen, die Belege, Lohnabrechnungen und laufende Buchführung im Tagesgeschäft mit sich
                  bringen – aus jahrelanger Praxis.
                </p>
                <p>
                  Statt anonymer Stundenabrechnung setzen wir auf feste Ansprechpartner, klare Prozesse und
                  transparente Festpreis-Modelle. Jedes Mandat wird persönlich betreut – digital, strukturiert und mit
                  kurzen Reaktionszeiten. Unsere Mandanten kommen aus dem gesamten Berliner Stadtgebiet: von
                  Charlottenburg und Wilmersdorf über Mitte und Prenzlauer Berg bis nach Marzahn und Steglitz.
                </p>
              </div>
              {/* E-E-A-T: Qualifikationen & Zahlen */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { value: "§ 6 StBerG", label: "Rechtliche Grundlage" },
                  { value: "IHK", label: "Qualifizierter Abschluss" },
                  { value: "100 %", label: "Digitale Prozesse" },
                  { value: "Berlin", label: "Persönlich vor Ort" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
                    <div className="text-xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Wofür wir stehen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Unsere Werte</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon name={v.icon} size={20} />
                    </span>
                    <h3 className="mb-2 font-semibold text-slate-900">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Unsere Arbeitsweise</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  So arbeiten wir mit Ihnen zusammen
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {APPROACH.map((step, i) => (
                <Reveal key={step.n} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
                    <div className="mb-4 text-2xl font-bold text-emerald-500">{step.n}</div>
                    <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance / transparency */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon name="shield" size={20} />
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900">Transparenz ist uns wichtig</h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
                  <p>
                    Taxalis Consulting ist ein spezialisierter Dienstleister für Büroservice, Lohnbuchhaltung, laufende
                    Buchhaltung und Buchführung gemäß § 6 StBerG – <strong className="font-semibold text-slate-900">keine
                    Steuerberatungsgesellschaft</strong>. Wir erstellen keine Jahresabschlüsse, Steuererklärungen oder
                    verbindlichen steuerlichen Beratungen.
                  </p>
                  <p>
                    Stattdessen sorgen wir dafür, dass Ihre laufende Buchhaltung jederzeit aktuell, vollständig und
                    optimal aufbereitet ist – als verlässliche Grundlage für die Zusammenarbeit mit Ihrem Steuerberater.
                    Viele unserer Mandanten sparen dadurch spürbar bei den Kosten ihrer Steuerkanzlei.
                  </p>
                </div>
                <Link
                  href="/impressum"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Mehr zu unserem Leistungsspektrum im Impressum
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-900 py-20 text-center text-white sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-2xl px-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lernen wir uns kennen</h2>
              <p className="mt-4 text-lg text-white/70">
                Vereinbaren Sie ein kostenloses, unverbindliches Erstgespräch – wir freuen uns, Ihr Unternehmen kennenzulernen.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Jetzt Kontakt aufnehmen
                  <Icon name="arrow-right" size={16} />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  Zur Startseite
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
