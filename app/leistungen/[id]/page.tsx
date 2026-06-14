"use client";

import { useEffect, useState } from "react";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";
import { getServiceById } from "@/app/lib/services";
import { useParams } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const id = params?.id as string;
  const service = id ? getServiceById(id) : null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!service) {
    return (
      <>
        <Nav />
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "12px" }}>Seite nicht gefunden</h1>
            <p style={{ color: "#6b7280", marginBottom: "24px" }}>Die gewünschte Leistung existiert nicht.</p>
            <a href="/" style={{ background: "#10b981", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", display: "inline-block" }}>Zurück zur Startseite</a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: "#111827" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          .hero { background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 100px 24px 80px; }
          .hero h1 { font-size: 52px; font-weight: 700; margin: 24px 0 16px; color: #111827; }
          .hero .tagline { font-size: 20px; color: #6b7280; margin-bottom: 32px; }
          .container { max-width: 1000px; margin: 0 auto; }
          .section { padding: 80px 24px; }
          .section h2 { font-size: 32px; font-weight: 600; margin-bottom: 48px; color: #111827; }
          .section p { color: #4b5563; line-height: 1.8; margin-bottom: 24px; }
          .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 60px; }
          .benefit-card { background: #f9fafb; padding: 32px; border-radius: 12px; border: 1px solid #e5e7eb; transition: all 0.3s; }
          .benefit-card:hover { background: #ecfdf5; border-color: #a7f3d0; transform: translateY(-2px); }
          .benefit-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: #111827; }
          .benefit-card p { font-size: 14px; color: #6b7280; }
          .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
          .feature-item { background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 3px solid #10b981; }
          .feature-item h4 { font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 4px; }
          .feature-item p { font-size: 12px; color: #9ca3af; }
          .steps { max-width: 800px; margin: 0 auto; }
          .step { display: flex; gap: 24px; margin-bottom: 40px; align-items: flex-start; }
          .step-number { background: #10b981; color: white; width: 50px; height: 50px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 20px; flex-shrink: 0; }
          .step-content h4 { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: #111827; }
          .step-content p { font-size: 14px; color: #6b7280; line-height: 1.6; }
          .cta-box { background: #0f172a; color: white; padding: 80px 24px; text-align: center; }
          .cta-box h2 { font-size: 40px; font-weight: 600; margin-bottom: 16px; }
          .cta-box p { font-size: 18px; margin-bottom: 40px; opacity: 0.9; }
          .btn { background: #10b981; color: white; padding: 14px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-block; transition: all 0.3s; border: none; cursor: pointer; }
          .btn:hover { background: #059669; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(16,185,129,0.25); }
          .btn-outline { background: transparent; color: white; border: 2px solid white; padding: 12px 30px; }
          .btn-outline:hover { background: #0f172a; color: white; }
          .breadcrumb { color: #9ca3af; margin-bottom: 32px; }
          .breadcrumb a { color: #6b7280; text-decoration: none; }
          @media(max-width: 768px) {
            .hero h1 { font-size: 36px; }
            .section h2 { font-size: 24px; }
            .step { gap: 16px; }
            .cta-box h2 { font-size: 28px; }
          }
        `}</style>

        {/* Hero */}
        <div className="hero">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">Startseite</a> / {service.title}
            </div>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <Icon name={service.icon} size={32} strokeWidth={1.6} />
            </div>
            <h1>{service.title}</h1>
            <p className="tagline">{service.tagline}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a className="btn" href="/#kontakt">Jetzt anfragen</a>
              <a className="btn btn-outline" href="#details" style={{ background: "transparent", color: "#0f172a", border: "2px solid #0f172a" }}>Mehr erfahren</a>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="section" style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div className="container">
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151" }}>{service.longDescription}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="section" id="details">
          <div className="container">
            <h2>Was Sie gewinnen</h2>
            <div className="benefits-grid">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="benefit-card">
                  <h3><span style={{ color: "#10b981" }}>✓</span> {benefit.split(" ").slice(0, 3).join(" ")}</h3>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="section" style={{ background: "#f9fafb" }}>
          <div className="container">
            <h2>Leistungsmerkmale</h2>
            <div className="features-grid">
              {service.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <h4>{feature}</h4>
                  <p>In vollem Umfang enthalten</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="section">
          <div className="container">
            <h2>Ablauf & Prozess</h2>
            <div className="steps">
              {service.processSteps.map((step, i) => (
                <div key={i} className="step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h4>{step}</h4>
                    <p>Wir kümmern uns systematisch um jeden Schritt des Prozesses, damit Sie maximale Effizienz gewinnen.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <div className="container">
            <h2>Bereit zu starten?</h2>
            <p>Lassen Sie sich von unserem Team kostenlos beraten und erfahren Sie, wie wir Ihr Unternehmen unterstützen können.</p>
            <a className="btn" href="/#kontakt">{service.cta}</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
