import type { Metadata } from "next";

import { FaqSection } from "@/components/home/faq-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { Testimonials } from "@/components/home/testimonials";
import { TrainingPreview } from "@/components/home/training-preview";
import { ValueProps } from "@/components/home/value-props";
import { CourseJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Home`,
  description: `${SITE_NAME} offers tilapia aquaculture training — online courses and hands-on farm visits in Zambia for farmers across Africa and the world.`,
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <CourseJsonLd />
      <HeroSection />
      <ValueProps />
      <TrainingPreview />
      <Testimonials />
      <GallerySection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
