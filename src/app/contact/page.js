"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const ADMIN_EMAILS = ["operation@bhushangroups.com", "hr@bhushangroups.com"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", city: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the fields marked with *
    if (!form.name.trim() || !form.phone.trim() || !form.city || !form.service) {
      alert("Please fill in Name, Phone, City and Service.");
      return;
    }
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const enquiryParams = {
      name: form.name,
      company: form.company || "—",
      phone: form.phone,
      user_email: form.email || "—",
      city: form.city,
      service: form.service,
      message: form.message || "—",
    };

    try {
      // One send per admin. allSettled so one failure doesn't block the other.
      const results = await Promise.allSettled(
        ADMIN_EMAILS.map((admin_email) =>
          emailjs.send(
            serviceId,
            process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE,
            { ...enquiryParams, admin_email },
            publicKey
          )
        )
      );

      results.forEach((r, i) => {
        if (r.status === "rejected") {
          console.error(`EmailJS failed for ${ADMIN_EMAILS[i]}:`, r.reason);
        }
      });

      // Fail only if neither admin received it
      if (results.every((r) => r.status === "rejected")) {
        throw new Error("All admin notifications failed");
      }

      // Thank-you email to the client (failure here doesn't fail the submit)
      if (form.email) {
        try {
          await emailjs.send(
            serviceId,
            process.env.NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE,
            {
              name: form.name,
              user_email: form.email,
              service: form.service,
              city: form.city,
            },
            publicKey
          );
        } catch (err) {
          console.error("Thank-you email failed:", err);
        }
      }

      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Security Guard", "Bouncer & Bodyguard", "Escort Guard", "Dog Squad Service",
    "Front & Back Office Manpower", "Event Staffing", "Pantry Boy", "Facility Management", "Other",
  ];

  const cities = [
    "Jharsuguda", "Ranchi", "Dhanbad", "Kolkata", "Patna", "Raipur", "Other",
  ];

  const contactCards = [
    { icon: "📞", label: "Phone", value: "+91-70640-15397", href: "tel:+917064015397", color: "#2A6EBB", lightColor: "#EFF6FF" },
    { icon: "📞", label: "Phone 2", value: "+91-72053-45397", href: "tel:+917205345397", color: "#065F46", lightColor: "#ECFDF5" },
    { icon: "/mail.png", label: "Email", value: "operation@bhushangroups.com", href: "mailto:operation@bhushangroups.com", color: "#7C3AED", lightColor: "#F5F3FF" },
    { icon: "/location1.png", label: "Head Office", value: "Jharsuguda, Odisha, India", href: null, color: "#B45309", lightColor: "#FFF7ED" },
  ];

  const inputStyle = {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#0D1B2A",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#6B7280",
    fontWeight: 600,
    letterSpacing: "0.5px",
    marginBottom: "6px",
    display: "block",
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
        @keyframes checkPop {
          0% { transform: scale(0); }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .contact-hero { padding-top: 70px; background: #fff; }
        .contact-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 60vh; align-items: stretch;
        }
        .contact-hero-img { position: relative; overflow: hidden; background: #0D1B2A; min-height: 320px; animation: fadeSlideRight 0.8s ease both; }
        .contact-hero-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .contact-hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, #0D1B2Acc 0%, #2A6EBB55 100%); }
        .contact-hero-content { padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; animation: fadeSlideLeft 0.8s ease 0.2s both; }
        .contact-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 16px; }

        .contact-main { padding: 80px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .contact-main-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: start; }

        .contact-info-card {
          display: flex; gap: 14px; padding: 18px;
          border-radius: 12px; border: 1.5px solid #E5E7EB; background: #fff;
          margin-bottom: 12px; transition: all 0.25s ease; cursor: default;
          text-decoration: none;
        }
        .contact-info-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,0.08); }

        .contact-quick-action {
          display: flex; align-items: center; gap: 12px;
          border-radius: 10px; padding: 14px 18px;
          text-decoration: none; transition: all 0.25s ease;
          margin-bottom: 10px;
        }
        .contact-quick-action:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }

        .contact-form-card {
          background: #fff; border: 1.5px solid #E5E7EB;
          border-radius: 20px; padding: 48px;
          position: relative; overflow: hidden;
        }
        .contact-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-input-wrap input:focus, .form-input-wrap select:focus, .form-input-wrap textarea:focus {
          border-color: #2A6EBB !important;
          box-shadow: 0 0 0 3px rgba(42,110,187,0.1);
        }

        .submit-btn { transition: all 0.2s ease; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(42,110,187,0.3); }

        .contact-map { padding: 80px 40px; background: #fff; }
        .contact-map-inner { max-width: 1280px; margin: 0 auto; }
        .contact-map-banner {
          background: #0D1B2A; border-radius: 20px; padding: 60px;
          text-align: center; position: relative; overflow: hidden;
        }

        @media (max-width: 1024px) {
          .contact-hero-inner { grid-template-columns: 1fr; }
          .contact-hero-img { min-height: 260px; }
          .contact-hero-content { padding: 40px 32px; }
          .contact-hero-h1 { font-size: 36px; }
          .contact-main { padding: 60px 24px; }
          .contact-main-inner { grid-template-columns: 1fr; gap: 40px; }
          .contact-map { padding: 60px 24px; }
        }
        @media (max-width: 768px) {
          .contact-hero-img { min-height: 220px; }
          .contact-hero-content { padding: 28px 20px; }
          .contact-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .contact-main { padding: 48px 16px; }
          .contact-form-card { padding: 28px; }
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-map { padding: 48px 16px; }
          .contact-map-banner { padding: 36px 24px; }
        }
      `}</style>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">

          {/* Left Image */}
          <div className="contact-hero-img">
            <img src="/contact.jpg" alt="Contact Bhushan Security" />
            <div className="contact-hero-img-overlay" />

            <div style={{ position: "absolute", top: "24px", left: "24px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", padding: "8px 16px", borderRadius: "100px" }}>
              <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>RESPONSE WITHIN 24 HOURS</span>
            </div>

            <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px", fontWeight: 600 }}>Bhushan Security</div>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>We're Here to Help</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="contact-hero-content">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "20px", height: "1px", background: "#2A6EBB" }} />
              <span style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Contact Us</span>
            </div>

            <h1 className="contact-hero-h1">
              Get a Free Security<br />
              <span style={{ color: "#2A6EBB" }}>Quote Today</span>
            </h1>

            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
              Tell us about your requirements and we will get back to you within 24 hours with a customized proposal.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-main">
        <div className="contact-main-inner">

          {/* Left — Info */}
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0D1B2A", marginBottom: "24px" }}>Contact Information</h2>

            {contactCards.map((c, i) => {
              const isHov = hoveredContact === i;
              const card = (
                <div
                  className="contact-info-card"
                  onMouseEnter={() => setHoveredContact(i)}
                  onMouseLeave={() => setHoveredContact(null)}
                  style={{
                    background: isHov ? c.lightColor : "#fff",
                    borderColor: isHov ? c.color : "#E5E7EB",
                  }}>
                  <div style={{ width: "44px", height: "44px", background: isHov ? c.color : c.lightColor, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, transition: "all 0.25s ease" }}>
                    {c.icon.includes(".") ? (
                      <img src={c.icon} alt={c.label} style={{ width: "22px", height: "22px", objectFit: "contain" }} />
                    ) : (
                      c.icon
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#9CA3AF", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px", fontWeight: 600 }}>{c.label}</div>
                    <div style={{ fontSize: "14px", color: isHov ? c.color : "#0D1B2A", fontWeight: 700, transition: "color 0.25s ease" }}>{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} style={{ textDecoration: "none", display: "block" }}>{card}</a>
              ) : (
                <div key={c.label}>{card}</div>
              );
            })}

            {/* Office Hours */}
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderLeft: "3px solid #2A6EBB", borderRadius: "12px", padding: "22px", marginTop: "24px" }}>
              <div style={{ fontSize: "11px", color: "#2A6EBB", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>Office Hours</div>
              {[
                { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
                { day: "Sunday", time: "10:00 AM – 4:00 PM" },
                { day: "Operations", time: "24 / 7 / 365" },
              ].map((h) => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#6B7280" }}>{h.day}</span>
                  <span style={{ fontSize: "13px", color: "#0D1B2A", fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div style={{ marginTop: "20px" }}>
              <a href="https://wa.me/917064015397" target="_blank" rel="noreferrer" className="contact-quick-action"
                style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                <div style={{ width: "36px", height: "36px", background: "#25D366", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}><img src="/whatsapp.png" alt="WhatsApp" style={{ width: "35px", height: "35px", objectFit: "contain" }} /></div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0D1B2A" }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: "11px", color: "#6B7280" }}>Fastest response — usually within minutes</div>
                </div>
              </a>
              <a href="tel:+917064015397" className="contact-quick-action"
                style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <div style={{ width: "36px", height: "36px", background: "#2A6EBB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0D1B2A" }}>Call Directly</div>
                  <div style={{ fontSize: "11px", color: "#6B7280" }}>Mon–Sat 9AM–7PM · Operations 24/7</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-card">
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#2A6EBB" }} />

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "76px", height: "76px", background: "#EFF6FF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px", margin: "0 auto 20px", animation: "checkPop 0.5s ease" }}>✅</div>
                <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0D1B2A", marginBottom: "12px" }}>Thank You!</h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, maxWidth: "340px", margin: "0 auto" }}>
                  We have received your request. Our team will contact you within 24 hours with a customized proposal.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", phone: "", email: "", city: "", service: "", message: "" }); }}
                  style={{ marginTop: "28px", background: "#2A6EBB", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer" }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0D1B2A", marginBottom: "6px" }}>Request a Free Quote</h3>
                <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "28px" }}>Fill in the details and we will prepare a customized proposal for you.</p>

                <div className="contact-form-grid">

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>Company Name</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" style={inputStyle} />
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>City *</label>
                    <select name="city" value={form.city} onChange={handleChange}
                      style={{ ...inputStyle, color: form.city ? "#0D1B2A" : "#9CA3AF" }}>
                      <option value="">Select city</option>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={labelStyle}>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, color: form.service ? "#0D1B2A" : "#9CA3AF" }}>
                      <option value="">Select service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-input-wrap" style={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your security requirements, number of guards needed, location details..."
                      style={{ ...inputStyle, resize: "vertical" }} />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <button onClick={handleSubmit} disabled={loading} className="submit-btn"
                      style={{ width: "100%", background: loading ? "#93C5FD" : "#2A6EBB", color: "#fff", padding: "16px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", border: "none", cursor: loading ? "not-allowed" : "pointer", letterSpacing: "0.5px" }}>
                      {loading ? "Sending..." : "Send Request — Get Free Quote"}
                    </button>
                    <p style={{ fontSize: "12px", color: "#9CA3AF", textAlign: "center", marginTop: "12px" }}>
                      We respond within 24 hours · No spam · 100% confidential
                    </p>
                  </div>

                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <div className="contact-map-inner">
          <div className="contact-map-banner">
            <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <img src="/location1.png" alt="Location" style={{ width: "26px", height: "26px", objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>Visit Our Office</h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>Jharsuguda, Odisha, India</p>
            <a href="https://www.google.com/maps/search/Jharsuguda+Odisha" target="_blank" rel="noreferrer"
              style={{ display: "inline-block", background: "#2A6EBB", color: "#fff", padding: "13px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}