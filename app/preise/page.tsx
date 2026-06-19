import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Preise & Leistungspakete – Buchhaltung & Lohnbuchhaltung Berlin",
  description:
    "Transparente Festpreise für Lohnbuchhaltung, Buchhaltung und Büroservice in Berlin. Keine versteckten Kosten – jetzt unverbindliches Angebot anfordern.",
  alternates: { canonical: "/preise" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Preise & Leistungspakete | Taxalis Consulting",
    description:
      "Transparente Festpreise für Lohnbuchhaltung, Buchhaltung und Büroservice in Berlin.",
    url: "/preise",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Preise Taxalis Consulting" }],
  },
};

const PACKAGES = [
  {
    id: "lohnbuchhaltung",
    icon: "wallet" as const,
    title: "Lohnbuchhaltung",
    tagline: "Pro Mitarbeiter / Monat",
    priceFrom: "ab 20 €",
    highlight: false,
    items: [
      "An- & Abmeldung bei Behörden",
      "Monatliche Gehaltsabrechnung",
      "Elster- & SV-Meldungen",
      "Digitale Personalakte",
      "Arbeitsverträge auf Anfrage",
      "Korrekturen inklusive",
    ],
    note: "Preis je nach Mitarbeiteranzahl und Abrechnungsvolumen. Ab 5 Mitarbeitern attraktive Staffelpreise.",
    href: "/leistungen/lohnbuchhaltung",
  },
  {
    id: "buchhaltung",
    icon: "calculator" as const,
    title: "Laufende Buchhaltung",
    tagline: "Pro Monat",
    priceFrom: "ab 99 €",
    highlight: true,
    items: [
      "Laufende Belegverbuchung",
      "Digitale Belegerfassung",
      "Offene-Posten-Verwaltung",
      "Monatliche BWA auf Wunsch",
      "Jahresabschluss-Vorbereitung",
      "Persönlicher Ansprechpartner",
    ],
    note: "Preis richtet sich nach Belegvolumen. Kleinstunternehmen und Freiberufler profitieren von unseren Einstiegspaketen.",
    href: "/leistungen/buchhaltung",
  },
  {
    id: "bueroservice",
    icon: "plug" as const,
    title: "Büroservice & Beratung",
    tagline: "Individuell",
    priceFrom: "auf Anfrage",
    highlight: false,
    items: [
      "Unternehmensberatung",
      "Fördermittelrecherche",
      "Gründungsberatung",
      "Büroorganisation",
      "Digitales Dokumentenmanagement",
      "Individuelle Projekte",
    ],
    note: "Umfang und Preis richten sich nach Ihrem konkreten Bedarf. Gemeinsam finden wir das passende Paket.",
    href: "/leistungen/bueroservice",
  },
  {
    id: "jahresabschluesse",
    icon: "stack" as const,
    title: "Jahresabschluss-Vorbereitung",
    tagline: "Einmalig / pro Jahr",
    priceFrom: "auf Anfrage",
    highlight: false,
    items: [
      "Aufbereitung der Buchführungsunterlagen",
      "Abstimmung mit Ihrem Steuerberater",
      "Anlagenvermögen & AfA-Tabellen",
      "Rückstellungen & Abgrenzungen",
      "DATEV-Export auf Wunsch",
      "Digitale Übergabe",
    ],
    note: "Wir bereiten Ihren Jahresabschluss vor – Ihr Steuerberater erstellt ihn. So sparen Sie Steuerberaterkosten.",
    href: "/leistungen/jahresabschluesse",
  },
];

const FAQS = [
  {
    q: "Wie werden die Preise genau berechnet?",
    a: "Unsere Preise richten sich nach dem tatsächlichen Aufwand – bei der Lohnbuchhaltung nach Mitarbeiteranzahl, bei der Buchhaltung nach Belegvolumen. Nach einem kostenlosen Erstgespräch erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.",
  },
  {
    q: "Gibt es Mindestlaufzeiten?",
    a: "Unsere Standardverträge laufen auf monatlicher Basis mit einer Kündigungsfrist von vier Wochen. Für Jahresabschluss-Vorbereitung und Beratungsprojekte gilt ein projektbezogenes Honorar ohne Abo-Bindung.",
  },
  {
    q: "Was ist in den Preisen enthalten?",
    a: "Alle laufenden Leistungen sind im Festpreis enthalten – inklusive Rückfragen per E-Mail und Telefon, Korrekturen und digitaler Bereitstellung. Zusatzleistungen wie Arbeitsverträge oder Sonderprojekte werden transparent separat ausgewiesen.",
  },
  {
    q: "Bin ich als Steuerberater-Kunde zusätzlich auf Sie angewiesen?",
    a: "Nein, wir arbeiten ideal zusammen mit Ihrem bestehenden Steuerberater. Wir übernehmen die vorbereitende Buchführung und Lohnabrechnung – Ihr Steuerberater konzentriert sich auf die steuerliche Beratung und Jahresabschlüsse. Das spart Ihnen häufig Steuerberaterkosten.",
  },
];

export default function PreisePage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-emerald-600">Startseite</Link>
                <span>/</span>
                <span className="text-slate-600">Preise</span>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Transparente Festpreise</span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Preise & Leistungspakete
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Keine Stundensätze, keine Überraschungen. Sie erhalten ein verbindliches Festpreisangebot –
                abgestimmt auf Ihr Unternehmen und Ihr Volumen.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Kostenloses Erstgespräch
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="tel:+4917683151339"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-600"
                >
                  <Icon name="phone" size={16} />
                  +49 176 831 51339
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-slate-100 bg-white py-6">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: "lock" as const, label: "Festpreisgarantie" },
                { icon: "server" as const, label: "100% digital" },
                { icon: "check" as const, label: "Keine Mindestlaufzeit" },
                { icon: "star" as const, label: "5,0 Google-Bewertung" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <Icon name={item.icon} size={16} className="text-emerald-500 flex-shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Alle Leistungen im Überblick
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Wählen Sie die Leistungen, die zu Ihrem Unternehmen passen – oder kombinieren Sie mehrere.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {PACKAGES.map((pkg, i) => (
                <Reveal key={pkg.id} className={DELAYS[i % 4]}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-7 transition-shadow hover:shadow-xl hover:shadow-slate-200/60 ${
                      pkg.highlight
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    {pkg.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white shadow-sm">
                        Beliebt
                      </span>
                    )}
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                        pkg.highlight ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon name={pkg.icon} size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{pkg.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{pkg.tagline}</p>
                    <p className={`mt-3 text-2xl font-extrabold ${pkg.highlight ? "text-emerald-600" : "text-slate-900"}`}>
                      {pkg.priceFrom}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <Icon name="check" size={15} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs leading-relaxed text-slate-400">{pkg.note}</p>
                    <div className="mt-6 flex flex-col gap-2">
                      <a
                        href="/#kontakt"
                        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                          pkg.highlight
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-slate-900 text-white hover:bg-emerald-600"
                        }`}
                      >
                        Angebot anfragen
                        <Icon name="arrow-right" size={14} />
                      </a>
                      <Link
                        href={pkg.href}
                        className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:border-emerald-200 hover:text-emerald-600"
                      >
                        Leistung entdecken
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wie Preise entstehen */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Transparenz</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Wie unser Preis entsteht</h2>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  n: "1",
                  title: "Kostenloses Erstgespräch",
                  desc: "Wir lernen Ihr Unternehmen kennen – Branche, Mitarbeiterzahl, Belegvolumen und Ihre individuellen Anforderungen.",
                },
                {
                  n: "2",
                  title: "Individuelles Festpreisangebot",
                  desc: "Auf Basis des Erstgesprächs erhalten Sie innerhalb von 24 Stunden ein transparentes Angebot ohne versteckte Kosten.",
                },
                {
                  n: "3",
                  title: "Sofort loslegen",
                  desc: "Nach Ihrer Freigabe starten wir nahtlos – digitales Onboarding, klare Prozesse, persönlicher Ansprechpartner.",
                },
              ].map((step, i) => (
                <Reveal key={step.n} className={DELAYS[i]}>
                  <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-white">
                      {step.n}
                    </span>
                    <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Preisfragen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Häufige Fragen zu unseren Preisen</h2>
              </div>
            </Reveal>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <Reveal key={i} className={DELAYS[i % 3]}>
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 font-semibold text-slate-900">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Jetzt anfragen</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ihr unverbindliches Angebot
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                In einem kurzen Gespräch (15 Min.) klären wir, welche Leistungen für Sie sinnvoll sind –
                und was das konkret kostet.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  Kostenloses Erstgespräch
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="mailto:info@taxalis-consulting.de"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  <Icon name="mail" size={16} />
                  info@taxalis-consulting.de
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
