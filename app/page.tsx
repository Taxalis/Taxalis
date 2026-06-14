"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, Footer } from "@/app/components/Nav";
import Icon, { IconName } from "@/app/components/Icon";
import { services } from "@/app/lib/services";
import LeadForm from "@/app/components/LeadForm";

const DELAYS = ["delay-0", "delay-75", "delay-150", "delay-225"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

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

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                <Icon name="map-pin" size={14} />
                Digitaler Backoffice-Partner in Berlin
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Premium Büroservice &amp; Lohnbuchhaltung für Berliner Unternehmen
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Taxalis Consulting übernimmt Lohnbuchhaltung, laufende Buchhaltung und administrativen Büroservice –
                transparent, zu 100% digital und DSGVO-konform. Damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
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

              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-200/70 sm:block">
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
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.id} className={DELAYS[i % 3]}>
                  <Link
                    href={`/leistungen/${s.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon name={s.icon} size={22} />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
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
                  <div className="h-full rounded-2xl border border-slate-100 p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
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

        {/* Why us / trust */}
        <section id="ueberuns" className="bg-slate-900 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Über Taxalis Consulting</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Warum Unternehmen uns vertrauen</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
