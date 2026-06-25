import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { getPostBySlug, getAllPostSlugs } from "@/app/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Artikel nicht gefunden", robots: { index: false, follow: true } };
  }
  return {
    title: post.title,
    description: post.description,
    keywords: [
      ...post.keywords,
      "accounting services Berlin",
      "payroll services Berlin",
      "bookkeeping Berlin Germany",
      "outsource accounting Berlin",
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: { "de-DE": `/blog/${post.slug}` },
    },
    openGraph: {
      title: `${post.title} | Taxalis Consulting`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Taxalis Consulting`,
      description: post.description,
      images: ["/og-cover.jpg"],
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "de-DE",
    mainEntityOfPage: `https://www.taxalis-consulting.de/blog/${post.slug}`,
    image: {
      "@type": "ImageObject",
      url: "https://www.taxalis-consulting.de/og-cover.jpg",
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: "Jannik Roloff",
      jobTitle: "Buchhalter & Geschäftsführer",
      description: "IHK-ausgebildeter Kaufmann, spezialisiert auf Buchhaltung und Lohnabrechnung in Berlin. Tätig gem. § 6 Nr. 3 und 4 StBerG. / IHK-certified accountant specialising in bookkeeping and payroll services in Berlin, Germany.",
      worksFor: {
        "@type": "Organization",
        name: "Taxalis Consulting",
        url: "https://www.taxalis-consulting.de",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Taxalis Consulting",
      url: "https://www.taxalis-consulting.de",
      logo: { "@type": "ImageObject", url: "https://www.taxalis-consulting.de/logo.png" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.taxalis-consulting.de" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.taxalis-consulting.de/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.taxalis-consulting.de/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Nav />
      <main className="bg-white text-slate-900">
        <section className="bg-slate-50 pt-36 pb-12 sm:pt-44 sm:pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-emerald-600">Startseite</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
              <span>/</span>
              <span className="text-slate-600">{post.category}</span>
            </nav>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{post.category}</span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
            <p className="mt-4 text-sm text-slate-500">
              {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })} · {post.readingMinutes} Min. Lesezeit
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-medium text-slate-600">Jannik Roloff</span>
              <span className="mx-2">·</span>
              <span>IHK-Kaufmann · Buchhaltung &amp; Lohnabrechnung Berlin</span>
              <span className="mx-2 hidden sm:inline">·</span>
              <span className="hidden sm:inline italic">Bookkeeping &amp; Payroll Expert, Berlin</span>
            </p>
          </div>
        </section>
        <article className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            {post.content.map((s, i) => {
              if (s.type === "h2")
                return (
                  <h2 key={i} className="mt-10 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                    {s.text}
                  </h2>
                );
              if (s.type === "ul")
                return (
                  <ul key={i} className="mb-4 space-y-2">
                    {(s.items || []).map((it, j) => (
                      <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="mb-4 text-base leading-relaxed text-slate-600">
                  {s.text}
                </p>
              );
            })}

            {post.related && post.related.length > 0 && (
              <div className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
                <h2 className="mb-3 text-lg font-semibold text-slate-900">Passende Leistungen</h2>
                <ul className="space-y-2">
                  {post.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                        {r.label}
                        <Icon name="arrow-right" size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-center">
              <h2 className="text-xl font-bold text-white">Fragen zu Ihrer Buchhaltung in Berlin?</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
                Vereinbaren Sie ein kostenloses, unverbindliches Erstgespräch.
              </p>
              <Link
                href="/#kontakt"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Jetzt anfragen
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-600">
                <Icon name="arrow-left" size={14} />
                Zurück zum Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
