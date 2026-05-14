import { Resend } from "resend";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendLeadNotificationEmail(payload: {
  source: string;
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  const to = process.env.NOTIFICATION_EMAIL ?? "happyfishfarmers@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "HappyFish Farmers <onboarding@resend.dev>";

  if (!resend) {
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  const lines = [
    `New lead from: ${payload.source}`,
    payload.name && `Name: ${payload.name}`,
    payload.email && `Email: ${payload.email}`,
    payload.phone && `Phone: ${payload.phone}`,
    payload.interest && `Interest: ${payload.interest}`,
    payload.message && `Message:\n${payload.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      subject: `[HappyFish] New lead — ${payload.source}`,
      text: lines,
    });
    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, error: msg };
  }
}
