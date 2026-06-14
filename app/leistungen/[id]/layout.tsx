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

  const description = `${service.description} Jetzt unverbindlich bei Taxalis Consulting in Berlin anfragen.`;

  return {
    title: service.title,
    description,
    alternates: {
      canonical: `/leistungen/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | Taxalis Consulting`,
      description,
      url: `/leistungen/${service.id}`,
      type: "website",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
