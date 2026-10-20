"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const services = [
    {
      icon: "/gunman.png",
      isImage: true,
      title: "Security Guard",
      slug: "security-guards",
      color: "#2A6EBB",
      lightColor: "#EFF6FF",
      desc: "PSARA verified guards patrolling property, monitoring surveillance and securing premises round the clock.",
      features: ["Premises patrolling", "Surveillance monitoring", "Building inspection", "Access control", "PSARA verified", "24/7 deployment"],
    },
    {
      icon: "/bodyguard.png",
      isImage: true,
      title: "Bouncer & Bodyguard",
      slug: "corporate-security",
      color: "#7C3AED",
      lightColor: "#F5F3FF",
      desc: "Professional bouncers and bodyguards for events, private parties, marriages and VIP protection assignments.",
      features: ["VIP protection", "Event entry control", "Private party security", "Close protection", "Emergency response", "Crowd control"],
    },
    {
      icon: "/car.png",
      isImage: true,
      title: "Escort Guard",
      slug: "escort-guard",
      color: "#0891B2",
      lightColor: "#ECFEFF",
      desc: "Secure escort for employees and executives travelling from office to home and sensitive cargo movement.",
      features: ["Employee escort", "Executive protection", "Cash escort", "Night travel security", "Vehicle escort", "Route planning"],
    },
    {
      icon: "/dog.png",
      isImage: true,
      title: "Dog Squad Service",
      slug: "dog-squad",
      color: "#B45309",
      lightColor: "#FFF7ED",
      desc: "Trained security dogs with certified handlers — sharp hearing, smelling senses and strong deterrence capability.",
      features: ["Trained security dogs", "Certified handlers", "Perimeter patrolling", "Explosive detection", "Intruder deterrence", "Night operations"],
    },
    {
      icon: "/building.png",
      isImage:true,
      title: "Office Manpower",
      slug: "pantry-manpower",
      color: "#065F46",
      lightColor: "#ECFDF5",
      desc: "Front and back office manpower on permanent or contractual basis — reception, administration and support.",
      features: ["Reception management", "Administrative support", "Permanent staffing", "Contractual staffing", "Trained professionals", "Background verified"],
    },
    {
      icon: "/event.png",
      isImage:true,
      title: "Event Staffing",
      slug: "event-security",
      color: "#BE185D",
      lightColor: "#FDF2F8",
      desc: "Event staff for corporate and public events — venue prep, ushering, crowd management and entry control.",
      features: ["Venue preparation", "Crowd management", "Usher services", "Entry management", "Stage setup support", "Corporate events"],
    },
    {
      icon: "/waiter.png",
      isImage:true,
      title: "Pantry Boy",
      slug: "pantry-manpower",
      color: "#92400E",
      lightColor: "#FFFBEB",
      desc: "Support staff attending visitors, serving water, tea, beverages and maintaining cleanliness of pantry areas.",
      features: ["Tea & beverage service", "Visitor attendance", "Pantry maintenance", "Refreshment management", "Office support", "Professional conduct"],
    },
    {
      icon: "/facilities.png",
      isImage:true,
      title: "Facility Management",
      slug: "facility-management",
      color: "#1D4ED8",
      lightColor: "#EFF6FF",
      desc: "Integrated facility management — one vendor for housekeeping, maintenance, pantry and reception services.",
      features: ["Housekeeping staff", "Maintenance crew", "Pantry services", "Reception management", "Single invoice", "Compliance covered"],
    },
    {
      icon: "/cctv.png",
      isImage:true,
      title: "Electronic Surveillance",
      slug: "surveillance",
      color: "#6D28D9",
      lightColor: "#F5F3FF",
      desc: "CCTV installation, remote monitoring, alarm systems and GPS tracking for complete 24/7 coverage.",
      features: ["CCTV installation", "24/7 monitoring", "Alarm systems", "GPS tracking", "Access control", "Video analytics"],
    },
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes iconBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-6px) scale(1.1); }
  }

  /* Base Layout */
  .svc-hero { background: #F8FAFC; border-bottom: 1px solid #E5E7EB; padding: 120px 40px 80px; }
  .svc-hero-inner { max-width: 1280px; margin: 0 auto; }
  .svc-hero-h1 { font-size: 48px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; margin-bottom: 16px; line-height: 1.05; }
  .svc-grid-section { padding: 80px 40px; background: #fff; }
  .svc-grid { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

  /* Card Container */
  .svc-card {
    border-radius: 16px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    animation: fadeSlideUp 0.5s ease both;
    border: 1.5px solid #E5E7EB;
    background: #fff;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .svc-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  .svc-card:hover::before { opacity: 1; }
  .svc-card > * { position: relative; z-index: 1; }

  /* Elements */
  .svc-card-icon {
  width: 50px; /* Fixed width for all */
  height: 50px; /* Fixed height for all */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: transform 0.3s ease;
}
  .svc-card-icon img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
}
  .svc-card-icon:not(img) {
  font-size: 40px; /* For emoji icons */
}
  .svc-card:hover .svc-card-icon { animation: iconBounce 0.6s ease; }
  .svc-card-title { font-size: 18px; font-weight: 800; color: #0D1B2A; margin-bottom: 10px; transition: color 0.3s ease; }
  .svc-card-desc { font-size: 13px; color: #6B7280; line-height: 1.7; margin-bottom: 18px; transition: color 0.3s ease; }
  
  .svc-feature-tag {
    display: inline-flex; align-items: center; gap: 5px; font-size: 11px; padding: 4px 10px;
    border-radius: 100px; font-weight: 500; margin: 3px; border: 1px solid #E5E7EB;
    background: #F8FAFC; color: #6B7280;
  }

  /* Button Logic */
  .svc-card-btns { display: flex; gap: 8px; margin-top: auto; flex-wrap: wrap; position: relative; z-index: 10; }
  .btn-learn, .btn-quote, .btn-call {
    font-size: 12px; font-weight: 700; text-decoration: none; padding: 9px 16px; border-radius: 8px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); display: inline-flex; align-items: center; gap: 6px;
    border: 1.5px solid transparent; cursor: pointer;
  }
  .btn-learn:hover { transform: translateY(-2px); gap: 10px; }
  .btn-quote:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
  .btn-call { border: 1.5px solid #E5E7EB; background: #fff; }
  .btn-call:hover { transform: translateY(-2px); border-color: #9CA3AF; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  
  .svc-card-divider { height: 1px; margin: 16px 0; }

  /* Media Queries */
  @media (max-width: 1024px) {
    .svc-hero { padding: 100px 24px 60px; }
    .svc-grid-section { padding: 60px 24px; }
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .svc-hero-h1 { font-size: 40px; }
  }

  @media (max-width: 768px) {
    .svc-hero { padding: 100px 16px 48px; }
    .svc-grid-section { padding: 48px 16px; }
    .svc-grid { grid-template-columns: 1fr; gap: 14px; }
    .svc-hero-h1 { font-size: 30px; letter-spacing: -0.5px; }
    .svc-card { padding: 22px; }
    .svc-card-btns { flex-direction: row; }
  }
    
`}</style>

      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }}></div>
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Services</span>
          </div>
          <h1 className="svc-hero-h1">
            Complete Security &<br />
            <span style={{ color: "#2A6EBB" }}>Facility Solutions</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7 }}>
            From security guards to dog squads, bouncers to facility management — we cover every aspect of your security and facility needs across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="svc-grid-section">
        <div className="svc-grid">
          {services.map((svc, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={`${svc.title}-${i}`}
                className="svc-card"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${i * 0.07}s`,
                  background: isHovered ? svc.lightColor : "#fff",
                  borderColor: isHovered ? svc.color : "#E5E7EB",
                  boxShadow: isHovered ? `0 20px 40px ${svc.color}20, 0 4px 12px ${svc.color}15` : "0 1px 4px rgba(0,0,0,0.04)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: svc.color,
                  borderRadius: "16px 16px 0 0",
                  transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                }} />

                {/* Icon */}
                <span className="svc-card-icon" style={{ animationDelay: `${i * 0.07}s` }}>
  {svc.isImage ? (
    <Image 
      src={svc.icon} 
      alt={svc.title} 
      width={50} // Updated to 50
      height={50} // Updated to 50
      unoptimized 
    />
  ) : (
    svc.icon
  )}
</span>

                {/* Color badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: isHovered ? svc.color : "#F3F4F6",
                  color: isHovered ? "#fff" : "#9CA3AF",
                  fontSize: "10px", fontWeight: 700, padding: "3px 10px",
                  borderRadius: "100px", marginBottom: "10px",
                  transition: "all 0.3s ease", letterSpacing: "1px", textTransform: "uppercase",
                }}>
                  <div style={{ width: "5px", height: "5px", background: isHovered ? "rgba(255,255,255,0.6)" : svc.color, borderRadius: "50%" }} />
                  BSF Service
                </div>

                <div className="svc-card-title" style={{ color: isHovered ? svc.color : "#0D1B2A" }}>
                  {svc.title}
                </div>

                <div className="svc-card-desc" style={{ color: isHovered ? "#374151" : "#6B7280" }}>
                  {svc.desc}
                </div>

                {/* Divider */}
                <div className="svc-card-divider" style={{ background: isHovered ? `${svc.color}30` : "#F3F4F6" }} />

                {/* Feature tags */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "4px" }}>
                  {svc.features.map((f) => (
                    <span key={f} className="svc-feature-tag"
                      style={{
                        background: isHovered ? `${svc.color}12` : "#F8FAFC",
                        borderColor: isHovered ? `${svc.color}30` : "#E5E7EB",
                        color: isHovered ? svc.color : "#6B7280",
                      }}>
                      <span style={{ width: "4px", height: "4px", background: isHovered ? svc.color : "#9CA3AF", borderRadius: "50%", flexShrink: 0 }} />
                      {f}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="svc-card-btns">
                  <Link href={`/services/${svc.slug}`} className="btn-learn"
                    style={{
                      color: svc.color,
                      borderColor: isHovered ? svc.color : "transparent",
                      background: isHovered ? `${svc.color}10` : "transparent",
                    }}>
                    Learn more <span style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                  </Link>
                  <Link href="/contact" className="btn-quote"
                    style={{ background: svc.color }}>
                    Get Quote
                  </Link>
                  <a href="tel:+917064015397" className="btn-call">
                    📞 Call
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}