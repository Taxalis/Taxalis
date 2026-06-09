"use client";

import { Nav, Footer } from "@/app/components/Nav";
import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", minHeight: "100vh" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          .container { max-width: 900px; margin: 0 auto; padding: 100px 24px; }
          .card { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 48px; }
          h1 { font-size: 42px; font-weight: 600; margin-bottom: 32px; color: #111827; }
          h2 { margin-top: 32px; margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #111827; }
          p { color: #6b7280; line-height: 1.8; margin: 12px 0; }
          b { font-weight: 600; color: #111827; }
          a { color: #1f2937; text-decoration: none; transition: color 0.2s; }
          a:hover { color: #111827; }
          .btn { display: inline-block; margin-top: 40px; background: #1f2937; color: white; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; text-decoration: none; transition: all 0.3s; }
          .btn:hover { background: #111827; transform: translateY(-2px); }
          @media(max-width: 768px) {
            .container { padding: 60px 24px; }
            .card { padding: 32px; }
            h1 { font-size: 32px; }
          }
        `}</style>

        <div className="container">
          <div className="card">
            <h1>Impressum</h1>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Taxalis Consulting</p>
            <p>Wilmersdorfer Str. 122-123</p>
            <p>10627 Berlin</p>
            <p>Deutschland</p>

            <h2>Vertreten durch</h2>
            <p>Jannik Roloff</p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@taxalis-consulting.de">info@taxalis-consulting.de</a>
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>Nicht vorhanden</p>

            <h2>Registereintrag</h2>
            <p>Nicht eingetragen (Einzelunternehmen)</p>

            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website werden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
              der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites. Für den Inhalt der verlinkten Seiten sind deren Betreiber verantwortlich.
              Bei der erstmaligen Verlinkung haben wir diese auf Rechtswidrigkeit überprüft. Wir sind nicht verantwortlich für Änderungen
              an verlinkten Seiten.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte sind urheberrechtlich geschützt. Jede Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürft der Zustimmung des Autors.
            </p>

            <Link className="btn" href="/">Zurück zur Startseite</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
