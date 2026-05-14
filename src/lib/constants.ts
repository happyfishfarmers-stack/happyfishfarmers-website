/** Site-wide business and contact constants — update via env where noted */

export const SITE_NAME = "HappyFish Farmers";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const BUSINESS = {
  legalName: "HappyFish Farmers",
  speciesFocus: "Tilapia",
  address:
    "Plot 67, Farm 1961/B/11/2, Makeni West, Chilanga, Zambia",
  phoneDisplay: "+260 977 563 853",
  email: "happyfishfarmers@gmail.com",
  tagline: "Healthy Fish. Happy Farmers. Better Future.",
  bannerLine: "Sustainable fish farming for a better tomorrow",
  hours: "Monday–Saturday, 8:00–17:00 CAT (by appointment for farm visits)",
} as const;

export const PRICING = {
  onlineZMW: 1000,
  physicalZMW: 3500,
  currency: "ZMW",
} as const;

export const TRAINING_TOPICS = [
  "Pond siting & planning",
  "Pond construction",
  "Pond liners",
  "Fingerlings & genetics",
  "Pond stocking density",
  "Water quality parameters",
  "Pond fertilization",
  "Fish feed & feeding regimes",
  "General pond management",
  "Sustainable business tips for aquaculture",
] as const;

/** `tel:` link derived from `BUSINESS.phoneDisplay` (digits only, with leading +). */
export function getTelHref(): string {
  const digits = BUSINESS.phoneDisplay.replace(/\D/g, "");
  return `tel:+${digits}`;
}
