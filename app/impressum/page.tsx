export default function Impressum() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", fontWeight: 300, lineHeight: 1.05, marginBottom: "60px" }}>Impressum</h1>

        {/* Angaben gem. § 5 TMG */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Angaben gemäß § 5 TMG</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", lineHeight: 2, color: "#333" }}>
              Jannik Roloff<br />
              Taxalis Consulting<br />
              Wilmersdorfer Str. 122–123<br />
              10627 Berlin<br />
              Deutschland
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Kontakt</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", lineHeight: 2, color: "#333" }}>
              Telefon: 0176<br />
              E-Mail: info@taxalis-consulting.de
            </p>
          </div>
        </section>

        {/* Steuernummer */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Steuernummer</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", lineHeight: 2, color: "#333" }}>
              Steuernummer: 13/496/03454<br />
              Finanzamt Berlin
            </p>
          </div>
        </section>

        {/* Berufsbezeichnung */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Berufsbezeichnung</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", lineHeight: 2, color: "#333" }}>
              Buchhaltungsservice / Unternehmensberatung<br />
              Berufsbezeichnung wurde verliehen in: Deutschland
            </p>
          </div>
        </section>

        {/* Haftung für Inhalte */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Haftung für Inhalte</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "#555" }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </section>

        {/* Haftung für Links */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Haftung für Links</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "#555" }}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Urheberrecht</h2>
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "#555" }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>

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
