"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  name: z.string().optional(),
});

type Form = z.infer<typeof schema>;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  });

  async function onSubmit(values: Form) {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "newsletter",
          email: values.email,
          name: values.name?.trim() || undefined,
          interest: "Newsletter",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:flex-row sm:items-end"
      noValidate
    >
      <div className="grid flex-1 gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nl-name">Name (optional)</Label>
          <Input id="nl-name" placeholder="Your name" {...form.register("name")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nl-email">Email</Label>
          <Input
            id="nl-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <Button type="submit" disabled={status === "loading"} className="shrink-0">
        {status === "loading" ? "Joining…" : "Get updates"}
      </Button>
      {status === "done" ? (
        <p className="text-sm text-primary sm:ml-2">You are on the list. Thank you!</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-destructive sm:ml-2">
          Something went wrong — try again shortly.
        </p>
      ) : null}
    </form>
  );
}
