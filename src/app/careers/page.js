"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jobOpenings } from "@/data/jobs";


export default function CareersPage() {
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", position: "", experience: "", message: "",
  });

  const hasOpenings = jobOpenings.length > 0;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name.trim() || !form.phone.trim() || !form.city.trim()) {
    alert("Please fill in Name, Phone and Current City.");
    return;
  }

  setLoading(true);
  try {
    // Single notification to HR only, no thank-you email (free plan)
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE,
      {
        name: form.name,
        company: "Job Application",
        phone: form.phone,
        user_email: form.email || "—",
        city: form.city || "—",
        service: `Position: ${form.position || "General"} | Experience: ${form.experience || "—"}`,
        message: form.message || "—",
        admin_email: "hr@bhushangroups.com",
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    setApplied(true);
  } catch (err) {
    console.error("EmailJS error:", err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const benefits = [
    { icon: "/deposit.png", title: "On-time Salary", desc: "Salary credited on time every month without fail", color: "#2A6EBB", lightColor: "#EFF6FF" },
    { icon: "/ESIC-Color.png", title: "ESI & PF", desc: "Full medical coverage and provident fund benefits", color: "#065F46", lightColor: "#ECFDF5" },
    { icon: "/uniform.png", title: "Uniform & Equipment", desc: "Full uniform kit and required equipment provided", color: "#7C3AED", lightColor: "#F5F3FF" },
    { icon: "/training.png", title: "Training", desc: "160+ hours professional training before deployment", color: "#B45309", lightColor: "#FFF7ED" },
    { icon: "/growth.png", title: "Growth", desc: "Clear promotion path from guard to supervisor to manager", color: "#BE185D", lightColor: "#FDF2F8" },
    { icon: "/accomodation.png", title: "Accommodation", desc: "Accommodation assistance for outstation postings", color: "#0891B2", lightColor: "#ECFEFF" },
  ];

  const inputStyle = {
    background: "#F8FAFC",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#0D1B2A",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#6B7280",
    fontWeight: 600,
    letterSpacing: "0.5px",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes bellRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-12deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-6deg); }
          80% { transform: rotate(4deg); }
        }

        .careers-hero { padding-top: 70px; background: #fff; }
        .careers-hero-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; align-items: stretch; }
        .careers-hero-img { position: relative; overflow: hidden; background: #0D1B2A; min-height: 460px; animation: fadeSlideRight 0.8s ease both; }
        .careers-hero-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .careers-hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, #0D1B2Acc 0%, #2A6EBB55 100%); }
        .careers-hero-content { padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; animation: fadeSlideLeft 0.8s ease 0.2s both; }
        .careers-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 16px; }
        .careers-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 28px; }
        .careers-stat-card { padding: 20px; border-radius: 12px; border: 1px solid #E5E7EB; transition: all 0.25s ease; cursor: default; }
        .careers-stat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

        .careers-benefits { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .careers-benefits-inner { max-width: 1280px; margin: 0 auto; }
        .careers-benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .careers-benefit-card { border-radius: 16px; padding: 28px; border: 1.5px solid #E5E7EB; background: #fff; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); cursor: default; position: relative; overflow: hidden; }

        .careers-openings { padding: 100px 40px; background: #fff; border-top: 1px solid #E5E7EB; }
        .careers-openings-inner { max-width: 1280px; margin: 0 auto; }
        .job-card { background: #F8FAFC; border: 1px solid #E5E7EB; border-radius: 16px; padding: 32px; display: grid; grid-template-columns: 1.5fr 1fr 1fr auto; gap: 32px; align-items: center; transition: all 0.25s ease; }
        .job-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(42,110,187,0.1); border-color: #2A6EBB; }

        /* Empty state */
        .careers-empty { text-align: center; padding: 80px 40px; background: #F8FAFC; border: 1.5px dashed #CBD5E1; border-radius: 20px; }

        .careers-form { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .careers-form-inner { max-width: 800px; margin: 0 auto; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .section-tag { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .section-h2 { font-size: 40px; font-weight: 900; color: #0D1B2A; letter-spacing: -0.5px; margin-bottom: 8px; }
        .section-sub { font-size: 15px; color: #9CA3AF; margin-bottom: 48px; }

        @media (max-width: 1024px) {
          .careers-hero-inner { grid-template-columns: 1fr; }
          .careers-hero-img { min-height: 280px; }
          .careers-hero-content { padding: 40px 32px; }
          .careers-hero-h1 { font-size: 36px; }
          .careers-benefits { padding: 80px 24px; }
          .careers-benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .careers-openings { padding: 80px 24px; }
          .job-card { grid-template-columns: 1fr 1fr; gap: 20px; }
          .careers-form { padding: 80px 24px; }
        }
        @media (max-width: 768px) {
          .careers-hero-img { min-height: 220px; }
          .careers-hero-content { padding: 28px 20px; }
          .careers-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .careers-stats-grid { grid-template-columns: 1fr 1fr; }
          .careers-benefits { padding: 60px 16px; }
          .careers-benefits-grid { grid-template-columns: 1fr 1fr; }
          .careers-openings { padding: 60px 16px; }
          .job-card { grid-template-columns: 1fr; gap: 16px; padding: 24px; }
          .careers-form { padding: 60px 16px; }
          .form-grid { grid-template-columns: 1fr; }
          .section-h2 { font-size: 28px; }
          .careers-empty { padding: 56px 24px; }
        }
      `}</style>

      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-hero-inner">

          {/* Left Image */}
          <div className="careers-hero-img">
            <img src="/careers.jpg" alt="BSF team members" />
            <div className="careers-hero-img-overlay" />

            <div style={{ position: "absolute", top: "24px", left: "24px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", padding: "8px 16px", borderRadius: "100px" }}>
              <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>WE'RE HIRING</span>
            </div>

            

            <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px", fontWeight: 600 }}>Bhushan Security</div>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>Our People, Our Pride</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="careers-hero-content">
            <div className="section-tag">
              <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Careers</span>
            </div>

            <h1 className="careers-hero-h1">
              Join the BSF<br />
              <span style={{ color: "#2A6EBB" }}>Family</span>
            </h1>

            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
              Build a stable, rewarding career in security and facility management. We offer on-time salary, ESI/PF benefits, professional training and clear growth paths.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#openings" style={{ background: "#2A6EBB", color: "#fff", padding: "13px 26px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                View Openings
              </a>
              <a href="tel:+917064015397" style={{ border: "1.5px solid #E5E7EB", color: "#0D1B2A", padding: "13px 22px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", textDecoration: "none" }}>
                📞 Call HR
              </a>
            </div>

            {/* Stats */}
            <div className="careers-stats-grid">
              {[
                { num: "500+", label: "Team Members", icon: "/guard.png", color: "#2A6EBB", lightColor: "#EFF6FF" },
                { num: "160+", label: "Hours Training", icon: "/training.png", color: "#065F46", lightColor: "#ECFDF5" },
                { num: "100%", label: "PF & ESI", icon: "/EPFO-Color.png", color: "#7C3AED", lightColor: "#F5F3FF" },
                { num: "4+", label: "Years of Trust", icon: "/trust.png", color: "#B45309", lightColor: "#FFF7ED" },
              ].map((s) => (
                <div key={s.label} className="careers-stat-card" style={{ background: s.lightColor, borderColor: `${s.color}20` }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px", display: "flex", alignItems: "center" }}>
  {s.icon.includes(".") ? (
    <img src={s.icon} alt={s.label} style={{ width: "24px", height: "24px", objectFit: "contain" }} />
  ) : (
    s.icon
  )}
</div>
                  <div style={{ fontSize: "26px", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
<section className="careers-benefits">
  <div className="careers-benefits-inner">
    <div className="section-tag">
      <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
      <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Why Join Us</span>
    </div>
    <h2 className="section-h2">Employee Benefits</h2>
    <p className="section-sub">What you get when you work with Bhushan Security</p>

    <div className="careers-benefits-grid">
      {benefits.map((b, i) => {
        const isHov = hoveredBenefit === i;
        return (
          <div key={b.title} className="careers-benefit-card"
            onMouseEnter={() => setHoveredBenefit(i)}
            onMouseLeave={() => setHoveredBenefit(null)}
            style={{
              background: isHov ? b.lightColor : "#fff",
              borderColor: isHov ? b.color : "#E5E7EB",
              boxShadow: isHov ? `0 20px 40px ${b.color}18` : "0 1px 4px rgba(0,0,0,0.04)",
              transform: isHov ? "translateY(-6px)" : "translateY(0)",
            }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: b.color, transform: isHov ? "scaleX(1)" : "scaleX(0.3)", transformOrigin: "left", transition: "transform 0.3s ease", borderRadius: "16px 16px 0 0" }} />
            
            {/* Updated Icon Box */}
            <div style={{ width: "52px", height: "52px", background: isHov ? b.color : b.lightColor, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "18px", transition: "all 0.3s ease" }}>
              {b.icon.includes(".") ? (
                <img src={b.icon} alt={b.title} style={{ width: "26px", height: "26px", objectFit: "contain" }} />
              ) : (
                b.icon
              )}
            </div>

            <div style={{ fontSize: "16px", fontWeight: 800, color: isHov ? b.color : "#0D1B2A", marginBottom: "8px", transition: "color 0.3s ease" }}>{b.title}</div>
            <div style={{ fontSize: "13px", color: isHov ? "#374151" : "#6B7280", lineHeight: 1.7 }}>{b.desc}</div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Job Openings — DYNAMIC */}
      <section id="openings" className="careers-openings">
        <div className="careers-openings-inner">
          <div className="section-tag">
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              {hasOpenings ? `${jobOpenings.length} Open Position${jobOpenings.length > 1 ? "s" : ""}` : "Open Positions"}
            </span>
          </div>
          <h2 className="section-h2">Current Openings</h2>
          <p className="section-sub">
            {hasOpenings ? "Apply below for any of our current openings" : "Check back soon — new openings are posted regularly"}
          </p>

          {hasOpenings ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {jobOpenings.map((job, i) => {
                const isHov = hoveredJob === i;
                return (
                  <div key={job.id || job.title} className="job-card"
                    onMouseEnter={() => setHoveredJob(i)}
                    onMouseLeave={() => setHoveredJob(null)}
                    style={{ borderLeftWidth: "4px", borderLeftColor: "#2A6EBB" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0D1B2A" }}>{job.title}</h3>
                        <span style={{ background: "#EFF6FF", color: "#2A6EBB", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "100px" }}>{job.type}</span>
                      </div>
                      <div style={{ fontSize: "14px", color: "#2A6EBB", fontWeight: 700 }}>{job.salary}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#9CA3AF", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>Locations</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {job.locations.map((l) => (
                          <span key={l} style={{ background: "#fff", border: "1px solid #E5E7EB", padding: "3px 10px", borderRadius: "100px", fontSize: "11px", color: "#6B7280" }}>{l}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#9CA3AF", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>Requirements</div>
                      {job.requirements.map((r) => (
                        <div key={r} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                          <div style={{ width: "4px", height: "4px", background: "#2A6EBB", borderRadius: "50%", flexShrink: 0 }}></div>
                          <span style={{ fontSize: "12px", color: "#6B7280" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#apply" style={{ background: "#2A6EBB", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap", textAlign: "center" }}>
                      Apply Now
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="careers-empty">
              <div style={{ fontSize: "48px", marginBottom: "16px", display: "inline-block", animation: "bellRing 2s ease-in-out 0.5s" }}>🔔</div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0D1B2A", marginBottom: "10px" }}>No Openings Right Now</h3>
              <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto 24px" }}>
                We don't have any active job postings at the moment. But we're always growing — submit your details below and we'll reach out the moment a matching role opens up.
              </p>
              <a href="#apply" style={{ display: "inline-block", background: "#2A6EBB", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Submit Your Profile Anyway
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="careers-form">
        <div className="careers-form-inner">
          <div className="section-tag">
            <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
            <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Apply Now</span>
          </div>
          <h2 className="section-h2">
            {hasOpenings ? "Submit Your Application" : "Submit Your Profile"}
          </h2>
          <p className="section-sub">
            {hasOpenings ? "Fill in your details and our HR team will reach out within 3 working days" : "We'll keep your profile on file and contact you when a suitable role opens up"}
          </p>

          <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderTop: "3px solid #2A6EBB", borderRadius: "16px", padding: "48px" }}>
            {applied ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "72px", height: "72px", background: "#EFF6FF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 20px" }}>🎉</div>
                <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0D1B2A", marginBottom: "12px" }}>
                  {hasOpenings ? "Application Received!" : "Profile Received!"}
                </h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, maxWidth: "340px", margin: "0 auto" }}>
                  {hasOpenings
                    ? "Thank you for applying. Our HR team will review your application and contact you within 3 working days."
                    : "Thank you for your interest. We'll keep your profile on file and reach out as soon as a matching position opens up."}
                </p>
                <button
                  onClick={() => { setApplied(false); setForm({ name: "", phone: "", email: "", city: "", position: "", experience: "", message: "" }); }}
                  style={{ marginTop: "28px", background: "#2A6EBB", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer" }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <div className="form-grid">
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Current City *</label>
                  <input name="city" value={form.city} onChange={handleChange} placeholder="Your city" style={inputStyle} />
                </div>

                {hasOpenings ? (
                  <div>
                    <label style={labelStyle}>Position Applied For *</label>
                    <select name="position" value={form.position} onChange={handleChange}
                      style={{ ...inputStyle, color: form.position ? "#0D1B2A" : "#9CA3AF" }}>
                      <option value="">Select position</option>
                      {jobOpenings.map(j => <option key={j.id || j.title} value={j.title}>{j.title}</option>)}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label style={labelStyle}>Area of Interest</label>
                    <input name="position" value={form.position} onChange={handleChange} placeholder="e.g. Security Guard, Supervisor, Office Staff" style={inputStyle} />
                  </div>
                )}

                <div>
                  <label style={labelStyle}>Years of Experience</label>
                  <select name="experience" value={form.experience} onChange={handleChange}
                    style={{ ...inputStyle, color: form.experience ? "#0D1B2A" : "#9CA3AF" }}>
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-2">1–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Additional Information</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about yourself, previous experience, preferred location..."
                    style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <button onClick={handleSubmit} disabled={loading}
                    style={{ width: "100%", background: loading ? "#93C5FD" : "#2A6EBB", color: "#fff", padding: "16px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", border: "none", cursor: loading ? "not-allowed" : "pointer" }}>
                    {loading ? "Submitting..." : hasOpenings ? "Submit Application" : "Submit Profile"}
                  </button>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", textAlign: "center", marginTop: "12px" }}>
                    We respond within 3 working days · All applications are confidential
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}