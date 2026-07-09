import { client } from "./client";

export interface SiteSettings {
  heroBadge?: string;
  heroHeading?: string;
  heroText?: string;
  heroImage?: unknown;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  rating: number;
  text?: string;
  meta?: string;
}

export interface SanityFaqItem {
  _id: string;
  question: string;
  answer: string;
  category?: string;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0]{heroBadge, heroHeading, heroText, heroImage}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc){_id, name, rating, text, meta}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getFaqItems(): Promise<SanityFaqItem[]> {
  return client.fetch(
    `*[_type == "faqItem"] | order(order asc){_id, question, answer, category}`,
    {},
    { next: { revalidate: 60 } }
  );
}
