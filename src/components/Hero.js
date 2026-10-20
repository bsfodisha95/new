"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const num = parseInt(target.replace(/\D/g, ""));
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    const scanTimer = setTimeout(() => setScanning(true), 800);
    return () => { clearTimeout(timer); clearTimeout(scanTimer); };
  }, []);

  const stats = [
    { num: "50+", label: "CLIENTS" },
    { num: "500+", label: "GUARDS" },
    { num: "3+", label: "YEARS" },
    { num: "4+", label: "STATES" },
  ];

  const features = [
    { icon: "/India.png", title: "PSARA Licensed", desc: "Compliant across all states" },
    { icon: "/iso.png", title: "ISO 9001:2015", desc: "Quality certified" },
    { icon: "/gunman.png", title: "Trained Guards", desc: "160+ hours training" },
    { icon: "/cctv.png", title: "24/7 Control Room", desc: "Always monitoring" },
  ];

  const c1 = useCountUp("50", 2000, visible);
  const c2 = useCountUp("500", 2200, visible);
  const c3 = useCountUp("3", 1800, visible);
  const c4 = useCountUp("4", 1600, visible);
  const counts = [c1, c2, c3, c4];

  return (
    <section style={{ background: "#fff", paddingTop: "70px", borderBottom: "1px solid #F3F4F6", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scanLine {
          0% { top: 0%; opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes countBlur {
          from { filter: blur(8px); opacity: 0; }
          to { filter: blur(0px); opacity: 1; }
        }
        .btn-primary-anim {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          display: inline-block;
        }
        .btn-primary-anim:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(42,110,187,0.3);
        }
        .btn-outline-anim {
          transition: transform 0.15s ease, background 0.15s ease;
          display: inline-block;
        }
        .btn-outline-anim:hover {
          transform: translateY(-2px);
          background: #F8FAFC;
        }
        .feature-card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .feature-card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(42,110,187,0.1);
          border-color: #2A6EBB !important;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-stats-row {
          display: flex;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid #F3F4F6;
        }
        .hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .why-bsf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 1024px) {
          .hero-inner {
            padding: 60px 24px;
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 40px 16px 48px;
            gap: 32px;
          }
          .hero-h1-anim {
            font-size: 36px !important;
            letter-spacing: -1px !important;
          }
          .hero-img-container {
            height: 240px !important;
          }
          .hero-stats-row {
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 28px;
            padding-top: 24px;
          }
          .hero-stat-item {
            min-width: 80px;
          }
          .hero-btns {
            flex-direction: column;
          }
          .hero-btns a, .hero-btns button {
            text-align: center;
          }
          .why-bsf-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <div className="hero-inner">
        <div>
          <div style={{
  display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px",
  opacity: visible ? 1 : 0,
  animation: visible ? "fadeSlideRight 0.6s ease forwards" : "none",
}}>
  <div style={{ width: "32px", height: "2px", background: "#2A6EBB" }}></div>
  <span style={{ fontSize: "12px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
    PSARA Licensed · ISO Certified · Pan India
  </span>
</div>

          <div style={{ marginBottom: "10px" }}>
            {["We Guard", "Because", "You Trust"].map((line, i) => (
              <div key={line} className="hero-h1-anim" style={{
                display: "block",
                fontSize: i === 2 ? "60px" : "56px",
                fontWeight: 900,
                lineHeight: 1.0,
                color: i === 2 ? "#2A6EBB" : "#0D1B2A",
                letterSpacing: "-1.5px",
                opacity: visible ? 1 : 0,
                animation: visible ? `fadeSlideUp 0.7s ease ${0.1 + i * 0.12}s both` : "none",
              }}>
                {line}
              </div>
            ))}
          </div>

          <p style={{
            fontSize: "13px", color: "#9CA3AF", marginBottom: "16px",
            fontStyle: "italic", letterSpacing: "0.5px",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.7s ease 0.5s both" : "none",
          }}>
            सेवा ही कर्म है — Service is Our Duty
          </p>

          <p style={{
            fontSize: "15px", color: "#6B7280", lineHeight: 1.75,
            marginBottom: "32px", maxWidth: "420px",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.7s ease 0.6s both" : "none",
          }}>
            Professional security guards, facility management and protection services trusted by 50+ corporates across India.
          </p>

          <div className="hero-btns" style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.7s ease 0.7s both" : "none",
          }}>
            <Link href="/contact" className="btn-primary-anim"
              style={{ background: "#2A6EBB", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Get Free Quote
            </Link>
            <a href="tel:+917064015397" className="btn-outline-anim"
              style={{ border: "1.5px solid #D1D5DB", color: "#0D1B2A", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              📞 Call Now
            </a>
          </div>

          <div className="hero-stats-row" style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.7s ease 0.8s both" : "none",
          }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className="hero-stat-item" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ paddingRight: "24px" }}>
                  <div style={{
                    fontSize: "28px", fontWeight: 900, color: "#2A6EBB", lineHeight: 1,
                    animation: visible ? `countBlur 0.5s ease ${0.8 + i * 0.1}s both` : "none",
                  }}>
                    {counts[i]}+
                  </div>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "3px", letterSpacing: "0.5px" }}>{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: "1px", height: "36px", background: "#E5E7EB", marginRight: "24px" }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: "flex", flexDirection: "column", gap: "16px",
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeSlideLeft 0.8s ease 0.3s both" : "none",
        }}>

          <div className="hero-img-container" style={{
            position: "relative", borderRadius: "14px", overflow: "hidden", height: "320px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}>
            <Image 
              src="/hero.jpeg" 
              alt="Security Operations" 
              fill 
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div style={{ background: "#F8FAFC", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
              <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }}></div>
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Why Choose Bhushan Security</span>
            </div>
            <div className="why-bsf-grid">
              {features.map((f, i) => (
                <div key={f.title} className="feature-card-hover" style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "12px",
                  opacity: visible ? 1 : 0,
                  animation: visible ? `fadeSlideUp 0.5s ease ${0.9 + i * 0.1}s both` : "none",
                }}>
                  <div style={{ width: "34px", height: "34px", background: "#EFF6FF", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0, position: "relative" }}>
                    {f.icon.startsWith("/") ? (
                      <Image src={f.icon} alt={f.title} width={20} height={20} style={{ objectFit: "contain" }} />
                    ) : (
                      f.icon
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0D1B2A", marginBottom: "2px" }}>{f.title}</div>
                    <div style={{ fontSize: "11px", color: "#9CA3AF", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}