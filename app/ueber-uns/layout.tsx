import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Lohnbuchhaltung & Buchhaltung Berlin",
  description:
    "Taxalis Consulting – Ihr persönlicher Buchhaltungspartner in Berlin: ausgebildet in Buchhaltung und Lohnbuchhaltung, tätig gemäß § 6 StBerG. Transparente Festpreise, 100 % digital.",
  alternates: {
    canonical: "/ueber-uns",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Über uns | Taxalis Consulting",
    description:
      "Ihr persönlicher Backoffice-Partner in Berlin für Lohnbuchhaltung, Buchhaltung und Büroservice – digital, diskret und transparent.",
    url: "/ueber-uns",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Über Taxalis Consulting" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
