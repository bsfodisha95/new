"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { useState, useRef } from "react";

const statesData = [
  {
    name: "Odisha",
    code: "OD",
    color: "#2A6EBB",
    lightColor: "#EFF6FF",
    tag: "Headquarters State",
    icon: "/Odisha.png",
    desc: "Our home state — deepest coverage with rapid deployment across all major districts",
    cities: [
      { name: "Jharsuguda", slug: "jharsuguda", tag: "HQ" },
      {name:"Rourkela", slug:"Rourkela", tag:"Smart City"},
      { name: "Angul", slug: "Angul", tag: "District" },
      { name: "Balangir", slug: "Balangir", tag: "District" },
      { name: "Balasore", slug: "Balasore", tag: "District" },
      { name: "Bhadrak", slug: "Bhadrak", tag: "District" },
      { name: "Cuttack", slug: "Cuttack", tag: "District" },
      { name: "Kendrapara", slug: "Kendrapara", tag: "District" },
      { name: "Keonjhar", slug: "Keonjhar", tag: "District" },
      { name: "Khordha", slug: "Khordha", tag: "District" },
      { name: "Koraput", slug: "Koraput", tag: "District" },
      { name: "Mayurbhanj", slug: "Mayurbhanj", tag: "District" },
      { name: "Barbil", slug: "Barbil", tag: "District" },
      { name: "Sambalpur", slug: "Sambalpur", tag: "District" },
      { name: "Sundargarh", slug: "Sundargarh", tag: "District" },
    ],
  },
  {
    name: "Jharkhand",
    code: "JH",
    color: "#065F46",
    lightColor: "#ECFDF5",
    tag: "Key State",
    icon: "/jharkhand.png",
    desc: "Industrial and mining heartland — steel, coal and heavy industry security specialists",
    cities: [
      { name: "Ranchi", slug: "ranchi", tag: "Capital" },
      { name: "Dhanbad", slug: "dhanbad", tag: "Coal Capital" },
      { name: "Jamshedpur", slug: "Jamshedpur", tag: "Steel City" },
      { name: "Bokaro", slug: "Bokaro", tag: "Steel City" },
    ],
  },
  {
    name: "West Bengal",
    code: "WB",
    color: "#7C3AED",
    lightColor: "#F5F3FF",
    tag: "Metro State",
    icon: "/west bengal.png",
    desc: "Metro and industrial coverage across West Bengal's major commercial centres",
    cities: [
      { name: "Kolkata", slug: "kolkata", tag: "Metro" },
      { name: "Durgapur", slug: "Durgapur", tag: "Industrial" },
      { name: "Asansol", slug: "Asansol", tag: "Industrial" },
    ],
  },
  {
    name: "Bihar",
    code: "BR",
    color: "#B45309",
    lightColor: "#FFF7ED",
    tag: "Expanding",
    icon: "/bihar.png",
    desc: "Growing presence in Bihar's government, healthcare and commercial sectors",
    cities: [
      { name: "Patna", slug: "patna", tag: "Capital" },
      { name: "Gaya", slug: "Gaya", tag: "City" },
    ],
  },
  {
    name: "Chhattisgarh",
    code: "CG",
    color: "#BE185D",
    lightColor: "#FDF2F8",
    tag: "Expanding",
    icon: "/chhattisgarh.png",
    desc: "Rapidly expanding operations in Chhattisgarh's industrial and commercial hubs",
    cities: [
      { name: "Raipur", slug: "raipur", tag: "Capital" },
      { name: "Bilaspur", slug: "Bilaspur", tag: "City" },
      {name: "Raigarh", slug: "raigarh", tag: "District"},
    ],
  },
];

export default function CitiesPage() {
  const [activeState, setActiveState] = useState(0);
  const [hoveredCity, setHoveredCity] = useState(null);
  const panelRef = useRef(null);

  const selected = statesData[activeState];

  const handleStateChange = (index) => {
    setActiveState(index);
    if (window.innerWidth <= 1024 && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .cities-hero { background: #F8FAFC; border-bottom: 1px solid #E5E7EB; padding: 120px 40px 80px; }
        .cities-hero-inner { max-width: 1280px; margin: 0 auto; }
        .cities-hero-h1 { font-size: 48px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; margin-bottom: 16px; line-height: 1.05; }

        .cities-main { padding: 80px 40px; background: #fff; }
        .cities-main-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 32px; align-items: start; }

        /* State selector sidebar */
        .state-sidebar { position: sticky; top: 90px; display: flex; flex-direction: column; gap: 10px; }
        .state-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px; border-radius: 12px;
          border: 1.5px solid #E5E7EB; background: #fff;
          cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left; width: 100%;
          position: relative; overflow: hidden;
        }
        .state-btn:hover { transform: translateX(6px); }
        .state-btn.active {
          transform: scale(1.02);
          border-width: 1.5px;
        }
        .state-code {
          width: 44px; height: 44px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 900; flex-shrink: 0;
          transition: all 0.3s ease; letter-spacing: 0.5px;
        }
        .state-name { font-size: 15px; font-weight: 800; color: #0D1B2A; transition: color 0.3s ease; }
        .state-tag { font-size: 10px; color: #9CA3AF; font-weight: 500; margin-top: 2px; }
        .state-count { margin-left: auto; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 100px; flex-shrink: 0; }

        /* Animated Right Panel */
        .cities-panel { 
          animation: fadeSlideRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .cities-panel-header { border-radius: 16px; padding: 32px; margin-bottom: 24px; position: relative; overflow: hidden; transition: all 0.3s ease; }
        .cities-panel-header-icon { font-size: 48px; margin-bottom: 12px; display: block; }
        .cities-panel-header-tag { font-size: 10px; font-weight: 700; padding: 4px 12px; border-radius: 100px; letter-spacing: 1px; text-transform: uppercase; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px; }
        .cities-panel-header-title { font-size: 32px; font-weight: 900; color: #0D1B2A; margin-bottom: 8px; letter-spacing: -0.5px; }
        .cities-panel-header-desc { font-size: 14px; color: #6B7280; line-height: 1.7; }
        .cities-header-stats { display: flex; gap: 20px; margin-top: 20px; align-items: center; }

        /* City cards grid */
        .city-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .city-card-item {
          border-radius: 12px; padding: 18px;
          border: 1.5px solid #E5E7EB; background: #fff;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeSlideUp 0.35s ease both;
          position: relative; overflow: hidden;
        }
        .city-card-item:hover { transform: translateY(-4px); }
        .city-card-tag { font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 100px; letter-spacing: 0.5px; text-transform: uppercase; display: inline-block; margin-bottom: 10px; }
        .city-card-name { font-size: 15px; font-weight: 800; color: #0D1B2A; margin-bottom: 6px; transition: color 0.25s ease; }
        .city-card-link { font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px; text-decoration: none; transition: gap 0.2s ease; }
        .city-card-link:hover { gap: 8px; }
        .city-card-available { font-size: 11px; color: #9CA3AF; display: flex; align-items: center; gap: 4px; }

        /* Bottom CTA */
        .cities-bottom-cta {
          margin-top: 24px; background: #0D1B2A; border-radius: 14px; padding: 28px 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;
        }
        .cta-btn-group { display: flex; gap: 10px; flex-wrap: wrap; }

        /* Responsive */
        @media (max-width: 1200px) {
          .city-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1024px) {
          .cities-hero { padding: 100px 24px 60px; }
          .cities-main { padding: 60px 24px; }
          .cities-main-inner { grid-template-columns: 1fr; gap: 24px; }
          .state-sidebar {
            position: static;
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .state-sidebar::-webkit-scrollbar { display: none; }
          .state-btn {
            flex: 0 0 auto;
            width: 230px;
            scroll-snap-align: start;
          }
          .state-btn:hover { transform: none; }
          .cities-hero-h1 { font-size: 40px; }
        }

        @media (max-width: 768px) {
          .cities-hero { padding: 90px 16px 48px; }
          .cities-main { padding: 40px 16px; }
          .state-btn { width: 210px; padding: 12px 14px; }
          .cities-panel-header { padding: 24px; }
          .cities-panel-header-title { font-size: 26px; }
          .cities-hero-h1 { font-size: 32px; letter-spacing: -0.5px; }
          .cities-bottom-cta { padding: 24px; flex-direction: column; align-items: flex-start; }
          .cta-btn-group { width: 100%; }
          .cta-btn-group a { flex: 1; text-align: center; justify-content: center; }
        }

        @media (max-width: 640px) {
          .city-cards-grid { grid-template-columns: 1fr; }
          .cities-header-stats { gap: 12px; }
        }
      `}</style>

      {/* Hero */}
      <section className="cities-hero">
        <div className="cities-hero-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Locations</span>
          </div>
          <h1 className="cities-hero-h1">
            We Operate<br /><span style={{ color: "#2A6EBB" }}>Across India</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7, marginBottom: "32px" }}>
            Professional security and facility management services across 5 states and 25+ cities in Eastern and Central India — with rapid deployment in 48 hours.
          </p>

          {/* Quick stats */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { num: "5", label: "States" },
              { num: "25+", label: "Cities" },
              { num: "48hrs", label: "Deployment" },
              { num: "24/7", label: "Operations" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "100px", padding: "8px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "16px", fontWeight: 900, color: "#2A6EBB" }}>{s.num}</span>
                <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main — State selector + City panel */}
      <section className="cities-main">
        <div className="cities-main-inner">

          {/* Left — State Selector */}
          <div className="state-sidebar">
            <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px", paddingLeft: "4px", width: "100%" }}>
              Select State
            </div>
            {statesData.map((state, i) => {
              const isActive = activeState === i;
              return (
                <button key={state.name} className={`state-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleStateChange(i)}
                  style={{
                    borderColor: isActive ? state.color : "#E5E7EB",
                    background: isActive ? state.lightColor : "#fff",
                    boxShadow: isActive ? `0 8px 20px ${state.color}25` : "none",
                  }}>
                  {/* Left indicator bar */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: "4px",
                    background: state.color,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.3s ease"
                  }} />

                  <div className="state-code"
                    style={{ background: isActive ? state.color : state.lightColor, color: isActive ? "#fff" : state.color }}>
                    {state.code}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="state-name" style={{ color: isActive ? state.color : "#0D1B2A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{state.name}</div>
                    <div className="state-tag" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{state.tag}</div>
                  </div>
                  <div className="state-count"
                    style={{ background: isActive ? `${state.color}20` : "#F3F4F6", color: isActive ? state.color : "#9CA3AF" }}>
                    {state.cities.length}
                  </div>
                </button>
              );
            })}

            {/* Coverage note */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", marginTop: "8px", width: "100%", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#0D1B2A" }}>Expanding Coverage</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9CA3AF", lineHeight: 1.6 }}>
                New states and cities added regularly. Contact us for coverage in your area even if not listed.
              </p>
            </div>
          </div>

          {/* Right — Animated City Panel */}
          <div className="cities-panel" key={activeState} ref={panelRef}>

            {/* State header */}
            <div className="cities-panel-header" style={{ background: selected.lightColor, border: `1.5px solid ${selected.color}20` }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: selected.color, borderRadius: "16px 16px 0 0" }} />
              {selected.icon.startsWith("/") ? (
                <img
                  src={selected.icon}
                  alt={selected.name}
                  className="cities-panel-header-icon"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                    display: "block",
                    marginBottom: "12px",
                  }}
                />
              ) : (
                <span className="cities-panel-header-icon">
                  {selected.icon}
                </span>
              )}

              <div className="cities-panel-header-tag"
                style={{ background: `${selected.color}15`, color: selected.color, border: `1px solid ${selected.color}25` }}>
                <div style={{ width: "5px", height: "5px", background: selected.color, borderRadius: "50%" }} />
                {selected.tag}
              </div>
              <div className="cities-panel-header-title">{selected.name}</div>
              <div className="cities-panel-header-desc">{selected.desc}</div>

              <div className="cities-header-stats">
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: selected.color }}>{selected.cities.length}</div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>Cities/Districts</div>
                </div>
                <div style={{ width: "1px", height: "30px", background: `${selected.color}20` }} />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: selected.color }}>24/7</div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>Operations</div>
                </div>
                <div style={{ width: "1px", height: "30px", background: `${selected.color}20` }} />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: selected.color }}>48hrs</div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>Deployment</div>
                </div>
              </div>
            </div>

            {/* Cities grid */}
            <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>
              Cities & Districts in {selected.name}
            </div>

            <div className="city-cards-grid">
              {selected.cities.map((city, i) => {
                const isHov = hoveredCity === `${activeState}-${i}`;
                return (
                  <div key={city.name} className="city-card-item"
                    onMouseEnter={() => setHoveredCity(`${activeState}-${i}`)}
                    onMouseLeave={() => setHoveredCity(null)}
                    style={{
                      animationDelay: `${i * 0.03}s`,
                      borderColor: isHov ? selected.color : "#E5E7EB",
                      background: isHov ? selected.lightColor : "#fff",
                      boxShadow: isHov ? `0 12px 28px ${selected.color}18` : "none",
                    }}>

                    {/* Top hover indicator line */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: selected.color, transform: isHov ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease" }} />

                    <div className="city-card-tag"
                      style={{ background: isHov ? `${selected.color}18` : "#F8FAFC", color: isHov ? selected.color : "#9CA3AF", border: `1px solid ${isHov ? `${selected.color}30` : "#E5E7EB"}` }}>
                      {city.tag}
                    </div>

                    <div className="city-card-name" style={{ color: isHov ? selected.color : "#0D1B2A" }}>
                      📍 {city.name}
                    </div>

                    {city.slug ? (
                      <Link href={`/cities/${city.slug}`} className="city-card-link"
                        style={{ color: selected.color }}>
                        View details →
                      </Link>
                    ) : (
                      <div className="city-card-available">
                        <div style={{ width: "5px", height: "5px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
                        Service available
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="cities-bottom-cta">
              <div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>
                  Need security services in {selected.name}?
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  Free site assessment · Custom proposal · 48 hour deployment
                </div>
              </div>
              <div className="cta-btn-group">
                <Link href="/contact"
                  style={{ background: selected.color, color: "#fff", padding: "11px 22px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" }}>
                  Get Free Quote
                </Link>
                <a href="tel:+917064015397"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "11px 18px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}