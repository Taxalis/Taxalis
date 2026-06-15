export interface Testimonial {
  name: string;
  rating: number; // 1–5
  text?: string;
  meta?: string;
}

/** Aggregierte Google-Bewertung (für Schema & Anzeige). */
export const reviewStats = { average: 5.0, count: 4, source: "Google" };

/** Echte Google-Bewertungen von Mandanten. */
export const testimonials: Testimonial[] = [
  {
    name: "Amaru",
    rating: 5,
    meta: "Sicherheitsunternehmen, ~80 Mitarbeiter",
    text: "Als Sicherheitsunternehmen mit rund 80 Mitarbeitern sind wir auf eine zuverlässige und kompetente Betreuung in allen buchhalterischen und lohnrelevanten Bereichen angewiesen. Genau das haben wir hier gefunden. Von der laufenden Buchhaltung über die Lohnbuchhaltung bis hin zur fachlichen Beratung werden wir stets professionell, termingerecht und äußerst kompetent betreut. Besonders hervorheben möchten wir die schnelle Erreichbarkeit, die lösungsorientierte Arbeitsweise sowie den hervorragenden Kundenservice. Die Zusammenarbeit ist vertrauensvoll, unkompliziert und auf einem sehr hohen fachlichen Niveau. Wir können das Team uneingeschränkt weiterempfehlen.",
  },
  {
    name: "T. O.",
    rating: 5,
    text: "Ich habe mich bei Taxalis Consulting von Anfang an sehr gut aufgehoben gefühlt. Die Beratung war kompetent, verständlich und auf meine individuelle Situation zugeschnitten. Besonders positiv fand ich die schnelle Erreichbarkeit und die zuverlässige Bearbeitung meiner Anliegen. Klare Empfehlung für alle, die eine professionelle und unkomplizierte Unterstützung im Bereich Buchhaltung suchen.",
  },
  {
    name: "Jumoke Hanby",
    rating: 5,
    meta: "Selbstständiger",
    text: "Absolut empfehlenswert! Das Team von Taxalis Consulting arbeitet äußerst professionell und nimmt sich Zeit für alle Fragen. Termine werden eingehalten und die Kommunikation ist freundlich und transparent. Gerade als Selbstständiger schätze ich die strukturierte Arbeitsweise und die hilfreichen Tipps, die mir bereits mehrfach weitergeholfen haben. Vielen Dank für den hervorragenden Service!",
  },
  {
    name: "Fabi Zeixa",
    rating: 5,
    meta: "Local Guide",
  },
];
