# Setup Guide — HappyFish Farmers Website

## Prerequisites

- **Node.js 20+** and **npm**
- Optional: **Vercel**, **Supabase**, **Resend**, **Google Analytics 4**

## Install & run

```bash
npm install
npm run dev
```

Copy `.env.local.example` → `.env.local` when you are ready to wire backends.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (`http://localhost:3000` locally; your domain in production). |
| `RESEND_API_KEY` | Email delivery for lead notifications. |
| `RESEND_FROM_EMAIL` | Optional verified sender (defaults to Resend onboarding for tests). |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (reserved for future client use). |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-only** — used by `/api/lead` to insert rows. |
| `NOTIFICATION_EMAIL` | Inbox for new lead notifications. |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID (`G-…`). |

Remove any old entries for OpenAI or WhatsApp from older `.env.local` files — they are no longer used.

## Supabase (optional)

1. Create a project at [supabase.com](https://supabase.com).
2. Run `supabase/schema.sql` in the SQL Editor.
3. Copy URL + keys into `.env.local`.

## Resend

Sign up at [resend.com](https://resend.com), create an API key, verify a domain for production sending.

## Deploy on Vercel

Import the repo, add environment variables, deploy. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

## Checklist

- [ ] `NEXT_PUBLIC_SITE_URL` matches production.
- [ ] Forms work; leads appear in Supabase (if configured).
- [ ] Lead emails arrive at `NOTIFICATION_EMAIL` (if Resend configured).
- [ ] GA4 realtime works if `NEXT_PUBLIC_GA_ID` is set.
