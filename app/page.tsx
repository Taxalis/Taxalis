"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xnjrgeba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

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

  return (
    <main
      style={{
        background: "#06111F",
        color: "#fff",
        overflowX: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          background:#06111F;
        }

        a{
          text-decoration:none;
          color:inherit;
        }

        .container{
          width:100%;
          max-width:1280px;
          margin:0 auto;
          padding:0 40px;
        }

        .serif{
          font-family:'Cormorant Garamond', serif;
        }

        .nav-link{
          font-size:13px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:rgba(255,255,255,0.65);
          transition:0.3s;
        }

        .nav-link:hover{
          color:white;
        }

        .hero-gradient{
          position:absolute;
          width:900px;
          height:900px;
          background:radial-gradient(circle, rgba(58,113,255,0.18) 0%, rgba(58,113,255,0) 70%);
          top:-300px;
          right:-200px;
          pointer-events:none;
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.2fr 0.8fr;
          gap:80px;
          align-items:center;
        }

        .hero-title{
          font-size:96px;
          line-height:0.95;
          font-weight:300;
          letter-spacing:-0.05em;
        }

        .section-title{
          font-size:64px;
          line-height:1;
          font-weight:300;
          letter-spacing:-0.04em;
        }

        .premium-card{
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.08);
          backdrop-filter:blur(12px);
          transition:0.4s;
        }

        .premium-card:hover{
          transform:translateY(-6px);
          border-color:rgba(255,255,255,0.2);
          background:rgba(255,255,255,0.05);
        }

        .btn-primary{
          background:white;
          color:#06111F;
          padding:18px 34px;
          border:none;
          border-radius:999px;
          font-size:13px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
        }

        .btn-primary:hover{
          transform:translateY(-2px);
          opacity:0.9;
        }

        .btn-secondary{
          border:1px solid rgba(255,255,255,0.16);
          padding:18px 34px;
          border-radius:999px;
          font-size:13px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:white;
          transition:0.3s;
        }

        .btn-secondary:hover{
          border-color:white;
          background:rgba(255,255,255,0.05);
        }

        input, textarea, select{
          width:100%;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          padding:18px;
          color:white;
          border-radius:18px;
          font-size:15px;
          outline:none;
          transition:0.3s;
        }

        input:focus, textarea:focus, select:focus{
          border-color:#5B8CFF;
          background:rgba(255,255,255,0.06);
        }

        textarea{
          resize:none;
        }

        label{
          font-size:12px;
          text-transform:uppercase;
          letter-spacing:0.14em;
          color:rgba(255,255,255,0.5);
          margin-bottom:10px;
          display:block;
        }

        .service-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }

        .service-card{
          padding:40px;
          border-radius:32px;
        }

        .service-number{
          font-size:12px;
          color:#5B8CFF;
          letter-spacing:0.2em;
          margin-bottom:28px;
        }

        .footer-link{
          color:rgba(255,255,255,0.45);
          transition:0.3s;
        }

        .footer-link:hover{
          color:white;
        }

        @media(max-width:1000px){

          .hero-grid{
            grid-template-columns:1fr;
          }

          .service-grid{
            grid-template-columns:1fr;
          }

          .hero-title{
            font-size:68px;
          }

          .section-title{
            font-size:48px;
          }

          .container{
            padding:0 24px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          transition: "0.3s",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          background: scrolled ? "rgba(6,17,31,0.78)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            height: "88px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/logo.png"
              alt="Taxalis"
              style={{
                height: "44px",
                width: "auto",
                objectFit: "contain",
              }}
            />

            <div>
              <div
                className="serif"
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                Taxalis Consulting
              </div>

              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Buchhaltung & Consulting
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "42px",
              alignItems: "center",
            }}
          >
            <a href="#leistungen" className="nav-link">
              Leistungen
            </a>

            <a href="#ueberuns" className="nav-link">
              Über Uns
            </a>

            <a href="#kontakt" className="nav-link">
              Kontakt
            </a>

            <a href="#kontakt" className="btn-primary">
              Beratung
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
        }}
      >
        <div className="hero-gradient"></div>

        <div className="container hero-grid">
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#5B8CFF",
                marginBottom: "32px",
              }}
            >
              Premium Buchhaltung · Berlin
            </div>

            <h1 className="serif hero-title">
              Moderne
              <br />
              Finanz-
              <br />
              exzellenz.
            </h1>

            <p
              style={{
                marginTop: "36px",
                fontSize: "18px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.62)",
                maxWidth: "620px",
              }}
            >
              Taxalis Consulting begleitet Unternehmen mit moderner
              Buchhaltung, digitalisierten Prozessen und strategischer
              Unternehmensberatung auf höchstem Niveau.
            </p>

            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "46px",
                flexWrap: "wrap",
              }}
            >
              <a href="#kontakt" className="btn-primary">
                Erstgespräch buchen
              </a>

              <a href="#leistungen" className="btn-secondary">
                Leistungen ansehen
              </a>
            </div>
          </div>

          <div
            className="premium-card"
            style={{
              padding: "48px",
              borderRadius: "40px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5B8CFF",
                marginBottom: "24px",
              }}
            >
              Standort
            </div>

            <div
              className="serif"
              style={{
                fontSize: "38px",
                lineHeight: 1.2,
                marginBottom: "32px",
              }}
            >
              Wilmersdorfer
              <br />
              Straße 122–123
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.9,
              }}
            >
              10627 Berlin
              <br />
              Deutschland
            </div>

            <div
              style={{
                marginTop: "42px",
                display: "grid",
                gap: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "6px",
                  }}
                >
                  Telefon
                </div>

                <div style={{ fontSize: "18px" }}>
                  017683151339
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "6px",
                  }}
                >
                  Öffnungszeiten
                </div>

                <div style={{ fontSize: "18px" }}>
                  Montag – Freitag
                  <br />
                  08:00 – 20:00 Uhr
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="leistungen"
        style={{
          padding: "140px 0",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "80px" }}>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#5B8CFF",
                marginBottom: "22px",
              }}
            >
              Leistungen
            </div>

            <h2 className="serif section-title">
              Struktur.
              <br />
              Präzision.
              <br />
              Wachstum.
            </h2>
          </div>

          <div className="service-grid">
            {[
              "Laufende Buchhaltung",
              "Lohnabrechnung",
              "Unternehmensberatung",
              "Digitale Prozesse",
              "Finanzplanung",
              "Gründungsberatung",
            ].map((item, index) => (
              <div
                key={item}
                className="premium-card service-card"
              >
                <div className="service-number">
                  0{index + 1}
                </div>

                <h3
                  className="serif"
                  style={{
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  {item}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.9,
                    fontSize: "15px",
                  }}
                >
                  Maßgeschneiderte Lösungen für moderne Unternehmen
                  mit Fokus auf Effizienz, Skalierung und Sicherheit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="ueberuns"
        style={{
          padding: "140px 0",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="container hero-grid">
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#5B8CFF",
                marginBottom: "22px",
              }}
            >
              Über Uns
            </div>

            <h2 className="serif section-title">
              Beratung
              <br />
              auf höchstem
              <br />
              Niveau.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 2,
                color: "rgba(255,255,255,0.62)",
                marginBottom: "32px",
              }}
            >
              Taxalis Consulting verbindet moderne Finanzprozesse mit
              strategischem Denken. Unser Fokus liegt auf
              langfristigen Partnerschaften, maximaler Transparenz und
              einer digitalen Infrastruktur auf Premium-Niveau.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 2,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Wir begleiten Unternehmen dabei, ihre Buchhaltung
              effizienter, skalierbarer und zukunftssicher zu gestalten.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        style={{
          padding: "140px 0",
        }}
      >
        <div className="container hero-grid">
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#5B8CFF",
                marginBottom: "22px",
              }}
            >
              Kontakt
            </div>

            <h2 className="serif section-title">
              Lassen Sie uns
              <br />
              sprechen.
            </h2>

            <p
              style={{
                marginTop: "32px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.58)",
                maxWidth: "520px",
                fontSize: "17px",
              }}
            >
              Vereinbaren Sie ein unverbindliches Erstgespräch.
              Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
            </p>
          </div>

          <div
            className="premium-card"
            style={{
              padding: "48px",
              borderRadius: "36px",
            }}
          >
            {sent ? (
              <div>
                <div
                  className="serif"
                  style={{
                    fontSize: "48px",
                    marginBottom: "24px",
                  }}
                >
                  Vielen Dank.
                </div>

                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.9,
                  }}
                >
                  Ihre Nachricht wurde erfolgreich übermittelt.
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label>Name</label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>E-Mail</label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label>Telefon</label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>Leistung</label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Bitte wählen</option>
                      <option>Buchhaltung</option>
                      <option>Lohnabrechnung</option>
                      <option>Consulting</option>
                      <option>Gründungsberatung</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label>Nachricht</label>

                  <textarea
                    rows={6}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading
                    ? "Wird gesendet..."
                    : "Nachricht senden"}
                </button>

                {error && (
                  <p
                    style={{
                      color: "#ff6b6b",
                      marginTop: "18px",
                    }}
                  >
                    Fehler beim Senden. Bitte erneut versuchen.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "48px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              className="serif"
              style={{
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              Taxalis Consulting
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.42)",
              }}
            >
              Berlin · Deutschland
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "26px",
              alignItems: "center",
            }}
          >
            <a href="/impressum" className="footer-link">
              Impressum
            </a>

            <a href="/datenschutz" className="footer-link">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}