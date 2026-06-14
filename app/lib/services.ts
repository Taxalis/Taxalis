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
}

export const services: ServiceDetails[] = [
  {
    id: "bueroservice",
    icon: "briefcase",
    title: "Büroservice",
    shortTitle: "Administrative Exzellenz",
    tagline: "Zeit gewinnen, Effizienz steigern",
    description: "Professionelle Büroorganisation und administrative Unterstützung für Ihr Unternehmen.",
    longDescription: "Verwaltung und Büroorganisation bindet wertvolle Zeit. Unsere Büroservices entlasten Sie vollständig von administrativen Aufgaben – vom Schriftverkehr über Terminplanung bis zur digitalen Dokumentenverwaltung. So können Sie sich auf strategische Aufgaben konzentrieren, während wir die operative Exzellenz sichern.",
    benefits: ["Mehr Zeit für wichtige Geschäftsaufgaben", "Professionelle Dokumentenpflege", "Optimierte Arbeitsprozesse", "Reduzierte Betriebskosten", "Verlässliche Kontinuität"],
    features: ["Schriftverkehr & Korrespondenz", "Digitales Dokumentenmanagement", "Terminplanung & Koordination", "Aktenorganisation & Archivierung", "Digitale Sicherung", "Kundenbetreuung"],
    processSteps: ["Analyse Ihrer bestehenden Prozesse", "Aufbau einer systematischen Struktur", "Schrittweise Digitalisierung", "Kontinuierliche Optimierung"],
    cta: "Kostenlose Beratung vereinbaren",
  },
  {
    id: "lohnbuchhaltung",
    icon: "wallet",
    title: "Lohnbuchhaltung",
    shortTitle: "Sichere Gehaltsabrechnung",
    tagline: "Präzision, Sicherheit, Compliance",
    description: "Vollständige Lohn- und Gehaltsabrechnung mit allen gesetzlichen Meldungen.",
    longDescription: "Lohnbuchhaltung ist Vertrauenssache und erfordert höchste Genauigkeit. Wir verwalten alle Aspekte der Gehaltsabrechnung – von Arbeitszeiten über Steuern und Sozialabgaben bis zu korrekten Behördenmeldungen. Rechtssicherheit für Sie, Zuverlässigkeit für Ihre Mitarbeiter.",
    benefits: ["100% gesetzliche Konformität", "Fehlerfreie Abrechnungen", "Automatisierte Prozesse", "Transparente Gehaltsabläufe", "Pünktliche Zahlungen", "Vollständige Meldepflicht-Abwicklung"],
    features: ["Monatliche Gehaltsabrechnung", "Steuer- und Sozialversicherung", "Behördenmeldungen", "Provision und Bonus-Abrechnung", "Minijob & Midijob-Verwaltung", "Sonderzahlungen & Abfindungen", "Mitarbeiter-Datenverwaltung"],
    processSteps: ["Erfassung Ihrer Mitarbeiterdaten", "Monatliche Arbeitszeit-Eingabe", "Automatische Berechnung & Verarbeitung", "Kontrolle und Freigabe", "Auszahlung & Behörden-Meldung"],
    cta: "Unverbindliches Angebot anfordern",
  },
  {
    id: "buchhaltung",
    icon: "bar-chart",
    title: "Buchhaltung",
    shortTitle: "Finanzielle Transparenz",
    tagline: "Verstehen Sie Ihre Zahlen",
    description: "Laufende Finanzbuchhaltung für vollständige Kontrolle über Ihre Finanzen.",
    longDescription: "Eine ordentliche Buchhaltung ist das Fundament erfolgreicher Geschäftsentscheidungen. Wir führen Ihre Finanzbuchhaltung digital, systematisch und nach allen Vorgaben. Jeder Geschäftsfall wird erfasst, geprüft und verbucht. Das Ergebnis: Vollständige finanzielle Transparenz, jederzeit verfügbar.",
    benefits: ["Vollständige finanzielle Kontrolle", "Steuerberater-fertige Unterlagen", "Optimierte Steuerlastplanung", "Tagesaktuelle Finanzkennzahlen", "Revisionssichere Dokumentation", "Datengestützte Geschäftsentscheidungen"],
    features: ["Digitale Belegerfassung", "Automatische Kategorisierung", "Kontoabstimmungen", "Rechnungs-Management", "Lieferantenverwaltung", "Kostenstellenrechnung", "Finanzielle Analysen & Reports"],
    processSteps: ["Überprüfung Ihrer Buchhaltungsstruktur", "Digitalisierung aller Prozesse", "Regelmäßige Erfassung & Verarbeitung", "Kontrollen und Abstimmungen", "Monatliche Berichterstattung"],
    cta: "Beratungsgespräch buchen",
  },
  {
    id: "buchfuehrung",
    icon: "book-open",
    title: "Buchführung",
    shortTitle: "Nach HGB-Standard",
    tagline: "Rechtskonform und verlässlich",
    description: "Ordnungsgemäße Buchführung nach HGB mit revisionssicherer Dokumentation.",
    longDescription: "Nach HGB muss jedes Unternehmen ordnungsgemäße Bücher führen. Wir garantieren volle Rechtskonformität – von der chronologischen Belegerfassung über systematische Kontierung bis zur Abschlussvorbereitung. Alles dokumentiert, revisionssicher und nachprüfbar.",
    benefits: ["Volle gesetzliche Konformität", "Revisionssichere Dokumentation", "Schnelle Jahresabschlüsse", "Transparente Gewinn- & Verlustrechnung", "Basis für strategische Planung", "Schutz vor Strafzahlungen"],
    features: ["Chronologische Belegerfassung", "Systematische Kontierung", "Tägliche Journalführung", "Kontenabstimmungen", "Inventur-Verarbeitung", "Gewinn- & Verlustrechnung", "Bilanzabstimmung"],
    processSteps: ["Einrichtung Ihres Kontensystems", "Tägliche Belegverarbeitung", "Monatliche Abstimmungen", "Quartals- und Jahresabschlüsse", "Archivierung nach gesetzlichen Vorgaben"],
    cta: "Jetzt kostenfrei anfragen",
  },
  {
    id: "vorbereitende-buchhaltung",
    icon: "layers",
    title: "Vorbereitende Buchhaltung",
    shortTitle: "Effiziente Steuerberater-Vorbereitung",
    tagline: "Sparen Sie erheblich bei Steuerberatung",
    description: "Professionelle Vorbereitung aller Unterlagen für optimale Steuerberater-Zusammenarbeit.",
    longDescription: "Mit professionell vorbereiteter Buchhaltung sparen Sie erheblich bei Steuerberatung. Belege werden sorgfältig geprüft, sortiert und kategorisiert. Ihr Steuerberater erhält ein vollständiges, strukturiertes Dossier und kann sich auf strategische Optimierung konzentrieren statt Zeit mit Datenerfassung zu verschwenden.",
    benefits: ["Deutliche Reduzierung der Steuerberater-Kosten", "Schnellerer Steuerprozess", "Keine Rückfragen durch Lücken", "Optimale Unterlagen-Qualität", "Professionelle Kategorisierung", "Maximale Effizienz für alle"],
    features: ["Belegprüfung & Sortierung", "Fachgerechte Kategorisierung", "Automatische Datenerfassung", "Kontierung und Korrektur", "Unterlagen-Checklisten", "Abweichungsanalyse", "Vollständigkeits-Check"],
    processSteps: ["Zusammenstellung aller Belege", "Prüfung auf Vollständigkeit", "Korrekte Kategorisierung", "Digitale Archivierung", "Übergabe an Ihren Steuerberater"],
    cta: "Kosten sparen – jetzt anfragen",
  },
  {
    id: "jahresabschluesse",
    icon: "trend-up",
    title: "Jahresabschlüsse",
    shortTitle: "Professionelle Abschlussvorbereitung",
    tagline: "Solide Basis für Ihre Steuererklärung",
    description: "Professionelle Vorbereitung aller Jahresabschlussunterlagen mit rechtlicher Sicherheit.",
    longDescription: "Der Jahresabschluss entscheidet über finanzielle Klarheit. Wir bereiten alle erforderlichen Unterlagen vor: Inventuren werden verarbeitet, Abschreibungen berechnet, Rückstellungen gebildet und alle Positionen final abgestimmt. Das Ergebnis: Eine solide, transparente Grundlage für einen reibungslosen Abschluss.",
    benefits: ["Rechtlich sichere Abschlüsse", "Transparente Jahresergebnisse", "Optimierte Steuerpositionen", "Schnelle Abschlusserstellung", "Professionelle Vermögensbewertung", "Risiken minimiert"],
    features: ["Inventur-Verarbeitung", "Anlagenabschreibung", "Forderungsabsicherung", "Rückstellungsbildung", "Verbindlichkeits-Review", "Bilanzabstimmung", "Gewinn- & Verlustrechnung"],
    processSteps: ["Vorbereitung aller Inventurdaten", "Berechnung aller Abschlussposten", "Fremdvergleich & Bewertung", "Vollständige Kontenabstimmung", "Finale Abschlussberichterstattung"],
    cta: "Abschluss-Beratung vereinbaren",
  },
  {
    id: "mahnwesen",
    icon: "bell",
    title: "Mahnwesen",
    shortTitle: "Professionelles Forderungsmanagement",
    tagline: "Ihre Zahlungsflüsse sichern",
    description: "Systematisches Forderungsmanagement von der Rechnung bis zur Mahnung.",
    longDescription: "Offene Forderungen binden Kapital und gefährden Ihre Liquidität. Wir verwalten Ihre Forderungen systematisch: Rechnungen werden überwacht, Zahlungseingänge geprüft und bei Verzug professionell gemahnt. Systematisch, konsequent und ergebnisorientiert – damit Ihr Geld kommt.",
    benefits: ["Verbesserte Zahlungsmoral", "Höhere Liquidität", "Weniger Zahlungsausfälle", "Systematische Kontrolle", "Keine verlorenen Rechnungen", "Professionelle Kommunikation"],
    features: ["Rechnungs-Tracking", "Zahlungsüberwachung", "Automatische Mahnungen", "Zahlungserinnerungen", "Berichterstattung", "Forderungs-Aging-Analyse", "Kundenkommunikation"],
    processSteps: ["Erfassung aller Rechnungen", "Überwachung der Zahlungsfälligkeiten", "Automatische Erinnerungen", "Eskalation bei Verzug", "Regelmäßige Berichterstattung"],
    cta: "Kostenlos testen",
  },
  {
    id: "rechnungserstellung",
    icon: "file-text",
    title: "Rechnungserstellung",
    shortTitle: "Korrekte, professionelle Rechnungen",
    tagline: "Schnell, gesetzlich konform",
    description: "Professionelle Rechnungserstellung mit vollständiger gesetzlicher Konformität.",
    longDescription: "Von der erbrachten Leistung zur perfekten Rechnung – wir kümmern uns um die korrekte, pünktliche Rechnungserstellung. Mit allen erforderlichen Angaben, fehlerfreier Steuerberechnung und revisionssicherer Dokumentation. So sparen Sie Zeit und minimieren Fehlerrisiken.",
    benefits: ["100% gesetzlich konforme Rechnungen", "Schnelle Abrechnungsprozesse", "Fehlerfreie Steuerberechnung", "Professionelle Gestaltung", "Digitale Archivierung", "Zeiteffizienz für Ihr Team"],
    features: ["Automatische Rechnungserstellung", "Sichere Numerierung", "Steuer- und Rabatt-Berechnung", "Zahlungsbedingungen", "Digitale Archivierung", "E-Mail-Versand", "Rechnungs-Register"],
    processSteps: ["Erfassung der Leistungsdaten", "Automatische Rechnungsgenerierung", "Kontrolle und Freigabe", "Versand an Kunden", "Digitale Archivierung"],
    cta: "Demo anfordern",
  },
  {
    id: "kostenrechnung",
    icon: "calculator",
    title: "Kostenrechnung",
    shortTitle: "Transparente Kostenanalyse",
    tagline: "Verstehen Sie Ihre Profitabilität",
    description: "Detaillierte Kostenanalyse für bessere Geschäftsentscheidungen.",
    longDescription: "Verstehen Sie, wohin Ihr Geld fließt. Durch systematische Kostenerfassung und -analyse identifizieren Sie Sparpotenziale, optimieren Ihre Preisgestaltung und treffen fundierte Geschäftsentscheidungen. Kostenrechnung ist die Basis für profitables Wachstum.",
    benefits: ["Klare Kostenstrukturen", "Rentabilität pro Service", "Identifizierte Sparpotenziale", "Optimierte Preisgestaltung", "Gewinn pro Kunde transparent", "Fundierte Geschäftsentscheidungen"],
    features: ["Kostenstellenrechnung", "Kostenträgerrechnung", "Variable & Fixkosten-Analyse", "Deckungsbeitrag-Berechnung", "Gewinn-/Verlust pro Projekt", "Kostentrend-Analyse", "Budgetvergleiche"],
    processSteps: ["Definition Ihrer Kostenstellen", "Erfassung und Kategorisierung", "Monatliche Analyse", "Berichterstattung mit Optimierungsvorschlägen", "Regelmäßige Anpassungen"],
    cta: "Analysegespräch vereinbaren",
  },
];

export function getServiceById(id: string): ServiceDetails | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((s) => s.id);
}
