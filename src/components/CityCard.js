"use client";
import Link from "next/link";

export default function CityCard({ city }) {
  return (
    <Link href={`/cities/${city.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderTop: "2px solid rgba(201,168,76,0.3)",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <span style={{ background: "rgba(201,168,76,0.15)", color: " #c9a84c", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "100px" }}>
            {city.tag}
          </span>
          <span style={{ color: " #c9a84c", fontSize: "18px" }}>→</span>
        </div>
        <div style={{ fontSize: "24px", fontWeight: 900, color: " #c9a84c", marginBottom: "6px" }}>{city.name}</div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{city.state}</div>
      </div>
    </Link>
  );
}