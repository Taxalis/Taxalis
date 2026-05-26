"use client";

export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#F7F9FC", minHeight: "100vh" }}>
      
      <style>{`
        .container{max-width:900px;margin:0 auto;padding:80px 24px}
        .card{background:white;border:1px solid #e8eef7;border-radius:24px;padding:32px}
        h1{font-size:42px;font-weight:300;margin-bottom:20px}
        h2{margin-top:24px;font-size:18px}
        p{color:#5b6475;line-height:1.8;margin:8px 0}
        .btn{
          display:inline-block;
          margin-top:30px;
          background:#0B5FFF;
          color:white;
          padding:12px 20px;
          border-radius:999px;
          font-size:12px;
          letter-spacing:0.12em;
          text-transform:uppercase;
        }
      `}</style>

      <div className="container">

        <div className="card">

          <h1>Datenschutzerklärung</h1>

          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig.
            Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten.
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>Taxalis Consulting<br />Wilmersdorfer Str. 122-123<br />10627 Berlin<br />E-Mail: info@taxalis-consulting.de</p>

          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp)
            durch den Hostinganbieter erfasst.
          </p>

          <h2>3. Kontaktformular</h2>
          <p>
            Die im Formular eingegebenen Daten werden zur Bearbeitung Ihrer Anfrage verwendet
            und über Formspree weitergeleitet.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Diese Website verwendet keine Tracking- oder Marketing-Cookies.
          </p>

          <h2>5. Analyse / Tracking</h2>
          <p>
            Es werden keine Analyse-Tools (z. B. Google Analytics) eingesetzt.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten.
          </p>

          <a className="btn" href="/">
            Zurück zur Startseite
          </a>

        </div>

      </div>
    </main>
  );
}