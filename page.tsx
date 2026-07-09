/**
 * Diese Route bindet das Sanity Studio direkt unter /studio ein.
 * Nach dem Deployment erreichst du es unter:
 * https://taxalis-consulting.de/studio
 */
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
