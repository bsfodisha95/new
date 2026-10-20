"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Services", "Industries", "About", "Compliance", "Cities", "Careers"];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-link-item {
          color: rgba(255,255,255,0.55);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.3px;
        }
        .nav-link-item:hover {
          color: #fff;
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .mobile-link:hover {
          color: #fff;
          padding-left: 6px;
        }
        .mobile-link:last-of-type {
          border-bottom: none;
        }
      `}</style>

      <nav style={{
        background: scrolled ? "rgba(13,27,42,0.98)" : "#0D1B2A",
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "70px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.15)" : "none",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
            <img src="/logo.png" alt="BSF Logo" style={{ width: "44px", height: "44px", objectFit: "contain" }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: "13px", letterSpacing: "1.5px", color: "#fff", lineHeight: 1.2 }}>BHUSHAN SECURITY</div>
              <div style={{ fontSize: "9px", color: "#6B7280", letterSpacing: "0.5px" }}>& FACILITIES MANAGEMENT SERVICES (P) LTD</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}
            className="hidden-mobile">
            {navLinks.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="nav-link-item">
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}
            className="hidden-mobile">
            <a href="tel:+9170640715397"
              style={{ color: "#2A6EBB", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "14px" }}>📞</span> Call Now
            </a>
            <Link href="/contact"
              style={{ background: "#2A6EBB", color: "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, textDecoration: "none", transition: "background 0.2s ease" }}>
              Get Free Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "center", justifyContent: "center" }}
            className="show-mobile"
            aria-label="Toggle menu">
            <span className="hamburger-line" style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? "0px" : "22px" }} />
            <span className="hamburger-line" style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
              zIndex: 98, animation: "fadeIn 0.2s ease",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Drawer */}
          <div style={{
            position: "fixed", top: "70px", left: 0, right: 0,
            background: "#0D1B2A",
            zIndex: 99,
            padding: "16px 24px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            animation: "slideDown 0.25s ease",
            boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
          }}>

            {/* Nav Links */}
            <div style={{ marginBottom: "20px" }}>
              {[...navLinks, "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}>
                  <span>{item}</span>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "16px" }}>›</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                style={{ display: "block", background: "#2A6EBB", color: "#fff", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textAlign: "center", textDecoration: "none" }}>
                Get Free Quote
              </Link>
              <a href="tel:+91706415397"
                style={{ display: "block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "14px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textAlign: "center", textDecoration: "none" }}>
                📞 Call Now
              </a>
            </div>

            {/* Bottom tagline */}
            <p style={{ fontSize: "11px", color: "#4B5563", textAlign: "center", marginTop: "20px", fontStyle: "italic" }}>
              सेवा ही कर्म है — Service is Our Duty
            </p>
          </div>
        </>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}