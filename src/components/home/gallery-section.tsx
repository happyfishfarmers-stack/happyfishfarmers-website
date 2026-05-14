import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";

const shots = [
  {
    src: "/images/farm/20240630_150930.jpg",
    alt: "Pond walk at the HappyFish Farmers training farm in Chilanga.",
  },
  {
    src: "/images/farm/20240702_090910.jpg",
    alt: "Morning pond environment — water management in practice.",
  },
  {
    src: "/images/farm/20241016_123137.jpg",
    alt: "On-farm session with trainees at HappyFish Farmers.",
  },
  {
    src: "/images/farm/20241016_123515.jpg",
    alt: "Hands-on tilapia handling during a practical training day.",
  },
];

export function GallerySection() {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Farm photography — straight from our ponds
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Real pond builds, real training days, real harvests at the HappyFish Farmers
            farm in Chilanga — no stock photos.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((s, i) => (
            <FadeIn key={s.src} delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-card">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
