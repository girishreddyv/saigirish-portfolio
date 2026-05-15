import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
  startedAt?: number;
};

const buckets = new Map<string, { count: number; resetAt: number }>();

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const current = buckets.get(ip);

  if (!current || current.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  current.count += 1;
  return current.count > 5;
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many messages. Please try again in a minute." }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const company = payload.company?.trim() || "Not provided";
  const message = payload.message?.trim() || "";
  const startedAt = Number(payload.startedAt || 0);
  const filledHoneypot = Boolean(payload.website?.trim());
  const submittedTooFast = startedAt > 0 && Date.now() - startedAt < 1800;

  if (filledHoneypot || submittedTooFast) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || !isEmail(email) || message.length < 20) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, a valid email, and a message with at least 20 characters." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "saigirishvadlathala22@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    console.info("Portfolio contact form submission", { name, email, company, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    })
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "Email delivery failed. Please email Sai directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
