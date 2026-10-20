"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917064015397?text=Hello%2C%20I%20am%20interested%20in%20your%20security%20services."
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "50px",
        height: "50px",
        background: "#25D366",
        borderRadius: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        boxShadow: "0 2px 10px rgba(37,211,102,0.4)",
        textDecoration: "none",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
}