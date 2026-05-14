import { NextResponse } from "next/server";
import { z } from "zod";

import { sendLeadNotificationEmail } from "@/lib/email";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  source: z.string().min(1),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const data = parsed.data;
  const supabase = getSupabaseAdmin();

  let persisted = false;
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      source: data.source,
      name: data.name ?? null,
      email: data.email ?? null,
      phone: data.phone ?? null,
      interest: data.interest ?? null,
      message: data.message ?? null,
    });
    if (error) {
      console.error("[lead] supabase", error.message);
    } else {
      persisted = true;
    }
  }

  if (data.email) {
    await sendLeadNotificationEmail({
      source: data.source,
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      message: data.message,
    });
  }

  return NextResponse.json({ ok: true, persisted });
}
