"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const values = [
    { icon: "🛡️", title: "Integrity", color: "#2A6EBB", lightColor: "#EFF6FF", desc: "We operate with complete transparency and honesty in every engagement with clients, guards and partners." },
    { icon: "/reliability.png", title: "Reliability", color: "#065F46", lightColor: "#ECFDF5", desc: "24/7 operations, zero compromise on deployment schedules, and consistent service delivery every single day." },
    { icon: "/mission.png", title: "Excellence", color: "#7C3AED", lightColor: "#F5F3FF", desc: "Continuous training, performance monitoring and quality audits ensure we always deliver the highest standard." },
    { icon: "/trust.png", title: "Trust", color: "#B45309", lightColor: "#FFF7ED", desc: "Built over years of keeping our word. Our clients renew because we deliver what we promise every time." },
  ];

  const milestones = [
    { year: "2022", title: "Founded", desc: "Bhushan Security established in Jharsuguda, Odisha with a core team of dedicated professionals", icon: "/building.png" },
    { year: "2022", title: "PSARA Licensed", desc: "Obtained PSARA license, becoming a fully compliant and legally authorized security agency", icon: "/india.png" },
    { year: "2023", title: "ISO Certified", desc: "Achieved ISO 9001 certification for quality management systems and operations", icon: "/iso.png" },
    { year: "2023", title: "200+ Guards", desc: "Expanded rapidly with 200+ trained and deployed security guards across client sites", icon: "/guard.png" },
    { year: "2024", title: "Multi-State", desc: "Extended services to 4+ states including Odisha, Jharkhand, West Bengal and beyond", icon: "/globe.svg" },
    { year: "2025", title: "Digital Operations", desc: "Launched GPS patrol monitoring, mobile apps and digital operations management platform", icon: "/cctv.png" },
  ];

  const team = [
    {
      name: "Mrs.Sushma Tiwary",
      role: "Founder",
      exp: "Visionary founder driving the organization’s strategic direction, growth, and commitment to excellence in security services",
      img: null,
      color: "#2A6EBB",
      lightColor: "#EFF6FF",
    },
    {
      name: "Mr.Brij Bhushan Tiwary",
      role: "Managing Director",
      exp: "Leads field operations, security personnel deployment, client relationships, and the effective delivery of professional security services",
      img: null,
      color: "#065F46",
      lightColor: "#ECFDF5",
    },
  ];

  const stats = [
    { num: "50+", label: "Active Clients", icon: "/building.png", color: "#2A6EBB" },
    { num: "500+", label: "Trained Guards", icon: "/gunman.png", color: "#065F46" },
    { num: "4+", label: "Years Experience", icon: "/experience1.png", color: "#7C3AED" },
    { num: "4+", label: "States Covered", icon: "/location1.png", color: "#B45309" },
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
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
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        @keyframes scanLine {
          0% { top: 0; opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Hero */
        .about-hero { padding-top: 70px; background: #fff; }
        .about-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 88vh; align-items: stretch;
        }

        /* Left image */
        .about-hero-img {
          position: relative; overflow: hidden;
          background: #0D1B2A; min-height: 480px;
          animation: fadeSlideRight 0.8s ease both;
        }
        .about-hero-img img {
          width: 100%; height: 100%;
          object-fit: cover; opacity: 0.65;
          transition: transform 0.6s ease;
        }
        .about-hero-img:hover img { transform: scale(1.03); }
        .about-hero-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0D1B2A99 0%, #2A6EBB44 100%);
        }

        /* Floating badges on image */
        .about-float-badges {
          position: absolute; bottom: 24px; left: 24px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .about-float-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 16px; border-radius: 100px;
          animation: fadeSlideUp 0.6s ease both;
        }
        .about-float-num { font-size: 18px; font-weight: 900; color: #fff; }
        .about-float-label { font-size: 11px; color: rgba(255,255,255,0.7); }

        /* Scan line on image */
        .about-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, #2A6EBB, transparent);
          animation: scanLine 3s ease-in-out 1s 1;
          z-index: 2;
        }

        /* Right content */
        .about-hero-content {
          padding: 60px 56px;
          display: flex; flex-direction: column; justify-content: center;
          animation: fadeSlideLeft 0.8s ease 0.2s both;
        }
        .about-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 16px; }

        /* Stats grid */
        .about-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px;
        }
        .about-stat-card {
          padding: 20px; border-radius: 12px; border: 1px solid #E5E7EB;
          transition: all 0.25s ease; cursor: default;
        }
        .about-stat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

        /* Mission Vision */
        .about-mv { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .about-mv-inner { max-width: 1280px; margin: 0 auto; }
        .about-mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .about-mv-card {
          border-radius: 16px; padding: 40px;
          border: 1.5px solid #E5E7EB;
          transition: all 0.25s ease; cursor: default;
          position: relative; overflow: hidden;
        }
        .about-mv-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(42,110,187,0.1); border-color: #2A6EBB; }

        /* Values */
        .about-values { padding: 100px 40px; background: #fff; border-top: 1px solid #E5E7EB; }
        .about-values-inner { max-width: 1280px; margin: 0 auto; }
        .about-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .about-value-card {
          border-radius: 16px; padding: 28px;
          border: 1.5px solid #E5E7EB;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: default; position: relative; overflow: hidden;
        }

        /* Timeline */
        .about-timeline { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .about-timeline-inner { max-width: 1280px; margin: 0 auto; }
        .about-timeline-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .about-milestone-card {
          border-radius: 14px; padding: 28px;
          border: 1.5px solid #E5E7EB; background: #fff;
          transition: all 0.25s ease; cursor: default;
          position: relative; overflow: hidden;
        }
        .about-milestone-card:hover { transform: translateY(-5px); box-shadow: 0 16px 36px rgba(42,110,187,0.1); border-color: #2A6EBB; }

        /* Team */
        .about-team { padding: 100px 40px; background: #fff; border-top: 1px solid #E5E7EB; }
        .about-team-inner { max-width: 1280px; margin: 0 auto; }
        .about-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .about-team-card {
          border-radius: 16px; overflow: hidden;
          border: 1.5px solid #E5E7EB;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
        }
        .about-team-card:hover { transform: translateY(-6px); }

        /* Section header */
        .about-section-tag { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .about-section-tag-line { width: 20px; height: 1px; background: #2A6EBB; }
        .about-section-label { font-size: 11px; color: #2A6EBB; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .about-section-h2 { font-size: 40px; font-weight: 900; color: #0D1B2A; letter-spacing: -0.5px; margin-bottom: 8px; }
        .about-section-sub { font-size: 15px; color: #9CA3AF; margin-bottom: 48px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-hero-inner { grid-template-columns: 1fr; }
          .about-hero-img { min-height: 320px; }
          .about-hero-content { padding: 40px 32px; }
          .about-hero-h1 { font-size: 36px; }
          .about-mv { padding: 80px 24px; }
          .about-values { padding: 80px 24px; }
          .about-timeline { padding: 80px 24px; }
          .about-team { padding: 80px 24px; }
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
          .about-timeline-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .about-hero-img { min-height: 260px; }
          .about-hero-content { padding: 28px 20px; }
          .about-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .about-mv { padding: 60px 16px; }
          .about-mv-grid { grid-template-columns: 1fr; }
          .about-values { padding: 60px 16px; }
          .about-values-grid { grid-template-columns: 1fr 1fr; }
          .about-timeline { padding: 60px 16px; }
          .about-timeline-grid { grid-template-columns: 1fr; }
          .about-team { padding: 60px 16px; }
          .about-team-grid { grid-template-columns: 1fr; }
          .about-stats-grid { grid-template-columns: 1fr 1fr; }
          .about-section-h2 { font-size: 28px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-inner">

          {/* Left — Image */}
          <div className="about-hero-img">
            <img
              src="/hero.jpeg"
              alt="Bhushan Security professional guards"
            />
            <div className="about-hero-img-overlay" />
            <div className="about-scan" />

            {/* Logo watermark */}
            <div style={{ position: "absolute", top: "24px", left: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/logo.png" alt="BSF" style={{ width: "44px", height: "44px", objectFit: "contain", opacity: 0.9 }} />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff", letterSpacing: "1.5px" }}>BHUSHAN SECURITY</div>
                <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)" }}>& FACILITIES MANAGEMENT</div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="about-float-badges">
              {stats.slice(0, 3).map((s, i) => (
                <div key={s.label} className="about-float-pill" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  {/* Conditional rendering for Image vs Emoji */}
      <div style={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {s.icon.startsWith('/') ? (
          <Image 
            src={s.icon} 
            alt={s.label} 
            width={24} 
            height={24} 
            style={{ objectFit: 'contain' }} 
          />
        ) : (
          <span>{s.icon}</span>
        )}
      </div>
                  <div>
        <div className="about-float-num">{s.num}</div>
        <div className="about-float-label">{s.label}</div>
      </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Content */}
          <div className="about-hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EFF6FF", border: "1px solid #BFDBFE", padding: "5px 12px", borderRadius: "100px", marginBottom: "20px" }}>
              <div style={{ width: "5px", height: "5px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>PSARA Licensed · ISO Certified · Odisha</span>
            </div>

            <h1 className="about-hero-h1">
              Guarding India<br />
              <span style={{ color: "#2A6EBB" }}>Since 2022</span>
            </h1>

            <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.8, marginBottom: "16px" }}>
              Bhushan Security & Facilities Management Services Pvt. Ltd. is one of Odisha's most trusted PSARA licensed security agencies, serving 50+ clients across India with professional guards and integrated facility solutions.
            </p>

            <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.8, marginBottom: "28px" }}>
              Our philosophy — <span style={{ color: "#2A6EBB", fontWeight: 700 }}>"सेवा ही कर्म है — Service is Our Duty"</span>
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <Link href="/contact"
                style={{ background: "#2A6EBB", color: "#fff", padding: "13px 24px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none", transition: "all 0.2s ease" }}>
                Get Free Quote
              </Link>
              <Link href="/compliance"
                style={{ border: "1.5px solid #E5E7EB", color: "#0D1B2A", padding: "13px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                View Compliance →
              </Link>
            </div>

            {/* Stats */}
            <div className="about-stats-grid">
              {stats.map((s, i) => (
                <div key={s.label} className="about-stat-card"
                  style={{ background: s.lightColor || "#F8FAFC", borderColor: `${s.color}20` }}>
                    <div style={{ fontSize: "22px", marginBottom: "6px", height: "24px", display: "flex", alignItems: "center" }}>
        {s.icon.startsWith('/') ? (
          <Image 
            src={s.icon} 
            alt={s.label} 
            width={24} 
            height={24} 
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <span>{s.icon}</span>
        )}
      </div>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
      <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>{s.label}</div>
    </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mv">
        <div className="about-mv-inner">
          <div style={{ marginBottom: "52px" }}>
            <div className="about-section-tag">
              <div className="about-section-tag-line" />
              <span className="about-section-label">Our Purpose</span>
            </div>
            <h2 className="about-section-h2">Mission & Vision</h2>
            <p className="about-section-sub">What drives us every single day</p>
          </div>

          <div className="about-mv-grid">
  {[
    {
      tag: "Our Mission",
      icon: "/mission.png", 
      title: "Deliver safety,\nnot just security",
      desc: "To provide reliable, professional and technology-enabled security and facility management services that give our clients complete peace of mind. We aim to be the most trusted security partner for industries, corporates and institutions across India.",
      color: "#2A6EBB",
      lightColor: "#EFF6FF",
    },
    {
      tag: "Our Vision",
      icon: "/light-bulb.png", 
      title: "Odisha's most respected\nsecurity brand",
      desc: "To become the most respected and technology-forward security agency in Eastern India — known for our trained personnel, compliant operations, and unwavering commitment to client satisfaction across every state we operate in.",
      color: "#7C3AED",
      lightColor: "#F5F3FF",
    },
  ].map((item) => (
    <div key={item.tag} className="about-mv-card"
      style={{ background: item.lightColor, borderColor: `${item.color}20` }}>
      
      {/* Icon/Image Container */}
      <div style={{ width: "52px", height: "52px", background: "#fff", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px", boxShadow: `0 4px 14px ${item.color}20` }}>
        {item.icon.startsWith('/') ? (
          <Image 
            src={item.icon} 
            alt={item.tag} 
            width={28} 
            height={28} 
            style={{ objectFit: 'contain' }} 
          />
        ) : (
          <span>{item.icon}</span>
        )}
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <div style={{ width: "20px", height: "1px", background: item.color }} />
        <span style={{ fontSize: "11px", color: item.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{item.tag}</span>
      </div>
      <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#0D1B2A", marginBottom: "16px", lineHeight: 1.2, whiteSpace: "pre-line" }}>{item.title}</h3>
      <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.8 }}>{item.desc}</p>

      <div style={{ height: "3px", background: item.color, borderRadius: "2px", marginTop: "24px", width: "40px" }} />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ── VALUES ── */}
<section className="about-values">
  <div className="about-values-inner">
    <div style={{ textAlign: "center", marginBottom: "52px" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
        <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Values</span>
        <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
      </div>
      <h2 className="about-section-h2">What We Stand For</h2>
      <p style={{ fontSize: "15px", color: "#9CA3AF" }}>The principles that guide every decision we make</p>
    </div>

    <div className="about-values-grid">
      {values.map((v, i) => {
        const isHov = hoveredValue === i;
        return (
          <div key={v.title} className="about-value-card"
            onMouseEnter={() => setHoveredValue(i)}
            onMouseLeave={() => setHoveredValue(null)}
            style={{
              background: isHov ? v.lightColor : "#fff",
              borderColor: isHov ? v.color : "#E5E7EB",
              boxShadow: isHov ? `0 20px 40px ${v.color}18` : "0 1px 4px rgba(0,0,0,0.04)",
              transform: isHov ? "translateY(-6px)" : "translateY(0)",
            }}>
            {/* Top bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: v.color, transform: isHov ? "scaleX(1)" : "scaleX(0.3)", transformOrigin: "left", transition: "transform 0.3s ease", borderRadius: "16px 16px 0 0" }} />

            {/* Conditional Icon/Image Rendering */}
            <div style={{ 
              width: "52px", 
              height: "52px", 
              background: isHov ? v.color : v.lightColor, 
              borderRadius: "14px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: "24px", 
              marginBottom: "18px", 
              transition: "all 0.3s ease", 
              boxShadow: isHov ? `0 8px 20px ${v.color}30` : "none" 
            }}>
              {v.icon.startsWith('/') ? (
                <Image 
                  src={v.icon} 
                  alt={v.title} 
                  width={28} 
                  height={28} 
                  style={{ objectFit: 'contain' }} 
                />
              ) : (
                <span>{v.icon}</span>
              )}
            </div>

            <div style={{ fontSize: "18px", fontWeight: 800, color: isHov ? v.color : "#0D1B2A", marginBottom: "10px", transition: "color 0.3s ease" }}>{v.title}</div>
            <div style={{ fontSize: "13px", color: isHov ? "#374151" : "#6B7280", lineHeight: 1.7, transition: "color 0.3s ease" }}>{v.desc}</div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* ── TIMELINE ── */}
<section className="about-timeline">
  <div className="about-timeline-inner">
    <div style={{ marginBottom: "52px" }}>
      <div className="about-section-tag">
        <div className="about-section-tag-line" />
        <span className="about-section-label">Our Journey</span>
      </div>
      <h2 className="about-section-h2">Years of Growth</h2>
      <p className="about-section-sub">From a small team to a trusted multi-state security agency</p>
    </div>

    <div className="about-timeline-grid">
      {milestones.map((m, i) => {
        const isHov = hoveredMilestone === i;
        const colors = ["#2A6EBB", "#065F46", "#7C3AED", "#B45309", "#BE185D", "#0891B2"];
        const color = colors[i % colors.length];
        return (
          <div key={`${m.year}-${i}`} className="about-milestone-card"
            onMouseEnter={() => setHoveredMilestone(i)}
            onMouseLeave={() => setHoveredMilestone(null)}
            style={{ borderColor: isHov ? color : "#E5E7EB", boxShadow: isHov ? `0 16px 36px ${color}18` : "none" }}>

            {/* Top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: color, transform: isHov ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease", borderRadius: "14px 14px 0 0" }} />

            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ fontSize: "32px", fontWeight: 900, color: isHov ? color : "#BFDBFE", lineHeight: 1, transition: "color 0.3s ease" }}>{m.year}</div>
              
              {/* FIXED: Check if the icon path starts with '/' to render Next.js Image component */}
              <div style={{ fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center", height: "32px", width: "32px" }}>
                {m.icon.startsWith('/') ? (
                  <Image 
                    src={m.icon} 
                    alt={m.title} 
                    width={28} 
                    height={28} 
                    style={{ objectFit: 'contain' }} 
                  />
                ) : (
                  <span>{m.icon}</span>
                )}
              </div>
            </div>

            <div style={{ width: "28px", height: "3px", background: color, borderRadius: "2px", marginBottom: "14px", transition: "width 0.3s ease", ...(isHov ? { width: "48px" } : {}) }} />

            <div style={{ fontSize: "16px", fontWeight: 800, color: "#0D1B2A", marginBottom: "8px" }}>{m.title}</div>
            <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{m.desc}</div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* ── TEAM ── */}
      <section className="about-team">
        <div className="about-team-inner">
          <div style={{ marginBottom: "52px" }}>
            <div className="about-section-tag">
              <div className="about-section-tag-line" />
              <span className="about-section-label">Leadership</span>
            </div>
            <h2 className="about-section-h2">Our Team</h2>
            <p className="about-section-sub">The people behind BSF's trusted operations</p>
          </div>

          <div className="about-team-grid">
            {team.map((t, i) => {
              const isHov = hoveredTeam === i;
              return (
                <div key={t.name} className="about-team-card"
                  onMouseEnter={() => setHoveredTeam(i)}
                  onMouseLeave={() => setHoveredTeam(null)}
                  style={{ borderColor: isHov ? t.color : "#E5E7EB", boxShadow: isHov ? `0 20px 40px ${t.color}18` : "none" }}>

                  {/* Image area */}
                  <div style={{ height: "180px", background: isHov ? t.color : "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", transition: "background 0.3s ease" }}>
                    <div style={{ fontSize: "64px", opacity: isHov ? 0.3 : 0.15, transition: "opacity 0.3s ease" }}>👤</div>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "6px" }}>
                      <div style={{ width: "72px", height: "72px", background: isHov ? "rgba(255,255,255,0.2)" : t.lightColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", border: `2px solid ${isHov ? "rgba(255,255,255,0.4)" : `${t.color}30`}`, transition: "all 0.3s ease" }}>
                        👤
                      </div>
                      <div style={{ fontSize: "10px", color: isHov ? "rgba(255,255,255,0.7)" : "#9CA3AF", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", transition: "color 0.3s ease" }}>
                        Add Photo
                      </div>
                    </div>

                    {/* Top bar */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: t.color }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px", background: isHov ? t.lightColor : "#fff", transition: "background 0.3s ease" }}>
                    <div style={{ fontSize: "17px", fontWeight: 800, color: isHov ? t.color : "#0D1B2A", marginBottom: "4px", transition: "color 0.3s ease" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: t.color, fontWeight: 700, marginBottom: "10px", letterSpacing: "0.3px" }}>{t.role}</div>
                    <div style={{ fontSize: "12px", color: "#6B7280", lineHeight: 1.6 }}>{t.exp}</div>

                    <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
                      <a href="tel:+917064015397"
                        style={{ flex: 1, background: isHov ? t.color : "#F8FAFC", color: isHov ? "#fff" : "#6B7280", border: `1px solid ${isHov ? t.color : "#E5E7EB"}`, padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, textDecoration: "none", textAlign: "center", transition: "all 0.25s ease", display: "block" }}>
                        📞 Call
                      </a>
                      <Link href="/contact"
                        style={{ flex: 1, background: isHov ? t.color : "#F8FAFC", color: isHov ? "#fff" : "#6B7280", border: `1px solid ${isHov ? t.color : "#E5E7EB"}`, padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, textDecoration: "none", textAlign: "center", transition: "all 0.25s ease", display: "block" }}>
                        ✉️ Contact
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}