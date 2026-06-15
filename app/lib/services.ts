import type { IconName } from "@/app/components/Icon";

export interface ServiceDetails {
  id: string;
  icon: IconName;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  processSteps: string[];
  cta: string;
  /**
   * Optional compliance note shown on the service detail page for services
   * close to the boundary of the Steuerberatungsgesetz (§ 6 StBerG). Makes
   * transparent that Taxalis Consulting performs preparatory bookkeeping /
   * payroll tasks only and is not a Steuerberater.
   */
  complianceNote?: string;
}

export const services: ServiceDetails[] = [
  {
    id: "lohnbuchhaltung",
    icon: "wallet",
    title: "Lohnbuchhaltung",
    shortTitle: "Sichere Gehaltsabrechnung",
    tagline: "Präzision, Sicherheit, Compliance",
    description: "Vollständige Lohn- und Gehaltsabrechnung mit allen Anmeldungen, Meldungen und digitaler Personalakte.",
    longDescription: "Lohnbuchhaltung ist Vertrauenssache und erfordert höchste Genauigkeit. Wir übernehmen die An- und Abmeldung Ihrer Mitarbeiter, erstellen Arbeitsverträge, führen die digitale Personalakte und rechnen Monat für Monat zuverlässig ab – inklusive aller Meldungen via Elster und an die Sozialversicherung. Auf Wunsch binden wir eine Zeiterfassung ein und kontrollieren die Arbeitszeitkonten. Rechtssicherheit für Sie, Zuverlässigkeit für Ihre Mitarbeiter.",
    benefits: ["Gesetzeskonforme, pünktliche Abrechnungen", "An- und Abmeldungen zuverlässig erledigt", "Digitale Personalakte – jederzeit griffbereit", "Korrekte Elster- und Sozialversicherungsmeldungen", "Saubere Monatswechsel ohne Fristversäumnis", "Persönlicher Berliner Ansprechpartner"],
    features: ["Anmeldung & Abmeldung von Mitarbeitern", "Erstellung von Arbeitsverträgen", "Digitale Personalakte (E-Akte)", "Monatliche Lohn- und Gehaltsabrechnung", "Optionale Zeit- und Stundenerfassung", "Kontrolle der Arbeitszeitkonten", "Monatswechsel & Lohnsteueranmeldung (Elster)", "Sozialversicherungsmeldungen & -wechsel", "Lohnkorrekturen bei Bedarf"],
    processSteps: ["An-/Abmeldung & Erfassung Ihrer Mitarbeiterdaten", "Festlegung der Stundenbasis (vorgegeben oder per Zeiterfassung)", "Monatliche Abrechnung & Kontrolle der Arbeitszeitkonten", "Meldungen via Elster und an die Sozialversicherung", "Kontrolle, Freigabe und Korrekturen bei Bedarf"],
    cta: "Unverbindliches Angebot anfordern",
  },
  {
    id: "buchhaltung",
    icon: "bar-chart",
    title: "Buchhaltung",
    shortTitle: "Finanzielle Transparenz",
    tagline: "Verstehen Sie Ihre Zahlen",
    description: "Laufende Finanzbuchhaltung inklusive Belegerfassung und Umsatzsteuer-Meldung – als optimale Grundlage für Ihren Steuerberater.",
    longDescription: "Eine ordentliche, laufende Buchhaltung ist das Fundament erfolgreicher Geschäftsentscheidungen. Wir erfassen Ihre Belege digital, ordnen jeden Geschäftsvorfall korrekt zu und übernehmen die laufende Umsatzsteuer-Erfassung und -Meldung. Auf Wunsch führen wir auch Ihr Kassenbuch. Das Ergebnis: vollständige finanzielle Transparenz – und eine steuerberater-fertig vorbereitete Buchhaltung.",
    benefits: ["Vollständige finanzielle Kontrolle", "Laufende Umsatzsteuer-Erfassung & -Meldung", "Steuerberater-fertige Unterlagen", "Skalierbar nach Belegvolumen", "Revisionssichere Dokumentation", "Optionale Kassenbuchführung"],
    features: ["Digitale Belegerfassung", "Erfassung & Meldung der Umsatzsteuer (UStVA)", "Kontenabstimmung", "Verbuchung nach Belegvolumen", "Optionale Kassenbuchführung", "Monatliche betriebswirtschaftliche Auswertung (BWA)", "Vollständige Vorbereitung für Ihren Steuerberater"],
    processSteps: ["Einrichtung Ihrer Buchhaltungsstruktur", "Digitale Belegerfassung", "Laufende Verbuchung & Kontenabstimmung", "Umsatzsteuer-Erfassung & -Meldung", "Monatliche Auswertung & Übergabe"],
    cta: "Beratungsgespräch buchen",
    complianceNote: "Die laufende Finanzbuchhaltung erbringen wir gemäß § 6 Nr. 4 StBerG. Steuerliche Auswertungen, Erklärungen und Beratung erfolgen durch den Steuerberater Ihres Vertrauens – mit unseren Auswertungen als verlässlicher Grundlage.",
  },
  {
    id: "bueroservice",
    icon: "briefcase",
    title: "Büroservice & Unternehmensberatung",
    shortTitle: "Administrative Entlastung & Gründung",
    tagline: "Von der Gründung bis zum Tagesgeschäft",
    description: "Unterstützung bei der Unternehmensgründung sowie im laufenden behördlichen und administrativen Schriftverkehr.",
    longDescription: "Ob Neugründung oder laufendes Tagesgeschäft – wir nehmen Ihnen den administrativen Aufwand ab. Beim Onboarding übernehmen wir Gewerbeanmeldung, steuerliche Erfassung, die Anmeldung bei der Berufsgenossenschaft und die Beantragung der Betriebsnummer. Im laufenden Betrieb unterstützen wir Sie pro Vorgang – von Versicherungen über Bankwesen bis zur Korrespondenz mit Behörden und Sozialversicherungsträgern.",
    benefits: ["Reibungsloser Start in die Selbstständigkeit", "Alle Gründungs-Formalitäten aus einer Hand", "Entlastung im behördlichen Schriftverkehr", "Flexible Bearbeitung pro Vorgang", "Fristen sicher im Blick", "Persönlicher Ansprechpartner in Berlin"],
    features: ["Neugründung: Gewerbeanmeldung", "Steuerliche Erfassung beim Finanzamt", "Anmeldung Berufsgenossenschaft (BG)", "Beantragung der Betriebsnummer", "Versicherungsangelegenheiten", "Widerspruch & Meldungen", "Bankwesen & Korrespondenz", "Sozialversicherungstechnische Vorgänge", "Behördliche Mitwirkungsaufforderungen"],
    processSteps: ["Erstgespräch & Bedarfsklärung", "Onboarding bzw. Erfassung des Vorgangs", "Bearbeitung & Kommunikation mit Behörden und Stellen", "Rückmeldung & Dokumentation", "Ablage in Ihrer digitalen Akte"],
    cta: "Kostenlose Beratung vereinbaren",
  },
  {
    id: "jahresabschluesse",
    icon: "trend-up",
    title: "Jahresabschluss-Vorbereitung",
    shortTitle: "Optimale Vorarbeit für Ihren Steuerberater",
    tagline: "Auch rückwirkend – sauber aufbereitet",
    description: "Strukturierte Vorbereitung aller Unterlagen für den Jahresabschluss – auch rückwirkend, für eine reibungslose Zusammenarbeit mit Ihrer Steuerkanzlei.",
    longDescription: "Den Jahresabschluss und die Steuererklärung erstellt Ihr Steuerberater – wir sorgen dafür, dass er dafür alles in bestmöglicher Form vorliegen hat. Bei Bedarf arbeiten wir auch zurückliegende Monate vollständig auf: Wir holen die laufende Buchhaltung nach, gleichen sämtliche Konten ab, prüfen offene Posten auf Plausibilität und stellen ein strukturiertes Übergabe-Dossier zusammen. Das spart Zeit, reduziert Rückfragen und senkt häufig die Kosten Ihrer Steuerkanzlei.",
    benefits: ["Auch rückwirkende Aufarbeitung möglich", "Schnellere Abschlusserstellung durch Ihren Steuerberater", "Weniger Rückfragen durch vollständige Unterlagen", "Reduzierte Kosten Ihrer Steuerkanzlei", "Lückenlose Kontenabstimmung", "Professionell strukturierte Übergabe"],
    features: ["Nachträgliche Aufarbeitung der laufenden Buchhaltung", "Inventur-Vorbereitung & Erfassung", "Vollständige Kontenabstimmung", "Prüfung offener Posten", "Plausibilitätsprüfung der Buchhaltung", "Strukturiertes Übergabe-Dossier", "Direkte Abstimmung mit Ihrer Steuerkanzlei"],
    processSteps: ["Sichtung & Sammlung aller Unterlagen", "Nachbuchung zurückliegender Monate (falls nötig)", "Inventur-Erfassung & Kontenabstimmung", "Plausibilitätsprüfung", "Übergabe an Ihren Steuerberater"],
    cta: "Abschluss-Vorbereitung anfragen",
    complianceNote: "Die Erstellung des Jahresabschlusses (Bilanz, GuV) und von Steuererklärungen ist Steuerberatern vorbehalten. Wir übernehmen ausschließlich die vorbereitenden buchhalterischen Tätigkeiten gemäß § 6 StBerG und arbeiten dafür eng mit Ihrer Steuerkanzlei zusammen.",
  },
];

export function getServiceById(id: string): ServiceDetails | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((s) => s.id);
}
