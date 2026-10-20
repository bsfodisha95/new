import { NextResponse } from "next/server";
import { buildSystemPrompt } from "../../../data/chatKnowledge";

// Simple in-memory rate limit: 12 requests per minute per IP.
// (Best-effort on serverless; upgrade to Upstash/Redis later if abused.)
const hits = new Map();
function isLimited(ip) {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 12;
}

export async function POST(req) {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "Chat is not configured." }, { status: 500 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const clean = (Array.isArray(body?.messages) ? body.messages : [])
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));

  if (!clean.length || clean[clean.length - 1].role !== "user") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
const isReasoning = model.startsWith("openai/gpt-oss");

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
        model,
        messages: [{ role: "system", content: buildSystemPrompt() }, ...clean],
        temperature: 0.4,
        max_tokens: isReasoning ? 1200 : 400,
        ...(isReasoning && { reasoning_effort: "low", include_reasoning: false }),
      }),
      signal: AbortSignal.timeout(20000),
    });

    if (!res.ok) {
      console.error("Groq error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Assistant is unavailable right now." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({
      reply: reply || "Sorry, I couldn't process that. Please call +91-70640-15397.",
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Assistant is unavailable right now." },
      { status: 502 }
    );
  }
}