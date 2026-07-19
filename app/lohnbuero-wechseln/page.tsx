import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";

const REASONS = [
  { icon: "alert-doc" as const, title: "Fehlerhafte Abrechnungen", desc: "Korrekturen häufen sich, Mitarbeiter beschweren sich – und Sie haften am Ende für Fehler Ihres Dienstleisters." },
  { icon: "trend-up" as const, title: "Intransparente Kosten", desc: "Jede Rückfrage kostet extra, die Rechnung ist jeden Monat anders hoch. Planbarkeit sieht anders aus." },
  { icon: "users" as const, title: "Schlechte Erreichbarkeit", desc: "Wechselnde Ansprechpartner, tagelange Antwortzeiten, Warteschleifen – gerade bei Fristen ein echtes Risiko." },
  { icon: "file-text" as const, title: "Kanzlei gibt Lohn ab", desc: "Immer mehr Steuerkanzleien stoßen die Lohnabrechnung ab oder kündigen das Mandat. Sie brauchen zügig einen Nachfolger." },
];

const TAKEOVER = [
  "Vorbereitetes Kündigungsschreiben für Ihren bisherigen Anbieter",
  "Anforderung der Lohnkonten und Jahreswerte beim Altanbieter",
  "Vollständige Übernahme der Mitarbeiterstammdaten",
  "Einrichtung der digitalen Personalakte und Prozesse",
  "Nahtlose Fortführung von Elster- und SV-Meldungen",
  "Info-Schreiben an Ihre Mitarbeiter auf Wunsch",
  "Abstimmung mit Ihrem Steuerberater",
  "Keine Kosten für Wechsel und Ersteinrichtung",
];

const PROCESS = [
  { title: "Kostenloses Wechselgespräch", desc: "Wir klären Ihre Situation, Kündigungsfristen und den idealen Wechselzeitpunkt – unverbindlich, in 15 Minuten." },
  { title: "Festpreisangebot & Kündigungsvorlage", desc: "Sie erhalten innerhalb von 24 h ein verbindliches Angebot plus vorbereitete Kündigung für Ihren Altanbieter." },
  { title: "Datenübernahme durch uns", desc: "Wir fordern Lohnkonten, Jahreswerte und Stammdaten an und richten alles digital ein – Sie müssen nichts sortieren." },
  { title: "Nahtloser Start", desc: "Ab dem vereinbarten Monat rechnen wir ab. Ihre Mitarbeiter merken vom Wechsel nichts – außer dass alles pünktlich kommt." },
];

const FAQ = [
  {
    q: "Was kostet der Wechsel des Lohnbüros?",
    a: "Bei Taxalis Consulting nichts. Datenübernahme, Ersteinrichtung und die Umstellung der Prozesse sind im Festpreis enthalten. Sie zahlen erst ab der ersten regulären Abrechnung – ab 20 € pro Mitarbeiter und Monat.",
  },
  {
    q: "Kann ich mitten im Jahr das Lohnbüro wechseln?",
    a: "Ja. Der Wechsel ist zu jedem Monatswechsel möglich, nicht nur zum Jahreswechsel. Wir übernehmen die Lohnkonten und Jahreswerte aus Ihrem bisherigen System, sodass Lohnsteuerbescheinigungen und Meldungen korrekt weiterlaufen.",
  },
  {
    q: "Fällt während des Wechsels eine Abrechnung aus?",
    a: "Nein. Wir planen den Übergang so, dass die Abrechnung nahtlos weiterläuft. Ihre Mitarbeiter erhalten ihre Gehaltsabrechnungen pünktlich – auch im Wechselmonat.",
  },
  {
    q: "Muss ich meinem bisherigen Anbieter selbst kündigen?",
    a: "Die Kündigung selbst müssen Sie aussprechen, wir bereiten aber alles vor: Kündigungsschreiben, Liste der benötigten Unterlagen und die Anforderung der Daten beim bisherigen Anbieter. Sie unterschreiben nur.",
  },
  {
    q: "Welche Unterlagen werden für den Wechsel benötigt?",
    a: "Im Wesentlichen: die letzten Lohnabrechnungen bzw. Lohnkonten, Jahreslohnkonten, Stammdaten der Mitarbeiter, Betriebsnummer und die Zugänge zu Elster-Meldungen. Wir stellen Ihnen eine vollständige Checkliste bereit und fordern vieles direkt beim Altanbieter an.",
  },
];

export default function WechselPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-emerald-600">Startseite</Link>
                <span>/</span>
                <span className="text-slate-600">Lohnbüro wechseln</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name="trend-up" size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Lohnbüro wechseln – <span className="text-emerald-600">ohne Aufwand, ohne Ausfall</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Unzufrieden mit Ihrem Lohnbüro oder gibt Ihre Steuerkanzlei die Lohnabrechnung ab? Wir übernehmen alle Formalitäten – Sie unterschreiben nur.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Kostenloses Wechselgespräch
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="#ablauf"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300"
                >
                  So läuft der Wechsel ab
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Wechsel & Ersteinrichtung kostenlos · Zu jedem Monatswechsel möglich · Keine Mindestlaufzeit
              </p>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl px-6">
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Viele Berliner Unternehmen bleiben Jahre bei einem Lohnbüro oder einer Kanzlei, mit der sie längst unzufrieden sind – aus Sorge, ein Wechsel sei kompliziert, riskant oder teuer. Die Realität: Ein gut organisierter Wechsel dauert wenige Tage Ihrer Zeit und läuft für Ihre Mitarbeiter völlig unbemerkt ab.
                </p>
                <p>
                  Wir haben den Wechselprozess standardisiert. Von der vorbereiteten Kündigung über die Anforderung Ihrer Lohnkonten beim Altanbieter bis zur nahtlosen Fortführung aller Elster- und Sozialversicherungsmeldungen übernehmen wir jeden Schritt. Auch die Übernahme der laufenden Buchhaltung ist auf demselben Weg möglich.
                </p>
                <p>
                  Das gilt übrigens auch, wenn Ihre Steuerkanzlei die Lohnabrechnung abgibt – ein zunehmend häufiger Fall. Wir übernehmen den Lohn, Ihre Kanzlei behält Jahresabschluss und Steuerberatung, und beide Seiten arbeiten sauber zusammen.
                </p>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-6 py-5">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon name="shield" size={16} />
                </span>
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">Hinweis gemäß § 6 StBerG: </span>
                  Wir erbringen die laufende Lohnabrechnung und Buchführung gemäß § 6 StBerG – keine Steuerberatung. Jahresabschlüsse und steuerliche Beratung bleiben bei Ihrem Steuerberater, mit dem wir eng zusammenarbeiten.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Gründe */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Kommt Ihnen das bekannt vor?</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Gute Gründe für einen Wechsel
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon name={r.icon} size={22} />
                    </span>
                    <h3 className="mb-2 font-semibold text-slate-900">{r.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wir übernehmen */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Unser Wechselservice</span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Wir übernehmen die Formalitäten – Sie unterschreiben nur
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Der häufigste Grund, einen überfälligen Wechsel aufzuschieben, ist der befürchtete Aufwand. Deshalb nehmen wir Ihnen alles ab, was rechtlich möglich ist – kostenlos.
                  </p>
                  <a
                    href="/#kontakt"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    Jetzt Wechsel anfragen
                    <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </Reveal>
              <Reveal className="delay-150">
                <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40">
                  <ul className="space-y-4">
                    {TAKEOVER.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Icon name="check" size={14} />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-600">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">So läuft der Wechsel ab</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">In vier Schritten zum neuen Lohnbüro</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <Reveal key={step.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">FAQ</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Häufige Fragen zum Wechsel
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 space-y-4">
              {FAQ.map((item, i) => (
                <Reveal key={i} className={DELAYS[i % 4]}>
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40">
                    <h3 className="font-semibold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-600"
                >
                  Alle häufigen Fragen
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Passende Leistungen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Das übernehmen wir nach dem Wechsel
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/leistungen/lohnbuchhaltung", icon: "users" as const, title: "Lohnbuchhaltung", desc: "Monatliche Abrechnung, Meldewesen und digitale Personalakte – ab 20 € pro Mitarbeiter." },
                { href: "/leistungen/buchhaltung", icon: "bar-chart" as const, title: "Laufende Buchhaltung", desc: "Belegverbuchung, USt-Meldung und BWA – auch die Buchhaltung wechselt problemlos mit." },
                { href: "/preise", icon: "file-text" as const, title: "Preise & Pakete", desc: "Transparente Festpreise ohne versteckte Kosten – vergleichen Sie selbst." },
              ].map((s, i) => (
                <Reveal key={s.href} className={DELAYS[i % 3]}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon name={s.icon} size={22} />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                      Mehr erfahren <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-900 py-20 text-center text-white sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-2xl px-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bereit für ein Lohnbüro, das liefert?</h2>
              <p className="mt-4 text-lg text-white/70">
                15 Minuten Wechselgespräch genügen – danach wissen Sie, wie schnell und einfach der Umstieg für Ihr Unternehmen ist.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Kostenloses Wechselgespräch
                  <Icon name="arrow-right" size={16} />
                </a>
                <Link
                  href="/preise"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  Preise ansehen
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
