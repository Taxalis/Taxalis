import { Metadata } from "next";
import { getServiceById, getAllServiceIds } from "@/app/lib/services";

export function generateStaticParams() {
  return getAllServiceIds().map((id) => ({
    id: id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Leistung nicht gefunden",
      description: "Die gewünschte Leistung konnte nicht gefunden werden.",
      robots: { index: false, follow: true },
    };
  }

  const title = service.seoTitle ?? service.title;
  const description =
    service.seoDescription ?? `${service.description} Jetzt unverbindlich bei Taxalis Consulting in Berlin anfragen.`;

  return {
    title,
    description,
    keywords: service.localKeywords,
    alternates: {
      canonical: `/leistungen/${service.id}`,
    },
    openGraph: {
      title: `${title} | Taxalis Consulting`,
      description,
      url: `/leistungen/${service.id}`,
      type: "website",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);

  const jsonLd = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        name: `${service.title} Berlin`,
        description: service.seoDescription ?? service.description,
        areaServed: { "@type": "City", name: "Berlin" },
        url: `https://www.taxalis-consulting.de/leistungen/${service.id}`,
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
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {children}
    </>
  );
}
