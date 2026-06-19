import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { testimonials, reviewStats } from "@/app/lib/testimonials";
import CookieBanner from "@/app/components/CookieBanner";
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lohnbuchhaltung Berlin", url: "https://www.taxalis-consulting.de/leistungen/lohnbuchhaltung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buchhaltung Berlin", url: "https://www.taxalis-consulting.de/leistungen/buchhaltung" } },
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
    default: "Premium Büroservice & Lohnbuchhaltung Berlin | Taxalis Consulting",
    template: "%s | Taxalis Consulting",
  },
  description:
    "Taxalis Consulting ist Ihr digitaler Backoffice-Partner in Berlin: Lohnbuchhaltung, Büroservice und laufende Buchhaltung – transparent, DSGVO-konform und zu 100% digital. Jetzt unverbindlich anfragen.",
  alternates: {
    canonical: "/",
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
    "Outsourcing Buchhaltung",
    "Taxalis Consulting",
  ],
  openGraph: {
    title: "Premium Büroservice & Lohnbuchhaltung Berlin | Taxalis Consulting",
    description:
      "Ihr digitaler Backoffice-Partner in Berlin: Lohnbuchhaltung, Büroservice und laufende Buchhaltung – transparent, DSGVO-konform und zu 100% digital.",
    url: "/",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Taxalis Consulting – Premium Büroservice & Lohnbuchhaltung in Berlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Büroservice & Lohnbuchhaltung Berlin | Taxalis Consulting",
    description:
      "Ihr digitaler Backoffice-Partner in Berlin: Lohnbuchhaltung, Büroservice und laufende Buchhaltung.",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
