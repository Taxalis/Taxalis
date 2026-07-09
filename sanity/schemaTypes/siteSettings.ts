import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Startseite: Hero-Bereich",
  type: "document",
  fields: [
    defineField({
      name: "heroBadge",
      title: "Kleiner Badge-Text über der Überschrift",
      type: "string",
    }),
    defineField({
      name: "heroHeading",
      title: "Große Überschrift",
      type: "string",
    }),
    defineField({
      name: "heroText",
      title: "Beschreibungstext unter der Überschrift",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Bild im Hero-Bereich",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
