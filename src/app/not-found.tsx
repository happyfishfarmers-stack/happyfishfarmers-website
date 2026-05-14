import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        This pond is empty — the page may have moved or the link may be broken.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
