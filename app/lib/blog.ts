export interface BlogSection {
  type: "h2" | "p" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  keywords: string[];
  excerpt: string;
  content: BlogSection[];
  related?: { href: string; label: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "externe-lohnbuchhaltung-berlin",
    title: "Externe Lohnbuchhaltung in Berlin: Vorteile, Ablauf und worauf Sie achten sollten",
    description:
      "Externe Lohnbuchhaltung in Berlin: Welche Vorteile bietet das Auslagern der Gehaltsabrechnung, wie läuft die Zusammenarbeit ab und worauf sollten Berliner Unternehmen achten?",
    category: "Lohnbuchhaltung",
    date: "2026-06-15",
    readingMinutes: 5,
    keywords: ["externe Lohnbuchhaltung Berlin", "Lohnbuchhaltung auslagern", "Gehaltsabrechnung Berlin"],
    excerpt:
      "Warum immer mehr Berliner Unternehmen ihre Lohnbuchhaltung auslagern – die wichtigsten Vorteile, der typische Ablauf und worauf Sie bei der Auswahl achten sollten.",
    content: [
      { type: "p", text: "Die monatliche Gehaltsabrechnung ist anspruchsvoll: Sie verlangt aktuelles Wissen zu Lohnsteuer, Sozialversicherung und Meldepflichten – und Fehler können teuer werden. Viele Unternehmen in Berlin entscheiden sich deshalb für eine externe Lohnbuchhaltung. In diesem Beitrag erfahren Sie, was das bedeutet, welche Vorteile es bringt und worauf Sie achten sollten." },
      { type: "h2", text: "Was bedeutet externe Lohnbuchhaltung?" },
      { type: "p", text: "Bei der externen Lohnbuchhaltung übergeben Sie die laufende Lohn- und Gehaltsabrechnung an einen spezialisierten Dienstleister. Dieser übernimmt die An- und Abmeldung Ihrer Mitarbeiter, erstellt die monatlichen Abrechnungen, führt die digitale Personalakte und kümmert sich um alle Meldungen an Finanzamt, Krankenkassen und Sozialversicherungsträger." },
      { type: "h2", text: "Die wichtigsten Vorteile" },
      { type: "ul", items: [
        "Zeitersparnis: Sie konzentrieren sich auf Ihr Kerngeschäft statt auf Abrechnungsdetails.",
        "Rechtssicherheit: Aktuelles Fachwissen und korrekte Meldungen via Elster reduzieren Haftungsrisiken.",
        "Keine Software-Investition: Sie benötigen kein eigenes Abrechnungsprogramm und keine Schulungen.",
        "Vertretungssicherheit: Krankheit oder Urlaub in der eigenen Buchhaltung wird zum Problem – ausgelagert nicht.",
        "Persönlicher Ansprechpartner: In Berlin haben Sie einen festen Kontakt für Rückfragen.",
      ] },
      { type: "h2", text: "So läuft die Zusammenarbeit ab" },
      { type: "p", text: "Nach einem kurzen Erstgespräch werden die Mitarbeiterstammdaten erfasst und die digitalen Prozesse eingerichtet. Anschließend liefern Sie monatlich nur noch die variablen Daten (z. B. Stunden, Zu- und Abgänge) – den Rest übernimmt Ihr Dienstleister: Berechnung, Kontrolle, Freigabe sowie alle Meldungen. Sie erhalten fertige Abrechnungen und Auswertungen." },
      { type: "h2", text: "Worauf Sie bei der Auswahl achten sollten" },
      { type: "ul", items: [
        "Spezialisierung und Erfahrung in der Lohnbuchhaltung",
        "100 % digitale, DSGVO-konforme Prozesse mit EU-Datenhaltung",
        "Transparente, planbare Konditionen statt unklarer Stundenabrechnung",
        "Erreichbarkeit und ein persönlicher Ansprechpartner vor Ort",
      ] },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Eine externe Lohnbuchhaltung spart Zeit, erhöht die Sicherheit und macht die monatliche Abrechnung planbar. Gerade für kleine und mittlere Unternehmen in Berlin ist das eine effiziente Lösung – mit persönlichem Ansprechpartner und ohne eigene Software." },
    ],
    related: [{ href: "/leistungen/lohnbuchhaltung", label: "Mehr zur Lohnbuchhaltung in Berlin" }],
  },
  {
    slug: "buchhaltungsservice-paragraph-6-stberg",
    title: "Was darf ein Buchhaltungsservice nach § 6 StBerG – und was nicht?",
    description:
      "§ 6 StBerG erklärt: Welche Buchhaltungs- und Lohnaufgaben darf ein Buchhaltungsservice in Berlin übernehmen und welche Tätigkeiten bleiben dem Steuerberater vorbehalten?",
    category: "Buchhaltung",
    date: "2026-06-15",
    readingMinutes: 4,
    keywords: ["Buchhaltungsservice § 6 StBerG", "Buchhaltung Berlin", "was darf ein Buchhalter"],
    excerpt:
      "Buchhaltungsservice oder Steuerberatung? § 6 StBerG zieht eine klare Grenze. Wir erklären, welche Aufgaben erlaubt sind – und welche nicht.",
    content: [
      { type: "p", text: "Buchhaltungsdienstleister bewegen sich in einem klar geregelten rechtlichen Rahmen. Das Steuerberatungsgesetz (StBerG) legt fest, welche Tätigkeiten auch ohne Bestellung als Steuerberater zulässig sind. Entscheidend ist § 6 StBerG." },
      { type: "h2", text: "Der rechtliche Rahmen: § 6 StBerG" },
      { type: "p", text: "§ 6 Nr. 3 und Nr. 4 StBerG erlauben bestimmte buchhalterische Hilfeleistungen in Steuersachen – insbesondere das Buchen laufender Geschäftsvorfälle, die laufende Lohnabrechnung und das Fertigen der laufenden Lohnsteuer-Anmeldungen. Diese Aufgaben darf ein qualifizierter Buchhaltungsservice eigenständig erbringen." },
      { type: "h2", text: "Das darf ein Buchhaltungsservice" },
      { type: "ul", items: [
        "Laufende Finanzbuchhaltung und Belegerfassung",
        "Laufende Lohn- und Gehaltsabrechnung",
        "Fertigung der laufenden Lohnsteuer-Anmeldungen",
        "Umsatzsteuer-Voranmeldungen im Rahmen der laufenden Buchhaltung",
        "Vorbereitende Tätigkeiten für den Jahresabschluss (Kontenabstimmung, Belegsortierung)",
      ] },
      { type: "h2", text: "Das bleibt dem Steuerberater vorbehalten" },
      { type: "ul", items: [
        "Erstellung des Jahresabschlusses (Bilanz, Gewinn- und Verlustrechnung)",
        "Erstellung von Steuererklärungen",
        "Verbindliche steuerliche Beratung und Vertretung gegenüber dem Finanzamt",
      ] },
      { type: "h2", text: "Warum diese Aufteilung sinnvoll ist" },
      { type: "p", text: "Die Trennung schützt Sie als Unternehmen: Die zeitaufwändige laufende Arbeit übernimmt der Buchhaltungsservice effizient und kostengünstig, während die steuerliche Bewertung in den Händen Ihres Steuerberaters bleibt. Gut vorbereitete Unterlagen reduzieren dabei oft die Kosten der Steuerkanzlei." },
    ],
    related: [
      { href: "/leistungen/buchhaltung", label: "Buchhaltung in Berlin" },
      { href: "/leistungen/jahresabschluesse", label: "Jahresabschluss-Vorbereitung" },
    ],
  },
  {
    slug: "steuerberater-vs-buchhaltungsservice",
    title: "Steuerberater oder Buchhaltungsservice? Der Unterschied einfach erklärt",
    description:
      "Steuerberater vs. Buchhaltungsservice: Wer macht was, wo liegen die Grenzen und warum die Kombination aus beidem für Berliner Unternehmen oft die beste Lösung ist.",
    category: "Buchhaltung",
    date: "2026-06-15",
    readingMinutes: 4,
    keywords: ["Steuerberater vs Buchhaltungsservice", "Unterschied Buchhalter Steuerberater", "Buchhaltung Berlin"],
    excerpt:
      "Brauche ich einen Steuerberater, einen Buchhaltungsservice – oder beides? Die Rollen, Grenzen und das ideale Zusammenspiel im Überblick.",
    content: [
      { type: "p", text: "„Reicht ein Buchhaltungsservice, oder brauche ich einen Steuerberater?“ Diese Frage stellen sich viele Unternehmen. Die kurze Antwort: Beide haben unterschiedliche Aufgaben – und arbeiten am besten Hand in Hand." },
      { type: "h2", text: "Was macht ein Buchhaltungsservice?" },
      { type: "ul", items: [
        "Laufende Buchhaltung: Belege erfassen, buchen, Konten abstimmen",
        "Lohn- und Gehaltsabrechnung inkl. Meldungen",
        "Umsatzsteuer-Voranmeldungen",
        "Vorbereitung der Unterlagen für den Steuerberater",
      ] },
      { type: "h2", text: "Was macht ein Steuerberater?" },
      { type: "ul", items: [
        "Jahresabschluss (Bilanz, GuV) erstellen",
        "Steuererklärungen anfertigen",
        "Steuerliche Beratung und Gestaltung",
        "Vertretung gegenüber dem Finanzamt",
      ] },
      { type: "h2", text: "Das Beste aus beiden Welten" },
      { type: "p", text: "Ein Buchhaltungsservice übernimmt die zeitintensive laufende Arbeit effizient und liefert Ihrem Steuerberater ein vollständig vorbereitetes Dossier. Der Steuerberater kann sich dann auf die steuerliche Bewertung konzentrieren. Für Sie bedeutet das: weniger Aufwand, klare Zuständigkeiten und häufig geringere Gesamtkosten." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Buchhaltungsservice und Steuerberater sind keine Konkurrenten, sondern ein Team. Wer die laufende Buchhaltung auslagert und mit einer Steuerkanzlei zusammenarbeitet, fährt in der Regel am effizientesten." },
    ],
    related: [{ href: "/leistungen/buchhaltung", label: "Buchhaltungsservice in Berlin" }],
  },
  {
    slug: "buchhaltungspflichten-gruender-berlin",
    title: "Buchhaltungspflichten für Gründer in Berlin: Der Überblick",
    description:
      "Welche Buchhaltungspflichten haben Gründer in Berlin? EÜR oder Bilanz, welche Anmeldungen nötig sind und wie ein Büroservice beim Start unterstützt.",
    category: "Gründung",
    date: "2026-06-15",
    readingMinutes: 5,
    keywords: ["Buchhaltungspflichten Gründer", "GmbH gründen Berlin", "Gründung Berlin Buchhaltung"],
    excerpt:
      "Frisch gegründet in Berlin? Diese Buchhaltungspflichten und Anmeldungen kommen auf Sie zu – und so behalten Sie von Anfang an den Überblick.",
    content: [
      { type: "p", text: "Eine Gründung bringt viele Formalitäten mit sich. Wer von Anfang an sauber aufgestellt ist, spart später Zeit, Geld und Nerven. Hier die wichtigsten Buchhaltungspflichten und Anmeldungen für Gründerinnen und Gründer in Berlin." },
      { type: "h2", text: "Welche Buchhaltungspflicht gilt für wen?" },
      { type: "ul", items: [
        "Kleinunternehmer und Freiberufler: in der Regel einfache Einnahmenüberschussrechnung (EÜR)",
        "Gewerbetreibende über bestimmten Grenzen: Pflicht zur doppelten Buchführung und Bilanzierung",
        "Kapitalgesellschaften (z. B. GmbH, UG): immer bilanzierungspflichtig nach HGB",
      ] },
      { type: "h2", text: "Diese Anmeldungen brauchen Gründer" },
      { type: "ul", items: [
        "Gewerbeanmeldung beim zuständigen Bezirksamt",
        "Steuerliche Erfassung beim Finanzamt (Fragebogen zur steuerlichen Erfassung)",
        "Anmeldung bei der zuständigen Berufsgenossenschaft (BG)",
        "Beantragung der Betriebsnummer (bei Mitarbeitern)",
      ] },
      { type: "h2", text: "Häufige Fehler bei der Gründung" },
      { type: "ul", items: [
        "Belege nicht von Anfang an digital und geordnet sammeln",
        "Fristen für Umsatzsteuer-Voranmeldungen übersehen",
        "Privat- und Geschäftskonto vermischen",
        "Meldepflichten bei der ersten Einstellung unterschätzen",
      ] },
      { type: "h2", text: "So unterstützt Sie ein Büroservice" },
      { type: "p", text: "Ein Büroservice mit Unternehmensberatung übernimmt das komplette Gründungs-Onboarding – von der Gewerbeanmeldung über die steuerliche Erfassung bis zur Betriebsnummer – und richtet Ihre digitale Buchhaltung sauber ein. So starten Sie ohne Formular-Stress und mit der Gewissheit, dass alle Pflichten erfüllt sind." },
    ],
    related: [{ href: "/leistungen/bueroservice", label: "Büroservice & Unternehmensberatung in Berlin" }],
  },
  {
    slug: "buchhaltung-outsourcen-berlin-kosten",
    title: "Buchhaltung outsourcen Berlin: Was kostet das wirklich?",
    description:
      "Was kostet es, Buchhaltung in Berlin auszulagern? Preise, Einflussfaktoren und wann sich Outsourcing für Berliner KMU und Freiberufler lohnt.",
    category: "Buchhaltung",
    date: "2026-06-23",
    readingMinutes: 5,
    keywords: [
      "Buchhaltung outsourcen Berlin",
      "Kosten Buchhaltung Berlin",
      "Buchhaltung Freiberufler Berlin",
      "Buchhaltungsservice Kosten",
      "Finanzbuchhaltung Berlin",
    ],
    excerpt:
      "Was kostet es, Buchhaltung in Berlin auszulagern? Wir erklären Preise, Einflussfaktoren und wann sich der Schritt für Freiberufler und KMU wirklich lohnt.",
    content: [
      { type: "p", text: "„Was kostet das?“ – das ist die häufigste Frage, wenn Berliner Unternehmen über das Auslagern ihrer Buchhaltung nachdenken. Die ehrliche Antwort: Es kommt auf mehrere Faktoren an. In diesem Artikel erklären wir, was die Kosten bestimmt, was Sie realistisch einplanen sollten und wann sich Outsourcing finanziell lohnt." },
      { type: "h2", text: "Was beeinflusst den Preis?" },
      { type: "ul", items: [
        "Anzahl der monatlichen Belege (Eingangs- und Ausgangsrechnungen, Kontoauszüge)",
        "Umsatzsteuerpflicht: Voranmeldung monatlich, quartalsweise oder Jahresmeldung",
        "Rechtsform: Freiberufler mit EÜR zahlen weniger als eine GmbH mit Bilanzierungspflicht",
        "Zusatzleistungen: Lohnbuchhaltung, Jahresabschluss-Vorbereitung, Büroservice",
        "Rückstände: Nachbuchungen mehrerer Jahre erhöhen den Aufwand einmalig",
      ] },
      { type: "h2", text: "Typische Kosten in Berlin" },
      { type: "p", text: "Für Freiberufler und Kleinunternehmer mit überschaubarem Belegvolumen (bis ca. 50 Belege/Monat) und ohne Umsatzsteuerpflicht beginnen seriöse Angebote in Berlin bei etwa 79–120 € pro Monat. Kleine GmbHs oder umsatzsteuerpflichtige Unternehmen mit mehr Belegen liegen häufig im Bereich 150–350 € monatlich. Hinzu kommen einmalige Kosten für das Onboarding und die Einrichtung digitaler Prozesse." },
      { type: "h2", text: "Was kostet es, es selbst zu machen?" },
      { type: "p", text: "Viele Unternehmerinnen und Unternehmer rechnen nicht, was ihre eigene Arbeitszeit kostet. Wer zwei bis vier Stunden im Monat für Buchhaltung aufwendet und dabei einen Stundensatz von 80–120 € hat, zahlt bereits 160–480 € – in eigener Zeit, statt im Kerngeschäft. Hinzu kommen Software, Fehlerrisiken und Zeitaufwand für die Kommunikation mit dem Steuerberater." },
      { type: "h2", text: "Ab wann lohnt sich Outsourcing?" },
      { type: "p", text: "Als Faustregel gilt: Sobald Sie mehr als zwei Stunden pro Monat mit Buchhaltung verbringen oder unruhig schlafen, weil Fristen näherrücken, lohnt sich die Abgabe an einen Profi. In Berlin – wo jede Stunde zählt und die Steuerlast hoch ist – ist das oft schon ab dem ersten Mitarbeiter oder ab einem Jahresumsatz von ca. 50.000 € der Fall." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Buchhaltung outsourcen in Berlin kostet weniger als viele denken – und spart oft mehr, als es kostet. Transparente Festpreise statt Stundenabrechnungen machen die monatliche Belastung planbar. Fragen Sie uns nach einem unverbindlichen Angebot: Im kostenlosen Erstgespräch rechnen wir gemeinsam durch, ob und wie sich Outsourcing für Ihr Unternehmen lohnt." },
    ],
    related: [
      { href: "/leistungen/buchhaltung", label: "Buchhaltungsservice in Berlin" },
      { href: "/preise", label: "Unsere Preise" },
    ],
  },
  {
    slug: "lohnabrechnung-gmbh-berlin",
    title: "Lohnabrechnung für GmbH in Berlin: Was Sie wissen müssen",
    description:
      "Lohnabrechnung für GmbH in Berlin: Pflichten, typische Fallstricke und warum viele Berliner GmbHs die Gehaltsabrechnung auslagern.",
    category: "Lohnbuchhaltung",
    date: "2026-06-23",
    readingMinutes: 6,
    keywords: [
      "Lohnabrechnung GmbH Berlin",
      "Gehaltsabrechnung GmbH",
      "Lohnbuchhaltung Berlin",
      "GmbH Mitarbeiter Berlin",
      "Lohnsteueranmeldung Berlin",
    ],
    excerpt:
      "GmbH gegründet in Berlin und jetzt mit Mitarbeitern? Die Lohnabrechnung ist komplex – hier erfahren Sie, was Pflicht ist, wo Fallstricke lauern und warum Outsourcing sinnvoll ist.",
    content: [
      { type: "p", text: "Eine GmbH in Berlin zu führen bedeutet: hohe Verantwortung gegenüber Ihren Mitarbeitern und gegenüber Behörden. Die Gehaltsabrechnung ist dabei eine der komplexesten laufenden Aufgaben – sie verlangt aktuelles Wissen zu Lohnsteuer, Sozialversicherung, Meldepflichten und immer neuen gesetzlichen Änderungen. In diesem Artikel erfahren Sie, was eine GmbH bei der Lohnabrechnung beachten muss – und warum viele Berliner GmbHs das auslagern." },
      { type: "h2", text: "Was gehört zur Lohnabrechnung einer GmbH?" },
      { type: "ul", items: [
        "Monatliche Erstellung der Gehaltsabrechnungen für alle Mitarbeiter",
        "Berechnung und Abführung der Lohnsteuer (Lohnsteueranmeldung via Elster)",
        "Berechnung und Abführung der Sozialversicherungsbeiträge (GKV, RV, AV, PV)",
        "An- und Abmeldungen bei der Krankenkasse und der Minijob-Zentrale",
        "Führung der digitalen Personalakte",
        "Jahresabschluss-Tätigkeiten: Lohnsteuerbescheinigungen, Sozialversicherungsnachweise",
        "Mutterschutz, Elternzeit, AU-Bescheinigungen: Korrekte Abwicklung im laufenden Jahr",
      ] },
      { type: "h2", text: "Besonderheiten bei der GmbH" },
      { type: "p", text: "Geschäftsführer einer GmbH erhalten in der Regel ein Gehalt, das über den Arbeitsvertrag geregelt ist. Auch der Gesellschafter-Geschäftsführer (GGF) muss korrekt abgerechnet werden – je nach Beteiligungsquote und Vertragslage mit unterschiedlicher sozialversicherungsrechtlicher Behandlung. Hier liegen klassische Fallstricke: Wird ein beherrschender GGF fälschlicherweise wie ein Arbeitnehmer behandelt, drohen Nachzahlungen und Bußgelder." },
      { type: "h2", text: "Typische Fehler bei der Lohnabrechnung" },
      { type: "ul", items: [
        "Falsche Steuerklasse oder Freibeträge nicht berücksichtigt",
        "Vergessene Meldungen bei Eltern- oder Pflegezeit",
        "Sachbezüge (z. B. Dienstwagen, Jobticket) nicht korrekt versteuert",
        "Fristen für die Lohnsteueranmeldung (jeweils 10. des Folgemonats) versäumt",
        "An-/Abmeldungen zur Sozialversicherung zu spät eingereicht",
      ] },
      { type: "h2", text: "Warum Berliner GmbHs die Lohnabrechnung auslagern" },
      { type: "p", text: "Die Lohnabrechnung bindet interne Ressourcen, ist fehleranfällig und ändert sich regelmäßig durch neue Gesetze. Gerade in Berlin, wo der Arbeitsmarkt heiß ist und Mitarbeiterbindung zählt, sollten Abrechnungen pünktlich, korrekt und transparent sein. Ein externer Lohnbuchhaltungsservice übernimmt genau das – zuverlässig, DSGVO-konform und mit festem Ansprechpartner." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Lohnabrechnung für eine GmbH in Berlin ist kein Selbstläufer. Die Fehlerquellen sind zahlreich, die Fristen eng und die Konsequenzen bei Fehlern real. Wer das auslagert, gewinnt Sicherheit, spart Zeit und kann sich auf sein Kerngeschäft konzentrieren. Sprechen Sie uns an – wir übernehmen Ihre Gehaltsabrechnung vollständig und zuverlässig." },
    ],
    related: [
      { href: "/leistungen/lohnbuchhaltung", label: "Lohnbuchhaltung Berlin" },
      { href: "/faq", label: "Häufige Fragen zur Lohnabrechnung" },
    ],
  },
  {
    slug: "lohnbuero-berlin",
    title: "Lohnbüro Berlin: Was macht ein Lohnbüro – und wann brauche ich eines?",
    description:
      "Was ist ein Lohnbüro? Welche Aufgaben übernimmt es und wann lohnt sich die Zusammenarbeit mit einem externen Lohnbüro in Berlin? Alles Wichtige im Überblick.",
    category: "Lohnbuchhaltung",
    date: "2026-07-14",
    readingMinutes: 5,
    keywords: [
      "Lohnbüro Berlin",
      "externes Lohnbüro Berlin",
      "Lohnabrechnung Berlin",
      "Lohnbuchhaltung auslagern",
      "Lohnbüro Brandenburg",
    ],
    excerpt:
      "Ein Lohnbüro übernimmt die monatliche Gehaltsabrechnung, Meldungen und Personalakte – damit Sie sich aufs Kerngeschäft konzentrieren können. Wann lohnt sich das in Berlin?",
    content: [
      { type: "p", text: "Viele Berliner Unternehmen fragen sich: Brauche ich wirklich ein eigenes Lohnbüro – oder reicht eine externe Lösung? Die Antwort ist für die meisten kleinen und mittleren Betriebe eindeutig: Ein externes Lohnbüro in Berlin ist effizienter, günstiger und sicherer als eine eigene Kraft." },
      { type: "h2", text: "Was ist ein Lohnbüro?" },
      { type: "p", text: "Ein Lohnbüro ist ein spezialisierter Dienstleister, der die laufende Lohn- und Gehaltsabrechnung für Unternehmen übernimmt. Das umfasst die monatliche Erstellung der Abrechnungen, alle An- und Abmeldungen bei Krankenkassen und Sozialversicherungsträgern, die Lohnsteueranmeldung via Elster, die Führung der digitalen Personalakte und auf Wunsch die Zeiterfassung. Ein Lohnbüro handelt dabei gemäß § 6 Nr. 3 StBerG – es übernimmt die laufende Lohnabrechnung, keine steuerliche Beratung." },
      { type: "h2", text: "Aufgaben eines externen Lohnbüros" },
      { type: "ul", items: [
        "An- und Abmeldung von Mitarbeitern bei Krankenkasse und Minijob-Zentrale",
        "Monatliche Gehaltsabrechnung für alle Mitarbeiter",
        "Lohnsteueranmeldung und Beitragsnachweis via Elster",
        "Sozialversicherungsmeldungen (SV-Meldungen, Jahresmeldungen)",
        "Digitale Personalakte – jederzeit abrufbar",
        "Kontrolle der Arbeitszeitkonten und Überstunden",
        "Erstellung von Arbeitsverträgen auf Anfrage",
        "Korrekturen und Lohnnachzahlungen",
      ] },
      { type: "h2", text: "Lohnbüro in Berlin: Was kostet das?" },
      { type: "p", text: "Ein externes Lohnbüro in Berlin rechnet in der Regel pro Mitarbeiter und Monat ab – typischerweise zwischen 15 und 30 € je Mitarbeiter, je nach Umfang der Leistungen. Das ist in fast allen Fällen günstiger als eine eigene Kraft: Eine Teilzeitstelle für interne Lohnbuchhaltung kostet bereits 1.500–2.500 € monatlich – ohne Sozialversicherung, Urlaub und Krankheitszeiten. Bei fünf Mitarbeitern liegen die externen Kosten bei ca. 100–150 € pro Monat." },
      { type: "h2", text: "Wann brauche ich ein externes Lohnbüro?" },
      { type: "ul", items: [
        "Ab dem ersten Mitarbeiter: Jede Einstellung zieht Meldepflichten, Lohnsteuer und SV-Beiträge nach sich.",
        "Wenn die eigene Lohnbuchhaltung fehleranfällig ist oder Fristen versäumt werden.",
        "Wenn Sie Vertretungssicherheit brauchen: Urlaub oder Krankheit der eigenen Kraft darf keine Abrechnung blockieren.",
        "Wenn Sie auf planbare Kosten ohne versteckte Stundenabrechnungen Wert legen.",
      ] },
      { type: "h2", text: "Lohnbüro Berlin vs. Steuerberater" },
      { type: "p", text: "Ein Lohnbüro und ein Steuerberater schließen sich nicht aus – sie ergänzen sich. Das Lohnbüro übernimmt die monatliche Abrechnung kosteneffizient; der Steuerberater erstellt Jahresabschlüsse, Steuererklärungen und berät steuerlich. Viele Berliner Unternehmen nutzen beides: ein spezialisiertes Lohnbüro für die laufende Abrechnung und eine Steuerkanzlei für den Jahresabschluss. Das spart Steuerberaterkosten und erhöht die Qualität der Lohnabrechnung." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Ein externes Lohnbüro in Berlin ist für nahezu jedes kleine und mittlere Unternehmen die effizientere Wahl gegenüber einer eigenen Lohnbuchhaltungskraft. Professionelle Abrechnung, Vertretungssicherheit, digitale Prozesse und planbare Kosten – und das meist zu einem Bruchteil der Kosten einer eigenen Stelle. Sprechen Sie uns an: Wir betreuen Berliner Unternehmen aus allen Bezirken, von Charlottenburg bis Köpenick, von Prenzlauer Berg bis Tempelhof." },
    ],
    related: [
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
      { href: "/preise", label: "Preise für Lohnbuchhaltung" },
    ],
  },
  {
    slug: "buchhalter-berlin",
    title: "Buchhalter in Berlin beauftragen: So finden Sie den richtigen Buchhaltungspartner",
    description:
      "Externen Buchhalter in Berlin beauftragen: Worauf Sie achten sollten, was ein Buchhaltungsservice in Berlin kostet und wie er sich vom Steuerberater unterscheidet.",
    category: "Buchhaltung",
    date: "2026-07-14",
    readingMinutes: 5,
    keywords: [
      "Buchhalter Berlin",
      "Buchhaltungsservice Berlin",
      "externe Buchhaltung Berlin",
      "Buchhaltungsbüro Berlin",
      "Buchführung Berlin",
    ],
    excerpt:
      "Sie suchen einen Buchhalter in Berlin? Wir erklären, was ein externer Buchhaltungsservice leistet, was er kostet und worauf Sie bei der Auswahl achten sollten.",
    content: [
      { type: "p", text: "Viele Berliner Unternehmen suchen einen externen Buchhalter – keinen fest angestellten Mitarbeiter, sondern einen zuverlässigen Buchhaltungspartner. In diesem Artikel erklären wir, was ein Buchhaltungsservice in Berlin leistet, was er kostet und wie Sie den richtigen Partner finden." },
      { type: "h2", text: "Buchhalter anstellen oder Buchhaltungsservice beauftragen?" },
      { type: "p", text: "Für die meisten kleinen und mittleren Betriebe in Berlin ist ein externer Buchhaltungsservice die bessere Wahl: Sie zahlen nur für das, was Sie tatsächlich brauchen, haben keine Lohnnebenkosten, keine Urlaubsplanung und profitieren von einem eingespielten Team mit aktuellem Fachwissen. Ein eigener Buchhalter lohnt sich in der Regel erst ab einem sehr hohen Belegvolumen – typischerweise ab 300–400 Belegen im Monat." },
      { type: "h2", text: "Was macht ein externer Buchhalter in Berlin?" },
      { type: "ul", items: [
        "Digitale Belegerfassung und Verbuchung aller Geschäftsvorfälle",
        "Laufende Finanzbuchhaltung und Kontenabstimmung",
        "Umsatzsteuer-Voranmeldungen (monatlich oder quartalsweise)",
        "Monatliche betriebswirtschaftliche Auswertung (BWA)",
        "Vorbereitung aller Unterlagen für Ihren Steuerberater",
        "Optionale Kassenbuchführung",
      ] },
      { type: "h2", text: "Was kostet ein externer Buchhalter in Berlin?" },
      { type: "p", text: "Die Kosten eines externen Buchhaltungsservices in Berlin richten sich vor allem nach dem monatlichen Belegvolumen. Kleinstunternehmer und Freiberufler mit bis zu 50 Belegen pro Monat zahlen in der Regel zwischen 79 und 150 € monatlich. Kleine GmbHs und umsatzsteuerpflichtige Betriebe mit mehr Belegen liegen oft im Bereich 150–350 € pro Monat. Hinzu kommt ein einmaliges Onboarding. Im Vergleich zu einem klassischen Steuerberater ist das deutlich günstiger – und im Vergleich zu einer eigenen Buchhalter-Stelle oft ein Bruchteil der Kosten." },
      { type: "h2", text: "Buchhalter Berlin: Was Sie bei der Auswahl beachten sollten" },
      { type: "ul", items: [
        "Spezialisierung: Ist der Dienstleister auf Ihre Branche oder Ihre Unternehmensgröße spezialisiert?",
        "Digitale Prozesse: Arbeitet der Partner zu 100 % digital – oder brauchen Sie Papierstapel?",
        "Transparente Preise: Festpreise statt Stundensätze machen die Kosten planbar.",
        "DSGVO-Konformität: Werden Ihre Daten auf EU-Servern verarbeitet und sicher übermittelt?",
        "Persönlicher Ansprechpartner: Sie sollten immer genau wissen, wer Ihre Buchhaltung betreut.",
        "§ 6 StBerG: Achten Sie darauf, dass der Buchhaltungsservice im legalen Rahmen handelt.",
      ] },
      { type: "h2", text: "Buchhalter Berlin: Wer ist zuständig – und wer nicht?" },
      { type: "p", text: "Ein Buchhaltungsservice in Berlin darf gemäß § 6 Nr. 4 StBerG die laufende Finanzbuchhaltung übernehmen. Was er nicht darf: Jahresabschlüsse erstellen, Steuererklärungen anfertigen oder steuerlich beraten. Diese Aufgaben sind Steuerberatern vorbehalten. Ein guter Buchhaltungsservice arbeitet Hand in Hand mit Ihrem Steuerberater und liefert ihm ein vollständig vorbereitetes Dossier – das spart beiden Seiten Zeit und Ihnen Geld." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Einen externen Buchhalter in Berlin zu beauftragen ist für die meisten kleinen und mittleren Unternehmen deutlich wirtschaftlicher als eine eigene Kraft einzustellen. Entscheidend sind digitale Prozesse, transparente Festpreise und ein persönlicher Ansprechpartner. Taxalis Consulting bietet all das – für Berliner Unternehmen aus allen Bezirken und Branchen. Fordern Sie jetzt Ihr unverbindliches Angebot an." },
    ],
    related: [
      { href: "/leistungen/buchhaltung", label: "Buchhaltungsservice in Berlin" },
      { href: "/preise", label: "Preise & Pakete" },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
