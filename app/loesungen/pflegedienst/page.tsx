import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";

const BENEFITS = [
  "Pflegemindestlohn nach aktueller Verordnung korrekt abrechnen",
  "Nacht-, Sonntags- und Feiertagszuschläge nach § 3b EStG",
  "Hohe Fluktuation & viele An-/Abmeldungen kein Problem",
  "Teilzeit, Vollzeit und Minijob parallel verwalten",
  "Digitale Personalakte – jederzeit und von überall abrufbar",
  "Persönlicher Ansprechpartner in Berlin-Charlottenburg",
];

const FEATURES = [
  "Monatliche Lohn- und Gehaltsabrechnungen",
  "Pflegemindestlohn – alle Stufen korrekt",
  "Schicht-, Nacht- und Feiertagszuschläge",
  "An- und Abmeldungen bei Krankenkassen",
  "Lohnsteueranmeldung via Elster",
  "Sozialversicherungsmeldungen & Nachweise",
  "Arbeitszeitkonten & Überstundenverwaltung",
  "Digitale Personalakte (E-Akte)",
  "Elterngeld- und AU-Bescheinigungen",
];

const PROCESS = [
  { title: "Erstgespräch & Bedarfsanalyse", desc: "Wir erfassen die Struktur Ihres Pflegedienstes, Ihre Schichtmodelle und Mitarbeiterzahl – kostenlos und unverbindlich." },
  { title: "Onboarding & Datentransfer", desc: "Wir richten die digitale Personalakte ein und übernehmen bestehende Mitarbeiterstammdaten strukturiert und DSGVO-konform." },
  { title: "Monatliche Abrechnung", desc: "Sie liefern die variablen Daten (Stunden, Zu-/Abgänge) – wir erledigen Abrechnung, Prüfung und alle Meldungen pünktlich." },
  { title: "Meldungen & Fristen", desc: "Lohnsteueranmeldung, Beitragsnachweise und SV-Meldungen werden fristgerecht via Elster übermittelt – kein Fristversäumnis." },
];

const FAQ = [
  {
    q: "Was kostet die Lohnabrechnung für einen Pflegedienst in Berlin?",
    a: "Unsere Lohnabrechnung für Pflegedienste beginnt ab 20 € pro Mitarbeiter und Monat. Der genaue Preis hängt von der Mitarbeiterzahl, den Schichtmodellen und dem Umfang der Leistungen ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein verbindliches Festpreisangebot.",
  },
  {
    q: "Wie wird der Pflegemindestlohn in der Abrechnung berücksichtigt?",
    a: "Wir kennen die aktuellen Stufen der Pflegemindestlohnverordnung für Pflegehilfskräfte, Pflegefachassistenten und Pflegefachkräfte und rechnen entsprechend korrekt ab. Die korrekte Einstufung Ihrer Mitarbeiter besprechen wir im Onboarding.",
  },
  {
    q: "Können Sie auch Schicht-, Nacht- und Feiertagszuschläge abrechnen?",
    a: "Ja. Schicht-, Nacht-, Sonntags- und Feiertagszuschläge sind ein fester Bestandteil unserer Lohnabrechnung für Pflegedienste. Wir rechnen alle Zuschlagsarten korrekt und lohnsteuerpflichtig bzw. steuerfrei entsprechend den gesetzlichen Regelungen ab.",
  },
  {
    q: "Wir haben viele Teilzeitkräfte und hohe Fluktuation – kein Problem?",
    a: "Kein Problem. Hohe Fluktuation und viele Teilzeitkräfte sind im Pflegebereich der Normalfall – und in unserem System täglich Routine. An- und Abmeldungen, Vertragsänderungen und Elternzeiten werden zeitnah und korrekt bearbeitet.",
  },
];

export default function PflegedienstPage() {
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
                <Link href="/leistungen/lohnbuchhaltung" className="transition-colors hover:text-emerald-600">Lohnbuchhaltung</Link>
                <span>/</span>
                <span className="text-slate-600">Pflegedienste</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name="users" size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Lohnabrechnung für <span className="text-emerald-600">Pflegedienste</span> in Berlin
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Pflegemindestlohn, Schichtzuschläge und hohe Fluktuation korrekt abrechnen – extern, digital und zu Festpreisen.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Unverbindliches Angebot anfordern
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="#details"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300"
                >
                  Mehr erfahren
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl px-6">
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Pflegedienste, ambulante Pflegeanbieter und Pflegeheime in Berlin stehen vor einer besonderen Herausforderung in der Lohnabrechnung: Pflegemindestlohn in verschiedenen Stufen, Nacht- und Feiertagszuschläge, hohe Mitarbeiterfluktuation und viele Teilzeitkräfte machen die monatliche Gehaltsabrechnung zu einer der komplexesten Aufgaben in der Branche.
                </p>
                <p>
                  Als externes Lohnbüro in Berlin übernehmen wir genau das – vollständig, korrekt und pünktlich. Wir kennen die Besonderheiten der Pflegebranche: die aktuellen Stufen der Pflegemindestlohnverordnung, die steuerfreien Zuschlagsgrenzen nach § 3b EStG und die besonderen Meldepflichten bei häufigem Personalwechsel.
                </p>
                <p>
                  Ihr Vorteil: Statt selbst mit Tarifregelungen, Elster-Fristen und Sozialversicherungsmeldungen zu kämpfen, konzentrieren Sie sich auf die Versorgung Ihrer Pflegebedürftigen – wir sorgen für die korrekte Abrechnung im Hintergrund.
                </p>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-6 py-5">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon name="shield" size={16} />
                </span>
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">Hinweis gemäß § 6 StBerG: </span>
                  Wir erbringen die laufende Lohnabrechnung gemäß § 6 Nr. 3 StBerG – keine Steuerberatung. Steuerliche Bewertungen und Jahresabschlüsse bleiben dem Steuerberater Ihres Vertrauens vorbehalten, mit dem wir eng zusammenarbeiten.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Benefits + Features */}
        <section id="details" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Ihr Nutzen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Was Sie davon haben
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
              <Reveal>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40">
                  <h3 className="mb-6 text-lg font-semibold text-slate-900">Ihre Vorteile</h3>
                  <ul className="space-y-4">
                    {BENEFITS.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Icon name="check" size={14} />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-600">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal className="delay-150">
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40">
                  <h3 className="mb-6 text-lg font-semibold text-slate-900">Leistungsumfang</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 rounded-lg bg-slate-50 px-3 py-2.5 text-sm leading-relaxed text-slate-600 transition-colors hover:bg-emerald-50">
                        <Icon name="arrow-right" size={14} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">So gehen wir vor</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ablauf &amp; Prozess</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <Reveal key={step.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
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
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">FAQ</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Häufige Fragen zur Lohnabrechnung für Pflegedienste
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
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Weitere Branchen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Auch für Ihre Branche
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/loesungen/sicherheitsdienst", icon: "shield" as const, title: "Sicherheitsunternehmen", desc: "Manteltarifvertrag, Schicht- und Feiertagszuschläge korrekt abrechnen." },
                { href: "/loesungen/logistik", icon: "trend-up" as const, title: "Logistikunternehmen", desc: "Fahrergehälter, Saisonpersonal und Schichtarbeit sauber abrechnen." },
                { href: "/leistungen/lohnbuchhaltung", icon: "wallet" as const, title: "Alle Branchen", desc: "Unsere Lohnbuchhaltung für Unternehmen jeder Größe und Branche in Berlin." },
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lohnabrechnung für Ihren Pflegedienst</h2>
              <p className="mt-4 text-lg text-white/70">
                Sprechen Sie uns an – wir erstellen Ihnen ein unverbindliches Festpreisangebot für Ihren Pflegedienst in Berlin.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Unverbindliches Angebot anfordern
                  <Icon name="arrow-right" size={16} />
                </a>
                <Link
                  href="/leistungen/lohnbuchhaltung"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  Zur Lohnbuchhaltung
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
