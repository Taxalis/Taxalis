"use client";

import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal } from "@/app/components/Reveal";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Verantwortlicher",
    body: (
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        <strong className="font-semibold text-slate-900">Taxalis Consulting</strong>, Jannik Roloff
        <br />
        Wilmersdorfer Str. 122-123, 10627 Berlin, Deutschland
        <br />
        E-Mail:{" "}
        <a href="mailto:info@taxalis-consulting.de" className="text-emerald-600 transition-colors hover:text-emerald-700">
          info@taxalis-consulting.de
        </a>
      </p>
    ),
  },
  {
    title: "2. Erhebung und Verarbeitung beim Besuch der Website",
    body: (
      <p>
        Beim Besuch dieser Website werden automatisch technische Daten durch unseren Hostinganbieter erfasst, darunter
        IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und die zuvor besuchte Seite (Referrer-URL).
        Diese Daten sind technisch notwendig, um die Website auszuliefern und ihre Stabilität und Sicherheit zu
        gewährleisten, und werden nicht mit anderen Datenquellen zusammengeführt.
      </p>
    ),
  },
  {
    title: "3. Webanalyse (Vercel Web Analytics)",
    body: (
      <>
        <p>
          Wir nutzen den Dienst <strong className="font-semibold text-slate-900">Vercel Web Analytics</strong> unseres
          Hosting-Anbieters Vercel Inc., um die Nutzung unserer Website statistisch auszuwerten (z. B. Anzahl der
          Seitenaufrufe, ungefährer geografischer Standort auf Länderebene, verwendeter Browser und Gerätetyp).
        </p>
        <p className="mt-3">
          Vercel Web Analytics arbeitet ohne Cookies und ohne die Erstellung individueller Nutzerprofile. Es werden keine
          IP-Adressen dauerhaft gespeichert und keine Tracking-Mechanismen über mehrere Websites hinweg eingesetzt. Eine
          Identifizierung einzelner Besucher ist nicht möglich. Weitere Informationen finden Sie in der{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "4. Kontaktformular",
    body: (
      <>
        <p>
          Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden die von Ihnen eingegebenen Daten (z. B. Name,
          E-Mail-Adresse, Telefonnummer, Unternehmen, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage und für
          eventuelle Anschlussfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
        </p>
        <p className="mt-3">
          Zur technischen Abwicklung des Kontaktformulars setzen wir den Dienst Formspree (Formspree, Inc.) ein. Ihre
          Angaben werden über Formspree verarbeitet und per E-Mail an uns weitergeleitet. Weitere Informationen finden
          Sie in der{" "}
          <a
            href="https://formspree.io/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Datenschutzerklärung von Formspree
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "5. Speicherdauer",
    body: (
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage bzw. zur Erfüllung der
        jeweiligen Zwecke erforderlich ist, oder solange gesetzliche Aufbewahrungspflichten (insbesondere handels- und
        steuerrechtliche Aufbewahrungsfristen) bestehen. Nach Wegfall dieser Gründe werden die Daten gelöscht.
      </p>
    ),
  },
  {
    title: "6. Cookies",
    body: (
      <p>
        Diese Website verwendet keine Cookies für Marketing- oder Werbezwecke und kein Drittanbieter-Tracking. Technisch
        notwendige Cookies, die für den Betrieb der Website erforderlich sind, können in geringem Umfang eingesetzt
        werden. Eine Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>
    ),
  },
  {
    title: "7. Externe Links",
    body: (
      <p>
        Diese Website enthält Links zu externen Websites Dritter. Wir haben keinen Einfluss auf deren Inhalte und sind
        nicht für die Datenschutzpraktiken dieser Seiten verantwortlich. Bitte informieren Sie sich vor der Eingabe
        personenbezogener Daten auf fremden Seiten über deren jeweilige Datenschutzerklärung.
      </p>
    ),
  },
  {
    title: "8. Ihre Rechte als betroffene Person",
    body: (
      <>
        <p>Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu:</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { t: "Auskunftsrecht (Art. 15 DSGVO)", d: "Auskunft über die von uns verarbeiteten Daten" },
            { t: "Recht auf Berichtigung (Art. 16 DSGVO)", d: "Korrektur unrichtiger Daten" },
            { t: "Recht auf Löschung (Art. 17 DSGVO)", d: "Löschung Ihrer Daten" },
            { t: "Recht auf Einschränkung (Art. 18 DSGVO)", d: "Einschränkung der Verarbeitung" },
            { t: "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)", d: "Übertragung Ihrer Daten" },
            { t: "Widerspruchsrecht (Art. 21 DSGVO)", d: "Widerspruch gegen die Verarbeitung" },
          ].map((r) => (
            <li key={r.t} className="flex items-start gap-2.5 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600">
              <Icon name="check" size={14} className="mt-0.5 flex-shrink-0 text-emerald-500" />
              <span>
                <span className="font-medium text-slate-900">{r.t}</span>
                <br />
                {r.d}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Ihnen steht außerdem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, insbesondere bei der für
          Berlin zuständigen Berliner Beauftragten für Datenschutz und Informationsfreiheit.
        </p>
      </>
    ),
  },
  {
    title: "9. Vertraulichkeit als Buchhaltungsdienstleister",
    body: (
      <p>
        Als auf Buchhaltung, Lohnbuchhaltung und Finanzbuchhaltung spezialisiertes Unternehmen verarbeiten wir im Rahmen
        unserer Mandate regelmäßig sensible geschäftliche und ggf. personenbezogene Daten (z. B. Gehaltsdaten Ihrer
        Mitarbeiter). Diese Daten werden ausschließlich zur Erbringung der vereinbarten Leistungen verarbeitet, vertraulich
        behandelt und durch geeignete technische und organisatorische Maßnahmen geschützt. Die konkreten Einzelheiten der
        Datenverarbeitung im Rahmen eines Mandats werden gesondert vertraglich (z. B. in einer
        Auftragsverarbeitungsvereinbarung) geregelt.
      </p>
    ),
  },
  {
    title: "10. Kontakt zum Datenschutz",
    body: (
      <p>
        Für Fragen zum Datenschutz oder zur Wahrnehmung Ihrer Rechte können Sie sich jederzeit an uns wenden:{" "}
        <a href="mailto:info@taxalis-consulting.de" className="text-emerald-600 transition-colors hover:text-emerald-700">
          info@taxalis-consulting.de
        </a>
        .
      </p>
    ),
  },
  {
    title: "11. Änderungen dieser Datenschutzerklärung",
    body: (
      <p>
        Wir passen diese Datenschutzerklärung an, sobald Änderungen unserer Datenverarbeitung dies erforderlich machen.
        Die jeweils aktuelle Version finden Sie auf dieser Seite.
      </p>
    ),
  },
];

export default function Datenschutz() {
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
                <span className="text-slate-600">Datenschutz</span>
              </nav>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon name="lock" size={32} strokeWidth={1.6} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Datenschutzerklärung</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Wie wir personenbezogene Daten erheben, verarbeiten und schützen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-6">
              {SECTIONS.map((s, i) => (
                <Reveal key={s.title} className={i % 2 === 0 ? "" : "delay-150"}>
                  <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-200/40">
                    <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
                    <div className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</div>
                  </div>
                </Reveal>
              ))}
            </div>

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
