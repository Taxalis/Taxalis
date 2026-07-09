import { client } from "./client";
import type { PortableTextBlock } from "@portabletext/types";

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

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  date: string;
  readingMinutes?: number;
  excerpt: string;
  description?: string;
  keywords?: string[];
  coverImage?: unknown;
  content: PortableTextBlock[];
}

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(date desc){
      _id, title, "slug": slug.current, category, date, readingMinutes, excerpt, description, keywords, coverImage, content
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, category, date, readingMinutes, excerpt, description, keywords, coverImage, content
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}
