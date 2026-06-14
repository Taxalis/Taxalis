import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Taxalis Consulting",
  image: "https://www.taxalis-consulting.de/logo.png",
  url: "https://www.taxalis-consulting.de",
  email: "info@taxalis-consulting.de",
  telephone: "+49 176 83151339",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wilmersdorfer Str. 122-123",
    postalCode: "10627",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: "Berlin",
  founder: {
    "@type": "Person",
    name: "Jannik Roloff",
  },
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
    <html lang="de">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#F5F7FA",
          color: "#0B1B2B",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
