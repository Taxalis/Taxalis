import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Nav, Footer } from "@/app/components/Nav";
import Icon, { IconName } from "@/app/components/Icon";
import { services } from "@/app/lib/services";
import { testimonials as staticTestimonials, reviewStats } from "@/app/lib/testimonials";
import { faqItems as staticFaqItems } from "@/app/lib/faq";
import LeadForm from "@/app/components/LeadForm";
import { Reveal, DELAYS } from "@/app/components/Reveal";
import { getSiteSettings, getTestimonials, getFaqItems } from "@/sanity/lib/queries";

// Design-Entwurf (Testseite): erstellt mit dem ui-ux-pro-max Skill,
// Designsystem "Trust & Authority" (Navy/Blau, Plus Jakarta Sans).
// Eigenständige Route zum Vergleich mit der bestehenden Startseite ("/").
// Nicht verlinkt, nicht indexiert.

export const metadata: Metadata = {
  title: "Design-Entwurf – Taxalis Consulting",
  robots: { index: false, follow: false },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const CREDENTIALS = ["100% digital", "DSGVO-konform", "§ 6 StBerG-konform", "5,0 ★ Google-Bewertung"];

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
    icon: "shield",
    title: "DSGVO-konform & rechtssicher",
    desc: "Ihre Daten liegen ausschließlich auf EU-Servern. Ihre Buchhaltung ist jederzeit nachvollziehbar dokumentiert.",
  },
  {
    icon: "users",
    title: "Fester Ansprechpartner",
    desc: "Eine Person kennt Ihr Unternehmen und Ihre Unterlagen – durchgängig, nicht wechselnd.",
  },
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

const FAQ_PREVIEW = [
  "Seid ihr eine Steuerkanzlei oder Steuerberater?",
  "Was kostet die Zusammenarbeit mit Taxalis Consulting?",
  "Ist die Zusammenarbeit vollständig digital möglich?",
];

const CTA_LINK =
  "inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

export default async function EntwurfHome() {
  const [siteSettings, sanityTestimonials, sanityFaqItems] = await Promise.all([
    getSiteSettings().catch(() => null),
    getTestimonials().catch(() => []),
    getFaqItems().catch(() => []),
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
  const featuredTestimonial = testimonials.find((t) => t.text && t.meta) ?? testimonials[0];

  return (
    <div className={jakarta.className}>
      <div className="fixed bottom-4 left-4 z-[200] rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800 shadow-lg">
        Design-Entwurf – nicht live, nicht verlinkt
      </div>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 sm:pt-40 sm:pb-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 0%, rgba(3,105,161,0.35) 0%, transparent 55%), radial-gradient(ellipse at 90% 30%, rgba(2,132,199,0.18) 0%, transparent 50%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold text-sky-300">
                <Icon name="map-pin" size={14} />
                {heroBadge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                {heroHeading}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                {heroText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className={`${CTA_LINK} bg-sky-500 text-white hover:bg-sky-400 focus-visible:ring-offset-slate-900`}
                >
                  Jetzt unverbindlich anfragen
                  <Icon name="arrow-right" size={16} />
                </a>
                <a
                  href="#leistungen"
                  className={`${CTA_LINK} border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 focus-visible:ring-offset-slate-900`}
                >
                  Leistungen ansehen
                </a>
              </div>

              {/* Credibility strip */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                {CREDENTIALS.map((c) => (
                  <span key={c} className="flex items-center gap-2">
                    <Icon name="check" size={16} className="text-sky-400" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/office.jpg"
                  alt="Modernes Büro von Taxalis Consulting in Berlin"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-900/10 sm:block">
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

              <div className="absolute -top-6 -right-6 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-900/10 sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
                    <Icon name="star" size={18} />
                  </span>
                  <div>
                    <div className="text-xs text-slate-400">Google-Bewertung</div>
                    <div className="text-sm font-semibold text-slate-900">
                      {reviewStats.average.toLocaleString("de-DE", { minimumFractionDigits: 1 })} · {reviewStats.count} Bewertungen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof / Stats */}
        <section className="border-b border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {(
                [
                  { n: "5,0 ★", label: "Google-Bewertung" },
                  { n: "80+", label: "Mitarbeiter größter Mandant" },
                  { n: "100%", label: "Digital & DSGVO" },
                  { n: "< 24 h", label: "Antwortzeit" },
                ] as { n: string; label: string }[]
              ).map((s) => (
                <div
                  key={s.n}
                  className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 px-4 py-5 text-center"
                >
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
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Kommt Ihnen das bekannt vor?</span>
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
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Unsere Leistungen</span>
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
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                      <Icon name={s.icon} size={26} />
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{s.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-500">{s.description}</p>
                    <ul className="mb-5 flex-1 space-y-2">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-500">
                          <Icon name="check" size={13} className="mt-0.5 flex-shrink-0 text-sky-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700">
                      Mehr erfahren
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-left">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <Icon name="shield" size={14} />
                </span>
                <p className="text-sm leading-relaxed text-slate-500">
                  <span className="font-semibold text-slate-700">Hinweis: </span>
                  Wir übernehmen die laufende Buchhaltung, Lohnabrechnung und vorbereitende Tätigkeiten gemäß § 6 StBerG.
                  Jahresabschlüsse, Steuererklärungen und Steuerberatung erfolgen weiterhin durch Ihren Steuerberater –{" "}
                  <Link href="/ueber-uns" className="font-semibold text-sky-700 hover:text-sky-800">
                    mehr dazu
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured client proof */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="text-amber-500" aria-label={`${featuredTestimonial.rating} von 5 Sternen`}>
                    {"★".repeat(featuredTestimonial.rating)}
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                    Verifizierte Google-Bewertung
                  </span>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">&ldquo;{featuredTestimonial.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{featuredTestimonial.name}</div>
                    {featuredTestimonial.meta && <div className="text-xs text-slate-500">{featuredTestimonial.meta}</div>}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section id="ablauf" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">So arbeiten wir</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  In vier Schritten zum entlasteten Backoffice
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.n} className={`delay-${(i % 4) * 75}`}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-sky-300 hover:shadow-md hover:shadow-slate-200/50">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-base font-bold text-white">
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

        {/* Quality promise + trust */}
        <section id="ueberuns" className="bg-slate-900 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">Unser Versprechen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Darauf können Sie sich verlassen</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {QUALITY_PROMISES.map((q, i) => (
                <Reveal key={q.title} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-sky-400/30">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                      <Icon name={q.icon} size={20} />
                    </span>
                    <h3 className="mb-2 font-semibold">{q.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{q.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-14 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">Über Taxalis Consulting</span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Gegründet, um Backoffice einfacher zu machen</h3>
                  <p className="mt-4 max-w-md text-white/60">
                    Taxalis Consulting wurde von Jannik Roloff in Berlin gegründet – mit dem Anspruch, Buchhaltung,
                    Lohnabrechnung und Büroorganisation so digital, transparent und persönlich zu gestalten, wie es kleine
                    und mittlere Unternehmen verdienen.
                  </p>
                  <Link
                    href="/ueber-uns"
                    className={`${CTA_LINK} mt-6 border border-white/20 text-white hover:border-sky-400 hover:text-sky-400 focus-visible:ring-offset-slate-900`}
                  >
                    Mehr über uns
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">Warum Unternehmen uns vertrauen</div>
                  <ul className="mt-4 space-y-3">
                    {[
                      "100% digital – ohne Papierchaos und Postwege",
                      "DSGVO-konform, Daten ausschließlich auf EU-Servern",
                      "Transparente Festpreise statt Stundenabrechnung",
                      "Persönlicher Ansprechpartner in Berlin",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Icon name="check" size={16} className="mt-0.5 flex-shrink-0 text-sky-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Referenzen */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Referenzen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Das sagen unsere Mandanten
                </h2>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg text-slate-600">
                  <span className="text-amber-500" aria-hidden>★★★★★</span>
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
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="text-amber-500" aria-label={`${t.rating} von 5 Sternen`}>{"★".repeat(t.rating)}</div>
                      <span className="text-5xl font-serif leading-none text-sky-100 select-none" aria-hidden="true">&ldquo;</span>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600">{t.text}</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
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
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Häufige Fragen</span>
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
                    <div className="rounded-2xl border border-slate-200 bg-white p-6">
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
                  className={`${CTA_LINK} border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700`}
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
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Kontakt</span>
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
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
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
                        <a href="mailto:info@taxalis-consulting.de" className="text-sm font-medium text-slate-900 hover:text-sky-700">
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
                        <a href="tel:+4917683151339" className="text-sm font-medium text-slate-900 hover:text-sky-700">
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
    </div>
  );
}
