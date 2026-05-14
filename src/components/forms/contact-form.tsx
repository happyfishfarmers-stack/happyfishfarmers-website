"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  interest: z.string().min(2, "Tell us what you need"),
  message: z.string().min(10, "Add a bit more detail (10+ characters)"),
});

type Form = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: Form) {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_form",
          name: values.name,
          email: values.email,
          phone: values.phone?.trim() || undefined,
          interest: values.interest,
          message: values.message,
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cf-name">Full name</Label>
          <Input id="cf-name" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="text-xs text-destructive" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email">Email</Label>
          <Input id="cf-email" type="email" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-phone">Phone (optional)</Label>
        <Input id="cf-phone" {...form.register("phone")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-interest">I am interested in</Label>
        <Input
          id="cf-interest"
          placeholder="Online training, farm visit, partnership…"
          {...form.register("interest")}
        />
        {form.formState.errors.interest ? (
          <p className="text-xs text-destructive" role="alert">
            {form.formState.errors.interest.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-message">Message</Label>
        <Textarea id="cf-message" rows={5} {...form.register("message")} />
        {form.formState.errors.message ? (
          <p className="text-xs text-destructive" role="alert">
            {form.formState.errors.message.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
      {status === "done" ? (
        <p className="text-sm text-primary" role="status">
          Thank you — we will reply shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Could not send right now. Please email us directly.
        </p>
      ) : null}
    </form>
  );
}
