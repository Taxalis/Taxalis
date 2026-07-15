import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnabrechnung Pflegedienst Berlin – Pflegemindestlohn & Schichtzuschläge korrekt abrechnen",
  description:
    "Lohnabrechnung für Pflegedienste und Pflegeheime in Berlin: Pflegemindestlohn, Nacht- und Feiertagszuschläge, An-/Abmeldungen – extern, digital, gemäß § 6 Nr. 3 StBerG. Jetzt anfragen.",
  keywords: [
    "Lohnabrechnung Pflegedienst Berlin",
    "Lohnbüro Pflegedienst",
    "Lohnbuchhaltung Pflegebranche",
    "Pflegemindestlohn abrechnen",
    "externes Lohnbüro Pflege Berlin",
    "Gehaltsabrechnung ambulanter Pflegedienst",
  ],
  alternates: {
    canonical: "https://www.taxalis-consulting.de/loesungen/pflegedienst",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lohnabrechnung für Pflegedienste Berlin | Taxalis Consulting",
    description:
      "Externes Lohnbüro für Pflegedienste und Pflegeheime in Berlin: Pflegemindestlohn, Schichtzuschläge, digitale Personalakte – gemäß § 6 Nr. 3 StBerG.",
    url: "https://www.taxalis-consulting.de/loesungen/pflegedienst",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Lohnabrechnung Pflegedienst Berlin" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lohnabrechnung für Pflegedienste",
  name: "Lohnabrechnung Pflegedienst Berlin",
  description:
    "Externes Lohnbüro für Pflegedienste und Pflegeheime in Berlin: Pflegemindestlohn korrekt abrechnen, Schicht- und Feiertagszuschläge, An-/Abmeldungen und Elster-Meldungen – gemäß § 6 Nr. 3 StBerG.",
  areaServed: { "@type": "City", name: "Berlin" },
  url: "https://www.taxalis-consulting.de/loesungen/pflegedienst",
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
      name: "Was kostet die Lohnabrechnung für einen Pflegedienst in Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsere Lohnabrechnung für Pflegedienste beginnt ab 20 € pro Mitarbeiter und Monat. Der genaue Preis hängt von der Mitarbeiterzahl, den Schichtmodellen und dem Umfang der Leistungen ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein verbindliches Festpreisangebot.",
      },
    },
    {
      "@type": "Question",
      name: "Wie wird der Pflegemindestlohn in der Abrechnung berücksichtigt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir kennen die aktuellen Stufen der Pflegemindestlohnverordnung für Pflegehilfskräfte, Pflegefachassistenten und Pflegefachkräfte und rechnen entsprechend korrekt ab. Die korrekte Einstufung Ihrer Mitarbeiter besprechen wir im Onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "Können Sie auch Schicht-, Nacht- und Feiertagszuschläge abrechnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Schicht-, Nacht-, Sonntags- und Feiertagszuschläge sind ein fester Bestandteil unserer Lohnabrechnung für Pflegedienste. Wir rechnen alle Zuschlagsarten korrekt und lohnsteuerpflichtig bzw. steuerfrei entsprechend den gesetzlichen Regelungen ab.",
      },
    },
    {
      "@type": "Question",
      name: "Wir haben viele Teilzeitkräfte und hohe Fluktuation – kein Problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kein Problem. Hohe Fluktuation und viele Teilzeitkräfte sind im Pflegebereich der Normalfall – und in unserem System täglich Routine. An- und Abmeldungen, Vertragsänderungen und Elternzeiten werden zeitnah und korrekt bearbeitet.",
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
