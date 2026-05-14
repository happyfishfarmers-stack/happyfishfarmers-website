import Link from "next/link";
import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical tilapia farming notes — water quality, feeding, pond management, and sustainable aquaculture habits.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Field notes
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Tilapia farming insights
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Short, practical articles you can apply on site — written to complement
          our training and farm visits.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.05}>
            <Card className="h-full transition-shadow hover:shadow-soft">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <CardTitle className="font-display text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Read article
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
