"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { services, getServiceById } from "@/app/lib/services";
import { useParams } from "next/navigation";
import { Reveal, DELAYS } from "@/app/components/Reveal";

export default function ServicePage() {
  const params = useParams();
  const id = params?.id as string;
  const service = id ? getServiceById(id) : null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!service) {
    return (
      <>
        <Nav />
        <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Seite nicht gefunden</h1>
            <p className="mt-3 text-slate-500">Die gewünschte Leistung existiert nicht.</p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-emerald-600">
                  Startseite
                </Link>
                <span>/</span>
                <span className="text-slate-600">{service.title}</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name={service.icon} size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{service.title}</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{service.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {service.cta}
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

        {/* Description */}
        <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl px-6 text-center">
              <p className="text-lg leading-relaxed text-slate-600">{service.longDescription}</p>
            </div>
          </Reveal>
          {service.complianceNote && (
            <Reveal className="delay-150">
              <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-6 py-5 sm:mx-6">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon name="shield" size={16} />
                </span>
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">Hinweis gemäß § 6 StBerG: </span>
                  {service.complianceNote}
                </p>
              </div>
            </Reveal>
          )}
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
                    {service.benefits.map((b) => (
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
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 rounded-lg bg-slate-50 px-3 py-2.5 text-sm leading-relaxed text-slate-600 transition-colors hover:bg-emerald-50"
                      >
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
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ablauf &amp; Prozess
                </h2>
              </div>
            </Reveal>
            <div
              className={`mt-12 grid gap-6 sm:grid-cols-2 ${
                service.processSteps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
              }`}
            >
              {service.processSteps.map((step, i) => (
                <Reveal key={step} className={DELAYS[i % 4]}>
                  <div className="h-full rounded-2xl border border-slate-100 p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-200/50">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900">{step}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      Wir kümmern uns systematisch um diesen Schritt, damit Sie maximale Effizienz gewinnen.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Weitere Leistungen</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Das könnte Sie auch interessieren
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s, i) => (
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

        {/* CTA */}
        <section className="bg-neutral-900 py-20 text-center text-white sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-2xl px-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bereit für den nächsten Schritt?</h2>
              <p className="mt-4 text-lg text-white/70">
                Lassen Sie sich von unserem Team kostenlos beraten und erfahren Sie, wie wir Ihr Unternehmen entlasten können.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {service.cta}
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
