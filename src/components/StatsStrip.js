export default function StatsStrip() {
  const stats = [
    { num: "50+", label: "Active Clients" },
    { num: "500+", label: "Trained Guards" },
    { num: "3+", label: "Years Experience" },
    { num: "4+", label: "States Covered" },
  ];

  return (
    <div style={{ background: "#2A6EBB", padding: "48px 40px" }}>
      <style>{`
        .stats-strip-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          text-align: center;
        }
        .stats-strip-item {
          border-right: 1px solid rgba(255,255,255,0.2);
          padding: 0 20px;
        }
        .stats-strip-item:last-child { border-right: none; }
        .stats-strip-num {
          font-size: 40px;
          font-weight: 900;
          color: #fff;
          line-height: 1;
        }
        .stats-strip-label {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin-top: 6px;
          letter-spacing: 0.5px;
        }
        @media (max-width: 768px) {
          .stats-strip-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .stats-strip-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 20px; }
          .stats-strip-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.2); }
          .stats-strip-item:nth-last-child(-n+2) { border-bottom: none; }
          .stats-strip-num { font-size: 32px; }
        }
      `}</style>
      <div className="stats-strip-grid">
        {stats.map((s) => (
          <div key={s.label} className="stats-strip-item">
            <div className="stats-strip-num">{s.num}</div>
            <div className="stats-strip-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}