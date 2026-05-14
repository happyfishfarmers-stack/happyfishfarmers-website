import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <Link
          href="/blog"
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← Back to blog
        </Link>
        <p className="mt-6 text-sm text-muted-foreground">{post.meta.date}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground">
          {post.meta.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.meta.description}</p>
      </FadeIn>

      <div className="prose prose-lg prose-neutral mt-12 max-w-none prose-headings:font-display prose-a:text-primary">
        <MDXRemote source={post.content} />
      </div>

      <FadeIn className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-card">
        <p className="font-display text-lg font-semibold text-foreground">
          Want structured lessons?
        </p>
        <p className="mt-2 text-muted-foreground">
          Join our online tilapia program or book a practical farm visit — learn the
          systems behind these articles.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/training">View training</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/farm-visits">Farm visits</Link>
          </Button>
        </div>
      </FadeIn>
    </article>
  );
}
