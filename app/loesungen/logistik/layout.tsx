import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnabrechnung Logistikunternehmen Berlin – Spedition, Fahrer & Schichtarbeit",
  description:
    "Lohnabrechnung für Speditionen, Kurierdienste und Logistikbetriebe in Berlin: Schichtarbeit, Fahrergehälter, Saisonpersonal und Minijobber korrekt abrechnen – gemäß § 6 Nr. 3 StBerG.",
  keywords: [
    "Lohnabrechnung Logistik Berlin",
    "Lohnbüro Spedition Berlin",
    "Lohnbuchhaltung Logistikunternehmen",
    "Gehaltsabrechnung Kurierdienst Berlin",
    "Lohnabrechnung Transportgewerbe",
    "externes Lohnbüro Fuhrpark Berlin",
  ],
  alternates: {
    canonical: "https://www.taxalis-consulting.de/loesungen/logistik",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lohnabrechnung für Logistikunternehmen Berlin | Taxalis Consulting",
    description:
      "Externes Lohnbüro für Speditionen und Logistikbetriebe in Berlin: Schichtarbeit, Fahrergehälter, Saisonpersonal – digital, korrekt, gemäß § 6 Nr. 3 StBerG.",
    url: "https://www.taxalis-consulting.de/loesungen/logistik",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Lohnabrechnung Logistikunternehmen Berlin" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lohnabrechnung für Logistikunternehmen",
  name: "Lohnabrechnung Logistik Berlin",
  description:
    "Externes Lohnbüro für Speditionen, Kurierdienste und Logistikbetriebe in Berlin: Schichtarbeit, Fahrergehälter, Saisonpersonal und Minijobber korrekt abrechnen – gemäß § 6 Nr. 3 StBerG.",
  areaServed: { "@type": "City", name: "Berlin" },
  url: "https://www.taxalis-consulting.de/loesungen/logistik",
  provider: {
    "@type": "AccountingService",
    "@id": "https://www.taxalis-consulting.de/#business",
    name: "Taxalis Consulting",
    url: "https://www.taxalis-consulting.de",
    telephone: "+49 176 83151339",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wilmersdorfer Str. 122-123",
      postalCode: "10627",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet die Lohnabrechnung für ein Logistikunternehmen in Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsere Lohnabrechnung für Logistikbetriebe beginnt ab 20 € pro Mitarbeiter und Monat. Ab einer gewissen Mitarbeiterzahl gelten Staffelpreise. Kontaktieren Sie uns für ein kostenloses und verbindliches Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Können Sie variierende Stunden und Schichtarbeit in der Abrechnung abbilden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wechselnde Stunden, Schichtzuschläge, Überstunden und Arbeitszeitkonten sind ein fester Bestandteil unserer Lohnabrechnung für Logistikbetriebe. Wir integrieren Ihre Zeiterfassungsdaten auf Wunsch direkt in den Abrechnungsprozess.",
      },
    },
    {
      "@type": "Question",
      name: "Wie handhaben Sie Saisonpersonal und kurzfristige Beschäftigungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saisonale Aufstockungen – z. B. im Weihnachtsgeschäft – und kurzfristige Beschäftigungen sind kein Problem. Wir melden Mitarbeiter kurzfristig an und ab, verarbeiten alle Beschäftigungsarten (Minijob, sozialversicherungspflicht, kurzfristig) korrekt.",
      },
    },
    {
      "@type": "Question",
      name: "Dürfen Sie auch Fahrergehälter abrechnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir rechnen Fahrergehälter wie alle anderen Arbeitsverhältnisse ab – inklusive Schichtzuschläge, Spesen und variierende Stunden. Fahrpersonalrecht (Lenk- und Ruhezeiten) ist nicht Teil unseres Leistungsumfangs, da dies rechtliche Beratung erfordert.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
