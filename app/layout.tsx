import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { testimonials, reviewStats } from "@/app/lib/testimonials";
import CookieBanner from "@/app/components/CookieBanner";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.taxalis-consulting.de/#business",
  name: "Taxalis Consulting",
  description:
    "Digitaler Backoffice-Partner in Berlin für Lohnbuchhaltung, laufende Buchhaltung, Büroservice und Jahresabschluss-Vorbereitung – DSGVO-konform und zu 100 % digital.",
  image: "https://www.taxalis-consulting.de/logo.png",
  logo: "https://www.taxalis-consulting.de/logo.png",
  url: "https://www.taxalis-consulting.de",
  email: "info@taxalis-consulting.de",
  telephone: "+49 176 83151339",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wilmersdorfer Str. 122-123",
    postalCode: "10627",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5076,
    longitude: 13.3062,
  },
  areaServed: { "@type": "City", name: "Berlin" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Jannik Roloff",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Lohnbuchhaltung Berlin", url: "https://www.taxalis-consulting.de/leistungen/lohnbuchhaltung" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 20,
          priceCurrency: "EUR",
          unitText: "pro Mitarbeiter / Monat, ab",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Buchhaltung Berlin", url: "https://www.taxalis-consulting.de/leistungen/buchhaltung" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 99,
          priceCurrency: "EUR",
          unitText: "pro Monat, ab",
        },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Büroservice & Unternehmensberatung Berlin", url: "https://www.taxalis-consulting.de/leistungen/bueroservice" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jahresabschluss-Vorbereitung Berlin", url: "https://www.taxalis-consulting.de/leistungen/jahresabschluesse" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.average.toFixed(1),
    reviewCount: reviewStats.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: testimonials
    .filter((t) => t.text)
    .map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.text,
    })),
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxalis-consulting.de"),
  title: {
    default: "Lohnbuchhaltung & Büroservice Berlin | Taxalis Consulting",
    template: "%s | Taxalis Consulting",
  },
  description:
    "Externes Lohnbüro & Buchhaltungsservice in Berlin: Lohnbuchhaltung ab 20 €/Mitarbeiter, laufende Buchhaltung & Büroservice. Festpreise, 100 % digital, persönlicher Ansprechpartner. Jetzt anfragen.",
  alternates: {
    canonical: "https://www.taxalis-consulting.de/",
    languages: { "de-DE": "https://www.taxalis-consulting.de/" },
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Lohnbuchhaltung Berlin",
    "Büroservice Berlin",
    "Buchhaltung Berlin",
    "Buchhaltungsservice Berlin",
    "Finanzbuchhaltung Berlin",
    "Gehaltsabrechnung Berlin",
    "Lohnabrechnung Berlin",
    "Buchhaltung outsourcen Berlin",
    "externes Lohnbüro Berlin",
    "Buchhaltungsbüro Charlottenburg",
    "Taxalis Consulting",
  ],
  other: {
    "geo.region": "DE-BE",
    "geo.placename": "Berlin",
    "ICBM": "52.5076, 13.3062",
  },
  openGraph: {
    title: "Lohnbuchhaltung & Büroservice Berlin | Taxalis Consulting",
    description:
      "Ihr digitaler Backoffice-Partner in Berlin: Lohnbuchhaltung, laufende Buchhaltung & Büroservice – transparent, DSGVO-konform und zu 100 % digital.",
    url: "/",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Taxalis Consulting – Lohnbuchhaltung & Büroservice Berlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohnbuchhaltung & Büroservice Berlin | Taxalis Consulting",
    description:
      "Ihr digitaler Backoffice-Partner in Berlin: Lohnbuchhaltung, laufende Buchhaltung & Büroservice – transparent, DSGVO-konform, Festpreise.",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body
        style={{
          margin: 0,
          background: "#F5F7FA",
          color: "#0B1B2B",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
        <GoogleAnalytics gaId="G-ZMTYC9NK1K" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
