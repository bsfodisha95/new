"use client";
import Image from "next/image";

export default function Compliance() {
  const badges = [
    { icon: "/India.png", title: "PSARA License", sub: "State-wise valid" },
    { icon: "/iso.png", title: "ISO 9001:2015", sub: "Quality certified" },
    { icon: "/gst.png", title: "GST Registered", sub: "Pan India billing" },
    { icon: "/EPFO_Logo.png", title: "PF & ESI", sub: "Labour compliant" },
  ];

  return (
    <section style={{ background: "#F8FAFC", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
      <style>{`
        .compliance-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .compliance-badge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 1024px) {
          .compliance-inner { padding: 80px 24px; gap: 48px; }
        }
        @media (max-width: 768px) {
          .compliance-inner { grid-template-columns: 1fr; padding: 60px 16px; gap: 40px; }
        }
      `}</style>

      <div className="compliance-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }}></div>
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Compliance</span>
          </div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: "#0D1B2A", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "20px" }}>
            Fully Licensed<br />& Compliant
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "16px" }}>
            Every certificate maintained and available for your vendor audit instantly. We make empanelment easy for your procurement and legal teams.
          </p>
          <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.8 }}>
            Compliant with Contract Labour Act, Minimum Wages Act and all applicable state PSARA regulations.
          </p>
        </div>

        <div className="compliance-badge-grid">
          {badges.map((b) => (
            <div key={b.title} style={{ background: "#fff", border: "1px solid #E5E7EB", borderLeft: "3px solid #2A6EBB", borderRadius: "10px", padding: "20px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "42px", height: "42px", background: "#EFF6FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, position: "relative" }}>
                {b.icon.startsWith('/') ? (
                  <Image src={b.icon} alt={b.title} width={24} height={24} style={{ objectFit: "contain" }} />
                ) : (
                  b.icon
                )}
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0D1B2A", marginBottom: "3px" }}>{b.title}</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF" }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}