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
    { href: "/leistungen/lohnbuchhaltung", label: "Lohnbuchhaltung" },
    { href: "/leistungen/buchhaltung", label: "Buchhaltung" },
    { href: "/leistungen/bueroservice", label: "Büroservice & Unternehmensberatung" },
    { href: "/leistungen/jahresabschluesse", label: "Jahresabschluss-Vorbereitung" },
  ];

  const branchen = [
    { href: "/loesungen/pflegedienst", label: "Pflegedienste" },
    { href: "/loesungen/sicherheitsdienst", label: "Sicherheitsunternehmen" },
    { href: "/loesungen/logistik", label: "Logistikbetriebe" },
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
        <div className="mobile-section">Für Ihre Branche</div>
        {branchen.map(l => <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>)}
        <div className="mobile-section">Unternehmen</div>
        <Link href="/lohnbuero-wechseln" onClick={() => setMenuOpen(false)}>Lohnbüro wechseln</Link>
        <Link href="/preise" onClick={() => setMenuOpen(false)}>Preise</Link>
        <Link href="/ueber-uns" onClick={() => setMenuOpen(false)}>Über Uns</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        <Link href="/#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        <Link href="/impressum" onClick={() => setMenuOpen(false)}>Impressum</Link>
        <Link href="/datenschutz" onClick={() => setMenuOpen(false)}>Datenschutz</Link>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" href="/#kontakt" onClick={() => setMenuOpen(false)} style={{ display: "block", textAlign: "center", padding: "12px" }}>Jetzt anfragen</Link>
        </div>
      </div>

      <nav style={{ position: "fixed", top: 0, width: "100%", background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb", zIndex: 97, transition: "all 0.3s ease" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", height: 92, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}><Image src="/logo.png" style={{ height: 80, width: "auto" }} alt="Taxalis Logo" width={109} height={80} priority /></Link>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <Link className="nav-link" href="/">Start</Link>
            <div className="nav-dropdown" onMouseEnter={openLeistungen} onMouseLeave={closeLeistungen}>
              <button className="nav-link" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                Leistungen <span style={{ fontSize: 10 }}>▼</span>
              </button>
              {leistungenOpen && (
                <div className="nav-dropdown-menu">
                  {leistungen.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                  <div style={{height:1,background:'#e5e7eb',margin:'6px 8px'}} />
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#9ca3af',padding:'6px 14px 2px'}}>Für Ihre Branche</div>
                  {branchen.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                  <div style={{height:1,background:'#e5e7eb',margin:'6px 8px'}} />
                  <Link href="/lohnbuero-wechseln" style={{fontWeight:600}}>Lohnbüro wechseln →</Link>
                </div>
              )}
            </div>
            <Link className="nav-link" href="/preise">Preise</Link>
            <Link className="nav-link" href="/ueber-uns">Über Uns</Link>
            <Link className="nav-link" href="/blog">Blog</Link>
            <Link className="nav-link" href="/faq">FAQ</Link>
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
  const leistungen = [
    { label: "Lohnbuchhaltung", href: "/leistungen/lohnbuchhaltung" },
    { label: "Buchhaltung", href: "/leistungen/buchhaltung" },
    { label: "Büroservice", href: "/leistungen/bueroservice" },
    { label: "Jahresabschluss-Vorbereitung", href: "/leistungen/jahresabschluesse" },
  ];
  const branchenFooter = [
    { label: "Pflegedienste", href: "/loesungen/pflegedienst" },
    { label: "Sicherheitsunternehmen", href: "/loesungen/sicherheitsdienst" },
    { label: "Logistikbetriebe", href: "/loesungen/logistik" },
  ];
  const seiten = [
    { label: "Preise", href: "/preise" },
    { label: "Lohnbüro wechseln", href: "/lohnbuero-wechseln" },
    { label: "Über Uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">

          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Taxalis Consulting" width={87} height={64} className="mb-4 h-14 w-auto brightness-0 invert" />
            <p className="max-w-[240px] text-sm leading-relaxed text-white/50">
              Professioneller Buchhaltungsservice für moderne Unternehmen in Berlin — digital, diskret, persönlich.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["DSGVO-konform", "§ 6 StBerG", "5,0 ★ Google"].map((b) => (
                <span key={b} className="rounded-md bg-white/[0.07] px-2.5 py-1 text-[11px] font-semibold text-white/60">{b}</span>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/35">Leistungen</div>
            <ul className="space-y-2.5">
              {leistungen.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-emerald-400">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mb-3 mt-5 text-[11px] font-semibold uppercase tracking-widest text-white/35">Branchen</div>
            <ul className="space-y-2.5">
              {branchenFooter.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-emerald-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/35">Unternehmen</div>
            <ul className="space-y-2.5">
              {seiten.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-emerald-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adresse & Kontakt */}
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/35">Adresse & Kontakt</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <a href="https://maps.google.com/?q=Wilmersdorfer+Str.+122-123,+10627+Berlin" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-white/70 transition-colors hover:text-emerald-400">
                  Wilmersdorfer Str. 122–123<br />10627 Berlin
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex-shrink-0 text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href="mailto:info@taxalis-consulting.de" className="text-sm text-white/70 transition-colors hover:text-emerald-400">info@taxalis-consulting.de</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex-shrink-0 text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l1.65-1.65a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href="tel:+4917683151339" className="text-sm text-white/70 transition-colors hover:text-emerald-400">0176 83151339</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex-shrink-0 text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span className="text-sm text-white/55">Mo – Fr, 08:00 – 20:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
          <span className="text-xs text-white/30">© {new Date().getFullYear()} Taxalis Consulting. Alle Rechte vorbehalten.</span>
          <span className="text-xs text-white/30">Einzelunternehmen · Berlin, Deutschland</span>
        </div>

      </div>
    </footer>
  );
}
