import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, phone, email, city, position, experience, message } = body;

  if (!name || !phone) {
    return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "BSF Careers <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO, process.env.EMAIL_TO_2],
      subject: `👤 New Job Application — ${position || "General"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
          <div style="background:#0D1B2A;padding:20px 24px;border-radius:6px;margin-bottom:24px;">
            <h2 style="color:#2A6EBB;margin:0;font-size:20px;">New Job Application</h2>
            <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">Bhushan Security Careers Portal</p>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;">
            ${[
              ["Name", name],
              ["Phone", phone],
              ["Email", email || "—"],
              ["City", city || "—"],
              ["Position", position || "General Application"],
              ["Experience", experience || "—"],
              ["Message", message || "—"],
            ].map(([label, value]) => `
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#666;width:120px;font-weight:600;background:#f9f9f9;">${label}</td>
                <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;">${value}</td>
              </tr>
            `).join("")}
          </table>
          <div style="margin-top:20px;padding:16px;background:#d4edda;border-radius:6px;border-left:4px solid #28a745;">
            <p style="margin:0;font-size:13px;color:#155724;font-weight:600;">✅ Action Required: Review and contact applicant within 3 working days</p>
          </div>
          <div style="margin-top:16px;text-align:center;">
            <a href="tel:${phone}" style="display:inline-block;background:#2A6EBB;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">📞 Call ${name}</a>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}