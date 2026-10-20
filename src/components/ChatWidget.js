"use client";
import { useState, useRef, useEffect } from "react";

const NAVY = "#0D1B2A";
const BLUE = "#2A6EBB";
const LIGHT = "#EFF6FF";
const LOGO = "/logo.png";
const PHONE = "+91-70640-15397";

/* ---- desktop position: raise/lower these numbers to move the widget ---- */
const BOTTOM = 112;
const RIGHT = 20;
/* ---- phone position (pill sits above the WhatsApp button) ---- */
const M_BOTTOM = 92;
const M_RIGHT = 12;

const GREETING = {
  role: "assistant",
  content:
    "Namaste! 🙏 I'm the Bhushan Security assistant. I can help with our guard & facility services, the cities we cover, quotes and careers. How can I help you today?",
};

const SUGGESTIONS = [
  { icon: "🛡️", label: "What services do you offer?" },
  { icon: "📍", label: "Which cities do you cover?" },
  { icon: "📝", label: "I need a quote" },
  { icon: "👥", label: "Are you hiring?" },
];

const ROTATING = [
  "Ask me anything",
  "Need security guards?",
  "Want a quote?",
  "Which cities do we cover?",
];

/* ---------- soft notification chime (Web Audio, no file needed) ---------- */
let audioCtx = null;
function playChime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;
    [880, 1318.5].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const t = now + i * 0.13;
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.1, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    });
  } catch {}
}

/* ---------- make page paths, phones and emails clickable in bot replies ---------- */
const LINK_RE =
  /(\/(?:services|cities)\/[a-z0-9-]+|\/(?:about|industries|compliance|careers|contact)(?![a-z-])|\+91[-\s]?\d{5}[-\s]?\d{5}|[A-Za-z0-9._-]+@bhushangroups\.com)/g;

function renderText(text) {
  const out = [];
  let last = 0;
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const token = m[0];
    let href = token;
    if (token.startsWith("+91")) href = "tel:" + token.replace(/[^\d+]/g, "");
    else if (token.includes("@")) href = "mailto:" + token;
    out.push(
      <a
        key={m.index}
        href={href}
        style={{ color: BLUE, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}
      >
        {token}
      </a>
    );
    last = m.index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function timeLabel(t) {
  if (!t) return "";
  return new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function Avatar({ size = 28 }) {
  return (
    <span
      style={{
        width: size, height: size, borderRadius: "50%", background: "#fff",
        border: "1px solid #E5E7EB", display: "grid", placeItems: "center",
        flexShrink: 0, overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO} alt="" style={{ width: "82%", height: "82%", objectFit: "contain" }} />
    </span>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(true);
  const [nudge, setNudge] = useState(false);
  const [promptIdx, setPromptIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [vv, setVv] = useState({ h: 0, inset: 0 });
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const interacted = useRef(false);

  /* detect phone-size screens */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  /* track the visible area so the panel stays above the phone keyboard */
  useEffect(() => {
    const v = window.visualViewport;
    const update = () => {
      if (!v) {
        setVv({ h: window.innerHeight, inset: 0 });
        return;
      }
      setVv({
        h: v.height,
        inset: Math.max(0, window.innerHeight - v.height - v.offsetTop),
      });
    };
    update();
    if (v) {
      v.addEventListener("resize", update);
      v.addEventListener("scroll", update);
    }
    window.addEventListener("resize", update);
    return () => {
      if (v) {
        v.removeEventListener("resize", update);
        v.removeEventListener("scroll", update);
      }
      window.removeEventListener("resize", update);
    };
  }, []);

  /* auto-scroll */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open, vv.h]);

  /* rotate the text inside the pill */
  useEffect(() => {
    if (open) return;
    const id = setInterval(() => setPromptIdx((i) => (i + 1) % ROTATING.length), 3600);
    return () => clearInterval(id);
  }, [open]);

  /* attention nudge + chime (once per browser tab session) */
  useEffect(() => {
    const mark = () => { interacted.current = true; };
    const evs = ["pointerdown", "keydown", "scroll", "touchstart"];
    evs.forEach((e) => window.addEventListener(e, mark, { once: true, passive: true }));

    let seen = false;
    try { seen = sessionStorage.getItem("bsfNudge") === "1"; } catch {}

    let t1, t2;
    if (!seen) {
      t1 = setTimeout(() => {
        setNudge(true);
        if (interacted.current) playChime();
        try { sessionStorage.setItem("bsfNudge", "1"); } catch {}
        t2 = setTimeout(() => setNudge(false), 2200);
      }, 6000);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      evs.forEach((e) => window.removeEventListener(e, mark));
    };
  }, []);

  /* Esc closes, focus input on desktop only (avoids popping the keyboard on phones) */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    if (window.matchMedia?.("(pointer: fine)").matches) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openChat() {
    setOpen(true);
    setUnread(false);
    setNudge(false);
  }

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const next = [...messages, { role: "user", content, t: Date.now() }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          t: Date.now(),
          content: data.reply || data.error || `Sorry, something went wrong. Please call ${PHONE}.`,
        },
      ]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", t: Date.now(), content: `Connection problem. Please try again or call ${PHONE}.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const waLink =
    "https://wa.me/917064015397?text=" +
    encodeURIComponent("Hello Bhushan Security, I need information about your services.");

  const canSend = !loading && input.trim().length > 0;
  const isFresh = messages.length === 1;

  /* ---------- panel geometry ---------- */
  const keyboardOpen = isMobile && vv.inset > 120;
  const vh = vv.h || 700;

  const panelStyle = isMobile
    ? {
        position: "fixed",
        left: 8,
        right: 8,
        bottom: keyboardOpen
          ? vv.inset + 6
          : "calc(8px + env(safe-area-inset-bottom, 0px))",
        // bottom sheet: about 62% of the screen, never full screen
        height: keyboardOpen ? Math.max(260, vh - 12) : Math.min(Math.round(vh * 0.62), 500),
        maxHeight: keyboardOpen ? vh - 12 : "62dvh",
        borderRadius: 18,
      }
    : {
        position: "fixed",
        right: RIGHT > 12 ? 16 : RIGHT,
        bottom: BOTTOM,
        width: "min(360px, calc(100vw - 24px))",
        height: "min(540px, calc(100dvh - 150px))",
        borderRadius: 20,
      };

  return (
    <>
      <style>{`
        @keyframes bsfPop { from { opacity:0; transform: translateY(14px) scale(.98);} to { opacity:1; transform:none;} }
        @keyframes bsfSheet { from { opacity:0; transform: translateY(40px);} to { opacity:1; transform:none;} }
        @keyframes bsfMsg { from { opacity:0; transform: translateY(6px);} to { opacity:1; transform:none;} }
        @keyframes bsfDot { 0%,80%,100% { opacity:.25; transform:scale(.8);} 40% { opacity:1; transform:scale(1);} }
        @keyframes bsfPillIn { from { opacity:0; transform: translateX(30px);} to { opacity:1; transform:none;} }
        @keyframes bsfGlow {
          0%   { box-shadow: 0 8px 24px rgba(13,27,42,.16), 0 0 0 0 rgba(42,110,187,.45); }
          70%  { box-shadow: 0 8px 24px rgba(13,27,42,.16), 0 0 0 12px rgba(42,110,187,0); }
          100% { box-shadow: 0 8px 24px rgba(13,27,42,.16), 0 0 0 0 rgba(42,110,187,0); }
        }
        @keyframes bsfNudge {
          0%,100% { transform: translateY(0); }
          20% { transform: translateY(-9px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-5px); }
          80% { transform: translateY(0); }
        }
        @keyframes bsfText { from { opacity:0; transform: translateY(6px);} to { opacity:1; transform:none;} }
        @keyframes bsfShine { 0% { transform: translateX(-120%);} 60%,100% { transform: translateX(260%);} }

        .bsf-pill {
          animation: bsfPillIn .5s ease-out 1.5s both, bsfGlow 2.8s ease-out 2s infinite;
          transition: transform .2s ease, border-color .2s ease;
        }
        .bsf-pill.nudge { animation: bsfNudge 1s ease-in-out, bsfGlow 2.8s ease-out infinite; }
        .bsf-pill:hover { transform: translateY(-2px); border-color: ${BLUE} !important; }
        .bsf-pill:hover .bsf-go { transform: translateX(2px); }
        .bsf-go { transition: transform .2s ease; }
        .bsf-shine { position:absolute; inset:0; overflow:hidden; border-radius:inherit; pointer-events:none; }
        .bsf-shine::after {
          content:""; position:absolute; top:0; bottom:0; width:40%;
          background: linear-gradient(100deg, transparent, rgba(42,110,187,.12), transparent);
          animation: bsfShine 5s ease-in-out 3s infinite;
        }
        .bsf-rot { animation: bsfText .4s ease-out; }
        .bsf-card { transition: border-color .15s, background .15s, transform .15s; }
        .bsf-card:hover { border-color:${BLUE} !important; background:${LIGHT} !important; transform: translateY(-1px); }
        .bsf-send { transition: transform .15s, background .15s; }
        .bsf-send:not(:disabled):hover { transform: scale(1.08); }
        .bsf-icon-btn:hover { background:rgba(255,255,255,.22) !important; }
        .bsf-scroll { overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }
        .bsf-scroll::-webkit-scrollbar { width:6px; }
        .bsf-scroll::-webkit-scrollbar-thumb { background:#D1D5DB; border-radius:6px; }
        .bsf-input:focus { border-color:${BLUE} !important; box-shadow: 0 0 0 3px ${BLUE}22; }

        @media (hover: none) {
          .bsf-pill:hover { transform: none; }
          .bsf-card:hover { transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bsf-pill, .bsf-pill.nudge { animation: none !important; }
          .bsf-shine::after { animation: none !important; }
        }
      `}</style>

      {/* ---------- "Ask me anything" pill launcher ---------- */}
      {!open && (
        <button
          className={`bsf-pill${nudge ? " nudge" : ""}`}
          onClick={openChat}
          aria-label="Open chat. Ask me anything"
          style={{
            position: "fixed",
            right: isMobile ? M_RIGHT : RIGHT,
            bottom: isMobile ? `calc(${M_BOTTOM}px + env(safe-area-inset-bottom, 0px))` : BOTTOM,
            zIndex: 1000,
            display: "flex", alignItems: "center", gap: isMobile ? 8 : 11,
            padding: isMobile ? "5px 6px 5px 5px" : "6px 8px 6px 6px",
            background: "#fff",
            border: "1px solid #E5E7EB", borderRadius: 999, cursor: "pointer",
            fontFamily: "Inter, system-ui, sans-serif", textAlign: "left",
            maxWidth: "calc(100vw - 24px)",
          }}
        >
          <span className="bsf-shine" />
          {/* logo */}
          <span style={{ position: "relative", flexShrink: 0 }}>
            <span style={{ width: isMobile ? 36 : 44, height: isMobile ? 36 : 44, borderRadius: "50%", background: "#fff", border: `2px solid ${BLUE}`, display: "grid", placeItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="" style={{ width: "76%", height: "76%", objectFit: "contain" }} />
            </span>
            <span style={{ position: "absolute", right: 0, bottom: 0, width: isMobile ? 10 : 12, height: isMobile ? 10 : 12, borderRadius: "50%", background: "#22C55E", border: "2px solid #fff" }} />
            {unread && (
              <span style={{ position: "absolute", top: -4, left: -4, minWidth: 17, height: 17, borderRadius: 9, background: "#EF4444", color: "#fff", fontSize: 10, fontWeight: 700, display: "grid", placeItems: "center", border: "2px solid #fff" }}>
                1
              </span>
            )}
          </span>

          {/* text */}
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, minWidth: isMobile ? 118 : 150 }}>
            {!isMobile && (
              <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 500 }}>Bhushan Security • Online</span>
            )}
            <span key={promptIdx} className="bsf-rot" style={{ fontSize: isMobile ? 13 : 14.5, color: NAVY, fontWeight: 700, whiteSpace: "nowrap" }}>
              {ROTATING[promptIdx]}
            </span>
          </span>

          {/* arrow */}
          <span
            className="bsf-go"
            style={{ width: isMobile ? 30 : 34, height: isMobile ? 30 : 34, borderRadius: "50%", background: BLUE, color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </button>
      )}

      {/* ---------- phone only: tap the page above the chat to close it ---------- */}
      {open && isMobile && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 999, background: "transparent" }}
        />
      )}

      {/* ---------- Chat panel ---------- */}
      {open && (
        <div
          role="dialog"
          aria-label="Bhushan Security assistant"
          style={{
            ...panelStyle,
            zIndex: 1000,
            background: "#fff", overflow: "hidden",
            display: "flex", flexDirection: "column",
            border: "1px solid #E5E7EB",
            boxShadow: "0 18px 50px rgba(13,27,42,.25)",
            animation: isMobile ? "bsfSheet .28s ease-out" : "bsfPop .25s ease-out",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY}, #16304a)`, padding: isMobile ? "10px 12px" : "13px 14px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ position: "relative" }}>
              <Avatar size={isMobile ? 36 : 42} />
              <span style={{ position: "absolute", right: 0, bottom: 0, width: 10, height: 10, borderRadius: "50%", background: "#22C55E", border: "2px solid #16304a" }} />
            </div>
            <div style={{ flex: 1, lineHeight: 1.25, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: isMobile ? 14.5 : 15, color: "#fff" }}>Bhushan Security</div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.7)" }}>Online • सेवा ही कर्म है</div>
            </div>
            <button
              className="bsf-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
              style={{ background: "rgba(255,255,255,.12)", border: "none", color: "#fff", width: 34, height: 34, borderRadius: 9, cursor: "pointer", display: "grid", placeItems: "center" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="bsf-scroll"
            style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: isMobile ? "12px 10px" : "14px 12px", background: "#F8FAFC", display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* welcome card (only before the first message) */}
            {isFresh && (
              <div style={{ animation: "bsfMsg .3s ease-out" }}>
                <div style={{ textAlign: "center", padding: isMobile ? "2px 6px 10px" : "10px 6px 14px" }}>
                  <div style={{ width: isMobile ? 48 : 64, height: isMobile ? 48 : 64, margin: "0 auto 8px", borderRadius: "50%", background: "#fff", border: `2px solid ${BLUE}33`, display: "grid", placeItems: "center", boxShadow: "0 6px 18px rgba(42,110,187,.15)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO} alt="Bhushan Security" style={{ width: "76%", height: "76%", objectFit: "contain" }} />
                  </div>
                  <div style={{ fontSize: isMobile ? 16 : 17, fontWeight: 700, color: NAVY }}>How can we help you?</div>
                  <div style={{ fontSize: 12.5, color: "#6B7280", marginTop: 3, lineHeight: 1.45 }}>
                    Ask about guard &amp; facility services, cities, quotes or careers.
                  </div>
                </div>

                <div style={{ display: "grid", gap: isMobile ? 6 : 8 }}>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.label}
                      className="bsf-card"
                      onClick={() => send(s.label)}
                      style={{
                        display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                        background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12,
                        padding: isMobile ? "8px 10px" : "10px 12px", fontSize: 13.5, color: "#1F2937", cursor: "pointer",
                      }}
                    >
                      <span style={{ width: 28, height: 28, borderRadius: 8, background: LIGHT, display: "grid", placeItems: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</span>
                      <span style={{ flex: 1, fontWeight: 500 }}>{s.label}</span>
                      <span style={{ color: BLUE, fontSize: 16 }}>›</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* conversation */}
            {!isFresh &&
              messages.map((m, i) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex", gap: 8, alignItems: "flex-end",
                      justifyContent: isUser ? "flex-end" : "flex-start",
                      animation: "bsfMsg .25s ease-out",
                    }}
                  >
                    {!isUser && <Avatar />}
                    <div style={{ maxWidth: "82%", display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
                      <div
                        style={{
                          padding: "9px 13px", fontSize: 14, lineHeight: 1.55,
                          whiteSpace: "pre-wrap", wordBreak: "break-word",
                          borderRadius: 16,
                          borderBottomRightRadius: isUser ? 4 : 16,
                          borderBottomLeftRadius: isUser ? 16 : 4,
                          background: isUser ? BLUE : "#fff",
                          color: isUser ? "#fff" : "#1F2937",
                          border: isUser ? "none" : "1px solid #E5E7EB",
                          boxShadow: isUser ? "none" : "0 1px 2px rgba(0,0,0,.04)",
                        }}
                      >
                        {isUser ? m.content : renderText(m.content)}
                      </div>
                      {m.t && <span style={{ fontSize: 10.5, color: "#9CA3AF", marginTop: 3, padding: "0 4px" }}>{timeLabel(m.t)}</span>}
                    </div>
                  </div>
                );
              })}

            {/* typing indicator */}
            {loading && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", animation: "bsfMsg .2s ease-out" }}>
                <Avatar />
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 16, borderBottomLeftRadius: 4, padding: "12px 14px", display: "flex", gap: 4 }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{ width: 7, height: 7, borderRadius: "50%", background: "#9CA3AF", animation: `bsfDot 1.2s ${d * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div style={{ display: "flex", gap: 8, padding: "9px 10px 7px", background: "#fff", borderTop: "1px solid #EEF0F3", flexShrink: 0 }}>
            <input
              ref={inputRef}
              className="bsf-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              maxLength={500}
              enterKeyHint="send"
              autoComplete="off"
              style={{
                flex: 1, minWidth: 0, border: "1px solid #D1D5DB", borderRadius: 999,
                padding: "10px 15px",
                fontSize: isMobile ? 16 : 14, /* 16px stops iPhone from zooming on focus */
                outline: "none", color: "#1F2937", background: "#fff",
                transition: "border-color .15s, box-shadow .15s",
              }}
            />
            <button
              className="bsf-send"
              onClick={() => send()}
              disabled={!canSend}
              aria-label="Send message"
              style={{
                width: 42, height: 42, borderRadius: "50%", border: "none", flexShrink: 0,
                background: canSend ? BLUE : "#CBD5E1", color: "#fff",
                cursor: canSend ? "pointer" : "default", display: "grid", placeItems: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 14px 8px", background: "#fff", fontSize: 11.5, color: "#9CA3AF", flexShrink: 0 }}>
            <span>AI assistant • may make mistakes</span>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: "#16A34A", fontWeight: 600, textDecoration: "none" }}>
              Talk to a human →
            </a>
          </div>
        </div>
      )}
    </>
  );
}