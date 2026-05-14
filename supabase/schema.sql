-- HappyFish Farmers — Supabase schema (optional lead capture via /api/lead)
-- create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  name text,
  email text,
  phone text,
  interest text,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

create policy "deny anon leads"
  on public.leads for all
  using (false);
