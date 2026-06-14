"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";
import { faqItems } from "@/app/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-emerald-600">
                  Startseite
                </Link>
                <span>/</span>
                <span className="text-slate-600">FAQ</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name="alert-doc" size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Häufige Fragen</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Antworten auf die wichtigsten Fragen zu unseren Leistungen, der Zusammenarbeit und unserer Abgrenzung zur
                Steuerberatung.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ list */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-4">
              {faqItems.map((item, i) => {
                const open = openIndex === i;
                return (
                  <Reveal key={item.question} className={DELAYS[i % 4]}>
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/40">
                      <button
                        onClick={() => setOpenIndex(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-semibold text-slate-900">{item.question}</span>
                        <span
                          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform ${
                            open ? "rotate-45" : ""
                          }`}
                        >
                          <Icon name="x" size={14} className={open ? "" : "rotate-45"} />
                        </span>
                      </button>
                      {open && (
                        <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.answer}</div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <div className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 text-center sm:p-10">
                <h2 className="text-lg font-semibold text-slate-900">Ihre Frage war nicht dabei?</h2>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                  Schreiben Sie uns – wir melden uns persönlich und unverbindlich bei Ihnen zurück.
                </p>
                <a
                  href="/#kontakt"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Frage stellen
                  <Icon name="arrow-right" size={16} />
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
