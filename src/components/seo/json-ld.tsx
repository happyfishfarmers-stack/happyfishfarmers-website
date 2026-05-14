import { BUSINESS, PRICING, SITE_NAME, SITE_URL } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Tilapia aquaculture training, online courses, and practical farm visits in Zambia.",
    url: SITE_URL,
    telephone: BUSINESS.phoneDisplay.replace(/\s/g, ""),
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressCountry: "ZM",
    },
    areaServed: {
      "@type": "Place",
      name: "Africa and international learners online",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CourseJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Online Tilapia Farming Training — HappyFish Farmers",
    description:
      "Structured tilapia aquaculture training covering pond design, water quality, feeding, and sustainable farm management.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: PRICING.onlineZMW,
      priceCurrency: PRICING.currency,
      category: "Online cohort & self-paced modules",
    },
    educationalLevel: "Beginner to intermediate",
    audience: {
      "@type": "Audience",
      audienceType:
        "Aspiring fish farmers, agripreneurs, students, cooperatives",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
