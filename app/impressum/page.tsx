"use client";

export default function Impressum() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#F7F9FC", minHeight: "100vh" }}>
      
      <style>{`
        a{color:#0B5FFF;text-decoration:none}
        .container{max-width:900px;margin:0 auto;padding:80px 24px}
        .card{background:white;border:1px solid #e8eef7;border-radius:24px;padding:32px}
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
        h1{font-size:42px;font-weight:300;margin-bottom:20px}
        p{color:#5b6475;line-height:1.8;margin:8px 0}
      `}</style>

      <div className="container">

        <div className="card">
          <h1>Impressum</h1>

          <p><b>Angaben gemäß § 5 TMG</b></p>

          <p>Taxalis Consulting</p>
          <p>Wilmersdorfer Str. 122-123</p>
          <p>10627 Berlin</p>
          <p>Deutschland</p>

          <br />

          <p><b>Vertreten durch</b></p>
          <p>Jannik Roloff</p>

          <br />

          <p><b>Kontakt</b></p>
          <p>Telefon: 0176 83151339</p>
          <p>E-Mail: info@taxalis-consulting.de</p>

          <br />

          <p><b>Umsatzsteuer-ID</b></p>
          <p>Nicht vorhanden</p>

          <br />

          <p><b>Registereintrag</b></p>
          <p>Nicht eingetragen (Einzelunternehmen)</p>

          <a className="btn" href="/">
            Zurück zur Startseite
          </a>
        </div>

      </div>
    </main>
  );
}