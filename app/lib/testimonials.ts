export interface Testimonial {
  name: string;
  rating: number; // 1–5
  text?: string;
  meta?: string;
}

/** Aggregierte Google-Bewertung (für Schema & Anzeige). */
export const reviewStats = { average: 5.0, count: 7, source: "Google" };

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
  {
    name: "Emre Alüste",
    rating: 5,
    text: "Ich habe bei dieser Firma meinen Jahresabschluss für meine Firma erstellen lassen und bin rundum begeistert. Der Erstkontakt mit Herrn Roloff war hervorragend: Auf meine Anfrage erhielt ich sehr schnell eine Rückmeldung, und wir haben uns telefonisch ausführlich ausgetauscht – sogar bis in den Abend hinein hat er sich Zeit für mich genommen. Herr Roloff hat mir geduldig alle Möglichkeiten aufgezeigt, den Service verständlich erklärt und mir transparent dargelegt, mit welchen Kosten ich rechnen muss. Besonders positiv fiel mir auf, dass er mir kein Ultimatum gestellt hat, sondern mir in Ruhe Bedenkzeit gegeben hat, um mich zu entscheiden. Diese Beratung ohne Druck hat mich überzeugt. Von Anfang bis Ende ist alles reibungslos verlaufen. Ich kann Herrn Roloff nur wärmstens weiterempfehlen!",
  },
  {
    name: "Efo79 Efo79",
    rating: 5,
    text: "Ich bin mit der Zusammenarbeit äußerst zufrieden. Die Buchhaltungsfirma arbeitet sehr zuverlässig, kompetent und stets termingerecht. Alle Fragen werden verständlich erklärt, und man fühlt sich jederzeit bestens beraten. Besonders schätze ich die schnelle Kommunikation, die hohe Fachkompetenz und die sorgfältige Bearbeitung aller Anliegen. Dank der professionellen Unterstützung wird die Buchhaltung deutlich einfacher und stressfreier. Klare Empfehlung für alle, die einen vertrauenswürdigen und engagierten Partner im Bereich Buchhaltung suchen!",
  },
  {
    name: "Zeynel Esgünoglu",
    rating: 5,
  },
];
