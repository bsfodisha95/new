import Link from "next/link";

export default function CTA() {
  return (
    <section style={{ background: "#0D1B2A" }}>
      <style>{`
        .cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }
        .cta-title { font-size: 36px; font-weight: 900; color: #fff; letter-spacing: -0.5px; margin-bottom: 8px; }
        .cta-sub { font-size: 15px; color: rgba(255,255,255,0.45); }
        .cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        @media (max-width: 1024px) {
          .cta-inner { padding: 60px 24px; }
          .cta-title { font-size: 28px; }
        }
        @media (max-width: 768px) {
          .cta-inner { padding: 48px 16px; flex-direction: column; align-items: flex-start; }
          .cta-title { font-size: 24px; }
          .cta-btns { width: 100%; flex-direction: column; }
          .cta-btns a { text-align: center; }
        }
      `}</style>

      <div className="cta-inner">
        <div>
          <div className="cta-title">Ready to Secure Your Business?</div>
          <div className="cta-sub">Free site assessment and custom security proposal within 24 hours</div>
        </div>
        <div className="cta-btns">
          <Link href="/contact"
            style={{ background: "#2A6EBB", color: "#fff", padding: "16px 36px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
            Get Free Quote Today
          </Link>
          <a href="tel:+917979XXXXXX"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}