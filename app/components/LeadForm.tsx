"use client";

import { useState } from "react";
import Icon, { IconName } from "@/app/components/Icon";

const FORM_SERVICES: { id: string; icon: IconName; title: string; desc: string }[] = [
  { id: "lohnbuchhaltung", icon: "wallet", title: "Lohnbuchhaltung", desc: "Gehaltsabrechnung & Meldewesen" },
  { id: "buchhaltung", icon: "bar-chart", title: "Buchhaltung", desc: "Belege, USt-Meldung, Auswertungen" },
  { id: "bueroservice", icon: "briefcase", title: "Büroservice & Beratung", desc: "Gründung & Verwaltung" },
  { id: "jahresabschluesse", icon: "trend-up", title: "Jahresabschluss-Vorbereitung", desc: "Vorarbeit für den Steuerberater" },
  { id: "full-service", icon: "sparkle", title: "Full-Service-Paket", desc: "Alles aus einer Hand" },
];

const SIZE_OPTIONS = ["1-5 Mitarbeiter", "6-20 Mitarbeiter", "20+ Mitarbeiter"];

const ROADMAP = [
  { n: "1", title: "Sichtung Ihrer Angaben", desc: "Wir prüfen Ihre Angaben und bereiten eine erste Einschätzung für Ihr Unternehmen vor." },
  { n: "2", title: "Persönlicher Rückruf", desc: "Wir melden uns telefonisch bei Ihnen, um Ihren Bedarf im Detail zu besprechen." },
  { n: "3", title: "Maßgeschneidertes Angebot", desc: "Sie erhalten ein individuelles, transparentes Angebot – ganz ohne Verpflichtung." },
];

type FormState = {
  services: string[];
  unternehmensgroesse: string;
  belegvolumen: number;
  name: string;
  firma: string;
  email: string;
  telefon: string;
};

const initialState: FormState = {
  services: [],
  unternehmensgroesse: "",
  belegvolumen: 50,
  name: "",
  firma: "",
  email: "",
  telefon: "",
};

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const update = (field: keyof FormState, value: string | number) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (id: string) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const canProceed = () => {
    if (step === 1) return data.services.length > 0;
    if (step === 2) return !!data.unternehmensgroesse;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const servicesLabel = FORM_SERVICES.filter((o) => data.services.includes(o.id))
    .map((o) => o.title)
    .join(", ");
  const belegvolumenLabel = data.belegvolumen >= 500 ? "500+" : String(data.belegvolumen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email) return;
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xnjrgeba", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          unternehmen: data.firma,
          telefon: data.telefon,
          gewuenschte_leistungen: servicesLabel,
          unternehmensgroesse: data.unternehmensgroesse,
          belegvolumen_pro_monat: belegvolumenLabel,
          _subject: "Neue qualifizierte Anfrage über taxalis-consulting.de",
        }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon name="check" size={28} strokeWidth={2.5} />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900">Anfrage erfolgreich qualifiziert.</h3>
        <p className="mb-6 text-sm text-slate-500">
          Vielen Dank{data.name ? `, ${data.name.split(" ")[0]}` : ""}! So geht es jetzt weiter:
        </p>
        <div className="space-y-4 text-left">
          {ROADMAP.map((s) => (
            <div className="flex gap-4" key={s.n}>
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                {s.n}
              </div>
              <div>
                <div className="mb-1 text-sm font-semibold text-slate-900">{s.title}</div>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50"
      onSubmit={handleSubmit}
    >
      <div className="mb-6 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-emerald-500" : "bg-slate-100"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Schritt 1 von 4</span>
          <div className="mb-5 mt-1 text-xl font-semibold text-slate-900">Wofür benötigen Sie Unterstützung?</div>
          <div className="grid grid-cols-2 gap-3">
            {FORM_SERVICES.map((opt) => {
              const selected = data.services.includes(opt.id);
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => toggleService(opt.id)}
                  className={`flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all ${
                    selected ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      selected ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon name={opt.icon} size={18} />
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{opt.title}</div>
                  <div className="text-xs text-slate-500">{opt.desc}</div>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-slate-400">Mehrfachauswahl möglich.</p>
        </div>
      )}

      {step === 2 && (
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Schritt 2 von 4</span>
          <div className="mb-5 mt-1 text-xl font-semibold text-slate-900">Wie groß ist Ihr Unternehmen?</div>
          <div className="flex flex-col gap-3">
            {SIZE_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => update("unternehmensgroesse", opt)}
                className={`rounded-xl border-2 px-5 py-4 text-left text-sm font-medium transition-all ${
                  data.unternehmensgroesse === opt
                    ? "border-emerald-500 bg-emerald-50 text-slate-900"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Schritt 3 von 4</span>
          <div className="mb-5 mt-1 text-xl font-semibold text-slate-900">Wie viele Belege fallen monatlich an?</div>
          <div className="mb-4 text-center text-3xl font-bold text-emerald-600">{belegvolumenLabel}</div>
          <input
            type="range"
            min={0}
            max={500}
            step={10}
            value={data.belegvolumen}
            onChange={(e) => update("belegvolumen", Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>0</span>
            <span>500+</span>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Schritt 4 von 4</span>
          <div className="mb-5 mt-1 text-xl font-semibold text-slate-900">Ihre Kontaktdaten</div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Ihr Name *"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            <input
              type="text"
              placeholder="Firmenname"
              value={data.firma}
              onChange={(e) => update("firma", e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            <input
              type="email"
              placeholder="E-Mail-Adresse *"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              value={data.telefon}
              onChange={(e) => update("telefon", e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          {error && (
            <div className="mt-3 text-sm font-semibold text-red-600">
              Fehler beim Versenden. Bitte versuchen Sie es später erneut.
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700"
          >
            <Icon name="arrow-left" size={16} />
            Zurück
          </button>
        ) : (
          <span />
        )}
        {step < 4 && (
          <button
            type="button"
            disabled={!canProceed()}
            onClick={next}
            className="ml-auto flex items-center gap-1.5 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Weiter
            <Icon name="arrow-right" size={16} />
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            disabled={submitting}
            className="ml-auto rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Wird gesendet..." : "Unverbindlich anfragen"}
          </button>
        )}
      </div>
    </form>
  );
}
