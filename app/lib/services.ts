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
  processSteps: { title: string; desc: string }[];
  cta: string;
  /**
   * Optional compliance note shown on the service detail page for services
   * close to the boundary of the Steuerberatungsgesetz (§ 6 StBerG). Makes
   * transparent that Taxalis Consulting performs preparatory bookkeeping /
   * payroll tasks only and is not a Steuerberater.
   */
  complianceNote?: string;
  /** SEO: keyword-optimised <title> (brand suffix is appended via template). */
  seoTitle?: string;
  /** SEO: keyword-optimised meta description. */
  seoDescription?: string;
  /** SEO: additional target keywords for this page. */
  localKeywords?: string[];
  /** Berlin-focused content paragraphs rendered on the detail page. */
  localIntro?: string[];
  /** FAQ items shown on the detail page with FAQPage schema markup. */
  faq?: { q: string; a: string }[];
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
    seoTitle: "Lohnbuchhaltung Berlin – Digitale Gehaltsabrechnung & Meldewesen",
    seoDescription: "Externe Lohnbuchhaltung in Berlin: digitale Gehaltsabrechnung, An-/Abmeldungen, Elster- und SV-Meldungen – DSGVO-konform und mit persönlichem Ansprechpartner. Jetzt anfragen.",
    localKeywords: ["Lohnbuchhaltung Berlin", "externe Lohnbuchhaltung Berlin", "Gehaltsabrechnung Berlin", "digitale Lohnbuchhaltung Berlin", "Lohnabrechnung Berlin"],
    localIntro: [
      "Als Arbeitgeber in Berlin tragen Sie Verantwortung für pünktliche, korrekte Gehaltsabrechnungen – Monat für Monat. Genau hier setzt unsere externe Lohnbuchhaltung in Berlin an: Wir übernehmen die komplette laufende Lohn- und Gehaltsabrechnung, von der An- und Abmeldung Ihrer Mitarbeiter über die digitale Personalakte bis zu allen Meldungen an Finanzamt, Krankenkassen und Sozialversicherung.",
      "Ob Minijob, Teilzeit oder Vollzeit, ob fünf oder fünfzig Mitarbeiter – wir arbeiten zu 100 % digital und DSGVO-konform. Auf Wunsch binden wir eine Zeiterfassung ein, kontrollieren die Arbeitszeitkonten und sorgen für den reibungslosen Monatswechsel inklusive Lohnsteueranmeldung per Elster.",
      "Unser Lohnbüro in Berlin betreut Unternehmen aus dem gesamten Stadtgebiet – von Charlottenburg und Wilmersdorf über Prenzlauer Berg und Mitte bis nach Schöneberg, Steglitz und Tempelhof. Dank volldigitaler Prozesse spielt es keine Rolle, wo in Berlin oder Brandenburg Ihr Unternehmen ansässig ist: die Zusammenarbeit läuft nahtlos per App, E-Mail und Video.",
      "Was kostet ein externes Lohnbüro in Berlin? Unsere Lohnbuchhaltung wird pro Mitarbeiter abgerechnet – ab 20 € je Mitarbeiter und Monat. Das ist günstiger als eine eigene Personalstelle und vermeidet zugleich Ausfallrisiken durch Krankheit oder Urlaub der eigenen Kraft. Bei mehr als fünf Mitarbeitern gelten attraktive Staffelpreise.",
      "Der Vorteil eines externen Lohnbuchhaltungspartners liegt auf der Hand: Sie sparen Zeit, vermeiden Fehler und Fristversäumnisse – und haben trotzdem einen festen, persönlichen Ansprechpartner vor Ort. Fordern Sie jetzt Ihr unverbindliches Angebot an.",
    ],
    faq: [
      {
        q: "Was kostet externe Lohnbuchhaltung in Berlin?",
        a: "Unsere Lohnbuchhaltung beginnt ab 20 € pro Mitarbeiter und Monat. Der genaue Preis richtet sich nach Mitarbeiteranzahl, Abrechnungsvolumen und gewünschten Zusatzleistungen wie Zeiterfassung oder Arbeitsvertragserstellung. Ab fünf Mitarbeitern gelten attraktive Staffelpreise. Nach einem kurzen Erstgespräch erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        q: "Ab wie vielen Mitarbeitern lohnt sich ein externes Lohnbüro?",
        a: "Bereits ab dem ersten Mitarbeiter lohnt sich die Auslagerung: Sie vermeiden Einarbeitungsaufwand, teure Fehler und Fristversäumnisse bei Elster und Sozialversicherung. Gerade kleine Unternehmen in Berlin mit 1–10 Mitarbeitern profitieren besonders, weil sie sich keine eigene Lohnbuchhalterin leisten können oder wollen.",
      },
      {
        q: "Muss ich für die Zusammenarbeit in eine Kanzlei kommen?",
        a: "Nein. Wir arbeiten zu 100 % digital – Belege, Stammdaten und Abrechnungen laufen per App, E-Mail oder sicherem Upload. Ein persönliches Erstgespräch bieten wir optional per Video oder vor Ort in Berlin-Charlottenburg an.",
      },
      {
        q: "Was unterscheidet Ihr Lohnbüro von einem Steuerberater?",
        a: "Wir erbringen die laufende Lohnabrechnung und alle Meldungen gemäß § 6 Nr. 3 StBerG – das ist unser Kerngeschäft und kostet deutlich weniger als eine Steuerkanzlei. Steuerliche Beratung, Jahresabschlüsse und Steuererklärungen bleiben Ihrem Steuerberater vorbehalten. Viele unserer Mandanten nutzen beides: uns für die laufende Lohnbuchhaltung und einen Steuerberater für den Abschluss.",
      },
      {
        q: "Wie schnell können Sie mit der Lohnbuchhaltung starten?",
        a: "In der Regel sind wir innerhalb von ein bis zwei Wochen einsatzbereit. Wir erfassen die Stammdaten Ihrer Mitarbeiter, richten die digitale Personalakte ein und übernehmen ab dem nächsten Abrechnungsmonat vollständig die Abrechnung.",
      },
      {
        q: "Was passiert, wenn Ihr Team krank oder im Urlaub ist?",
        a: "Durch unser Team-Setup gibt es keinen Ausfall. Anders als bei einer eigenen Kraft im Unternehmen stellen unsere internen Vertretungsregelungen sicher, dass Abrechnungen auch bei Urlaub oder Krankheit pünktlich erstellt und Meldungen fristgerecht übermittelt werden.",
      },
    ],
    benefits: ["Gesetzeskonforme, pünktliche Abrechnungen", "An- und Abmeldungen zuverlässig erledigt", "Digitale Personalakte – jederzeit griffbereit", "Korrekte Elster- und Sozialversicherungsmeldungen", "Saubere Monatswechsel ohne Fristversäumnis", "Persönlicher Berliner Ansprechpartner"],
    features: ["Anmeldung & Abmeldung von Mitarbeitern", "Erstellung von Arbeitsverträgen", "Digitale Personalakte (E-Akte)", "Monatliche Lohn- und Gehaltsabrechnung", "Optionale Zeit- und Stundenerfassung", "Kontrolle der Arbeitszeitkonten", "Monatswechsel & Lohnsteueranmeldung (Elster)", "Sozialversicherungsmeldungen & -wechsel", "Lohnkorrekturen bei Bedarf"],
    processSteps: [
      { title: "An-/Abmeldung & Erfassung der Mitarbeiterdaten", desc: "Wir erfassen alle Stammdaten, richten die digitale Personalakte ein und melden Ihre Mitarbeiter bei Finanzamt und Sozialversicherung an." },
      { title: "Festlegung der Stundenbasis", desc: "Gemeinsam legen wir fest, ob Stunden fix vorgegeben oder über eine Zeiterfassung übermittelt werden – beides ist möglich." },
      { title: "Monatliche Abrechnung & Arbeitszeitkontrolle", desc: "Pünktlich zum Monatsende erstellen wir die Gehaltsabrechnungen und kontrollieren Überstunden, Resturlaub und Arbeitszeitkonten." },
      { title: "Meldungen via Elster & Sozialversicherung", desc: "Lohnsteueranmeldung, Beitragsnachweise und SV-Meldungen werden fristgerecht und vollständig elektronisch übermittelt." },
      { title: "Kontrolle, Freigabe & Korrekturen", desc: "Sie prüfen und geben die Abrechnungen frei – Korrekturen erledigen wir schnell und unkompliziert auf Anfrage." },
    ],
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
    seoTitle: "Buchhaltung Berlin – Laufende Finanzbuchhaltung & USt-Meldung",
    seoDescription: "Buchhaltungsservice in Berlin: digitale Belegerfassung, laufende Buchhaltung und Umsatzsteuer-Meldung – skalierbar nach Belegvolumen, DSGVO-konform, steuerberater-fertig.",
    localKeywords: ["Buchhaltung Berlin", "Buchhaltungsservice Berlin", "laufende Buchhaltung Berlin", "digitale Buchhaltung Berlin", "Buchhaltung für Kleinunternehmen Berlin", "Buchhaltung für GmbH Berlin"],
    localIntro: [
      "Eine saubere, laufende Buchhaltung in Berlin ist die Grundlage für gute unternehmerische Entscheidungen – und für eine entspannte Zusammenarbeit mit Ihrem Steuerberater. Wir erfassen Ihre Belege digital, verbuchen jeden Geschäftsvorfall korrekt und übernehmen die laufende Erfassung und Meldung der Umsatzsteuer (Umsatzsteuer-Voranmeldung).",
      "Unser Buchhaltungsservice in Berlin skaliert mit Ihrem Belegvolumen: vom Einzelunternehmen mit wenigen Belegen pro Monat bis zur GmbH mit hohem Aufkommen. Auf Wunsch führen wir zusätzlich Ihr Kassenbuch und liefern monatlich eine verständliche betriebswirtschaftliche Auswertung (BWA).",
      "Als spezialisierter Buchhaltungsservice arbeiten wir gemäß § 6 StBerG – die steuerliche Bewertung bleibt bei Ihrem Steuerberater, der von uns ein vollständig vorbereitetes, abgestimmtes Dossier erhält. Das spart Zeit und oft auch Kosten bei der Steuerkanzlei.",
    ],
    benefits: ["Vollständige finanzielle Kontrolle", "Laufende Umsatzsteuer-Erfassung & -Meldung", "Steuerberater-fertige Unterlagen", "Skalierbar nach Belegvolumen", "Revisionssichere Dokumentation", "Optionale Kassenbuchführung"],
    features: ["Digitale Belegerfassung", "Erfassung & Meldung der Umsatzsteuer (UStVA)", "Kontenabstimmung", "Verbuchung nach Belegvolumen", "Optionale Kassenbuchführung", "Monatliche betriebswirtschaftliche Auswertung (BWA)", "Vollständige Vorbereitung für Ihren Steuerberater"],
    processSteps: [
      { title: "Einrichtung Ihrer Buchhaltungsstruktur", desc: "Wir richten Ihre Kontenstruktur und digitalen Ablageprozesse ein, sodass Belege sofort sauber erfasst werden können." },
      { title: "Digitale Belegerfassung", desc: "Sie übermitteln Belege per App, E-Mail oder Upload – wir erfassen, prüfen und archivieren alles revisionssicher." },
      { title: "Laufende Verbuchung & Kontenabstimmung", desc: "Alle Geschäftsvorfälle werden zeitnah verbucht und Ihre Konten regelmäßig abgestimmt – die Zahlen sind stets aktuell." },
      { title: "Umsatzsteuer-Erfassung & -Meldung", desc: "Wir ermitteln Ihre Umsatzsteuer und übermitteln die Voranmeldung fristgerecht ans Finanzamt – monatlich oder quartalsweise." },
      { title: "Monatliche Auswertung & Übergabe", desc: "Sie erhalten eine verständliche BWA, alle Unterlagen sind steuerberater-fertig aufbereitet und zur Übergabe bereit." },
    ],
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
    seoTitle: "Büroservice Berlin – Unternehmensberatung, Gründung & Verwaltung",
    seoDescription: "Büroservice & Unternehmensberatung in Berlin: Unternehmensgründung (Gewerbe, Finanzamt, BG, Betriebsnummer) und behördlicher Schriftverkehr – flexibel pro Vorgang. Jetzt beraten lassen.",
    localKeywords: ["Büroservice Berlin", "Unternehmensgründung Berlin", "Gewerbeanmeldung Berlin", "administrative Unterstützung Berlin", "Büroservice für Selbstständige Berlin"],
    localIntro: [
      "Von der Gründung bis zum laufenden Tagesgeschäft: Unser Büroservice und unsere Unternehmensberatung in Berlin nehmen Ihnen den administrativen Aufwand ab. Sie gründen gerade? Wir übernehmen das komplette Onboarding – Gewerbeanmeldung, steuerliche Erfassung beim Finanzamt, Anmeldung bei der Berufsgenossenschaft und die Beantragung der Betriebsnummer.",
      "Im laufenden Betrieb unterstützen wir Sie flexibel pro Vorgang: bei Versicherungsangelegenheiten, Widersprüchen und Meldungen, im Bankwesen, im sozialversicherungstechnischen Bereich und bei behördlichen Mitwirkungsaufforderungen. So bleibt Ihnen der Rücken frei fürs Kerngeschäft.",
      "Gerade für Gründer und kleine Unternehmen in Berlin ist ein verlässlicher Büroservice Gold wert: ein fester Ansprechpartner, klare Abläufe und Fristen sicher im Blick. Vereinbaren Sie ein kostenloses Erstgespräch.",
    ],
    benefits: ["Reibungsloser Start in die Selbstständigkeit", "Alle Gründungs-Formalitäten aus einer Hand", "Entlastung im behördlichen Schriftverkehr", "Flexible Bearbeitung pro Vorgang", "Fristen sicher im Blick", "Persönlicher Ansprechpartner in Berlin"],
    features: ["Neugründung: Gewerbeanmeldung", "Steuerliche Erfassung beim Finanzamt", "Anmeldung Berufsgenossenschaft (BG)", "Beantragung der Betriebsnummer", "Versicherungsangelegenheiten", "Widerspruch & Meldungen", "Bankwesen & Korrespondenz", "Sozialversicherungstechnische Vorgänge", "Behördliche Mitwirkungsaufforderungen"],
    processSteps: [
      { title: "Erstgespräch & Bedarfsklärung", desc: "Wir besprechen, ob es sich um eine Neugründung oder einen laufenden Vorgang handelt, und klären alle benötigten Unterlagen." },
      { title: "Onboarding bzw. Erfassung des Vorgangs", desc: "Für Gründer: vollständiges Onboarding. Für laufende Vorgänge: strukturierte Aufnahme aller relevanten Informationen und Dokumente." },
      { title: "Bearbeitung & Behördenkommunikation", desc: "Wir übernehmen die Kommunikation mit Finanzamt, Berufsgenossenschaft, Sozialversicherung und Ämtern – schriftlich und telefonisch." },
      { title: "Rückmeldung & Dokumentation", desc: "Sie erhalten eine klare Rückmeldung über den aktuellen Status Ihres Vorgangs – transparent, nachvollziehbar und ohne Überraschungen." },
      { title: "Ablage in Ihrer digitalen Akte", desc: "Alle Schreiben, Bescheide und Dokumente werden in Ihrer digitalen Akte archiviert – jederzeit und von überall abrufbar." },
    ],
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
    seoTitle: "Jahresabschluss-Vorbereitung Berlin – Vorarbeit für den Steuerberater",
    seoDescription: "Jahresabschluss-Vorbereitung in Berlin: Kontenabstimmung, Inventur, Aufarbeitung rückwirkender Buchhaltung und strukturiertes Übergabe-Dossier für Ihren Steuerberater. § 6 StBerG-konform.",
    localKeywords: ["Jahresabschluss Vorbereitung Berlin", "vorbereitende Buchhaltung Berlin", "Buchhaltung nachholen Berlin", "Kontenabstimmung Berlin", "Unterstützung Steuerberater Berlin"],
    localIntro: [
      "Den Jahresabschluss und die Steuererklärung erstellt in Deutschland Ihr Steuerberater – wir sorgen dafür, dass er dafür alles optimal vorbereitet vorliegen hat. Unsere Jahresabschluss-Vorbereitung in Berlin gleicht sämtliche Konten ab, prüft offene Posten und stellt ein strukturiertes Übergabe-Dossier zusammen.",
      "Sie sind mit der laufenden Buchhaltung im Rückstand? Wir arbeiten zurückliegende Monate vollständig auf und holen Ihre Buchhaltung sauber nach – damit der Jahresabschluss termingerecht und ohne böse Überraschungen gelingt.",
      "Das spart Zeit, reduziert Rückfragen und senkt häufig die Kosten Ihrer Steuerkanzlei. Wichtig: Wir erbringen ausschließlich vorbereitende Tätigkeiten gemäß § 6 StBerG und arbeiten eng mit Ihrem Steuerberater zusammen.",
    ],
    benefits: ["Auch rückwirkende Aufarbeitung möglich", "Schnellere Abschlusserstellung durch Ihren Steuerberater", "Weniger Rückfragen durch vollständige Unterlagen", "Reduzierte Kosten Ihrer Steuerkanzlei", "Lückenlose Kontenabstimmung", "Professionell strukturierte Übergabe"],
    features: ["Nachträgliche Aufarbeitung der laufenden Buchhaltung", "Inventur-Vorbereitung & Erfassung", "Vollständige Kontenabstimmung", "Prüfung offener Posten", "Plausibilitätsprüfung der Buchhaltung", "Strukturiertes Übergabe-Dossier", "Direkte Abstimmung mit Ihrer Steuerkanzlei"],
    processSteps: [
      { title: "Sichtung & Sammlung aller Unterlagen", desc: "Gemeinsam stellen wir alle Belege, Kontenauszüge und Vorjahresdokumente zusammen und klären, ob Lücken zu schließen sind." },
      { title: "Nachbuchung zurückliegender Monate", desc: "Liegt die Buchhaltung im Rückstand, holen wir sie vollständig und korrekt nach – Monat für Monat, ohne Lücken." },
      { title: "Inventur-Erfassung & Kontenabstimmung", desc: "Wir erfassen Ihren Warenbestand, gleichen alle Konten ab und klären offene Posten für ein sauberes Jahresergebnis." },
      { title: "Plausibilitätsprüfung", desc: "Wir prüfen die Zahlen auf Konsistenz und Vollständigkeit, damit Ihr Steuerberater mit verlässlichen Daten arbeiten kann." },
      { title: "Übergabe an Ihren Steuerberater", desc: "Sie erhalten ein vollständiges, strukturiertes Übergabe-Dossier – aufbereitet für eine schnelle, reibungslose Abschlusserstellung." },
    ],
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
