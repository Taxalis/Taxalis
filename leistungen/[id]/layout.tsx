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
    };
  }

  return {
    title: `${service.title} | Taxalis Consulting`,
    description: service.longDescription,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
