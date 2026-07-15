"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Testimonial } from "@/app/lib/testimonials";

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const items = testimonials.filter((t) => t.text);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveIndex(i);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => {
      const n = (prev + 1) % items.length;
      const track = trackRef.current;
      if (track) {
        const card = track.children[n] as HTMLElement;
        if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
      }
      return n;
    });
  }, [items.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => {
      const n = (prev - 1 + items.length) % items.length;
      const track = trackRef.current;
      if (track) {
        const card = track.children[n] as HTMLElement;
        if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
      }
      return n;
    });
  }, [items.length]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {items.map((t, i) => (
          <div
            key={t.name + i}
            className="snap-start flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-200/40 transition-all duration-300">
              {/* Stars + quote mark */}
              <div className="mb-3 flex items-start justify-between">
                <div
                  className="text-amber-400"
                  aria-label={`${t.rating} von 5 Sternen`}
                >
                  {"★".repeat(t.rating)}
                </div>
                <span
                  className="text-5xl font-serif leading-none text-emerald-100 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
              </div>

              {/* Text */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 italic">
                {t.text}
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  {t.meta && (
                    <div className="text-xs text-slate-400">{t.meta}</div>
                  )}
                </div>
                {/* Google G */}
                <div className="ml-auto flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google" role="img">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Arrows */}
      <button
        onClick={prev}
        aria-label="Vorherige Bewertung"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md text-slate-500 transition-all hover:border-emerald-300 hover:text-emerald-600 hover:shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        onClick={next}
        aria-label="Nächste Bewertung"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md text-slate-500 transition-all hover:border-emerald-300 hover:text-emerald-600 hover:shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Bewertung ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-emerald-500"
                : "w-2 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
