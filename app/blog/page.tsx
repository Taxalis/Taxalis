import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";
import { blogPosts } from "@/app/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Ratgeber – Buchhaltung, Lohn & Gründung in Berlin",
  description:
    "Ratgeber rund um Lohnbuchhaltung, Buchhaltung, § 6 StBerG und Unternehmensgründung in Berlin. Praxiswissen von Taxalis Consulting.",
  alternates: {
    canonical: "/blog",
    languages: { "de-DE": "/blog" },
  },
  openGraph: {
    title: "Blog & Ratgeber – Buchhaltung, Lohn & Gründung in Berlin | Taxalis Consulting",
    description:
      "Ratgeber rund um Lohnbuchhaltung, Buchhaltung, § 6 StBerG und Unternehmensgründung in Berlin. Praxiswissen von Taxalis Consulting.",
    url: "/blog",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Blog & Ratgeber – Taxalis Consulting Berlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Ratgeber – Buchhaltung & Lohnbuchhaltung Berlin | Taxalis Consulting",
    description:
      "Praxiswissen zu Lohnbuchhaltung, Buchhaltung und Gründung in Berlin. Accounting & payroll insights from Taxalis Consulting.",
    images: ["/og-cover.jpg"],
  },
};

const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-slate-900">
        <section className="bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Ratgeber</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Blog &amp; Ratgeber</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Praxiswissen zu Lohnbuchhaltung, Buchhaltung und Gründung – speziell für Unternehmen in Berlin.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.slug} className={DELAYS[i % 3]}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{p.category}</span>
                      <span className="text-xs text-slate-400">
                        {new Date(p.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h2 className="mb-2 text-lg font-semibold text-slate-900">{p.title}</h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">{p.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                        Artikel lesen
                        <Icon name="arrow-right" size={14} />
                      </span>
                      <span className="text-xs text-slate-400">{p.readingMinutes} Min.</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
