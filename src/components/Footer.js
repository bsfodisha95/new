import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0D1B2A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <style>{`
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px 40px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 1024px) {
          .footer-inner { padding: 60px 24px 32px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .footer-inner { padding: 48px 16px 28px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img src="/logo.png" alt="BSF Logo" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: "13px", letterSpacing: "1.5px", color: "#fff" }}>BHUSHAN SECURITY</div>
                <div style={{ fontSize: "9px", color: "#6B7280" }}>& FACILITIES MANAGEMENT SERVICES (P) LTD</div>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.8, marginBottom: "12px", maxWidth: "260px" }}>
              PSARA licensed, ISO certified security and facility management services. Trusted by 200+ clients across India since 2008.
            </p>
            <p style={{ fontSize: "13px", color: "#4B5563", fontStyle: "italic" }}>सेवा ही कर्म है</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
             <a href="https://wa.me/917064015397" target="_blank" rel="noreferrer" 
             style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "#fff", padding: "8px 14px", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", }}>
              <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />WhatsApp </a>
              <a href="tel:+917064015397" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.08)", color: "#fff", padding: "8px 14px", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", }}>
                <img src="/call.png" alt="Call" style={{ width: "40px", height: "40px", objectFit: "contain", }}/> Call</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Services</div>
            {[
              { label: "Security Guards", href: "/services/security-guards" },
              { label: "Industrial Security", href: "/services/industrial-security" },
              { label: "Corporate Security", href: "/services/corporate-security" },
              { label: "Facility Management", href: "/services/facility-management" },
              { label: "Event Security", href: "/services/event-security" },
              { label: "Surveillance", href: "/services/surveillance" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                style={{ display: "block", fontSize: "13px", color: "#6B7280", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Company</div>
            {[
              { label: "About Us", href: "/about" },
              { label: "Compliance", href: "/compliance" },
              { label: "Cities", href: "/cities" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                style={{ display: "block", fontSize: "13px", color: "#6B7280", textDecoration: "none", marginBottom: "10px" }}>
                {item.label}
              </Link>
            ))}
          </div>

        
          {/* Contact */}
          <div>
            <div style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Contact</div>
            {[
              { id: "phone1", icon: "📞", value: "+91-70640-15397 / +91-72053-45397", href: "tel:+917064015397" },
              { id: "email1", icon: "✉️", value: "hr@bhushangroups.com", href: "mailto:hr@bhushangroups.com" },
              { id: "email2", icon: "✉️", value: "operation@bhushangroups.com", href: "mailto:operation@bhushangroups.com" },
              { id: "loc1", icon: "📍", value: "Gayatri Bihar, Near Old Bus Stand Jharsuguda Odisha, india - 768202", href: null },
             ].map((c) => (
             <div key={c.id} style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              <span style={{ fontSize: "14px" }}>{c.icon}</span>
              {c.href ? (
                <a href={c.href} style={{ fontSize: "13px", color: "#6B7280", textDecoration: "none" }}>{c.value}</a>) : (
                <span style={{ fontSize: "13px", color: "#6B7280" }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="footer-bottom">
          <div style={{ fontSize: "12px", color: "#4B5563" }}>
            © {new Date().getFullYear()} Bhushan Security & Facilities Management Services Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: "12px", color: "#4B5563" }}>
            PSARA Licensed · ISO 9001:2015 · GST Registered
          </div>
        </div>
      </div>
    </footer>
  );
}