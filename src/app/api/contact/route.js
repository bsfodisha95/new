import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, company, phone, email, city, service, message } = body;

  if (!name || !phone || !city || !service) {
    return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Email to admin
    await resend.emails.send({
      from: "BSF Website <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO, process.env.EMAIL_TO_2],
      subject: `🔔 New Quote Request — ${service} in ${city}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
          <div style="background:#0D1B2A;padding:20px 24px;border-radius:6px;margin-bottom:24px;">
            <h2 style="color:#2A6EBB;margin:0;font-size:20px;">New Quote Request</h2>
            <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">Bhushan Security Website</p>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;">
            ${[
              ["Name", name],
              ["Company", company || "—"],
              ["Phone", phone],
              ["Email", email || "—"],
              ["City", city],
              ["Service", service],
              ["Message", message || "—"],
            ].map(([label, value]) => `
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#666;width:120px;font-weight:600;background:#f9f9f9;">${label}</td>
                <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;">${value}</td>
              </tr>
            `).join("")}
          </table>
          <div style="margin-top:20px;padding:16px;background:#fff3cd;border-radius:6px;border-left:4px solid #2A6EBB;">
            <p style="margin:0;font-size:13px;color:#856404;font-weight:600;">⚡ Action Required: Respond to this lead within 24 hours</p>
          </div>
          <div style="margin-top:16px;text-align:center;">
            <a href="tel:${phone}" style="display:inline-block;background:#2A6EBB;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">📞 Call ${name}</a>
            ${email ? `<a href="mailto:${email}" style="display:inline-block;background:#065F46;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;margin-left:10px;">✉️ Email ${name}</a>` : ""}
          </div>
        </div>
      `,
    });

    // Thank you email to client
    if (email) {
      await resend.emails.send({
        from: "Bhushan Security <onboarding@resend.dev>",
        to: [email],
        subject: `Thank you for contacting Bhushan Security, ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#0D1B2A;padding:28px 32px;border-radius:8px 8px 0 0;">
              <h1 style="color:#2A6EBB;margin:0;font-size:22px;">Bhushan Security</h1>
              <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">& Facilities Management Services (P) Ltd.</p>
            </div>
            <div style="background:#fff;padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px;">
              <h2 style="font-size:20px;color:#0D1B2A;margin:0 0 16px;">Thank you, ${name}!</h2>
              <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 16px;">
                We have received your request for <strong>${service}</strong> in <strong>${city}</strong>. Our team will review your requirements and get back to you within <strong>24 hours</strong>.
              </p>
              <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 24px;">For urgent requirements, please call us directly:</p>
              <div style="display:flex;gap:10px;">
                <a href="tel:+917064015397" style="display:inline-block;background:#2A6EBB;color:#fff;padding:12px 24px;border-radius:6px;font-weight:700;font-size:14px;text-decoration:none;margin-right:10px;">📞 +91-70640-15397</a>
                <a href="https://wa.me/917064015397" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:6px;font-weight:700;font-size:14px;text-decoration:none;">💬 WhatsApp</a>
              </div>
              <hr style="border:none;border-top:1px solid #eee;margin:28px 0;" />
              <p style="font-size:12px;color:#999;margin:0;">
                Bhushan Security & Facilities Management Services Pvt. Ltd.<br />
                Jharsuguda, Odisha, India<br />
                PSARA Licensed · ISO 9001:2015 Certified<br />
                सेवा ही कर्म है — Service is Our Duty
              </p>
            </div>
          </div>
        `,
      });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}