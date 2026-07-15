import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnabrechnung Sicherheitsunternehmen Berlin – Manteltarifvertrag & Zuschläge",
  description:
    "Lohnabrechnung für Sicherheitsdienste und Wachunternehmen in Berlin: Manteltarifvertrag Bewachungsgewerbe, Nacht- und Feiertagszuschläge korrekt abrechnen – extern, gemäß § 6 Nr. 3 StBerG.",
  keywords: [
    "Lohnabrechnung Sicherheitsunternehmen Berlin",
    "Lohnbüro Sicherheitsdienst Berlin",
    "Lohnbuchhaltung Wachdienst",
    "Manteltarifvertrag Bewachungsgewerbe Lohnabrechnung",
    "Gehaltsabrechnung Sicherheitsgewerbe",
    "externes Lohnbüro Wachschutz Berlin",
  ],
  alternates: {
    canonical: "https://www.taxalis-consulting.de/loesungen/sicherheitsdienst",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lohnabrechnung für Sicherheitsunternehmen Berlin | Taxalis Consulting",
    description:
      "Externes Lohnbüro für Wachdienste und Sicherheitsunternehmen in Berlin: Manteltarifvertrag, Schicht- und Feiertagszuschläge, digitale Personalakte – § 6 Nr. 3 StBerG.",
    url: "https://www.taxalis-consulting.de/loesungen/sicherheitsdienst",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Lohnabrechnung Sicherheitsunternehmen Berlin" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lohnabrechnung für Sicherheitsunternehmen",
  name: "Lohnabrechnung Sicherheitsdienst Berlin",
  description:
    "Externes Lohnbüro für Sicherheitsdienste und Wachunternehmen in Berlin: Manteltarifvertrag Bewachungsgewerbe, Schicht-, Nacht- und Feiertagszuschläge korrekt abrechnen – gemäß § 6 Nr. 3 StBerG.",
  areaServed: { "@type": "City", name: "Berlin" },
  url: "https://www.taxalis-consulting.de/loesungen/sicherheitsdienst",
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
      name: "Was kostet die Lohnabrechnung für ein Sicherheitsunternehmen in Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsere Lohnabrechnung für Sicherheitsdienste beginnt ab 20 € pro Mitarbeiter und Monat. Für Unternehmen mit vielen Mitarbeitern gelten attraktive Staffelpreise. Kontaktieren Sie uns für ein kostenloses Festpreisangebot.",
      },
    },
    {
      "@type": "Question",
      name: "Können Sie den Manteltarifvertrag Bewachungsgewerbe in der Abrechnung berücksichtigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir kennen die Besonderheiten des Manteltarifvertrags für das Bewachungsgewerbe (BDSW) und berücksichtigen branchenspezifische Mindestlöhne und Zuschlagsregelungen in der laufenden Lohnabrechnung.",
      },
    },
    {
      "@type": "Question",
      name: "Wir haben viele Minijobber und wechselnde Einsatzzeiten – können Sie das abbilden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Viele Minijobber, variierende Stunden und häufige An- und Abmeldungen sind im Sicherheitsgewerbe typisch – und in unserem System tägliche Routine. Wir bilden alle Modelle (Minijob, Teilzeit, Vollzeit) korrekt ab.",
      },
    },
    {
      "@type": "Question",
      name: "Wie werden Nacht-, Sonntags- und Feiertagszuschläge abgerechnet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schicht-, Nacht-, Sonn- und Feiertagszuschläge rechnen wir korrekt und nach den gesetzlichen Steuerfreiheitsgrenzen (§ 3b EStG) ab. Die genaue Konfiguration besprechen wir im Onboarding.",
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
