"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30">
      <div className="absolute inset-0">
        <Image
          src="/images/farm/20240216_073407.jpg"
          alt="HappyFish Farmers tilapia pond at sunrise in Chilanga, Zambia."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-card backdrop-blur"
          >
            {BUSINESS.bannerLine}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tilapia training built for{" "}
            <span className="text-primary">real ponds</span>, real budgets.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Learn sustainable tilapia farming with cohort-style online lessons and
            hands-on sessions at our farm in Chilanga — designed for new farmers,
            cooperatives, and agripreneurs across Africa and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/training">Explore online training</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/farm-visits">Book a farm visit</Link>
            </Button>
          </motion.div>
          <p className="mt-8 max-w-lg text-sm text-muted-foreground">
            {BUSINESS.tagline}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <Image
              src="/images/farm/20250414_100204.jpg"
              alt="Hands-on tilapia inspection at the HappyFish Farmers training farm."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 text-primary-foreground">
              <p className="font-display text-lg font-semibold">
                Practical skills. Cleaner water. Healthier harvests.
              </p>
              <p className="mt-2 text-sm text-white/90">
                Live from our Chilanga ponds — straight from the farm.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
