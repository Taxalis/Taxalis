"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "taxalis-studio",
  title: "Taxalis Website Inhalte",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    // Vision erlaubt Testabfragen direkt im Studio (nur für Entwickler nützlich).
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
