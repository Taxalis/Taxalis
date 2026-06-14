import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Taxalis Consulting – Anbieterkennzeichnung gemäß § 5 TMG.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
