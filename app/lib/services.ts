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
    longDescription: "Lohnbuchhaltung ist Vertrauenssache und erfordert höchste Genauigkeit. Wir verwalten alle Aspekte der laufenden Gehaltsabrechnung – von Arbeitszeiten über Lohnsteuer und Sozialabgaben bis zu den korrekten Meldungen an die zuständigen Stellen. Rechtssicherheit für Sie, Zuverlässigkeit für Ihre Mitarbeiter.",
    benefits: ["Gesetzeskonforme, pünktliche Abrechnungen", "Fehlerfreie Lohn- und Gehaltsläufe", "Automatisierte Prozesse", "Transparente Gehaltsabläufe", "Pünktliche Zahlungen", "Vollständige Abwicklung der Meldepflichten"],
    features: ["Monatliche Gehaltsabrechnung", "Lohnsteuer- und Sozialversicherungsberechnung", "Behörden- und Krankenkassenmeldungen", "Provisions- und Bonusabrechnung", "Minijob- & Midijob-Verwaltung", "Sonderzahlungen & Abfindungen", "Mitarbeiter-Datenverwaltung"],
    processSteps: ["Erfassung Ihrer Mitarbeiterdaten", "Monatliche Arbeitszeit-Eingabe", "Berechnung & Verarbeitung der Abrechnung", "Kontrolle und Freigabe", "Auszahlung & Meldung an die Behörden"],
    cta: "Unverbindliches Angebot anfordern",
  },
  {
    id: "buchhaltung",
    icon: "bar-chart",
    title: "Buchhaltung",
    shortTitle: "Finanzielle Transparenz",
    tagline: "Verstehen Sie Ihre Zahlen",
    description: "Laufende Finanzbuchhaltung für vollständige Kontrolle über Ihre Finanzen.",
    longDescription: "Eine ordentliche, laufende Buchhaltung ist das Fundament erfolgreicher Geschäftsentscheidungen. Wir führen Ihre Finanzbuchhaltung digital, systematisch und nach allen Vorgaben. Jeder Geschäftsvorfall wird erfasst, geprüft und verbucht. Das Ergebnis: vollständige finanzielle Transparenz, jederzeit verfügbar – und eine optimal vorbereitete Grundlage für Ihren Steuerberater.",
    benefits: ["Vollständige finanzielle Kontrolle", "Steuerberater-fertige Unterlagen", "Fundierte Basis für die Steuerplanung Ihres Steuerberaters", "Tagesaktuelle Finanzkennzahlen", "Revisionssichere Dokumentation", "Datengestützte Geschäftsentscheidungen"],
    features: ["Digitale Belegerfassung", "Automatische Kategorisierung", "Kontoabstimmungen", "Rechnungs-Management", "Lieferantenverwaltung", "Kostenstellenrechnung", "Monatliche betriebswirtschaftliche Auswertung (BWA)"],
    processSteps: ["Überprüfung Ihrer Buchhaltungsstruktur", "Digitalisierung aller Prozesse", "Regelmäßige Erfassung & Verarbeitung", "Kontrollen und Abstimmungen", "Monatliche Berichterstattung"],
    cta: "Beratungsgespräch buchen",
    complianceNote: "Die laufende Finanzbuchhaltung erbringen wir gemäß § 6 Nr. 4 StBerG. Steuerliche Auswertungen, Erklärungen und Beratung erfolgen durch den Steuerberater Ihres Vertrauens – mit unseren Auswertungen als verlässlicher Grundlage.",
  },
  {
    id: "buchfuehrung",
    icon: "book-open",
    title: "Buchführung",
    shortTitle: "Nach HGB-Standard",
    tagline: "Rechtskonform und verlässlich",
    description: "Ordnungsgemäße laufende Buchführung nach HGB mit revisionssicherer Dokumentation.",
    longDescription: "Nach HGB muss jedes Unternehmen ordnungsgemäße Bücher führen. Wir übernehmen die laufende Buchführung mit voller Rechtskonformität – von der chronologischen Belegerfassung über die systematische Kontierung bis zur optimalen Vorbereitung Ihres Jahresabschlusses. Alles dokumentiert, revisionssicher und nachprüfbar – damit Ihr Steuerberater den Abschluss zügig fertigstellen kann.",
    benefits: ["Volle gesetzliche Konformität", "Revisionssichere Dokumentation", "Optimale Vorbereitung für Ihren Jahresabschluss", "Aussagekräftige monatliche Auswertungen", "Basis für strategische Planung", "Schutz vor Fristversäumnissen"],
    features: ["Chronologische Belegerfassung", "Systematische Kontierung", "Tägliche Journalführung", "Kontenabstimmungen", "Inventur-Vorbereitung", "Betriebswirtschaftliche Auswertung (BWA)", "Abstimmung mit Ihrer Steuerkanzlei"],
    processSteps: ["Einrichtung Ihres Kontensystems", "Tägliche Belegverarbeitung", "Monatliche Abstimmungen", "Vorbereitung der Quartals- und Jahreswerte", "Archivierung nach gesetzlichen Vorgaben"],
    cta: "Jetzt kostenfrei anfragen",
    complianceNote: "Die laufende Buchführung führen wir gemäß § 6 Nr. 4 StBerG für Sie. Den Jahresabschluss selbst sowie Steuererklärungen erstellt Ihr Steuerberater – wir liefern dafür eine vollständig vorbereitete, abgestimmte Buchhaltung.",
  },
  {
    id: "vorbereitende-buchhaltung",
    icon: "layers",
    title: "Vorbereitende Buchhaltung",
    shortTitle: "Effiziente Steuerberater-Vorbereitung",
    tagline: "Sparen Sie erheblich bei Steuerberatung",
    description: "Professionelle Vorbereitung aller Unterlagen für eine optimale Zusammenarbeit mit Ihrem Steuerberater.",
    longDescription: "Mit professionell vorbereiteter Buchhaltung sparen Sie erheblich bei Steuerberatung. Belege werden sorgfältig geprüft, sortiert und kategorisiert. Ihr Steuerberater erhält ein vollständiges, strukturiertes Dossier und kann sich auf seine eigentliche Aufgabe – die steuerliche Bewertung, Erklärungen und Beratung – konzentrieren, statt Zeit mit Datenerfassung zu verbringen.",
    benefits: ["Deutliche Reduzierung der Steuerberater-Kosten", "Schnellerer Ablauf bei Ihrer Steuerkanzlei", "Keine Rückfragen durch Lücken", "Optimale Unterlagen-Qualität", "Professionelle Kategorisierung", "Maximale Effizienz für alle Beteiligten"],
    features: ["Belegprüfung & Sortierung", "Fachgerechte Kategorisierung", "Digitale Datenerfassung", "Kontierungsvorschläge", "Unterlagen-Checklisten", "Abweichungsanalyse", "Vollständigkeits-Check vor Übergabe"],
    processSteps: ["Zusammenstellung aller Belege", "Prüfung auf Vollständigkeit", "Korrekte Kategorisierung", "Digitale Archivierung", "Übergabe an Ihren Steuerberater"],
    cta: "Kosten sparen – jetzt anfragen",
    complianceNote: "Wir übernehmen ausschließlich vorbereitende, buchhalterische Tätigkeiten gemäß § 6 StBerG. Die steuerliche Bewertung, Erklärungen und verbindliche Beratung erfolgen durch Ihren Steuerberater – wir bereiten lediglich optimal zu.",
  },
  {
    id: "jahresabschluesse",
    icon: "trend-up",
    title: "Vorbereitende Jahresabschlussarbeiten",
    shortTitle: "Effiziente Abschluss-Vorbereitung",
    tagline: "Optimale Vorarbeit für Ihren Steuerberater",
    description: "Strukturierte Vorbereitung aller Unterlagen für den Jahresabschluss – für eine schnelle, reibungslose Zusammenarbeit mit Ihrer Steuerkanzlei.",
    longDescription: "Den Jahresabschluss erstellt Ihr Steuerberater – wir sorgen dafür, dass er dafür alles in bestmöglicher Form vorliegen hat. Wir stellen Inventurdaten zusammen, gleichen sämtliche Konten ab, prüfen offene Posten auf Plausibilität und bereiten ein vollständiges, strukturiertes Übergabe-Dossier vor. Das spart Zeit, reduziert Rückfragen und senkt häufig die Kosten Ihrer Steuerkanzlei zum Jahresende.",
    benefits: ["Schnellere Abschlusserstellung durch Ihren Steuerberater", "Weniger Rückfragen durch vollständige Unterlagen", "Reduzierte Kosten Ihrer Steuerkanzlei", "Lückenlose Kontenabstimmung", "Klarer Überblick noch vor Jahresende", "Professionell strukturierte Übergabe-Dokumentation"],
    features: ["Inventur-Vorbereitung & Erfassung", "Vollständige Kontenabstimmung", "Prüfung offener Posten", "Zusammenstellung aller Belege", "Plausibilitätsprüfung der laufenden Buchhaltung", "Strukturiertes Übergabe-Dossier", "Direkte Abstimmung mit Ihrer Steuerkanzlei"],
    processSteps: ["Vorbereitung & Sammlung aller Unterlagen", "Inventur-Erfassung", "Vollständige Kontenabstimmung", "Plausibilitätsprüfung", "Übergabe an Ihren Steuerberater"],
    cta: "Abschluss-Vorbereitung anfragen",
    complianceNote: "Die Erstellung des Jahresabschlusses (Bilanz, GuV) und von Steuererklärungen ist Steuerberatern vorbehalten. Wir übernehmen ausschließlich die vorbereitenden buchhalterischen Tätigkeiten gemäß § 6 StBerG und arbeiten dafür eng mit Ihrer Steuerkanzlei zusammen.",
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
    longDescription: "Von der erbrachten Leistung zur perfekten Rechnung – wir kümmern uns um die korrekte, pünktliche Rechnungserstellung. Mit allen erforderlichen Angaben, fehlerfreier Berechnung und revisionssicherer Dokumentation. So sparen Sie Zeit und minimieren Fehlerrisiken.",
    benefits: ["Gesetzlich konforme Rechnungen", "Schnelle Abrechnungsprozesse", "Fehlerfreie Berechnung", "Professionelle Gestaltung", "Digitale Archivierung", "Zeiteffizienz für Ihr Team"],
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
    longDescription: "Verstehen Sie, wohin Ihr Geld fließt. Durch systematische Kostenerfassung und -analyse identifizieren Sie Sparpotenziale, optimieren Ihre Preisgestaltung und treffen fundierte unternehmerische Entscheidungen. Kostenrechnung ist die Basis für profitables Wachstum.",
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
