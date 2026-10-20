"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { useState } from "react";

export default function IndustriesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      icon: "/factory.png",
      title: "Steel & Manufacturing",
      slug: "steel-manufacturing",
      color: "#1D4ED8",
      lightColor: "#EFF6FF",
      heroImage: "/steel plant.jpg",
      tagline: "Securing India's industrial backbone",
      desc: "Specialized security for steel plants, manufacturing units and heavy industries. We understand material movement, shift changes, and the unique security challenges of large industrial campuses.",
      clients: ["Tata Steel", "JSPL", "SAIL", "RINL"],
      services: ["Perimeter security", "Access control", "Material movement checks", "Shift management", "Fire safety guards"],
    },
    {
      icon: "⛏️",
      title: "Coal & Iron Mining",
      slug: "mining-coal",
      color: "#92400E",
      lightColor: "#FFFBEB",
      heroImage: "/mines.png",
      tagline: "Deep expertise for high-risk environments",
      desc: "Security for coal mines, mining operations and related infrastructure. Guards trained for explosives safety zones, conveyor belt areas and mine entry/exit management.",
      clients: ["BCCL", "CCL", "MCL", "Private mines"],
      services: ["Mine entry management", "Explosive zone security", "Equipment protection", "Night patrolling", "Contractor verification"],
    },
    {
      icon: "/building.png",
      title: "Corporate & IT",
      slug: "corporate-it",
      color: "#6D28D9",
      lightColor: "#F5F3FF",
      heroImage: "/corporate.jpg",
      tagline: "Professional security for modern workplaces",
      desc: "Premium security for corporate offices, IT parks, business centers and tech companies. Visitor management, access control and executive protection specialists.",
      clients: ["IT Companies", "BPOs", "Business Parks", "Startups"],
      services: ["Visitor management", "Access card systems", "CCTV monitoring", "Executive protection", "Server room security"],
    },
    {
      icon: "🏥",
      title: "Healthcare",
      slug: "healthcare",
      color: "#065F46",
      lightColor: "#ECFDF5",
      heroImage: "/Hospital.jpg",
      tagline: "Sensitive security for sensitive environments",
      desc: "Sensitive security for hospitals, nursing homes and pharmaceutical companies. Guards trained in patient privacy, emergency response and crowd control.",
      clients: ["Hospitals", "Nursing Homes", "Pharma Companies", "Diagnostic Centers"],
      services: ["Patient area security", "Emergency response", "Pharmacy protection", "Parking management", "Night security"],
    },
    {
      icon: "🏫",
      title: "Education",
      slug: "education",
      color: "#BE185D",
      lightColor: "#FDF2F8",
      heroImage: "/school.jpg",
      tagline: "Safe campuses for focused learning",
      desc: "Safe and professional security for schools, colleges and universities. Child-safe trained guards who maintain discipline while creating a welcoming environment.",
      clients: ["Schools", "Colleges", "Universities", "Coaching Centers"],
      services: ["Entry management", "Student safety", "Campus patrolling", "Event security", "Hostel security"],
    },
    {
      icon: "🏪",
      title: "Retail & Malls",
      slug: "retail-malls",
      color: "#0891B2",
      lightColor: "#ECFEFF",
      heroImage: "/shopping-mall.jpg",
      tagline: "Loss prevention with customer experience",
      desc: "Customer-friendly security for shopping malls, retail stores and commercial complexes. Loss prevention, crowd management and emergency response specialists.",
      clients: ["Shopping Malls", "Retail Chains", "Showrooms", "Commercial Complexes"],
      services: ["Loss prevention", "Crowd management", "Parking security", "CCTV monitoring", "Emergency evacuation"],
    },
    {
      icon: "🏗️",
      title: "Construction & Real Estate",
      slug: "construction",
      color: "#B45309",
      lightColor: "#FFF7ED",
      heroImage: "/construction.jpg",
      tagline: "Protecting assets at every build stage",
      desc: "Security for construction sites, residential projects and real estate developments. Equipment protection, material theft prevention and site access management.",
      clients: ["Builders", "Infrastructure Companies", "Housing Projects", "Developers"],
      services: ["Site security", "Equipment protection", "Material theft prevention", "Night watchmen", "Labour verification"],
    },
    {
      icon: "🏛️",
      title: "Government & PSU",
      slug: "government-psu",
      color: "#1E3A5F",
      lightColor: "#EFF6FF",
      heroImage: "/govt.jpg",
      tagline: "PSARA compliant for public sector needs",
      desc: "PSARA compliant security for government offices, PSU facilities and public sector operations. Full documentation for government vendor empanelment.",
      clients: ["PSU Companies", "Government Offices", "Public Sector Banks", "Municipal Bodies"],
      services: ["Government protocol security", "Visitor management", "Document verification", "Flag area security", "VIP protection"],
    },
    {
      icon: "🏠",
      title: "Residential",
      slug: "residential",
      color: "#166534",
      lightColor: "#F0FDF4",
      heroImage: "/residential.jpg",
      tagline: "Safety that feels like home",
      desc: "Professional security for gated communities, apartment complexes and residential societies. Friendly but firm guards who maintain safety without compromising comfort.",
      clients: ["Gated Communities", "Apartment Complexes", "Housing Societies", "Bungalow Compounds"],
      services: ["Gate management", "Vehicle verification", "Visitor logging", "Night patrolling", "Emergency response"],
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Hero */
        .ind-hero { background: #F8FAFC; border-bottom: 1px solid #E5E7EB; padding: 120px 40px 80px; }
        .ind-hero-inner { max-width: 1280px; margin: 0 auto; }
        .ind-hero-h1 { font-size: 48px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; margin-bottom: 16px; line-height: 1.05; }

        /* Grid */
        .ind-grid-section { padding: 80px 40px; background: #fff; }
        .ind-grid { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        /* Card */
        .ind-card {
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid #E5E7EB;
          background: #fff;
          cursor: pointer;
          animation: fadeSlideUp 0.5s ease both;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Card image area */
        .ind-card-img {
          position: relative;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ind-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ind-card-img-overlay {
          position: absolute; inset: 0;
          transition: all 0.35s ease;
        }
        .ind-card-img-icon {
          position: absolute;
          bottom: 14px; left: 16px;
          font-size: 28px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
          transition: transform 0.3s ease;
        }
        .ind-card-img-tag {
          position: absolute;
          top: 12px; right: 12px;
          font-size: 10px; font-weight: 700;
          padding: 4px 10px; border-radius: 100px;
          letter-spacing: 1px; text-transform: uppercase;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        /* Card body */
        .ind-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: background 0.35s ease;
        }
        .ind-card-title {
          font-size: 17px; font-weight: 800; color: #0D1B2A;
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }
        .ind-card-tagline {
          font-size: 12px; font-weight: 500;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }
        .ind-card-desc {
          font-size: 12px; color: #6B7280; line-height: 1.6;
          margin-bottom: 14px; flex: 1;
          transition: color 0.3s ease;
        }

        /* Services list — hidden by default, shown on hover */
        .ind-card-services {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease;
          opacity: 0;
          margin-bottom: 0;
        }
        .ind-card-services.open {
          max-height: 200px;
          opacity: 1;
          margin-bottom: 14px;
        }

        /* Client tags */
        .ind-card-clients {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 14px;
        }
        .ind-client-tag {
          font-size: 11px; font-weight: 600;
          padding: 3px 10px; border-radius: 100px;
          border: 1px solid;
          transition: all 0.2s ease;
        }

        /* Bottom buttons */
        .ind-card-btns {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-top: auto;
        }
        .ind-btn-primary {
          font-size: 12px; font-weight: 700;
          padding: 9px 16px; border-radius: 8px;
          text-decoration: none; color: #fff;
          transition: all 0.2s ease;
          display: inline-flex; align-items: center; gap: 5px;
        }
        .ind-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.2); }
        .ind-btn-outline {
          font-size: 12px; font-weight: 600;
          padding: 9px 14px; border-radius: 8px;
          text-decoration: none; color: #0D1B2A;
          border: 1.5px solid #E5E7EB; background: #fff;
          transition: all 0.2s ease;
          display: inline-flex; align-items: center; gap: 5px;
        }
        .ind-btn-outline:hover { transform: translateY(-2px); border-color: #9CA3AF; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

        /* Divider */
        .ind-card-divider {
          height: 1px; margin: 12px 0;
          transition: background 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ind-hero { padding: 100px 24px 60px; }
          .ind-grid-section { padding: 60px 24px; }
          .ind-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .ind-hero-h1 { font-size: 40px; }
        }
        @media (max-width: 768px) {
          .ind-hero { padding: 100px 16px 48px; }
          .ind-grid-section { padding: 48px 16px; }
          .ind-grid { grid-template-columns: 1fr; gap: 14px; }
          .ind-hero-h1 { font-size: 30px; letter-spacing: -0.5px; }
          .ind-card-img { height: 160px; }
          .ind-card-body { padding: 16px; }
          .ind-card-services.open { max-height: 300px; }
        }
      `}</style>

      {/* Hero */}
      <section className="ind-hero">
        <div className="ind-hero-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }}></div>
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Industries</span>
          </div>
          <h1 className="ind-hero-h1">
            Security for<br />
            <span style={{ color: "#2A6EBB" }}>Every Industry</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7, marginBottom: "32px" }}>
            From steel plants to hospitals, coal mines to IT parks — we understand every industry's unique security challenges and deploy accordingly trained personnel.
          </p>

          {/* Industry count pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { num: "9+", label: "Industries" },
              { num: "50+", label: "Clients" },
              { num: "500+", label: "Guards" },
              { num: "4+", label: "Years" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "100px", padding: "8px 18px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "16px", fontWeight: 900, color: "#2A6EBB" }}>{s.num}</span>
                <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="ind-grid-section">
        <div className="ind-grid">
          {industries.map((ind, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={ind.slug}
                className="ind-card"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${i * 0.06}s`,
                  borderColor: isHovered ? ind.color : "#E5E7EB",
                  boxShadow: isHovered ? `0 20px 48px ${ind.color}22, 0 4px 12px ${ind.color}15` : "0 1px 4px rgba(0,0,0,0.04)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Image */}
                <div className="ind-card-img">
                  <img
                    src={ind.heroImage}
                    alt={ind.title}
                    style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                  />
                  <div className="ind-card-img-overlay"
                    style={{ background: isHovered ? `linear-gradient(to bottom, ${ind.color}88 0%, ${ind.color}CC 100%)` : "linear-gradient(to bottom, rgba(13,27,42,0.2) 0%, rgba(13,27,42,0.6) 100%)" }}
                  />
                  {/* NEW CODE */}
<div className="ind-card-img-icon"
  style={{ transform: isHovered ? "translateY(-4px) scale(1.15)" : "none" }}>
  {ind.icon.startsWith("/") ? (
    <img 
      src={ind.icon} 
      alt={ind.title} 
      style={{ width: "32px", height: "32px", objectFit: "contain" }} 
    />
  ) : (
    <span>{ind.icon}</span>
  )}
</div>
                  <div className="ind-card-img-tag"
                    style={{ background: isHovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.35)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
                    Bhushan Certified
                  </div>

                  {/* Top accent bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                    background: ind.color,
                    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s ease",
                  }} />
                </div>

                {/* Body */}
                <div className="ind-card-body"
                  style={{ background: isHovered ? ind.lightColor : "#fff" }}>

                  {/* Title & tagline */}
                  <div className="ind-card-title"
                    style={{ color: isHovered ? ind.color : "#0D1B2A" }}>
                    {ind.title}
                  </div>
                  <div className="ind-card-tagline"
                    style={{ color: isHovered ? ind.color : "#9CA3AF" }}>
                    {ind.tagline}
                  </div>

                  <div className="ind-card-divider"
                    style={{ background: isHovered ? `${ind.color}25` : "#F3F4F6" }} />

                  {/* Description */}
                  <div className="ind-card-desc"
                    style={{ color: isHovered ? "#374151" : "#6B7280" }}>
                    {ind.desc}
                  </div>

                  {/* Services — revealed on hover */}
                  <div className={`ind-card-services ${isHovered ? "open" : ""}`}>
                    <div style={{ fontSize: "10px", fontWeight: 700, color: ind.color, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                      Services Provided
                    </div>
                    {ind.services.map((s) => (
                      <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <div style={{ width: "5px", height: "5px", background: ind.color, borderRadius: "50%", flexShrink: 0 }} />
                        <span style={{ fontSize: "12px", color: "#374151" }}>{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client tags */}
                  <div className="ind-card-clients">
                    {ind.clients.map((c) => (
                      <span key={c} className="ind-client-tag"
                        style={{
                          background: isHovered ? `${ind.color}12` : "#F8FAFC",
                          borderColor: isHovered ? `${ind.color}40` : "#E5E7EB",
                          color: isHovered ? ind.color : "#6B7280",
                        }}>
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="ind-card-btns">
                    <Link href="/contact" className="ind-btn-primary"
                      style={{ background: ind.color }}>
                      Get Quote
                    </Link>
                    <a href="tel:+917064015397" className="ind-btn-outline">
                      📞 Call
                    </a>
                  </div>

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