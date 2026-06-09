"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import { services } from "@/app/lib/services";

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xnjrgeba", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { value: "100+", label: "Zufriedene Kunden" },
    { value: "10+", label: "Jahre Erfahrung" },
    { value: "24h", label: "Reaktionszeit" },
    { value: "100%", label: "Digital & Modern" },
  ];

  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: "#111827" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          a { text-decoration: none; color: inherit; }
          body { overflow-x: hidden; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
          .btn { background: #1f2937; color: white; padding: 14px 28px; border-radius: 8px; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; transition: all 0.3s ease; display: inline-block; cursor: pointer; border: none; text-decoration: none; }
          .btn:hover { background: #111827; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
          .btn-outline { border: 2px solid #1f2937; color: #1f2937; padding: 12px 28px; border-radius: 8px; font-size: 13px; font-weight: 600; transition: all 0.3s ease; display: inline-block; background: transparent; cursor: pointer; text-decoration: none; }
          .btn-outline:hover { background: #1f2937; color: white; transform: translateY(-2px); }
          .btn-white { background: white; color: #1f2937; padding: 14px 28px; border-radius: 8px; font-size: 13px; font-weight: 600; transition: all 0.3s ease; display: inline-block; cursor: pointer; border: none; text-decoration: none; }
          .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
          .card { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px; transition: all 0.3s ease; }
          .card:hover { transform: translateY(-4px); box-shadow: 0 15px 35px rgba(0,0,0,0.08); }
          .service-card { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px; transition: all 0.35s ease; text-decoration: none; display: block; color: inherit; }
          .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: #d1d5db; }
          .animate-in { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
          .animate-in.visible { opacity: 1; transform: translateY(0); }
          .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af; margin-bottom: 12px; display: block; }
          .title-lg { font-size: 42px; line-height: 1.1; font-weight: 600; letter-spacing: -0.02em; }
          .sub { color: #6b7280; line-height: 1.8; font-size: 15px; }
          input, textarea, select { width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid #e5e7eb; outline: none; font-size: 13px; font-family: inherit; background: white; color: #111827; transition: border-color 0.2s; }
          input:focus, textarea:focus, select:focus { border-color: #1f2937; box-shadow: 0 0 0 3px rgba(31,41,55,0.06); }
          .stat-card { text-align: center; padding: 32px 24px; }
          .process-step { display: flex; gap: 20px; align-items: flex-start; padding: 24px 0; border-bottom: 1px solid #f3f4f6; }
          .process-step:last-child { border-bottom: none; }
          .step-number { width: 44px; height: 44px; background: #1f2937; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; flex-shrink: 0; }
          @media(max-width: 768px) {
            .title-lg { font-size: 28px; }
            .hero-grid { grid-template-columns: 1fr !important; }
            .services-grid { grid-template-columns: 1fr !important; }
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .about-grid { grid-template-columns: 1fr !important; }
            .contact-grid { grid-template-columns: 1fr !important; }
            .process-grid { grid-template-columns: 1fr !important; }
            .hide-mobile { display: none !important; }
          }
        `}</style>

        {/* Hero */}
        <section style={{ paddingTop: 100, paddingBottom: 60, background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)", borderBottom: "1px solid #e5e7eb" }}>
          <div className="container hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <span className="section-label">Professionelle Servicequalität</span>
              <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.1, color: "#111827", marginBottom: 24 }}>Moderne Buchhaltung für Ihr Unternehmen</h1>
              <p className="sub" style={{ marginTop: 16, marginBottom: 32 }}>Von der Lohnbuchhaltung bis zum Mahnwesen – wir kümmern uns um alle administrativen und buchhalterischen Aufgaben, damit Sie sich auf Ihr Geschäft konzentrieren können.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn" href="#kontakt">Kostenlose Beratung</Link>
                <Link className="btn-outline" href="#leistungen">Leistungen entdecken</Link>
              </div>
            </div>
            <div className="hide-mobile" style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 32 }}>
              <div style={{ color: "#9ca3af", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 20, textTransform: "uppercase" }}>LEISTUNGSÜBERSICHT</div>
              {services.slice(0, 5).map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1f2937", flexShrink: 0 }} />
                  <span style={{ color: "#374151", fontSize: 13, fontWeight: 500 }}>{s.title}</span>
                </div>
              ))}
              <Link className="btn" href="#kontakt" style={{ display: "block", textAlign: "center", marginTop: 24, padding: "12px", fontSize: 12 }}>Jetzt anfragen</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "white", borderBottom: "1px solid #f3f4f6" }}>
          <div className="container stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "60px 0" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card" style={{ borderRight: i < 3 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "#1f2937", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" style={{ padding: "100px 0" }}>
          <div className="container">
            <span className="section-label">Leistungen</span>
            <h2 className="title-lg">Umfassende Lösungen für Ihr Unternehmen</h2>
            <p className="sub" style={{ maxWidth: 600, marginTop: 16 }}>Von der laufenden Buchführung bis zur Kostenrechnung – entdecken Sie all unsere modernen Services.</p>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 48 }}>
              {services.map((s, i) => (
                <Link key={s.id} href={`/leistungen/${s.id}`} id={`card-${s.id}`} data-animate="true" className={`service-card animate-in${visibleCards.has(`card-${s.id}`) ? " visible" : ""}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{s.title}</h3>
                  <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.shortTitle}</div>
                  <p className="sub" style={{ fontSize: 13 }}>{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="ablauf" style={{ padding: "100px 0", background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div className="container process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="section-label">So funktioniert es</span>
              <h2 className="title-lg">Ihr Weg zu uns</h2>
              <p className="sub" style={{ marginTop: 16, marginBottom: 40 }}>In wenigen Schritten zur professionellen Betreuung – unkompliziert, transparent und ohne Risiko.</p>
              <a className="btn" href="#kontakt">Jetzt starten</a>
            </div>
            <div>
              {[
                { n: "01", title: "Kostenlose Erstberatung", desc: "Wir lernen Ihr Unternehmen kennen und besprechen Ihre Anforderungen – unverbindlich und ohne Kosten." },
                { n: "02", title: "Individuelles Angebot", desc: "Sie erhalten ein maßgeschneidertes Angebot, das exakt auf Ihre Bedürfnisse und Ihr Budget abgestimmt ist." },
                { n: "03", title: "Digitale Übergabe", desc: "Wir richten alle digitalen Prozesse ein und übernehmen nahtlos Ihre Buchhaltung und Administration." },
                { n: "04", title: "Laufende Betreuung", desc: "Sie haben jederzeit einen festen Ansprechpartner und profitieren von schnellen Reaktionszeiten." },
              ].map((step) => (
                <div className="process-step" key={step.n}>
                  <div className="step-number">{step.n}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{step.title}</div>
                    <p className="sub" style={{ fontSize: 13 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="ueberuns" style={{ padding: "100px 0" }}>
          <div className="container about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span className="section-label">Über Uns</span>
              <h2 className="title-lg">Ihr verlässlicher Partner für Buchhaltung</h2>
              <p className="sub" style={{ marginTop: 20 }}>Wir sind spezialisiert auf professionelle Bürodienstleistungen und moderne Buchhaltungsprozesse für Selbstständige, Freiberufler und kleine bis mittelständische Unternehmen.</p>
              <p className="sub" style={{ marginTop: 16 }}>Durch effiziente, digitale Abläufe schaffen wir klare Strukturen, reduzieren Ihren administrativen Aufwand und ermöglichen Ihnen eine sichere, skalierbare Basis für Ihr Wachstum.</p>
              <p className="sub" style={{ marginTop: 16 }}>Persönliche Betreuung, schnelle Kommunikation und modernste digitale Prozesse stehen im Mittelpunkt unserer Arbeit.</p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn" href="#kontakt">Kontakt aufnehmen</a>
                <a className="btn-outline" href="#leistungen">Leistungen ansehen</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "🎯", title: "Präzision & Zuverlässigkeit", desc: "Jede Aufgabe wird sorgfältig, fristgerecht und mit höchster Sorgfalt erledigt." },
                { icon: "💻", title: "100% Digital", desc: "Vollständig digitale Prozesse für maximale Effizienz, Flexibilität und Transparenz." },
                { icon: "🔒", title: "DSGVO-Konformität", desc: "Ihre Daten und Unterlagen werden streng vertraulich und nach DSGVO behandelt." },
              ].map((item) => (
                <div key={item.title} className="card" style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#f9fafb", border: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4, fontSize: 14 }}>{item.title}</div>
                    <p className="sub" style={{ fontSize: 13 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" style={{ padding: "100px 0", background: "#1f2937", color: "white" }}>
          <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", maxWidth: 1000 }}>
            <div>
              <h2 className="title-lg" style={{ color: "white", marginBottom: 24 }}>Lassen Sie sich beraten</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung. Unser Team antwortet innerhalb von 24 Stunden.</p>
              <div style={{ background: "rgba(255,255,255,0.08)", padding: 20, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.7, marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>E-MAIL</div>
                <a href="mailto:info@taxalis-consulting.de" style={{ fontSize: 15, fontWeight: 600, color: "white", textDecoration: "none", display: "block", marginBottom: 20, transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>info@taxalis-consulting.de</a>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <input type="text" name="name" placeholder="Ihr Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <input type="email" name="email" placeholder="E-Mail-Adresse" value={formData.email} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <input type="text" name="company" placeholder="Ihr Unternehmen" value={formData.company} onChange={handleChange} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">-- Welche Leistung interessiert Sie? --</option>
                  {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 20 }}>
                <textarea name="message" placeholder="Ihre Nachricht..." value={formData.message} onChange={handleChange} rows={4} />
              </div>
              {sent && <div style={{ color: "#86efac", marginBottom: 16, fontWeight: 600, fontSize: 13 }}>✓ Danke! Wir melden uns bald bei Ihnen.</div>}
              {error && <div style={{ color: "#fca5a5", marginBottom: 16, fontWeight: 600, fontSize: 13 }}>✗ Fehler beim Versenden. Versuchen Sie es später.</div>}
              <button type="submit" className="btn-white" disabled={loading} style={{ width: "100%", textAlign: "center", padding: "12px" }}>
                {loading ? "Wird gesendet..." : "Jetzt anfragen"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
