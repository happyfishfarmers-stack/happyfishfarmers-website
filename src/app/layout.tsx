import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fraunces, Inter } from "next/font/google";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: `${SITE_NAME} | Tilapia Training & Farm Visits`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Learn tilapia farming with HappyFish Farmers — online training and hands-on farm visits in Zambia. Sustainable aquaculture for aspiring farmers across Africa and beyond.",
  openGraph: {
    type: "website",
    locale: "en_ZM",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Tilapia aquaculture training`,
    description:
      "Online tilapia courses and practical farm visits. Build skills in pond management, water quality, feeding, and sustainable fish production.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Tilapia farming training and farm visits — HappyFish Farmers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans">
        <GoogleAnalytics gaId={gaId} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
