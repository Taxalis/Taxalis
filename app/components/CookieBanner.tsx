"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsent"));
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Wir verwenden Analyse-Cookies (Google Analytics &amp; Vercel Analytics), um die Nutzung unserer Website zu verstehen und zu verbessern.
          Ihre Daten werden DSGVO-konform verarbeitet. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="font-medium text-emerald-600 underline hover:text-emerald-700">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-800"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
