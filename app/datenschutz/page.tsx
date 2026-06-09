"use client";

import { Nav, Footer } from "@/app/components/Nav";
import Link from "next/link";

export default function Datenschutz() {
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
          ul { margin: 12px 0 12px 24px; }
          li { color: #6b7280; line-height: 1.8; margin: 8px 0; }
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
            <h1>Datenschutzerklärung</h1>

            <p>
              Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Diese Datenschutzerklärung informiert Sie darüber,
              wie wir personenbezogene Daten erfassen, nutzen und schützen.
            </p>

            <h2>1. Verantwortlicher</h2>
            <p>
              <b>Taxalis Consulting</b><br />
              Wilmersdorfer Str. 122-123<br />
              10627 Berlin<br />
              Deutschland<br />
              E-Mail: <a href="mailto:info@taxalis-consulting.de">info@taxalis-consulting.de</a>
            </p>

            <h2>2. Erhebung und Verarbeitung Ihrer Daten</h2>
            <p>
              Beim Besuch dieser Website werden automatisch technische Daten durch unseren Hostinganbieter erfasst,
              darunter IP-Adressen, Browsertyp und Betriebssystem. Diese Daten sind notwendig für die Bereitstellung
              der Website und ihre Sicherheit.
            </p>

            <h2>3. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail, Telefon, Unternehmen, Nachricht) zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p>
              Ihre Daten werden über den Service Formspree verarbeitet und an unsere E-Mail-Adresse weitergeleitet.
              Formspree speichert diese Daten nur zur Zustellung an uns. Weitere Informationen finden Sie in der
              <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer"> Datenschutzerklärung von Formspree</a>.
            </p>

            <h2>4. Speicherdauer</h2>
            <p>
              Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage notwendig ist.
              Nach vollständiger Bearbeitung werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies für Tracking, Marketing oder Analyse.
              Technisch notwendige Cookies, die für die Funktionalität erforderlich sind, können gespeichert werden.
            </p>

            <h2>6. Analyse und Tracking</h2>
            <p>
              Wir setzen keine Analyse-Tools wie Google Analytics oder andere Tracking-Dienste ein.
              Wir erheben keine detaillierten Nutzungsstatistiken oder Besucherdaten.
            </p>

            <h2>7. Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites. Wir sind nicht verantwortlich für die Datenschutzpraktiken
              dieser Seiten. Bitte beachten Sie deren Datenschutzerklärungen vor der Eingabe persönlicher Daten.
            </p>

            <h2>8. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul>
              <li><b>Auskunftsrecht:</b> Sie können jederzeit Auskunft über Ihre bei uns gespeicherten Daten erhalten.</li>
              <li><b>Berichtigungsrecht:</b> Sie können unrichtige Daten korrigieren lassen.</li>
              <li><b>Löschungsrecht:</b> Sie können die Löschung Ihrer Daten fordern.</li>
              <li><b>Einschränkungsrecht:</b> Sie können die Verarbeitung Ihrer Daten einschränken.</li>
              <li><b>Widerspruchsrecht:</b> Sie können der Verarbeitung widersprechen.</li>
            </ul>

            <h2>9. Kontaktieren Sie uns</h2>
            <p>
              Für Fragen zum Datenschutz oder zur Wahrnehmung Ihrer Rechte kontaktieren Sie uns gerne:
            </p>
            <p>
              E-Mail: <a href="mailto:info@taxalis-consulting.de">info@taxalis-consulting.de</a>
            </p>

            <h2>10. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden. Die jeweils aktuelle Version
              finden Sie auf dieser Website.
            </p>

            <Link className="btn" href="/">Zurück zur Startseite</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
