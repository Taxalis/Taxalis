import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Bewertung",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Sterne (1-5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "text",
      title: "Bewertungstext",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "meta",
      title: "Zusatzinfo (z.B. Branche, Rolle)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      description: "Kleinere Zahl = weiter vorne",
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "meta" },
  },
});
