"use client";

import { useEffect, useRef, useState } from "react";

export const DELAYS = ["delay-0", "delay-75", "delay-150", "delay-225"];

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible so SSR/initial paint is never blocked (FCP/LCP fix)
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in the viewport when JS loads, keep it visible (no animation)
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      setAnimated(false);
      return;
    }

    // Element is below the fold — hide it and animate it in on scroll
    setVisible(false);
    setAnimated(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${animated ? "transition-all duration-700 ease-out" : ""} ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
