import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // "published" reicht für eine öffentliche Website ohne Login-Vorschau.
  // useCdn: false sorgt dafür, dass neue Inhalte sofort sichtbar sind.
  useCdn: false,
});
