import type { Metadata } from "next";
import { faqItems } from "@/app/lib/faq";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf häufige Fragen zu Buchhaltung, Lohnbuchhaltung und Büroservice von Taxalis Consulting – inklusive Hinweisen zur Abgrenzung zur Steuerberatung gemäß § 6 StBerG.",
  alternates: {
    canonical: "/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Häufige Fragen (FAQ) | Taxalis Consulting",
    description:
      "Antworten auf häufige Fragen zu Buchhaltung, Lohnbuchhaltung und Büroservice von Taxalis Consulting.",
    url: "/faq",
    siteName: "Taxalis Consulting",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Häufige Fragen | Taxalis Consulting" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
