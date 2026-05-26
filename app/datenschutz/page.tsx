export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fff", color: "#111", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: #111; }
        a:hover { opacity: 0.6; }
      `}</style>

      {/* Navigation */}
      <nav style={{ borderBottom: "1px solid #e0e0e0", padding: "0 80px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", color: "inherit" }}>
          <img src="/logo.png" alt="Taxalis Consulting" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600 }}>Taxalis Consulting</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" }}>Buchhaltung & Consulting</div>
          </div>
        </a>
        <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", textDecoration: "none" }}>← Zurück zur Startseite</a>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 40px 120px" }}>

        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>Rechtliches</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", fontWeight: 300, lineHeight: 1.05, marginBottom: "16px" }}>Datenschutz­erklärung</h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#999", marginBottom: "60px" }}>Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</p>

        {[
          {
            title: "1. Verantwortlicher",
            text: `Verantwortlicher im Sinne der DSGVO ist:\n\nJannik Roloff\nTaxalis Consulting\nWilmersdorfer Str. 122–123\n10627 Berlin\n\nTelefon: 017683151339\nE-Mail: info@taxalis-consulting.de`
          },
          {
            title: "2. Erhebung und Verarbeitung personenbezogener Daten",
            text: "Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme (z. B. über das Kontaktformular, per E-Mail oder Telefon) freiwillig mitteilen. Die von Ihnen übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet."
          },
          {
            title: "3. Rechtsgrundlage der Verarbeitung",
            text: "Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen)."
          },
          {
            title: "4. Speicherdauer",
            text: "Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Bei Kontaktanfragen ist dies in der Regel der Fall, wenn die jeweilige Konversation abgeschlossen ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen."
          },
          {
            title: "5. Weitergabe von Daten",
            text: "Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn dies gesetzlich zulässig oder erforderlich ist."
          },
          {
            title: "6. Hosting & GitHub Pages",
            text: "Diese Website wird über GitHub Pages gehostet (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). Beim Aufruf der Website werden automatisch Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) an GitHub übermittelt. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          },
          {
            title: "7. Google Fonts",
            text: "Diese Website verwendet Google Fonts (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) zur einheitlichen Darstellung von Schriftarten. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten in Ihren Browser-Cache. Weitere Informationen zu Google Fonts finden Sie unter: https://developers.google.com/fonts/faq"
          },
          {
            title: "8. Ihre Rechte",
            text: "Sie haben jederzeit das Recht auf:\n\n— Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)\n— Berichtigung unrichtiger Daten (Art. 16 DSGVO)\n— Löschung Ihrer Daten (Art. 17 DSGVO)\n— Einschränkung der Verarbeitung (Art. 18 DSGVO)\n— Datenübertragbarkeit (Art. 20 DSGVO)\n— Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n\nZur Ausübung Ihrer Rechte wenden Sie sich an: info@taxalis-consulting.de"
          },
          {
            title: "9. Beschwerderecht",
            text: "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde in Berlin ist:\n\nBerliner Beauftragte für Datenschutz und Informationsfreiheit\nAlt-Moabit 59–61\n10555 Berlin\nwww.datenschutz-berlin.de"
          },
          {
            title: "10. Änderungen dieser Datenschutzerklärung",
            text: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets den aktuellen rechtlichen Anforderungen zu entsprechen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar."
          },
        ].map(({ title, text }) => (
          <section key={title} style={{ marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>{title}</h2>
            <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "#555", whiteSpace: "pre-line" }}>{text}</p>
            </div>
          </section>
        ))}

      </div>

      {/* Footer */}
      <footer style={{ background: "#0a0a0a", padding: "32px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Taxalis Consulting. Alle Rechte vorbehalten.</div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/impressum" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Impressum</a>
          <a href="/datenschutz" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Datenschutz</a>
        </div>
      </footer>

    </main>
  );
}
