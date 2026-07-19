import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnbüro wechseln Berlin – Wir übernehmen alle Formalitäten",
  description:
    "Unzufrieden mit Ihrem Lohnbüro oder Ihrer Kanzlei? Wechseln Sie ohne Aufwand: Wir übernehmen Datenübernahme und alle Formalitäten – nahtlos, digital, zum Festpreis. Wechsel jederzeit möglich.",
  keywords: [
    "Lohnbüro wechseln Berlin",
    "Lohnbuchhaltung wechseln",
    "Buchhaltung wechseln Berlin",
    "Lohnabrechnung Anbieter wechseln",
    "Steuerberater Lohnabrechnung auslagern",
    "externes Lohnbüro Wechsel",
  ],
  alternates: {
    canonical: "https://www.taxalis-consulting.de/lohnbuero-wechseln",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lohnbüro wechseln ohne Aufwand | Taxalis Consulting Berlin",
    description:
      "Wechseln Sie Ihr Lohnbüro ohne Unterbrechung: Wir übernehmen Datenübernahme, Fristen und alle Formalitäten – nahtlos und zum Festpreis.",
    url: "https://www.taxalis-consulting.de/lohnbuero-wechseln",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Lohnbüro wechseln Berlin" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wechselservice Lohnbuchhaltung",
  name: "Lohnbüro wechseln Berlin",
  description:
    "Wechselservice für Lohnbuchhaltung und laufende Buchhaltung in Berlin: vollständige Datenübernahme, nahtloser Übergang ohne Abrechnungsausfall, alle Formalitäten inklusive – gemäß § 6 StBerG.",
  areaServed: { "@type": "City", name: "Berlin" },
  url: "https://www.taxalis-consulting.de/lohnbuero-wechseln",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Wechsel und Ersteinrichtung ohne Zusatzkosten" },
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
      name: "Was kostet der Wechsel des Lohnbüros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Taxalis Consulting nichts. Datenübernahme, Ersteinrichtung und die Umstellung der Prozesse sind im Festpreis enthalten. Sie zahlen erst ab der ersten regulären Abrechnung – ab 20 € pro Mitarbeiter und Monat.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mitten im Jahr das Lohnbüro wechseln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Der Wechsel ist zu jedem Monatswechsel möglich, nicht nur zum Jahreswechsel. Wir übernehmen die Lohnkonten und Jahreswerte aus Ihrem bisherigen System, sodass Lohnsteuerbescheinigungen und Meldungen korrekt weiterlaufen.",
      },
    },
    {
      "@type": "Question",
      name: "Fällt während des Wechsels eine Abrechnung aus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir planen den Übergang so, dass die Abrechnung nahtlos weiterläuft. Ihre Mitarbeiter erhalten ihre Gehaltsabrechnungen pünktlich – auch im Wechselmonat.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich meinem bisherigen Anbieter selbst kündigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kündigung selbst müssen Sie aussprechen, wir bereiten aber alles vor: Kündigungsschreiben, Liste der benötigten Unterlagen und die Anforderung der Daten beim bisherigen Anbieter. Sie unterschreiben nur.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Unterlagen werden für den Wechsel benötigt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Wesentlichen: die letzten Lohnabrechnungen bzw. Lohnkonten, Jahreslohnkonten, Stammdaten der Mitarbeiter, Betriebsnummer und die Zugänge zu Elster-Meldungen. Wir stellen Ihnen eine vollständige Checkliste bereit und fordern vieles direkt beim Altanbieter an.",
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
