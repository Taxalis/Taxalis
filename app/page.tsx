import Link from "next/link";
import Image from "next/image";
import { Nav, Footer } from "@/app/components/Nav";
import Icon, { IconName } from "@/app/components/Icon";
import { services } from "@/app/lib/services";
import { testimonials as staticTestimonials, reviewStats } from "@/app/lib/testimonials";
import { faqItems as staticFaqItems } from "@/app/lib/faq";
import LeadForm from "@/app/components/LeadForm";
import { Reveal, DELAYS } from "@/app/components/Reveal";
import { getSiteSettings, getTestimonials, getFaqItems } from "@/sanity/lib/queries";

// Inhalte werden bei jedem Deployment/Revalidate frisch aus Sanity geladen.
// Solange in Sanity noch keine Inhalte gepflegt sind, greifen die
// bestehenden Texte aus app/lib/*.ts als Fallback, damit die Seite nie leer ist.

const PAIN_POINTS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "alert-doc",
    title: "Belege stapeln sich",
    desc: "Rechnungen, Quittungen und Verträge sammeln sich, statt zeitnah erfasst zu werden – das kostet später Zeit und Nerven.",
  },
  {
    icon: "clock",
    title: "Lohnabrechnung kostet wertvolle Zeit",
    desc: "Gehaltsabrechnungen, Meldungen und Fristen binden Kapazitäten, die im Tagesgeschäft fehlen.",
  },
  {
    icon: "stack",
    title: "Keine Zeit für Buchhaltung neben dem Tagesgeschäft",
    desc: "Zwischen Kundenterminen und operativem Alltag bleibt die Verwaltung oft auf der Strecke.",
  },
  {
    icon: "plug",
    title: "Unklare Kosten bei klassischen Kanzleien",
    desc: "Stundensätze und intransparente Abrechnungen erschweren die Planung Ihrer Backoffice-Kosten.",
  },
];

const TRUST_POINTS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "server",
    title: "100% digital",
    desc: "Belege, Auswertungen und Kommunikation laufen vollständig digital – ohne Papierchaos und Postwege.",
  },
  {
    icon: "lock",
    title: "DSGVO-konform",
    desc: "Ihre Daten werden ausschließlich auf Servern in der EU verarbeitet und nach geltendem Datenschutzrecht behandelt.",
  },
  {
    icon: "calculator",
    title: "Transparente Festpreise",
    desc: "Klare Konditionen statt überraschender Stundenabrechnungen – Sie wissen vorab, was auf Sie zukommt.",
  },
  {
    icon: "users",
    title: "Persönlicher Ansprechpartner",
    desc: "Ein fester Ansprechpartner in Berlin kennt Ihr Unternehmen und ist direkt erreichbar.",
  },
];

const QUALITY_PROMISES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "clock",
    title: "Antwort innerhalb 24 Stunden",
    desc: "Wir melden uns werktags innerhalb eines Arbeitstages – ohne Warteschleifen oder anonyme Hotlines.",
  },
  {
    icon: "calculator",
    title: "Transparente Festpreise",
    desc: "Sie kennen Ihre Kosten von Anfang an. Keine versteckten Gebühren, keine Überraschungen auf der Rechnung.",
  },
  {
    icon: "users",
    title: "Fester Ansprechpartner",
    desc: "Eine Person kennt Ihr Unternehmen und Ihre Unterlagen – durchgängig, nicht wechselnd.",
  },
  {
    icon: "shield",
    title: "Rechtssicher & vorbereitet",
    desc: "Ihre Buchhaltung ist jederzeit aktuell, nachvollziehbar und optimal für Ihren Steuerberater vorbereitet.",
  },
];

const FAQ_PREVIEW = [
  "Seid ihr eine Steuerkanzlei oder Steuerberater?",
  "Was kostet die Zusammenarbeit mit Taxalis Consulting?",
  "Ist die Zusammenarbeit vollständig digital möglich?",
];

const PROCESS_STEPS = [
  {
    n: "1",
    title: "Kostenloses Erstgespräch",
    desc: "Wir besprechen Ihren aktuellen Stand, Ihre Anforderungen und klären, welche Leistungen für Sie sinnvoll sind.",
  },
  {
    n: "2",
    title: "Digitales Setup",
    desc: "Wir richten die digitalen Prozesse für Belegerfassung, Lohnbuchhaltung oder Büroservice für Ihr Unternehmen ein.",
  },
  {
    n: "3",
    title: "Laufende Betreuung",
    desc: "Wir übernehmen die vereinbarten Aufgaben zuverlässig im laufenden Betrieb – Sie behalten jederzeit den Überblick.",
  },
  {
    n: "4",
    title: "Transparente Auswertung",
    desc: "Sie erhalten regelmäßige, verständliche Auswertungen zu Ihrer wirtschaftlichen Lage.",
  },
];

export default async function Home() {
  const [siteSettings, sanityTestimonials, sanityFaqItems] = await Promise.all([
    getSiteSettings(),
    getTestimonials(),
    getFaqItems(),
  ]);

  const heroBadge = siteSettings?.heroBadge || "Digitaler Backoffice-Partner in Berlin";
  const heroHeading =
    siteSettings?.heroHeading ||
    "Premium Büroservice & Lohnbuchhaltung für Berliner Unternehmen";
  const heroText =
    siteSettings?.heroText ||
    "Taxalis Consulting übernimmt Lohnbuchhaltung, laufende Buchhaltung und administrativen Büroservice – transparent, zu 100% digital und DSGVO-konform. Damit Sie sich auf Ihr Kerngeschäft konzentrieren können.";

  const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials : staticTestimonials;
  const faqItems = sanityFaqItems.length > 0 ? sanityFaqItems : staticFaqItems;

  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-36 pb-20 sm:pt-44 sm:pb-28" style={{ backgroundImage: "radial-gradient(ellipse at 15% 60%, rgba(16,185,129,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(16,185,129,0.05) 0%, transparent 50%)" }}>
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                <Icon name="map-pin" size={14} />
                {heroBadge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {heroHeading}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                {heroText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Jetzt unverbindlich anfragen
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300"
                >
                  Leistungen ansehen
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                {["100% digital", "DSGVO-konform", "Persönlicher Ansprechpartner in Berlin"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Icon name="check" size={16} className="text-emerald-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/70 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/office.jpg"
                  alt="Modernes Büro von Taxalis Consulting in Berlin"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap gap-2">
                    {["100% digital", "DSGVO-konform", "Transparente Festpreise"].map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-200/70 sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                    <Icon name="shield" size={18} />
                  </span>
                  <div>
                    <div className="text-xs text-slate-400">Datenschutz</div>
                    <div className="text-sm font-semibold text-slate-900">DSGVO-konform</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-200/70 sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                    <Icon name="map-pin" size={18} />
                  </span>
                  <div>
                    <div className="text-xs text-slate-400">Standort</div>
                    <div className="text-sm font-semibold text-slate-900">Berlin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 sm:grid-cols-4">
              {(
                [
                  { n: "5,0 ★", label: "Google-Bewertung" },
                  { n: "4", label: "Kernleistungen" },
                  { n: "100%", label: "Digital & DSGVO" },
                  { n: "< 24 h", label: "Antwortzeit" },
                ] as { n: string; label: string }[]
              ).map((s) => (
                <div key={s.n} className="flex flex-col items-center gap-0.5 text-center">
                  <span className="text-2xl font-bold text-slate-900">{s.n}</span>
                  <span className="text-xs text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Kommt Ihnen das bekannt vor?</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Verwaltung sollte nicht im Weg stehen
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {PAIN_POINTS.map((p, i) => (
                <Reveal key={p.title} className={DELAYS[i % 4]}>
                  <div className="flex h-full gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm">
                      <Icon name={p.icon} size={20} />
                    </span>
                    <div>
                      <div className="mb-1 font-semibold text-slate-900">{p.title}</div>
                      <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Unsere Leistungen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Alles aus einer Hand für Ihr Backoffice
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Von der laufenden Buchhaltung bis zur Lohnabrechnung – wählen Sie einzelne Bausteine oder ein vollständiges Paket.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.id} className={DELAYS[i % 4]}>
                  <Link
                    href={`/leistungen/${s.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon name={s.icon} size={26} />
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{s.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-500">{s.description}</p>
                    <ul className="mb-5 flex-1 space-y-2">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-500">
                          <Icon name="check" size={13} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                      Mehr erfahren
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-left">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon name="shield" size={14} />
                </span>
                <p className="text-sm leading-relaxed text-slate-500">
                  <span className="font-semibold text-slate-700">Hinweis: </span>
                  Wir übernehmen die laufende Buchhaltung, Lohnabrechnung und vorbereitende Tätigkeiten gemäß § 6 StBerG.
                  Jahresabschlüsse, Steuererklärungen und Steuerberatung erfolgen weiterhin durch Ihren Steuerberater –{" "}
                  <Link href="/ueber-uns" className="font-semibold text-emerald-600 hover:text-emerald-700">
                    mehr dazu
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Branchen */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Für Ihre Branche</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Spezialisierte Lohnabrechnung für Ihre Branche
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Pflegemindestlohn, Manteltarifverträge, Schichtzuschläge – wir kennen die branchenspezifischen Anforderungen.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  href: "/loesungen/pflegedienst",
                  icon: "users" as IconName,
                  label: "Pflegedienste",
                  desc: "Pflegemindestlohn, Nacht- & Feiertagszuschläge, Teilzeit und Minijob – korrekt und fristgerecht abgerechnet.",
                  tags: ["Pflegemindestlohn", "§ 3b EStG Zuschläge", "Digitale Personalakte"],
                },
                {
                  href: "/loesungen/sicherheitsdienst",
                  icon: "shield" as IconName,
                  label: "Sicherheitsunternehmen",
                  desc: "Manteltarifvertrag Bewachungsgewerbe, Wechselschichten, Minijobber – wir rechnen tarifkonform ab.",
                  tags: ["Manteltarifvertrag BDSW", "Schichtzuschläge", "Minijob-Abrechnung"],
                },
                {
                  href: "/loesungen/logistik",
                  icon: "plug" as IconName,
                  label: "Logistikbetriebe",
                  desc: "Fahrergehälter, Spesen, Saisonpersonal und Schichtarbeit – auch bei hoher Mitarbeiterfluktuation.",
                  tags: ["Fahrergehälter & Spesen", "Kurzfristige Beschäftigung", "Arbeitszeitkonten"],
                },
              ].map((b, i) => (
                <Reveal key={b.href} className={DELAYS[i % 4]}>
                  <Link
                    href={b.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon name={b.icon} size={26} />
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{b.label}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-500">{b.desc}</p>
                    <div className="mb-5 flex flex-1 flex-wrap gap-1.5">
                      {b.tags.map((t) => (
                        <span key={t} className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                      Mehr erfahren
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="ablauf" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">So arbeiten wir</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  In vier Schritten zum entlasteten Backoffice
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.n} className={`delay-${(i % 4) * 75}`}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:border-emerald-200 hover:shadow-md hover:shadow-slate-200/50">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-base font-bold text-white shadow-md shadow-emerald-500/30">
                      {step.n}
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quality promise */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Unser Versprechen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Darauf können Sie sich verlassen
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {QUALITY_PROMISES.map((q, i) => (
                <Reveal key={q.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon name={q.icon} size={20} />
                    </span>
                    <h3 className="mb-2 font-semibold text-slate-900">{q.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{q.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why us / trust */}
        <section id="ueberuns" className="bg-neutral-900 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Über Taxalis Consulting</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Warum Unternehmen uns vertrauen</h2>
                <p className="mt-4 max-w-md text-white/60">
                  Taxalis Consulting wurde von Jannik Roloff in Berlin gegründet – mit dem Anspruch, Buchhaltung,
                  Lohnabrechnung und Büroorganisation so digital, transparent und persönlich zu gestalten, wie es kleine
                  und mittlere Unternehmen verdienen.
                </p>
                <Link
                  href="/ueber-uns"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-emerald-400 hover:text-emerald-400"
                >
                  Mehr über uns
                  <Icon name="arrow-right" size={16} />
                </Link>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {TRUST_POINTS.map((t, i) => (
                  <Reveal key={t.title} className={`delay-${(i % 4) * 75}`}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                        <Icon name={t.icon} size={20} />
                      </span>
                      <h3 className="mb-2 font-semibold">{t.title}</h3>
                      <p className="text-sm leading-relaxed text-white/60">{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Referenzen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Das sagen unsere Mandanten
                </h2>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg text-slate-600">
                  <span className="text-amber-400" aria-hidden>★★★★★</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      {reviewStats.average.toLocaleString("de-DE", { minimumFractionDigits: 1 })}
                    </strong>{" "}
                    von 5 · {reviewStats.count} Bewertungen auf {reviewStats.source}
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.filter((t) => t.text).map((t, i) => (
                <Reveal key={t.name} className={DELAYS[i % 3]}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-200/40">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="text-amber-400" aria-label={`${t.rating} von 5 Sternen`}>{"★".repeat(t.rating)}</div>
                      <span className="text-5xl font-serif leading-none text-emerald-100 select-none" aria-hidden="true">&ldquo;</span>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600 italic">{t.text}</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                        {t.meta && <div className="text-xs text-slate-400">{t.meta}</div>}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Häufige Fragen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Gut zu wissen
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 space-y-4">
              {FAQ_PREVIEW.map((q, i) => {
                const item = faqItems.find((f) => f.question === q);
                if (!item) return null;
                return (
                  <Reveal key={q} className={DELAYS[i % 4]}>
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40">
                      <h3 className="font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.answer}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal>
              <div className="mt-10 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-600"
                >
                  Alle Fragen ansehen
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Kontakt</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Lernen wir uns kennen
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Schildern Sie uns kurz Ihren Bedarf – wir melden uns persönlich bei Ihnen zurück.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <Reveal>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                        <Icon name="sparkle" size={18} />
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900">Aktuell freie Kapazitäten</div>
                        <div className="text-sm text-slate-600">für neue Mandanten in Berlin</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon name="map-pin" size={16} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">Adresse</div>
                        <div className="text-sm font-medium text-slate-900">Wilmersdorfer Str. 122-123, 10627 Berlin</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon name="mail" size={16} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">E-Mail</div>
                        <a href="mailto:info@taxalis-consulting.de" className="text-sm font-medium text-slate-900 hover:text-emerald-600">
                          info@taxalis-consulting.de
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon name="phone" size={16} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">Telefon</div>
                        <a href="tel:+4917683151339" className="text-sm font-medium text-slate-900 hover:text-emerald-600">
                          0176 83151339
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["DSGVO-konform", "Diskret", "100% digital"].map((b) => (
                      <span key={b} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <LeadForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
