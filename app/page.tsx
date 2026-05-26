"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", service: "" });
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(false);
    try {
      await emailjs.send(
        "taxalis-consulting",
        "template_lmciucl",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "57B00hw6VoqNwf_db"
      );
      setFormSent(true);
    } catch (error) {
      setFormError(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fff", color: "#111", overflowX: "hidden" }}>

      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --black: #0a0a0a; --white: #ffffff; --grey-light: #f5f5f5; --grey-mid: #e0e0e0; --grey-text: #888; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .sans { font-family: 'Outfit', sans-serif; }
        .nav-link { font-family: 'Outfit', sans-serif; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--grey-text); transition: color 0.2s; cursor: pointer; }
        .nav-link:hover { color: var(--black); }
        .btn-primary { display: inline-block; background: var(--black); color: var(--white); font-family: 'Outfit', sans-serif; font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; padding: 16px 40px; cursor: pointer; border: none; transition: opacity 0.2s; }
        .btn-primary:hover { opacity: 0.75; }
        .btn-ghost { display: inline-block; background: transparent; color: var(--black); font-family: 'Outfit', sans-serif; font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; padding: 15px 40px; border: 1px solid #ccc; cursor: pointer; transition: all 0.2s; }
        .btn-ghost:hover { border-color: var(--black); }
        .service-card { border: 1px solid var(--grey-mid); padding: 40px 36px; transition: border-color 0.3s, transform 0.3s; cursor: default; }
        .service-card:hover { border-color: var(--black); transform: translateY(-4px); }
        .fade-line { width: 40px; height: 1px; background: var(--black); margin-bottom: 24px; }
        input, textarea, select { width: 100%; border: none; border-bottom: 1px solid var(--grey-mid); padding: 12px 0; font-family: 'Outfit', sans-serif; font-size: 15px; color: var(--black); background: transparent; outline: none; transition: border-color 0.2s; }
        input:focus, textarea:focus, select:focus { border-bottom-color: var(--black); }
        select option { background: white; }
        label { font-family: 'Outfit', sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--grey-text); display: block; margin-bottom: 6px; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 52px !important; line-height: 1.1 !important; }
          .section-title { font-size: 48px !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>

      {/* ─── NAVIGATION ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--grey-mid)", padding: "0 40px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src="/logo.png" alt="Taxalis Consulting" style={{ height: "40px", width: "auto", objectFit: "contain" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, letterSpacing: "0.02em", lineHeight: 1.1 }}>Taxalis Consulting</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginTop: "1px" }}>Buchhaltung & Consulting</div>
          </div>
        </div>
        <div className="hide-mobile" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#leistungen" className="nav-link">Leistungen</a>
          <a href="#ueberuns" className="nav-link">Über uns</a>
          <a href="#kontakt" className="nav-link">Kontakt</a>
          <a href="#kontakt" className="btn-primary" style={{ padding: "10px 28px", fontSize: "12px" }}>Beratung buchen</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "22px" }} className="hide-desktop">☰</button>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: "72px", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }} className="hero-grid">
        <div style={{ padding: "100px 80px 100px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "32px" }}>
            Buchhaltung · Lohnabrechnung · Consulting
          </div>
          <h1 className="serif hero-title" style={{ fontSize: "72px", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: "32px" }}>
            Präzision.<br />
            Vertrauen.<br />
            <em style={{ fontStyle: "italic" }}>Exzellenz.</em>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#666", lineHeight: 1.8, maxWidth: "440px", marginBottom: "48px" }}>
            Taxalis Consulting steht für moderne, digitale Buchhaltung und Lohnabrechnung — zuverlässig, diskret und auf höchstem Niveau.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#kontakt" className="btn-primary">Kostenloses Erstgespräch</a>
            <a href="#leistungen" className="btn-ghost">Leistungen entdecken</a>
          </div>
          <div style={{ marginTop: "64px", display: "flex", gap: "48px" }}>
            {[["10+", "Jahre Erfahrung"], ["200+", "Zufriedene Kunden"], ["100%", "Digital & Sicher"]].map(([num, label]) => (
              <div key={num}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300 }}>{num}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#0a0a0a", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "40px", right: "60px", fontFamily: "'Cormorant Garamond', serif", fontSize: "120px", fontWeight: 300, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none" }}>TC</div>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "300px", height: "300px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "50%" }} />
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "32px", zIndex: 1 }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Standort</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>Wilmersdorfer Str. 122–123<br />10627 Berlin</div>
            <div style={{ marginTop: "24px", display: "flex", gap: "24px" }}>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "6px" }}>Telefon</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>017683151339</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "6px" }}>Öffnungszeiten</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>Mo–Fr, 08:00–20:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div style={{ background: "#0a0a0a", padding: "18px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} } .marquee-inner { display: inline-block; animation: marquee 20s linear infinite; }`}</style>
        <div className="marquee-inner">
          {Array(6).fill("Buchhaltung · Lohnabrechnung · Finanzplanung · Digitale Belege · Unternehmensberatung · Gründungsberatung · ").map((t, i) => (
            <span key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginRight: "0" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ─── LEISTUNGEN ─── */}
      <section id="leistungen" style={{ padding: "120px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", marginBottom: "80px" }} className="hero-grid">
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>Leistungen</div>
              <h2 className="serif section-title" style={{ fontSize: "56px", fontWeight: 300, lineHeight: 1.05 }}>
                Was wir<br /><em style={{ fontStyle: "italic" }}>für Sie</em><br />tun.
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px", color: "#666", lineHeight: 1.9, maxWidth: "520px" }}>
                Von der laufenden Buchhaltung bis zur Gründungsberatung — wir begleiten Ihr Unternehmen mit digitalen Prozessen und persönlicher Expertise.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--grey-mid)" }} className="services-grid">
            {[
              { title: "Laufende Buchhaltung", desc: "Monatliche Buchhaltung, Kontenabstimmung und digitale Belegverwaltung — präzise und termingerecht.", icon: "01" },
              { title: "Lohnabrechnung", desc: "Zuverlässige Lohn- und Gehaltsabrechnung für Ihr Team, inklusive Meldewesen und Behördenkommunikation.", icon: "02" },
              { title: "Digitale Belege", desc: "Papierlose Belegverwaltung mit modernen Cloud-Lösungen — Ihre Unterlagen sicher und jederzeit abrufbar.", icon: "03" },
              { title: "Finanzplanung", desc: "Budgetierung, Liquiditätsplanung und Finanzanalysen für fundierte Unternehmensentscheidungen.", icon: "04" },
              { title: "Unternehmensberatung", desc: "Strategische Beratung zu Prozessoptimierung, Struktur und Wachstum für nachhaltige Ergebnisse.", icon: "05" },
              { title: "Gründungsberatung", desc: "Begleitung bei der Unternehmensgründung — von der Rechtsform bis zur ersten Buchhaltung.", icon: "06" },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="service-card" style={{ background: "#fff" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "#bbb", marginBottom: "32px", letterSpacing: "0.1em" }}>{icon}</div>
                <div className="fade-line" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, marginBottom: "16px", letterSpacing: "0.01em" }}>{title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#777", lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueberuns" style={{ background: "#0a0a0a", padding: "120px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Über uns</div>
            <h2 className="serif" style={{ fontSize: "56px", fontWeight: 300, color: "rgba(255,255,255,0.95)", lineHeight: 1.05, marginBottom: "40px" }}>
              Wir denken<br /><em style={{ fontStyle: "italic" }}>Buchhaltung</em><br />neu.
            </h2>
            <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginBottom: "40px" }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: "24px" }}>
              Taxalis Consulting steht für moderne, digitale Buchhaltungsprozesse auf höchstem Niveau. Wir verbinden fundierte Fachkompetenz mit aktuellen Technologien.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
              Unser Fokus liegt auf langfristiger Zusammenarbeit, vollständiger Transparenz und der Entlastung unserer Mandanten — damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              ["Zuverlässigkeit", "Termine, Fristen und Zusagen — wir halten, was wir versprechen."],
              ["Diskretion", "Ihre Finanzdaten behandeln wir mit höchster Vertraulichkeit."],
              ["Digitalität", "Moderne Tools, papierlose Prozesse, volle Transparenz."],
              ["Persönlichkeit", "Ein fester Ansprechpartner für Ihr Unternehmen — immer erreichbar."],
            ].map(([title, text]) => (
              <div key={title} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "28px 0" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "rgba(255,255,255,0.85)", fontWeight: 400, marginBottom: "8px" }}>{title}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "120px 80px", background: "#fafafa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>Ablauf</div>
            <h2 className="serif section-title" style={{ fontSize: "56px", fontWeight: 300, lineHeight: 1.05 }}>So arbeiten <em style={{ fontStyle: "italic" }}>wir</em> zusammen.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }} className="services-grid">
            {[
              ["01", "Erstgespräch", "Kostenloses Kennenlernen — wir verstehen Ihre Situation und Bedürfnisse."],
              ["02", "Analyse", "Wir prüfen Ihre aktuelle Buchhaltungsstruktur und identifizieren Optimierungspotenzial."],
              ["03", "Konzept", "Individuelles Leistungspaket, klar kalkuliert und transparent kommuniziert."],
              ["04", "Umsetzung", "Nahtlose Übernahme Ihrer Buchhaltung — digital, zuverlässig, dauerhaft."],
            ].map(([num, title, text]) => (
              <div key={num} style={{ borderTop: "2px solid #0a0a0a", paddingTop: "32px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, color: "#e0e0e0", lineHeight: 1, marginBottom: "24px" }}>{num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, marginBottom: "12px" }}>{title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#777", lineHeight: 1.8 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" style={{ padding: "120px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="contact-grid">
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>Kontakt</div>
            <h2 className="serif section-title" style={{ fontSize: "56px", fontWeight: 300, lineHeight: 1.05, marginBottom: "40px" }}>
              Sprechen wir<br /><em style={{ fontStyle: "italic" }}>miteinander.</em>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#666", lineHeight: 1.9, marginBottom: "48px" }}>
              Vereinbaren Sie jetzt ein kostenloses Erstgespräch. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                ["Telefon", "017683151339"],
                ["E-Mail", "info@taxalis-consulting.de"],
                ["Adresse", "Wilmersdorfer Str. 122–123, 10627 Berlin"],
                ["Öffnungszeiten", "Montag – Freitag, 08:00 – 20:00 Uhr"],
              ].map(([label, value]) => (
                <div key={label} style={{ borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "6px" }}>{label}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#333" }}>{value}</div>
                </div>
              ))}
              <a href="https://wa.me/4917683151339" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "white", padding: "14px 28px", fontFamily: "'Outfit', sans-serif", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", width: "fit-content", marginTop: "8px", transition: "opacity 0.2s" }}>
                <span>WhatsApp schreiben</span>
              </a>
            </div>
          </div>
          <div>
            {formSent ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", background: "#fafafa", padding: "60px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", fontWeight: 300, marginBottom: "24px" }}>✓</div>
                <h3 className="serif" style={{ fontSize: "32px", fontWeight: 300, marginBottom: "16px" }}>Nachricht erhalten.</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#666", lineHeight: 1.8 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen. Vielen Dank für Ihr Vertrauen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label>Ihr Name</label>
                    <input type="text" required placeholder="Max Mustermann" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label>E-Mail-Adresse</label>
                    <input type="email" required placeholder="max@firma.de" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label>Telefon (optional)</label>
                    <input type="tel" placeholder="+49 ..." value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label>Gewünschte Leistung</label>
                    <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Bitte wählen ...</option>
                      <option>Laufende Buchhaltung</option>
                      <option>Lohnabrechnung</option>
                      <option>Digitale Belegverwaltung</option>
                      <option>Finanzplanung</option>
                      <option>Unternehmensberatung</option>
                      <option>Gründungsberatung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Ihre Nachricht</label>
                  <textarea rows={5} required placeholder="Beschreiben Sie kurz Ihr Anliegen ..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ resize: "none" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "8px", opacity: formLoading ? 0.6 : 1 }} disabled={formLoading}>
                  {formLoading ? "Wird gesendet ..." : "Nachricht senden"}
                </button>
                {formError && (
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#c00", marginTop: "8px" }}>
                    Fehler beim Senden. Bitte versucht es erneut oder schreibt uns direkt an info@taxalis-consulting.de
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0a0a0a", padding: "60px 80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "60px", marginBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "60px" }} className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <img src="/logo.png" alt="Taxalis" style={{ height: "32px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>Taxalis Consulting</div>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: 1.8, maxWidth: "320px" }}>Moderne Buchhaltung und Lohnabrechnung für Unternehmen in Berlin und digital deutschlandweit.</p>
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>Navigation</div>
              {["Leistungen", "Über uns", "Kontakt"].map(item => (
                <a key={item} href={`#${item === "Über uns" ? "ueberuns" : item.toLowerCase()}`} style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "12px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  {item}
                </a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>Rechtliches</div>
              {["Impressum", "Datenschutz"].map(item => (
                <a key={item} href={`/${item.toLowerCase()}`} style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "12px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Taxalis Consulting. Alle Rechte vorbehalten.</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>Berlin, Deutschland</div>
          </div>
        </div>
      </footer>

    </main>
  );
}
