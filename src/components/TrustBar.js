"use client";

export default function TrustBar() {
  const clients = [
    { name: "Jio bp", type: "Energy, Fuels, and Mobility sector", image: "/jio bp.png" },
    { name: "Gemcokati", type: "Mining and Mineral exploration", image: "/gemcokati-logo.png" },
    { name: "KFC", type: "Fast Food Restaurant Industry", image: "/KFC logo.png" },
    { name: "Aparna World School", type: "Education ", image: "/Aparna World School Logo.jpg" },
    { name: "Global Associates", type: " Privately Held", image: "/Global Associates logo.gif" },
    { name: "Ashoka Leyland", type: "Automotive Manufacturing Company", image: "/ashok-leyland.png" },
    { name: "Araya", type: "Mining & Metals / Manufacturing", image: "/Araya.jpg" },
    { name: "Arayan Ispat", type: "Power, Iron & Steel", image: "/aryan.jpg" },
    { name: "MSP", type: "Steel & Power", image: "/MSP.jpg" },
    { name: "TATA Motors", type: "Samal Showroom", image: "/tata motors.png" },
    {name: "Aomotive Manufactures", type: "Automotive and Mobility sector", image:"/Automotive-logo.png"},
    {name:"Deputy Director of Mines, Joda Circle, Keonjhar", type:"Odisha, Mines", image:"/logo-odisha.png"},
    {name:"Suncity Palace", type:"Hotel/Palace",image:"/suncity-palace.png"},
    {name:"Shiva Multiplex", type:"Multiplex", image:"/shiva_multiplex.jpg"},
  ];
  const doubled = [...clients, ...clients];

  return (
    <div style={{ borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", background: "#F8FAFC", padding: "24px 0" }}>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track {
          display: flex;
          gap: 12px;
          width: max-content;
          padding: 0 12px;
          animation: scrollLeft 30s linear infinite;
        }
        .scroll-track:hover { animation-play-state: paused; }
        .trust-header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 768px) {
          .trust-header-inner { padding: 0 16px; }
          .client-card-name { font-size: 11px !important; }
          .client-card-type { display: none; }
          .client-card { min-width: 120px !important; padding: 10px 14px !important; }
        }
      `}</style>

      <div className="trust-header-inner">
        <span style={{ fontSize: "11px", color: "#9CA3AF", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, whiteSpace: "nowrap" }}>Trusted By</span>
        <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }}></div>
        <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 600, whiteSpace: "nowrap" }}>50+ Companies</span>
      </div>

      <div style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to right, #F8FAFC, transparent)", zIndex: 2, pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to left, #F8FAFC, transparent)", zIndex: 2, pointerEvents: "none" }}></div>
        <div className="scroll-track">
          {doubled.map((client, i) => (
            <div key={i} className="client-card" style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "12px 18px", display: "flex", alignItems: "center", gap: "12px", minWidth: "170px", flexShrink: 0 }}>
              {/* Updated Image Rendering */}
              <img 
                src={client.image} 
                alt={client.name} 
                style={{ width: "36px", height: "36px", objectFit: "contain", flexShrink: 0 }} 
              />
              <div>
                <div className="client-card-name" style={{ fontSize: "12px", fontWeight: 700, color: "#0D1B2A" }}>{client.name}</div>
                <div className="client-card-type" style={{ fontSize: "10px", color: "#9CA3AF" }}>{client.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}