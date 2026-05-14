# HappyFish Farmers — Marketing Website

Marketing site for **HappyFish Farmers**: tilapia aquaculture **online training** and **practical farm visits**. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, shadcn-style UI primitives, **Framer Motion**, **Supabase** (optional lead storage), **Resend** (optional email notifications), and **Vercel Analytics** / optional **Google Analytics 4**.

## Features

- Pages: Home, Training, Farm Visits, About, MDX Blog, Contact, Privacy, Terms.
- Lead capture: newsletter, contact form, farm booking → `/api/lead` (Supabase + Resend when configured).
- SEO: metadata, `sitemap.xml`, `robots.txt`, JSON-LD snippets on the home page.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # optional — see SETUP.md
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Layout

- `src/app` — routes and `/api/lead`.
- `src/components` — layout, home sections, forms.
- `content/blog` — MDX posts.
- `supabase/schema.sql` — `leads` table (optional).
- `public/logo.png` — logo asset.

Deploy on **Vercel**; see **SETUP.md** for env vars and Supabase.

## License

Proprietary — © HappyFish Farmers.
