"use client";

import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal } from "@/app/components/Reveal";

export default function Impressum() {
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
                <span className="text-slate-600">Impressum</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name="file-text" size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Impressum</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Angaben gemäß § 5 TMG und Informationen zu unserem Leistungsspektrum.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40 sm:p-10">
                <h2 className="text-lg font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
                <div className="mt-4 space-y-1 text-sm leading-relaxed text-slate-600">
                  <p className="font-semibold text-slate-900">Taxalis Consulting</p>
                  <p>Inhaber: Jannik Roloff</p>
                  <p>Wilmersdorfer Str. 122-123</p>
                  <p>10627 Berlin</p>
                  <p>Deutschland</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon name="mail" size={16} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-Mail</div>
                      <a href="mailto:info@taxalis-consulting.de" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600">
                        info@taxalis-consulting.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon name="phone" size={16} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telefon</div>
                      <a href="tel:+4917683151339" className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600">
                        0176 83151339
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Umsatzsteuer-ID</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Nicht vorhanden.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Registereintrag</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Nicht eingetragen (Einzelunternehmen).
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tätigkeitsbeschreibung / StBerG */}
            <Reveal className="delay-150">
              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon name="shield" size={20} />
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900">Tätigkeitsbeschreibung &amp; gesetzliche Hinweise</h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
                  <p>
                    Taxalis Consulting bietet Dienstleistungen in den Bereichen Lohn- und Gehaltsbuchhaltung,
                    laufende Finanzbuchhaltung (einschließlich Belegerfassung und Umsatzsteuer-Voranmeldungen), Büroservice und
                    administrative Unternehmensunterstützung sowie vorbereitende Arbeiten für den Jahresabschluss an. Diese Tätigkeiten erbringen wir als geschultes Buchhaltungs- und
                    Finanzbuchhaltungsunternehmen im Rahmen der zulässigen Hilfeleistung in Steuersachen nach{" "}
                    <strong className="font-semibold text-slate-900">§ 6 Nr. 3 und Nr. 4 Steuerberatungsgesetz (StBerG)</strong>,
                    insbesondere die laufende Buchführung und die laufende Lohnabrechnung einschließlich der Fertigung der
                    laufenden Lohnsteuer-Anmeldungen.
                  </p>
                  <p>
                    <strong className="font-semibold text-slate-900">Taxalis Consulting ist keine Steuerberatungsgesellschaft</strong>{" "}
                    und Jannik Roloff ist kein Steuerberater. Wir erbringen keine Steuerberatung im Sinne des § 33
                    Steuerberatungsgesetz. Insbesondere erstellen wir keine Jahresabschlüsse (Bilanzen, Gewinn- und
                    Verlustrechnungen), Steuererklärungen oder verbindlichen steuerlichen Auskünfte. Diese Leistungen sind
                    ausschließlich Steuerberatern, Steuerberatungsgesellschaften, Wirtschaftsprüfern und vergleichbar
                    befugten Personen und Gesellschaften gemäß §§ 3, 3a StBerG vorbehalten.
                  </p>
                  <p>
                    Bei Bedarf arbeiten wir eng und vertrauensvoll mit dem Steuerberater bzw. der Steuerkanzlei unserer
                    Mandanten zusammen und bereiten die hierfür benötigten Unterlagen vollständig und strukturiert auf.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="delay-225">
              <div className="mt-8 space-y-8 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40 sm:p-10">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Haftungsausschluss</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                    und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                    § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Haftung für Links</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Urheberrecht</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Zurück zur Startseite
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
