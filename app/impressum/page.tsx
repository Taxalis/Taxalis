export default function Impressum() {
  return (
    <main style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fff", color: "#111", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: #111; }
        a:hover { opacity: 0.6; }
        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 12px;
        }
        button {
          padding: 12px 18px;
          background: #111;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #e0e0e0", padding: "0 80px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", color: "inherit" }}>
          <img src="/logo.png" alt="Taxalis Consulting" style={{ height: "36px" }} />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600 }}>Taxalis Consulting</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" }}>Buchhaltung & Consulting</div>
          </div>
        </a>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 40px 120px" }}>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", marginBottom: "40px" }}>
          Kontakt
        </h1>

        {/* FORM */}
        <form action="https://formspree.io/f/xnjrgeba" method="POST">

          <input
            name="name"
            type="text"
            placeholder="Dein Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Deine E-Mail"
            required
          />

          <textarea
            name="message"
            placeholder="Deine Nachricht"
            rows={6}
            required
          />

          {/* Spam Schutz (wichtig) */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button type="submit">
            Senden
          </button>

        </form>

      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", padding: "32px 80px", display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.3)" }}>
        <div>© {new Date().getFullYear()} Taxalis Consulting</div>
      </footer>

    </main>
  );
}