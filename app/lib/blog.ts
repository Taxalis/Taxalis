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
    related: [
      { href: "/leistungen/lohnbuchhaltung", label: "Mehr zur Lohnbuchhaltung in Berlin" },
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: 14,60 Euro – was jetzt zu tun ist" },
    ],
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
      { href: "/blog/e-rechnungspflicht-2027-2028-kleine-unternehmen", label: "E-Rechnungspflicht 2027 und 2028 im Überblick" },
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
    related: [
      { href: "/leistungen/buchhaltung", label: "Buchhaltungsservice in Berlin" },
      { href: "/blog/e-rechnungspflicht-2027-2028-kleine-unternehmen", label: "E-Rechnungspflicht 2027 und 2028 im Überblick" },
    ],
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
    related: [
      { href: "/leistungen/bueroservice", label: "Büroservice & Unternehmensberatung in Berlin" },
      { href: "/blog/e-rechnungspflicht-2027-2028-kleine-unternehmen", label: "E-Rechnungspflicht 2027 und 2028 im Überblick" },
    ],
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
      { href: "/blog/e-rechnungspflicht-2027-2028-kleine-unternehmen", label: "E-Rechnungspflicht 2027 und 2028 im Überblick" },
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
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: 14,60 Euro – was jetzt zu tun ist" },
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
  {
    slug: "lohnabrechnung-pflegedienst-berlin",
    title: "Lohnabrechnung für Pflegedienste in Berlin: Was Sie wissen müssen",
    description:
      "Lohnabrechnung für Pflegedienste in Berlin: Pflegemindestlohn korrekt abrechnen, Schicht- und Feiertagszuschläge, hohe Fluktuation – externes Lohnbüro für die Pflegebranche.",
    category: "Lohnbuchhaltung",
    date: "2026-07-15",
    readingMinutes: 6,
    keywords: [
      "Lohnabrechnung Pflegedienst Berlin",
      "Lohnbüro Pflegedienst",
      "Pflegemindestlohn abrechnen",
      "Lohnbuchhaltung Pflegebranche",
      "externes Lohnbüro Pflege",
    ],
    excerpt:
      "Pflegemindestlohn, Schichtzuschläge und hohe Mitarbeiterfluktuation machen die Lohnabrechnung in der Pflege besonders komplex. Wir erklären, worauf Pflegedienste achten müssen.",
    content: [
      { type: "p", text: "Kein Arbeitgeber in Deutschland hat eine so vielschichtige Lohnabrechnung wie Pflegedienste und Pflegeheime: Pflegemindestlohn in verschiedenen Stufen, Nacht- und Feiertagszuschläge, Arbeitszeitkonten, hohe Fluktuation und viele Teilzeitkräfte – die monatliche Gehaltsabrechnung ist aufwändig und fehleranfällig. Dieser Beitrag erklärt die wichtigsten Besonderheiten." },
      { type: "h2", text: "Der Pflegemindestlohn: Stufen und aktuelle Werte" },
      { type: "p", text: "Der Pflegemindestlohn wird durch die Pflegemindestlohnverordnung (PflegeArbbV) geregelt und gilt für alle Beschäftigten in der Pflege, unabhängig von Tarifvertrag oder Betriebsgröße. Er ist gestaffelt nach Qualifikation: Pflegehilfskräfte, Pflegefachassistenten und Pflegefachkräfte erhalten unterschiedliche Mindestlöhne. Diese Stufen werden regelmäßig angepasst – die korrekte Einstufung Ihrer Mitarbeiter ist daher entscheidend für eine rechtssichere Abrechnung." },
      { type: "h2", text: "Schicht-, Nacht- und Feiertagszuschläge korrekt abrechnen" },
      { type: "p", text: "Pflegearbeit kennt keine Kernarbeitszeiten: Nachtschichten, Wochenenddienste und Feiertagsarbeit sind Alltag. Für die Lohnabrechnung bedeutet das: Zuschläge müssen korrekt berechnet und lohnsteuerrechtlich korrekt eingestuft werden. § 3b EStG regelt, welche Zuschläge steuerfrei sind – und bis zu welcher Höhe. Fehler bei der Zuschlagsberechnung können teuer werden." },
      { type: "h2", text: "Hohe Fluktuation und viele Teilzeitkräfte" },
      { type: "ul", items: [
        "Häufige An- und Abmeldungen bei Krankenkassen und Minijob-Zentrale",
        "Vertragsänderungen (Stundenreduzierung, Elternzeit, Krankschreibungen)",
        "Viele Teilzeitmodelle parallel – von 10 bis 35 Stunden",
        "Arbeitszeitkontenverwaltung und Überstundenausgleich",
      ] },
      { type: "h2", text: "Warum externe Lohnabrechnung für Pflegedienste sinnvoll ist" },
      { type: "p", text: "Die Lohnabrechnung eines Pflegedienstes bindet erhebliche Ressourcen – und Fehler sind riskant. Ein externes Lohnbüro kennt die Besonderheiten der Branche, hält Fristen ein und sorgt für korrekte Meldungen an Finanzamt und Sozialversicherung. Für Pflegedienste in Berlin bedeutet das: Zeit für die Versorgung der Pflegebedürftigen statt für Abrechnungsstress." },
      { type: "h2", text: "Was darf ein Lohnbüro – und was nicht?" },
      { type: "p", text: "Ein Lohnbüro darf gemäß § 6 Nr. 3 StBerG die laufende Lohnabrechnung und Lohnsteueranmeldungen übernehmen. Steuerliche Beratung, Jahresabschlüsse und verbindliche Rechtsauskünfte zu Tarifverträgen bleiben dem Steuerberater bzw. Rechtsberater vorbehalten. Ein gutes Lohnbüro kennt diese Grenzen und arbeitet eng mit der Steuerkanzlei Ihres Pflegedienstes zusammen." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Die Lohnabrechnung für Pflegedienste in Berlin ist komplex – aber lösbar. Mit einem spezialisierten externen Lohnbüro, das die Branche kennt, können Pflegedienste ihre Abrechnungspflichten sicher erfüllen und sich auf ihr Kerngeschäft konzentrieren." },
    ],
    related: [
      { href: "/loesungen/pflegedienst", label: "Lohnabrechnung für Pflegedienste in Berlin" },
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: 14,60 Euro – was jetzt zu tun ist" },
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
    ],
  },
  {
    slug: "lohnabrechnung-sicherheitsdienst-berlin",
    title: "Lohnabrechnung für Sicherheitsunternehmen: Manteltarifvertrag und Zuschläge korrekt abrechnen",
    description:
      "Lohnabrechnung für Sicherheitsdienste in Berlin: Manteltarifvertrag Bewachungsgewerbe, Nacht- und Feiertagszuschläge, Minijobber – alles korrekt abrechnen gemäß § 6 Nr. 3 StBerG.",
    category: "Lohnbuchhaltung",
    date: "2026-07-15",
    readingMinutes: 6,
    keywords: [
      "Lohnabrechnung Sicherheitsunternehmen Berlin",
      "Manteltarifvertrag Bewachungsgewerbe Lohnabrechnung",
      "Lohnbüro Sicherheitsdienst",
      "Gehaltsabrechnung Wachdienst Berlin",
      "Lohnbuchhaltung Sicherheitsgewerbe",
    ],
    excerpt:
      "Sicherheitsunternehmen haben eine der komplexesten Lohnabrechnungen: Manteltarifvertrag, Schicht- und Feiertagszuschläge, viele Minijobber. Wir erklären, worauf Sie achten müssen.",
    content: [
      { type: "p", text: "Das Bewachungsgewerbe zählt zu den abrechnungsintensivsten Branchen in Deutschland: Der Manteltarifvertrag Bewachungsgewerbe (BDSW) regelt branchenspezifische Mindestlöhne und Zuschlagsarten, dazu kommen viele Minijobber, variierende Einsatzzeiten und häufige Personalwechsel. Dieser Beitrag gibt einen Überblick über die wichtigsten Besonderheiten." },
      { type: "h2", text: "Manteltarifvertrag Bewachungsgewerbe: Was Sicherheitsunternehmen wissen müssen" },
      { type: "p", text: "Der Manteltarifvertrag für das Bewachungsgewerbe (BDSW) gilt für Mitglieder des Bundesverbands der Sicherheitswirtschaft und enthält branchenspezifische Mindestlöhne, die über dem allgemeinen gesetzlichen Mindestlohn liegen können. Welche Regelungen für Ihr Unternehmen gelten, hängt von der Verbandsmitgliedschaft und dem Bundesland ab. Für Berlin gelten eigene Regelungen – die korrekte Anwendung ist entscheidend für eine rechtssichere Abrechnung." },
      { type: "h2", text: "Nacht-, Sonntags- und Feiertagszuschläge" },
      { type: "p", text: "Wach- und Sicherheitsdienste arbeiten rund um die Uhr – und entsprechend komplex sind die Zuschlagsabrechnungen. § 3b EStG regelt die Steuerfreiheit von Nacht-, Sonntags- und Feiertagszuschlägen bis zu bestimmten Prozentsätzen des Grundlohns. Eine fehlerhafte Berechnung führt entweder zu unnötiger Steuerlast für Ihre Mitarbeiter oder zu Nachzahlungen im Rahmen einer Lohnsteuerprüfung." },
      { type: "h2", text: "Viele Minijobber und häufige An-/Abmeldungen" },
      { type: "ul", items: [
        "Hoher Anteil Minijobber und Midijobber neben Vollzeitkräften",
        "Häufige Neueinstellungen durch Zuverlässigkeitsprüfungen und Personalwechsel",
        "An- und Abmeldungen bei Minijob-Zentrale und Krankenkassen zeitnah erforderlich",
        "Unterschiedliche Beschäftigungsmodelle parallel verwalten",
      ] },
      { type: "h2", text: "Warum externe Lohnabrechnung für Sicherheitsunternehmen sinnvoll ist" },
      { type: "p", text: "Die Lohnabrechnung eines Sicherheitsdienstes ist zu komplex für eine nebenberuflich betraute Verwaltungskraft. Fehler bei Zuschlagsabrechnungen, Mindestlöhnen oder SV-Meldungen können bei einer Betriebsprüfung teuer werden. Ein externes Lohnbüro, das die Branche kennt, schützt vor diesen Risiken – und sorgt dafür, dass Sie sich aufs Kerngeschäft konzentrieren können." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Lohnabrechnung für Sicherheitsunternehmen in Berlin erfordert Branchenwissen, Sorgfalt und aktuelles Know-how. Mit einem spezialisierten Lohnbüro an Ihrer Seite sind Fristen, Tarife und Zuschläge in sicheren Händen." },
    ],
    related: [
      { href: "/loesungen/sicherheitsdienst", label: "Lohnabrechnung für Sicherheitsunternehmen Berlin" },
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: 14,60 Euro – was jetzt zu tun ist" },
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
    ],
  },
  {
    slug: "lohnabrechnung-logistik-berlin",
    title: "Lohnbuchhaltung für Logistikunternehmen in Berlin: Saisonspitzen und Schichtarbeit korrekt abrechnen",
    description:
      "Lohnabrechnung für Speditionen und Logistikbetriebe in Berlin: Fahrergehälter, Schichtarbeit, Saisonpersonal und Minijobber korrekt abrechnen – externes Lohnbüro für die Logistikbranche.",
    category: "Lohnbuchhaltung",
    date: "2026-07-15",
    readingMinutes: 5,
    keywords: [
      "Lohnabrechnung Logistik Berlin",
      "Lohnbüro Spedition Berlin",
      "Lohnbuchhaltung Logistikunternehmen",
      "Gehaltsabrechnung Fahrer Berlin",
      "Saisonpersonal Lohnabrechnung",
    ],
    excerpt:
      "Logistikbetriebe haben variierende Fahrstunden, Saisonspitzen und komplexe Zuschlagsmodelle. Wir erklären, wie Speditionen und Kurierdienste ihre Lohnabrechnung effizient auslagern.",
    content: [
      { type: "p", text: "Speditionen, Kurierdienste und Lagerlogistikbetriebe in Berlin haben einen gemeinsamen Nenner: Die Lohnabrechnung ist alles andere als gleichförmig. Variierende Fahrstunden, Saisonspitzen zu Weihnachten und im Sommergeschäft, ein Mix aus Festangestellten und Minijobbern sowie Nacht- und Schichtarbeit machen die monatliche Gehaltsabrechnung aufwändig." },
      { type: "h2", text: "Fahrergehälter und Spesen korrekt abrechnen" },
      { type: "p", text: "Fahrer erhalten in der Regel variable Vergütungen: Grundgehalt plus Stundenzuschläge, Spesen für Übernachtungen und Verpflegungsmehraufwendungen, Nachtarbeitszuschläge. Spesen und Verpflegungspauschalen können bis zu gesetzlichen Grenzen steuerfrei ausgezahlt werden – die korrekte Dokumentation und Abrechnung ist entscheidend." },
      { type: "h2", text: "Schichtarbeit und Arbeitszeitkonten" },
      { type: "p", text: "Logistikbetriebe arbeiten im Schichtbetrieb – und das bedeutet für die Lohnabrechnung: Schichtzuschläge müssen korrekt nach § 3b EStG berechnet werden, Arbeitszeitkonten müssen geführt werden, Überstunden müssen erfasst und vergütet oder ausgeglichen werden. Eine saubere Zeiterfassung ist die Grundlage." },
      { type: "h2", text: "Saisonpersonal und kurzfristige Beschäftigung" },
      { type: "ul", items: [
        "Saisonale Aufstockung in der Hochphase – z. B. Weihnachtsgeschäft oder Sommergeschäft",
        "Kurzfristige Beschäftigungen (max. 70 Arbeitstage pro Jahr) korrekt abrechnen",
        "Minijobber und Midijobber parallel zu Festangestellten verwalten",
        "Häufige An- und Abmeldungen bei Minijob-Zentrale und Krankenkassen",
      ] },
      { type: "h2", text: "Warum Logistikbetriebe die Lohnabrechnung auslagern" },
      { type: "p", text: "In der Hochsaison hat niemand Zeit für Buchhaltung – und genau dann muss die Lohnabrechnung reibungslos laufen. Ein externes Lohnbüro liefert pünktlich, auch wenn Ihr Team auf Touren ist. Ohne eigene Buchhaltungskraft, ohne Ausfallrisiko, zu einem festen Preis pro Mitarbeiter." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Lohnbuchhaltung für Logistikunternehmen in Berlin ist eine Spezialaufgabe. Mit dem richtigen Partner an Ihrer Seite sind Fahrergehälter, Saisonpersonal und Schichtarbeit in sicheren Händen – und Sie können sich auf Ihre Touren konzentrieren." },
    ],
    related: [
      { href: "/loesungen/logistik", label: "Lohnabrechnung für Logistikunternehmen Berlin" },
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: 14,60 Euro – was jetzt zu tun ist" },
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
    ],
  },
  {
    slug: "mindestlohn-2027-arbeitgeber-berlin",
    title: "Mindestlohn 2027: 14,60 Euro – was Berliner Arbeitgeber jetzt vorbereiten müssen",
    description:
      "Der Mindestlohn steigt zum 1. Januar 2027 auf 14,60 Euro. Was das für Personalkosten, Minijobs und Arbeitsverträge bedeutet – der Fahrplan für Berliner Arbeitgeber.",
    category: "Lohnbuchhaltung",
    date: "2026-08-13",
    readingMinutes: 5,
    keywords: [
      "Mindestlohn 2027",
      "Mindestlohn 14,60 Euro",
      "Mindestlohnerhöhung Arbeitgeber",
      "Personalkosten 2027 Berlin",
      "Lohnbuchhaltung Berlin",
    ],
    excerpt:
      "Zum 1. Januar 2027 steigt der gesetzliche Mindestlohn auf 14,60 Euro brutto. Wer viele Beschäftigte im unteren Lohnsegment hat, sollte jetzt rechnen – nicht erst im Dezember.",
    content: [
      { type: "p", text: "Zum 1. Januar 2027 steigt der gesetzliche Mindestlohn von 13,90 Euro auf 14,60 Euro brutto pro Zeitstunde. Das ist die zweite Stufe der Anpassung, die die Mindestlohnkommission im Juni 2025 beschlossen und die Bundesregierung per Verordnung umgesetzt hat. Für Betriebe mit vielen Beschäftigten im unteren Lohnsegment ist das ein spürbarer Kostenfaktor – und er lässt sich jetzt schon berechnen." },
      { type: "h2", text: "Wie hoch ist der Mindestlohn 2027?" },
      { type: "p", text: "Der gesetzliche Mindestlohn beträgt ab dem 1. Januar 2027 14,60 Euro brutto je Zeitstunde. Zum Vergleich: 2025 lag er bei 12,82 Euro, 2026 bei 13,90 Euro. Das ist ein Anstieg von rund 13,9 Prozent innerhalb von zwei Jahren." },
      { type: "h2", text: "Die neue Minijob-Grenze ab 2027" },
      { type: "p", text: "Seit Oktober 2022 ist die Verdienstgrenze für Minijobs dynamisch an den Mindestlohn gekoppelt: Sie entspricht dem Entgelt für rund zehn Wochenstunden zum jeweiligen Mindestlohn. Konkret bedeutet das:" },
      { type: "ul", items: [
        "2026: 603 Euro monatlich im Jahresdurchschnitt (maximal 7.236 Euro im Jahr)",
        "2027: 633 Euro monatlich im Jahresdurchschnitt (maximal 7.596 Euro im Jahr)",
        "Midijob-Übergangsbereich 2026: 603,01 bis 2.000 Euro – ab 2027 beginnt er bei 633,01 Euro",
      ] },
      { type: "p", text: "Wichtig: Die Grenze steigt automatisch, die vereinbarte Stundenzahl aber nicht. Wer den Stundenumfang seiner Minijobber unverändert lässt und nur den höheren Mindestlohn zahlt, bleibt in der Regel im Minijob-Rahmen. Wer dagegen den Monatsverdienst konstant halten will, muss die Stunden reduzieren." },
      { type: "h2", text: "Was Arbeitgeber jetzt konkret tun sollten" },
      { type: "ul", items: [
        "Alle Stundenlöhne unter 14,60 Euro identifizieren und die Mehrkosten für 2027 hochrechnen",
        "Minijob-Verhältnisse prüfen: Stundenzahl anpassen oder höheren Verdienst einplanen",
        "Arbeitsverträge mit fester Stundenlohnangabe auf Anpassungsbedarf prüfen",
        "Kalkulationen und Angebotspreise für 2027 nachziehen – besonders bei langfristigen Verträgen",
        "Dokumentationspflichten nach dem Mindestlohngesetz einhalten: Beginn, Ende und Dauer der Arbeitszeit erfassen",
      ] },
      { type: "h2", text: "Achtung bei Branchenmindestlöhnen" },
      { type: "p", text: "In einigen Branchen gelten eigene, höhere Mindestlöhne – etwa im Baugewerbe, im Dachdeckerhandwerk, in der Gebäudereinigung oder in der Sicherheitsbranche. Ein Branchenmindestlohn darf nie unter dem gesetzlichen Mindestlohn liegen. Steigt der gesetzliche Mindestlohn über den Tarifwert, gilt automatisch der höhere Betrag. Prüfen Sie also beides – den gesetzlichen und den für Sie einschlägigen tariflichen Wert." },
      { type: "h2", text: "Wer kontrolliert die Einhaltung?" },
      { type: "p", text: "Zuständig ist die Finanzkontrolle Schwarzarbeit (FKS) der Zollverwaltung. Verstöße gegen den Mindestlohn können mit empfindlichen Bußgeldern geahndet werden – ebenso wie Lücken in der Arbeitszeitdokumentation. Eine saubere Zeiterfassung ist deshalb kein Nice-to-have, sondern die Grundlage der Nachweisführung." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Der Mindestlohn 2027 von 14,60 Euro steht fest und ist planbar. Wer die Mehrkosten früh durchrechnet, Minijob-Verhältnisse rechtzeitig anpasst und die Dokumentation im Griff hat, geht ohne Überraschungen ins neue Jahr. Wir übernehmen die Umstellung in der laufenden Lohnabrechnung für Sie – inklusive Prüfung aller betroffenen Beschäftigungsverhältnisse." },
    ],
    related: [
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
      { href: "/blog/lohnbuero-berlin", label: "Lohnbüro Berlin: Aufgaben und Ablauf" },
    ],
  },
  {
    slug: "e-rechnungspflicht-2027-2028-kleine-unternehmen",
    title: "E-Rechnungspflicht 2027 und 2028: Was kleine Unternehmen in Berlin jetzt tun müssen",
    description:
      "E-Rechnungspflicht im B2B: Empfangen seit 2025, ausstellen ab 2027 über 800.000 Euro Umsatz, ab 2028 für alle. Fristen, Formate und Ausnahmen verständlich erklärt.",
    category: "Buchhaltung",
    date: "2026-08-13",
    readingMinutes: 6,
    keywords: [
      "E-Rechnungspflicht 2027",
      "E-Rechnung 2028 Pflicht",
      "XRechnung ZUGFeRD",
      "E-Rechnung kleine Unternehmen",
      "Buchhaltung Berlin",
    ],
    excerpt:
      "Eine PDF-Rechnung ist keine E-Rechnung. Wir erklären die gestaffelten Fristen bis 2028, welche Formate zulässig sind und welche Rechnungen dauerhaft ausgenommen bleiben.",
    content: [
      { type: "p", text: "Die E-Rechnung wird im deutschen B2B-Geschäftsverkehr schrittweise zur Pflicht. Viele kleine Unternehmen gehen davon aus, dass sie mit einer PDF-Rechnung per E-Mail auf der sicheren Seite sind – das ist ein Irrtum. Dieser Beitrag ordnet die Fristen ein und zeigt, was jetzt zu tun ist." },
      { type: "h2", text: "Was ist eine E-Rechnung – und was nicht?" },
      { type: "p", text: "Eine E-Rechnung ist eine Rechnung in einem strukturierten, maschinenlesbaren Format nach dem europäischen Standard EN 16931. In der Praxis sind das XRechnung (reines XML) und ZUGFeRD (hybrides Format aus PDF und eingebettetem XML). Eine reine PDF-Datei erfüllt diese Anforderung nicht: Sie ist zwar elektronisch, aber nicht maschinell auswertbar – und gilt umsatzsteuerlich nicht als E-Rechnung." },
      { type: "h2", text: "Die Fristen im Überblick" },
      { type: "ul", items: [
        "Seit 1. Januar 2025: Alle inländischen Unternehmen müssen E-Rechnungen empfangen und verarbeiten können – ohne Übergangsfrist, unabhängig von Größe und Rechtsform.",
        "Ab 1. Januar 2027: Ausstellungspflicht für Unternehmen mit mehr als 800.000 Euro Gesamtumsatz im Vorjahr (also 2026).",
        "Ab 1. Januar 2028: Ausstellungspflicht für alle inländischen B2B-Umsätze, unabhängig vom Umsatz.",
      ] },
      { type: "p", text: "Für den Empfang gab es nie eine Übergangsfrist. Wer heute noch kein Verfahren dafür hat, ist bereits jetzt in der Pflicht – technisch genügt dafür zunächst ein zentrales E-Mail-Postfach mit einem definierten Prozess und revisionssicherer Archivierung." },
      { type: "h2", text: "Gilt das auch für mein kleines Unternehmen?" },
      { type: "p", text: "Ja, beim Empfang ausnahmslos. Bei der Ausstellung entscheidet der Vorjahresumsatz über den Zeitpunkt: Liegt Ihr Gesamtumsatz 2026 bei maximal 800.000 Euro, haben Sie bis Ende 2027 Zeit und dürfen bis dahin weiter Papier- oder PDF-Rechnungen versenden, sofern der Empfänger zustimmt. Ab 2028 gilt die Pflicht dann für alle." },
      { type: "h2", text: "Welche Rechnungen bleiben ausgenommen?" },
      { type: "ul", items: [
        "Rechnungen an Endverbraucher (B2C) – dauerhaft nicht betroffen",
        "Kleinbetragsrechnungen bis 250 Euro",
        "Fahrausweise",
        "Kleinunternehmer nach § 19 UStG sind von der Ausstellungspflicht befreit – empfangen müssen aber auch sie",
      ] },
      { type: "h2", text: "Welche Risiken drohen bei Versäumnissen?" },
      { type: "p", text: "Nach Ablauf der jeweiligen Übergangsfrist ist eine reine PDF-Rechnung umsatzsteuerlich keine ordnungsgemäße Rechnung. Das kann den Vorsteuerabzug beim Empfänger gefährden – mit der Folge, dass Kunden die Zahlung zurückhalten oder eine korrigierte Rechnung verlangen. Der praktische Druck entsteht deshalb oft früher als die gesetzliche Frist: Viele größere Auftraggeber verlangen schon heute strukturierte Formate." },
      { type: "h2", text: "Was Sie jetzt vorbereiten sollten" },
      { type: "ul", items: [
        "Empfangsweg festlegen: zentrale Rechnungs-E-Mail-Adresse und klarer Zuständigkeitsprozess",
        "Archivierung prüfen: E-Rechnungen müssen revisionssicher im Originalformat aufbewahrt werden",
        "Stammdaten bereinigen – fehlerhafte Adress- oder Steuerdaten fallen bei strukturierten Formaten sofort auf",
        "Rechnungsprogramm auf XRechnung- und ZUGFeRD-Fähigkeit prüfen",
        "Freiwillig früher umstellen, um Routine aufzubauen, statt kurz vor der Frist zu improvisieren",
      ] },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Die E-Rechnungspflicht ist kein einmaliges Projekt, sondern betrifft Stammdaten, Prozesse und Archivierung. Kleine Unternehmen in Berlin haben bis Ende 2027 Zeit für die Ausstellung – empfangen müssen sie längst. Wer die Umstellung mit der laufenden Buchhaltung verbindet, spart doppelte Arbeit. Wir richten den Prozess gemeinsam mit Ihnen ein." },
    ],
    related: [
      { href: "/leistungen/buchhaltung", label: "Laufende Buchhaltung in Berlin" },
      { href: "/blog/buchhaltungsservice-paragraph-6-stberg", label: "Was darf ein Buchhaltungsservice?" },
    ],
  },
  {
    slug: "lohnabrechnung-gebaeudereinigung-berlin",
    title: "Lohnabrechnung für Gebäudereiniger in Berlin: Branchenmindestlohn und Objektwechsel im Griff",
    description:
      "Lohnbuchhaltung für Gebäudereinigungsbetriebe in Berlin: Branchenmindestlohn, Teilzeit- und Minijob-Mix, Objektwechsel und hohe Fluktuation korrekt abrechnen.",
    category: "Lohnbuchhaltung",
    date: "2026-08-13",
    readingMinutes: 5,
    keywords: [
      "Lohnabrechnung Gebäudereinigung Berlin",
      "Lohnbüro Reinigungsfirma",
      "Branchenmindestlohn Gebäudereinigung",
      "Lohnbuchhaltung viele Minijobber",
      "Gehaltsabrechnung Reinigungskräfte",
    ],
    excerpt:
      "Viele Teilzeitkräfte, wechselnde Objekte, hohe Fluktuation und ein eigener Branchenmindestlohn: Warum die Lohnabrechnung in der Gebäudereinigung besonders fehleranfällig ist.",
    content: [
      { type: "p", text: "Gebäudereinigungsbetriebe haben eine der aufwändigsten Lohnabrechnungen überhaupt: viele Beschäftigte mit kleinen Stundenkontingenten, wechselnde Einsatzobjekte, kurzfristige Vertretungen und eine hohe Fluktuation. Dazu kommt ein eigener Branchenmindestlohn. Jeder dieser Punkte ist für sich harmlos – in der Kombination entsteht monatlicher Aufwand, der schnell eine halbe Stelle bindet." },
      { type: "h2", text: "Branchenmindestlohn statt nur gesetzlicher Mindestlohn" },
      { type: "p", text: "Die Gebäudereinigung gehört zu den Branchen mit einem eigenen, für allgemeinverbindlich erklärten Mindestlohn nach dem Arbeitnehmer-Entsendegesetz. Dieser darf den gesetzlichen Mindestlohn nie unterschreiten. Da der gesetzliche Mindestlohn zum 1. Januar 2027 auf 14,60 Euro steigt, ist bei jeder Lohnrunde zu prüfen, welcher Wert im Einzelfall der höhere ist – und dieser gilt. Zusätzlich unterscheiden Tarifwerke der Branche typischerweise zwischen Lohngruppen, etwa Innen- und Unterhaltsreinigung gegenüber Glas- und Fassadenreinigung." },
      { type: "h2", text: "Der Minijob-Mix als Dauerthema" },
      { type: "p", text: "In kaum einer Branche arbeiten so viele Beschäftigte an der Geringfügigkeitsgrenze. Mit jeder Mindestlohnerhöhung verschiebt sich diese Grenze: 2026 liegt sie bei 603 Euro monatlich, ab 2027 bei 633 Euro. Wer den Stundenumfang unverändert lässt, bleibt im Rahmen – wer aufstockt, riskiert unbemerkt Sozialversicherungspflicht. Die vorausschauende Jahresbetrachtung ist deshalb Pflicht, nicht Kür." },
      { type: "h2", text: "Objektwechsel, Vertretungen und Fluktuation" },
      { type: "ul", items: [
        "Häufige An- und Abmeldungen bei Minijob-Zentrale und Krankenkassen",
        "Einsatz derselben Kraft in mehreren Objekten mit unterschiedlichen Stundensätzen",
        "Kurzfristige Krankheitsvertretungen, die im selben Monat abgerechnet werden müssen",
        "Objektbezogene Zuschläge und Fahrzeiten korrekt zuordnen",
        "Nacht- und Wochenendarbeit bei Sonderreinigungen nach § 3b EStG steuerfrei abrechnen",
      ] },
      { type: "h2", text: "Arbeitszeiterfassung als Nachweisgrundlage" },
      { type: "p", text: "Für Beschäftigte im Anwendungsbereich des Mindestlohngesetzes müssen Beginn, Ende und Dauer der täglichen Arbeitszeit dokumentiert werden. Bei verteilten Objekten ohne feste Betriebsstätte ist das organisatorisch anspruchsvoll. Kontrolliert wird von der Finanzkontrolle Schwarzarbeit (FKS) – und geprüft wird nicht nur, ob korrekt gezahlt, sondern auch, ob sauber dokumentiert wurde." },
      { type: "h2", text: "Warum sich das Auslagern hier besonders rechnet" },
      { type: "p", text: "Der Aufwand in der Gebäudereinigung skaliert mit der Kopfzahl, nicht mit dem Umsatz. Ein Betrieb mit 40 Teilzeitkräften hat mehr Abrechnungsaufwand als ein Handwerksbetrieb mit 10 Vollzeitkräften bei gleichem Umsatz. Ein externes Lohnbüro rechnet pro Mitarbeiter ab, hält Tarif- und Mindestlohnänderungen nach und fällt weder krankheits- noch urlaubsbedingt aus." },
      { type: "h2", text: "Fazit" },
      { type: "p", text: "Branchenmindestlohn, Minijob-Grenzen und ständige Personalwechsel machen die Lohnabrechnung in der Gebäudereinigung zur Spezialaufgabe. Wir übernehmen die laufende Abrechnung inklusive aller Meldungen – Sie behalten den Kopf frei für Ihre Objekte." },
    ],
    related: [
      { href: "/leistungen/lohnbuchhaltung", label: "Unsere Lohnbuchhaltung in Berlin" },
      { href: "/blog/mindestlohn-2027-arbeitgeber-berlin", label: "Mindestlohn 2027: Was Arbeitgeber vorbereiten müssen" },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
