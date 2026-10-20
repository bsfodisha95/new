"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { useState } from "react";

export default function CompliancePage() {
  const [hoveredLic, setHoveredLic] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);

  // Helper function to render either an <img> or standard Emoji/Text
  const renderIcon = (icon, altText = "icon", size = 24) => {
    if (typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http"))) {
      return (
        <img
          src={icon}
          alt={altText}
          style={{ width: `${size}px`, height: `${size}px`, objectFit: "contain" }}
        />
      );
    }
    return <span>{icon}</span>;
  };

  const licenses = [
    {
      icon: "/india.png", 
      title: "PSARA License",
      issuer: "Ministry of Home Affairs, Govt. of India",
      desc: "Private Security Agencies Regulation Act license — the primary requirement for any legal security agency in India. Valid across all our operating states.",
      tags: ["Jharkhand", "West Bengal", "Bihar", "Odisha", "Delhi"],
      color: "#2A6EBB",
      lightColor: "#EFF6FF",
      badge: "Primary License",
      heroImage: "/Compliance.jpg",
    },
    {
      icon: "/iso.png",
      title: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      desc: "Internationally recognized quality management system certification. Ensures our processes, training and service delivery meet global quality standards consistently.",
      tags: ["Quality Management", "Process Compliance", "Customer Satisfaction", "Continuous Improvement"],
      color: "#065F46",
      lightColor: "#ECFDF5",
      badge: "International",
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      icon: "/gst.png",
      title: "GST Registration",
      issuer: "Goods & Services Tax Network, Govt. of India",
      desc: "Valid GST registration for transparent and compliant billing across India. All invoices are GST compliant making vendor empanelment smooth for your accounts team.",
      tags: ["Pan India Billing", "Input Tax Credit", "Compliant Invoicing", "E-Invoice Ready"],
      color: "#7C3AED",
      lightColor: "#F5F3FF",
      badge: "Tax Compliant",
      heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    },
    {
      icon: "/EPFO-Color.png",
      title: "PF Registration",
      issuer: "Employees Provident Fund Organisation",
      desc: "All deployed security personnel are registered under Provident Fund. We maintain full PF compliance ensuring your vendor audit requirements are always met.",
      tags: ["All Guards Covered", "Monthly Deposits", "ECR Filing", "UAN Generation"],
      color: "#B45309",
      lightColor: "#FFF7ED",
      badge: "Employee Benefit",
      heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    },
    {
      icon: "/ESIC-Color.png",
      title: "ESIC Registration",
      issuer: "Employees State Insurance Corporation",
      desc: "Employees State Insurance coverage for all eligible security personnel. Full medical and insurance benefits maintained as per all statutory requirements.",
      tags: ["Medical Coverage", "Monthly Contributions", "Accident Benefits", "Return Filing"],
      color: "#BE185D",
      lightColor: "#FDF2F8",
      badge: "Medical Cover",
      heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    },
    {
      icon: "/law.png",
      title: "Labour Law Compliance",
      issuer: "Ministry of Labour & Employment",
      desc: "Full compliance with Contract Labour Act, Minimum Wages Act, Payment of Wages Act and all applicable state labour laws across our operations.",
      tags: ["Contract Labour Act", "Minimum Wages Act", "Payment of Wages", "Gratuity Act"],
      color: "#0891B2",
      lightColor: "#ECFEFF",
      badge: "Labour Laws",
      heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    },
  ];

  const whyMatters = [
    { icon: "⚡", title: "Fast Empanelment", desc: "All compliances in order means your procurement team can empanel us quickly without back-and-forth.", color: "#2A6EBB", lightColor: "#EFF6FF" },
    { icon: "🔒", title: "Zero Legal Risk", desc: "Hiring a non-compliant agency exposes you to legal liability. We eliminate that risk completely.", color: "#065F46", lightColor: "#ECFDF5" },
    { icon: "📊", title: "Audit Ready", desc: "All documents available for vendor audits instantly. We maintain digital records of every compliance.", color: "#7C3AED", lightColor: "#F5F3FF" },
    { icon: "🤝", title: "PSU Approved", desc: "Our compliance profile meets the requirements of PSUs, government bodies and large corporates.", color: "#B45309", lightColor: "#FFF7ED" },
  ];

  const stats = [
    { num: "6+", label: "Active Licenses", icon: "/india.png", color: "#2A6EBB", lightColor: "#EFF6FF" },
    { num: "5+", label: "States PSARA", icon: "/globe.svg", color: "#065F46", lightColor: "#ECFDF5" },
    { num: "100%", label: "PF/ESI Covered", icon: "/EPFO-Color.png", color: "#7C3AED", lightColor: "#F5F3FF" },
    { num: "0", label: "Compliance Lapses", icon: "/law.png", color: "#BE185D", lightColor: "#FDF2F8" },
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes scanLine {
          0% { top: 0; opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Hero */
        .comp-hero { padding-top: 70px; background: #fff; }
        .comp-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 85vh; align-items: stretch;
        }
        .comp-hero-img {
          position: relative; overflow: hidden;
          background: #0D1B2A; min-height: 460px;
          animation: fadeSlideRight 0.8s ease both;
        }
        .comp-hero-img img.bg-img {
          width: 100%; height: 100%;
          object-fit: cover; opacity: 0.55;
        }
        .comp-hero-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0D1B2Acc 0%, #2A6EBB55 100%);
        }
        .comp-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, #2A6EBB, transparent);
          animation: scanLine 3s ease-in-out 0.8s 1;
          z-index: 2;
        }
        .comp-hero-content {
          padding: 60px 56px;
          display: flex; flex-direction: column; justify-content: center;
          animation: fadeSlideLeft 0.8s ease 0.2s both;
        }
        .comp-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 20px; }

        /* Stats */
        .comp-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
        .comp-stat-card {
          padding: 20px; border-radius: 12px; border: 1px solid #E5E7EB;
          transition: all 0.25s ease; cursor: default;
        }
        .comp-stat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

        /* Licenses */
        .comp-licenses { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .comp-licenses-inner { max-width: 1280px; margin: 0 auto; }
        .comp-licenses-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        /* License card */
        .comp-lic-card {
          border-radius: 16px; overflow: hidden;
          border: 1.5px solid #E5E7EB;
          background: #fff;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
          display: flex; flex-direction: column;
          animation: fadeSlideUp 0.5s ease both;
        }
        .comp-lic-img {
          height: 140px; overflow: hidden;
          position: relative; flex-shrink: 0;
        }
        .comp-lic-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .comp-lic-img-overlay {
          position: absolute; inset: 0;
          transition: all 0.35s ease;
        }
        .comp-lic-body {
          padding: 22px; flex: 1;
          display: flex; flex-direction: column;
          transition: background 0.35s ease;
        }
        .comp-lic-icon-row {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
        }
        .comp-lic-icon-box {
          width: 44px; height: 44px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .comp-lic-title { font-size: 16px; font-weight: 800; color: #0D1B2A; transition: color 0.3s ease; }
        .comp-lic-issuer { font-size: 11px; color: #9CA3AF; margin-top: 2px; }
        .comp-lic-desc { font-size: 12px; color: #6B7280; line-height: 1.7; margin-bottom: 14px; flex: 1; transition: color 0.3s ease; }
        .comp-lic-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .comp-lic-tag {
          font-size: 10px; font-weight: 600; padding: 3px 10px;
          border-radius: 100px; border: 1px solid;
          transition: all 0.25s ease;
        }

        /* Why matters */
        .comp-why { padding: 100px 40px; background: #fff; border-top: 1px solid #E5E7EB; }
        .comp-why-inner { max-width: 1280px; margin: 0 auto; }
        .comp-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .comp-why-card {
          border-radius: 16px; padding: 28px;
          border: 1.5px solid #E5E7EB; background: #fff;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: default; position: relative; overflow: hidden;
        }

        /* Doc request */
        .comp-doc { padding: 80px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .comp-doc-inner { max-width: 1280px; margin: 0 auto; }
        .comp-doc-banner {
          background: #0D1B2A; border-radius: 16px; padding: 56px;
          display: grid; grid-template-columns: 1fr auto;
          gap: 40px; align-items: center;
        }

        /* Section header */
        .comp-section-tag { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .comp-section-h2 { font-size: 40px; font-weight: 900; color: #0D1B2A; letter-spacing: -0.5px; margin-bottom: 8px; }
        .comp-section-sub { font-size: 15px; color: #9CA3AF; margin-bottom: 52px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .comp-hero-inner { grid-template-columns: 1fr; }
          .comp-hero-img { min-height: 300px; }
          .comp-hero-content { padding: 40px 32px; }
          .comp-hero-h1 { font-size: 36px; }
          .comp-licenses { padding: 80px 24px; }
          .comp-licenses-grid { grid-template-columns: repeat(2, 1fr); }
          .comp-why { padding: 80px 24px; }
          .comp-why-grid { grid-template-columns: repeat(2, 1fr); }
          .comp-doc { padding: 60px 24px; }
        }
        @media (max-width: 768px) {
          .comp-hero-img { min-height: 240px; }
          .comp-hero-content { padding: 28px 20px; }
          .comp-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .comp-stats-grid { grid-template-columns: 1fr 1fr; }
          .comp-licenses { padding: 60px 16px; }
          .comp-licenses-grid { grid-template-columns: 1fr; }
          .comp-why { padding: 60px 16px; }
          .comp-why-grid { grid-template-columns: 1fr 1fr; }
          .comp-doc { padding: 48px 16px; }
          .comp-doc-banner { grid-template-columns: 1fr; padding: 32px; }
          .comp-section-h2 { font-size: 28px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="comp-hero">
        <div className="comp-hero-inner">

          {/* Left Image */}
          <div className="comp-hero-img">
            <img className="bg-img" src="/Compliance.jpg" alt="Legal compliance documents" />
            <div className="comp-hero-img-overlay" />
            <div className="comp-scan" />

            {/* Floating compliance badges */}
            <div style={{ position: "absolute", bottom: "24px", left: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: "/india.png", label: "PSARA Licensed", delay: "0.5s" },
                { icon: "/iso.png", label: "ISO 9001:2015", delay: "0.65s" },
                { icon: "/EPFO-Color.png", label: "PF & ESI Covered", delay: "0.8s" },
              ].map((b) => (
                <div key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 16px", borderRadius: "100px", animation: `fadeSlideUp 0.6s ease ${b.delay} both` }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {renderIcon(b.icon, b.label, 18)}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", letterSpacing: "0.3px" }}>{b.label}</span>
                  <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="comp-hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EFF6FF", border: "1px solid #BFDBFE", padding: "5px 12px", borderRadius: "100px", marginBottom: "20px" }}>
              <div style={{ width: "5px", height: "5px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>All Licenses Active & Valid</span>
            </div>

            <h1 className="comp-hero-h1">
              Every License.<br />
              Every Compliance.<br />
              <span style={{ color: "#2A6EBB" }}>Always Valid.</span>
            </h1>

            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "16px" }}>
              Every certificate is maintained, renewed on time and available for your vendor audit instantly. We make empanelment easy for your procurement and legal teams.
            </p>

            <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.7, marginBottom: "28px" }}>
              Compliant with PSARA, ISO 9001:2015, GST, PF, ESI, Contract Labour Act and all applicable state labour laws.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <Link href="/contact"
                style={{ background: "#2A6EBB", color: "#fff", padding: "13px 24px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Request Documents
              </Link>
              <a href="tel:+917064015397"
                style={{ border: "1.5px solid #E5E7EB", color: "#0D1B2A", padding: "13px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", textDecoration: "none" }}>
                📞 Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="comp-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="comp-stat-card"
                  style={{ background: s.lightColor, borderColor: `${s.color}20` }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px", display: "flex", alignItems: "center" }}>
                    {renderIcon(s.icon, s.label, 22)}
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LICENSES GRID ── */}
      <section className="comp-licenses">
        <div className="comp-licenses-inner">
          <div className="comp-section-tag">
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Certifications</span>
          </div>
          <h2 className="comp-section-h2">Licenses & Registrations</h2>
          <p className="comp-section-sub">Every certificate maintained, renewed and audit-ready at all times</p>

          <div className="comp-licenses-grid">
            {licenses.map((lic, i) => {
              const isHov = hoveredLic === i;
              return (
                <div key={lic.title} className="comp-lic-card"
                  onMouseEnter={() => setHoveredLic(i)}
                  onMouseLeave={() => setHoveredLic(null)}
                  style={{
                    animationDelay: `${i * 0.07}s`,
                    borderColor: isHov ? lic.color : "#E5E7EB",
                    boxShadow: isHov ? `0 20px 40px ${lic.color}22` : "0 1px 4px rgba(0,0,0,0.04)",
                    transform: isHov ? "translateY(-8px)" : "translateY(0)",
                  }}>

                  {/* Image */}
                  <div className="comp-lic-img">
                    <img src={lic.heroImage} alt={lic.title}
                      style={{ transform: isHov ? "scale(1.08)" : "scale(1)" }} />
                    <div className="comp-lic-img-overlay"
                      style={{ background: isHov ? `${lic.color}BB` : "rgba(13,27,42,0.5)" }} />

                    {/* Top bar */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: lic.color, transform: isHov ? "scaleX(1)" : "scaleX(0.3)", transformOrigin: "left", transition: "transform 0.4s ease" }} />

                    {/* Badge */}
                    <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", letterSpacing: "1px" }}>
                      {lic.badge}
                    </div>

                    {/* Valid indicator */}
                    <div style={{ position: "absolute", bottom: "12px", left: "12px", display: "flex", alignItems: "center", gap: "6px", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", padding: "5px 10px", borderRadius: "100px" }}>
                      <div style={{ width: "5px", height: "5px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
                      <span style={{ fontSize: "10px", color: "#fff", fontWeight: 600 }}>Currently Valid</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="comp-lic-body"
                    style={{ background: isHov ? lic.lightColor : "#fff" }}>

                    <div className="comp-lic-icon-row">
                      <div className="comp-lic-icon-box"
                        style={{ background: isHov ? lic.color : lic.lightColor }}>
                        {renderIcon(lic.icon, lic.title, 22)}
                      </div>
                      <div>
                        <div className="comp-lic-title"
                          style={{ color: isHov ? lic.color : "#0D1B2A" }}>
                          {lic.title}
                        </div>
                        <div className="comp-lic-issuer">{lic.issuer}</div>
                      </div>
                    </div>

                    <div style={{ height: "1px", background: isHov ? `${lic.color}25` : "#F3F4F6", margin: "12px 0" }} />

                    <div className="comp-lic-desc"
                      style={{ color: isHov ? "#374151" : "#6B7280" }}>
                      {lic.desc}
                    </div>

                    <div className="comp-lic-tags">
                      {lic.tags.map((t) => (
                        <span key={t} className="comp-lic-tag"
                          style={{
                            background: isHov ? `${lic.color}12` : "#F8FAFC",
                            borderColor: isHov ? `${lic.color}40` : "#E5E7EB",
                            color: isHov ? lic.color : "#6B7280",
                          }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY COMPLIANCE MATTERS ── */}
      <section className="comp-why">
        <div className="comp-why-inner">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Why It Matters</span>
              <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
            </div>
            <h2 className="comp-section-h2">Why Compliance Protects You</h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF" }}>What you gain when your security agency is fully compliant</p>
          </div>

          <div className="comp-why-grid">
            {whyMatters.map((w, i) => {
              const isHov = hoveredWhy === i;
              return (
                <div key={w.title} className="comp-why-card"
                  onMouseEnter={() => setHoveredWhy(i)}
                  onMouseLeave={() => setHoveredWhy(null)}
                  style={{
                    background: isHov ? w.lightColor : "#fff",
                    borderColor: isHov ? w.color : "#E5E7EB",
                    boxShadow: isHov ? `0 20px 40px ${w.color}18` : "0 1px 4px rgba(0,0,0,0.04)",
                    transform: isHov ? "translateY(-6px)" : "translateY(0)",
                  }}>

                  {/* Top bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: w.color, transform: isHov ? "scaleX(1)" : "scaleX(0.3)", transformOrigin: "left", transition: "transform 0.3s ease", borderRadius: "16px 16px 0 0" }} />

                  <div style={{ width: "52px", height: "52px", background: isHov ? w.color : w.lightColor, borderRadius: "14px", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "24px", marginBottom: "18px", transition: "all 0.3s ease", boxShadow: isHov ? `0 8px 20px ${w.color}30` : "none" }}>
                    {renderIcon(w.icon, w.title, 26)}
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: 800, color: isHov ? w.color : "#0D1B2A", marginBottom: "10px", transition: "color 0.3s ease" }}>{w.title}</div>
                  <div style={{ fontSize: "13px", color: isHov ? "#374151" : "#6B7280", lineHeight: 1.7, transition: "color 0.3s ease" }}>{w.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT REQUEST BANNER ── */}
      <section className="comp-doc">
        <div className="comp-doc-inner">
          <div className="comp-doc-banner">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(42,110,187,0.2)", border: "1px solid rgba(42,110,187,0.3)", padding: "5px 12px", borderRadius: "100px", marginBottom: "16px" }}>
                <div style={{ width: "5px", height: "5px", background: "#2A6EBB", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
                <span style={{ fontSize: "11px", color: "#93C5FD", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Instant Access</span>
              </div>
              <h3 style={{ fontSize: "28px", fontWeight: 900, color: "#fff", marginBottom: "12px", lineHeight: 1.2 }}>
                Need Our Compliance<br />Documents?
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "480px" }}>
                For vendor empanelment, audits or procurement — request our complete compliance document pack. PSARA certificates, ISO certificate, GST, PF, ESI and all registrations — delivered instantly.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
              <Link href="/contact"
                style={{ background: "#2A6EBB", color: "#fff", padding: "15px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", textAlign: "center", whiteSpace: "nowrap" }}>
                Request Documents
              </Link>
              <a href="tel:+917064015397"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "13px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", textDecoration: "none", textAlign: "center" }}>
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}