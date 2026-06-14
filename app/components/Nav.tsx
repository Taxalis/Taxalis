"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openLeistungen = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setLeistungenOpen(true);
  };

  const closeLeistungen = () => {
    closeTimerRef.current = setTimeout(() => {
      setLeistungenOpen(false);
    }, 180);
  };

  const leistungen = [
    { href: "/leistungen/bueroservice", label: "Büroservice" },
    { href: "/leistungen/lohnbuchhaltung", label: "Lohnbuchhaltung" },
    { href: "/leistungen/buchhaltung", label: "Buchhaltung" },
    { href: "/leistungen/buchfuehrung", label: "Buchführung" },
    { href: "/leistungen/vorbereitende-buchhaltung", label: "Vorbereitende Buchhaltung" },
    { href: "/leistungen/jahresabschluesse", label: "Vorbereitende Jahresabschlüsse" },
    { href: "/leistungen/mahnwesen", label: "Mahnwesen & Zahlungsverkehr" },
    { href: "/leistungen/rechnungserstellung", label: "Rechnungserstellung" },
    { href: "/leistungen/kostenrechnung", label: "Kosten- & Leistungsrechnung" },
  ];

  return (
    <>
      <style>{`
        .nav-dropdown{position:relative;padding-bottom:12px;margin-bottom:-12px}
        .nav-dropdown-menu{
          position:absolute;top:100%;left:50%;transform:translateX(-50%);
          background:white;border-radius:8px;padding:8px;
          box-shadow:0 10px 30px rgba(0,0,0,0.1);border:1px solid #e5e7eb;
          min-width:280px;z-index:200;
          animation:fadeIn 0.2s ease;
        }
        @keyframes fadeIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        .nav-dropdown-menu a{
          display:block;padding:10px 14px;border-radius:6px;font-size:13px;
          color:#374151;font-weight:500;transition:all 0.15s;
        }
        .nav-dropdown-menu a:hover{background:#ecfdf5;color:#059669}
        .mobile-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:98;opacity:0;pointer-events:none;transition:opacity 0.3s;}
        .mobile-overlay.open{opacity:1;pointer-events:all}
        .mobile-menu{position:fixed;top:0;right:-320px;width:300px;height:100vh;background:white;z-index:99;padding:80px 24px 32px;display:flex;flex-direction:column;gap:4px;transition:right 0.35s cubic-bezier(0.4,0,0.2,1);box-shadow:-20px 0 60px rgba(0,0,0,0.15);overflow-y:auto;}
        .mobile-menu.open{right:0}
        .mobile-menu a{padding:12px 14px;border-radius:6px;font-size:13px;font-weight:500;color:#111827;display:block;transition:all 0.2s;}
        .mobile-menu a:hover{background:#ecfdf5;color:#059669}
        .mobile-section{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;padding:16px 14px 8px;}
        .hamburger{width:40px;height:40px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;cursor:pointer;background:none;border:1.5px solid #e5e7eb;border-radius:6px;padding:8px;transition:all 0.2s;}
        .hamburger:hover{border-color:#10b981}
        .hamburger span{display:block;width:18px;height:2px;background:#374151;border-radius:2px;transition:all 0.3s;}
        .nav-link{color:#374151;font-size:13px;font-weight:500;padding:8px 12px;border-radius:6px;transition:all 0.2s;cursor:pointer;background:none;border:none;}
        .nav-link:hover{color:#059669;background:#ecfdf5}
        .btn{background:#10b981;color:white;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:600;transition:all 0.3s;display:inline-block;border:none;cursor:pointer;}
        .btn:hover{background:#059669;transform:translateY(-1px)}
        @media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:flex!important}}
        @media(min-width:769px){.hamburger{display:none!important}}
      `}</style>

      <div className={`mobile-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Startseite</Link>
        <div className="mobile-section">Leistungen</div>
        {leistungen.map(l => <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>)}
        <div className="mobile-section">Unternehmen</div>
        <Link href="/#ueberuns" onClick={() => setMenuOpen(false)}>Über Uns</Link>
        <Link href="/#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        <Link href="/impressum" onClick={() => setMenuOpen(false)}>Impressum</Link>
        <Link href="/datenschutz" onClick={() => setMenuOpen(false)}>Datenschutz</Link>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" href="/#kontakt" onClick={() => setMenuOpen(false)} style={{ display: "block", textAlign: "center", padding: "12px" }}>Jetzt anfragen</Link>
        </div>
      </div>

      <nav style={{ position: "fixed", top: 0, width: "100%", background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb", zIndex: 97, transition: "all 0.3s ease" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", height: 72, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}><Image src="/logo.png" style={{ height: 60, width: "auto" }} alt="Taxalis Logo" width={100} height={60} priority /></Link>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <Link className="nav-link" href="/">Start</Link>
            <div className="nav-dropdown" onMouseEnter={openLeistungen} onMouseLeave={closeLeistungen}>
              <button className="nav-link" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                Leistungen <span style={{ fontSize: 10 }}>▼</span>
              </button>
              {leistungenOpen && (
                <div className="nav-dropdown-menu">
                  {leistungen.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                </div>
              )}
            </div>
            <Link className="nav-link" href="/#ueberuns">Über Uns</Link>
            <Link className="nav-link" href="/#kontakt">Kontakt</Link>
            <div style={{ width: 1, height: 20, background: "#e5e7eb", margin: "0 8px" }} />
            <Link className="btn" href="/#kontakt">Jetzt anfragen</Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span style={menuOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
          </button>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  const leistungen = ["Büroservice", "Lohnbuchhaltung", "Buchhaltung", "Buchführung", "Vorbereitende Buchhaltung", "Jahresabschlüsse", "Mahnwesen", "Rechnungserstellung", "Kostenrechnung"];
  const hrefs = ["/leistungen/bueroservice", "/leistungen/lohnbuchhaltung", "/leistungen/buchhaltung", "/leistungen/buchfuehrung", "/leistungen/vorbereitende-buchhaltung", "/leistungen/jahresabschluesse", "/leistungen/mahnwesen", "/leistungen/rechnungserstellung", "/leistungen/kostenrechnung"];

  return (
    <footer style={{ background: "#0f172a", color: "white", padding: "60px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <Image src="/logo.png" style={{ height: 50, width: "auto", filter: "brightness(0) invert(1)", marginBottom: 16 }} alt="Taxalis" width={100} height={50} />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.8, maxWidth: 260 }}>Professioneller Büro- & Buchhaltungsservice für moderne Unternehmen in Berlin.</p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              {["DSGVO-konform", "Diskret", "Digital"].map(b => (
                <span key={b} style={{ background: "rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 4, fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Leistungen</div>
            {leistungen.map((l, i) => (
              <div key={l} style={{ marginBottom: 8 }}>
                <Link href={hrefs[i]} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, transition: "color 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#34d399")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>{l}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Kontakt</div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>E-MAIL</div>
              <a href="mailto:info@taxalis-consulting.de" style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#34d399")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>info@taxalis-consulting.de</a>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>TELEFON</div>
              <a href="tel:+4917683151339" style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#34d399")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>0176 83151339</a>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 4, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Seiten</div>
              {[{ label: "Startseite", href: "/" }, { label: "Impressum", href: "/impressum" }, { label: "Datenschutz", href: "/datenschutz" }].map(l => (
                <div key={l.label} style={{ marginBottom: 8 }}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, transition: "color 0.2s", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#34d399")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>{l.label}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>© {new Date().getFullYear()} Taxalis Consulting. Alle Rechte vorbehalten.</span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>Berlin, Deutschland</span>
        </div>
      </div>
    </footer>
  );
}
