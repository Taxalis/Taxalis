import type { Testimonial } from "./testimonials";

export interface GoogleReviewsResult {
  testimonials: Testimonial[];
  rating: number;
  total: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapReview(r: any): Testimonial {
  return {
    name: r.author_name ?? "Anonym",
    rating: r.rating ?? 5,
    text: r.text?.trim() || undefined,
    meta: undefined,
  };
}

/**
 * Holt die neuesten Google-Bewertungen via Places API (Legacy Details Endpoint).
 * Wird per ISR stündlich auf Vercel gecacht – kein Deployment nötig wenn neue
 * Reviews eingehen.
 *
 * Umgebungsvariablen (in Vercel setzen):
 *   GOOGLE_PLACES_API_KEY   – Google Cloud API Key (Places API aktiviert)
 *   GOOGLE_PLACE_ID         – Place ID z.B. "ChIJ..." (einmalig ermitteln)
 *
 * Gibt null zurück wenn Variablen fehlen oder API-Fehler auftritt (Fallback greift).
 */
export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) return null;

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "reviews,rating,user_ratings_total");
    url.searchParams.set("language", "de");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // stündlich aktualisieren
    });

    if (!res.ok) return null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await res.json();
    if (data.status !== "OK") return null;

    const result = data.result;
    const testimonials: Testimonial[] = (result.reviews ?? [])
      .filter((r: { rating: number }) => r.rating >= 4) // nur 4 & 5 Sterne zeigen
      .map(mapReview);

    return {
      testimonials,
      rating: result.rating ?? 5.0,
      total: result.user_ratings_total ?? 0,
    };
  } catch {
    return null;
  }
}
