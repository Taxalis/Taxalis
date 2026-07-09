import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blogbeitrag",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL (automatisch aus Titel, kann angepasst werden)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      description: "z.B. Lohnbuchhaltung, Buchhaltung, Gründung",
    }),
    defineField({
      name: "date",
      title: "Veröffentlichungsdatum",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingMinutes",
      title: "Lesezeit (Minuten)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "excerpt",
      title: "Kurzbeschreibung (Vorschau auf der Blog-Übersicht)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "SEO-Beschreibung (für Google)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "keywords",
      title: "Schlagwörter (SEO)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "coverImage",
      title: "Titelbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Artikeltext",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Absatz", value: "normal" },
            { title: "Überschrift", value: "h2" },
          ],
          lists: [{ title: "Aufzählung", value: "bullet" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Datum, neueste zuerst",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
