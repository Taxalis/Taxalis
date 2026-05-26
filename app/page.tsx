"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xnjrgeba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const NavMenu = () => (
    <div
      style={{
        position: "absolute",
        top: 70,
        right: 24,
        background: "white",
        borderRadius: 16,
        padding: 16,
        display: "flex",
        flexDirection: "column" as const,
        gap: 12,
        minWidth: 180,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      }}
    >
      <a href="#leistungen">Leistungen</a>
      <a href="#ueberuns">Über Uns</a>
      <a href="#kontakt">Kontakt</a>
      <a href="/impressum">Impressum</a>
      <a href="/datenschutz">Datenschutz</a>
    </div>
  );

  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#F7F9FC", color: "#0B1220" }}>

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        a{text-decoration:none;color:inherit}

        .container{max-width:1200px;margin:0 auto;padding:0 24px}

        .btn{
          background:#0B5FFF;
          color:white;
          padding:14px 22px;
          border-radius:999px;
          font-size:13px;
          letter-spacing:0.12em;
          text-transform:uppercase;
          transition:0.3s;
          display:inline-block;
        }
        .btn:hover{transform:translateY(-2px);opacity:0.9}

        .btn-outline{
          border:1px solid #cfd6e4;
          padding:14px 22px;
          border-radius:999px;
          font-size:13px;
          letter-spacing:0.12em;
          text-transform:uppercase;
        }

        .card{
          background:white;
          border:1px solid #e8eef7;
          border-radius:24px;
          padding:28px;
        }

        .title{
          font-size:56px;
          line-height:1.05;
          font-weight:300;
        }

        .sub{
          color:#5b6475;
          line-height:1.8;
        }

        input,textarea,select{
          width:100%;
          padding:14px;
          border-radius:14px;
          border:1px solid #dfe6f2;
          outline:none;
        }

        input:focus,textarea:focus,select:focus{
          border-color:#0B5FFF;
        }

        @media(max-width:900px){
          .title{font-size:38px}
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: scrolled ? "white" : "transparent",
          borderBottom: scrolled ? "1px solid #e8eef7" : "none",
          zIndex: 99,
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", height: 70, alignItems: "center" }}>
          
          {/* LOGO (ohne Text daneben) */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.png" style={{ height: 85 }} />
          </div>

          <div style={{ position: "relative" }}>
            <button onClick={() => setMenuOpen(!menuOpen)} className="btn-outline">
              Menü
            </button>
            {menuOpen && <NavMenu />}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40 }}>
          
          <div>
            <h1 className="title">
              Finanzberatung auf Premium Niveau für moderne Unternehmen.
            </h1>

            <p className="sub" style={{ marginTop: 20 }}>
              Wir unterstützen Selbstständige, Start-ups und Unternehmen bei der vollständigen digitalen Buchhaltung, Lohnabrechnung und vorbereitenden Jahresabschlüssen.
              <br /><br />
              Unser Fokus liegt auf Effizienz, Transparenz und einer modernen digitalen Finanzstruktur, damit Sie sich vollständig auf Ihr Kerngeschäft konzentrieren können.
            </p>

            <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
              <a className="btn" href="#kontakt">Erstgespräch</a>
              <a className="btn-outline" href="#leistungen">Leistungen</a>
            </div>
          </div>

          {/* IMAGE ersetzt */}
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src="/office.jpg"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 300,
                objectFit: "cover"
              }}
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen" style={{ padding: "80px 0" }}>
        <div className="container">

          <h2 className="title" style={{ fontSize: 38 }}>Leistungen</h2>

          <p className="sub" style={{ maxWidth: 850, marginTop: 12 }}>
            Unsere Leistungen decken alle zentralen Bereiche moderner Finanz- und Unternehmensprozesse ab.
            Wir begleiten Sie von der laufenden Buchhaltung bis zur strategischen Beratung und sorgen für klare, digitale und effiziente Abläufe.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 30 }}>

            <div className="card">
              <b>Buchhaltung</b>
              <p className="sub" style={{ marginTop: 10 }}>
                Digitale, strukturierte und laufende Finanzbuchhaltung für maximale Transparenz und Effizienz.
              </p>
            </div>

            <div className="card">
              <b>Lohnabrechnung</b>
              <p className="sub" style={{ marginTop: 10 }}>
                Komplette Abwicklung aller Lohn- und Gehaltsabrechnungen inkl. Meldungen bei Sozialversicherungsträgern.
              </p>
            </div>

            <div className="card">
              <b>Consulting</b>
              <p className="sub" style={{ marginTop: 10 }}>
                Strategische Beratung zur Optimierung von Unternehmensstruktur, Prozessen und finanzieller Planung.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="ueberuns" style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          
          <div className="card">
            <span className="sub">Über Uns</span>
            <h2 className="title" style={{ fontSize: 40 }}>
              Struktur, Digitalisierung und Vertrauen
            </h2>
          </div>

          <div>
            <p className="sub">
              Wir sind spezialisiert auf moderne Buchhaltungsprozesse und digitale Finanzorganisation.
              <br /><br />
              Durch effiziente Abläufe schaffen wir klare Strukturen, reduzieren Aufwand und ermöglichen Unternehmen eine sichere und skalierbare Finanzbasis.
              <br /><br />
              Persönliche Betreuung, schnelle Kommunikation und digitale Prozesse stehen dabei im Mittelpunkt unserer Arbeit.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" style={{ padding: "80px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          
          <div>
            <h2 className="title" style={{ fontSize: 38 }}>Kontakt</h2>
            <p className="sub">
              Lassen Sie uns gemeinsam Ihre Finanzprozesse optimieren. Wir melden uns innerhalb von 24 Stunden zurück.
            </p>
          </div>

          <div className="card">
            {sent ? (
              <b>Danke! Ihre Anfrage wurde erfolgreich gesendet.</b>
            ) : (
              <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <br /><br />
                <input name="email" placeholder="E-Mail" onChange={handleChange} />
                <br /><br />
                <textarea name="message" placeholder="Ihre Nachricht..." rows={5} onChange={handleChange} />
                <br /><br />
                <button className="btn" disabled={loading}>
                  {loading ? "Sende..." : "Senden"}
                </button>
                {error && <p style={{ color: "red" }}>Fehler beim Senden</p>}
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 40, borderTop: "1px solid #e8eef7" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Taxalis Consulting</span>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </footer>

    </main>
  );
}