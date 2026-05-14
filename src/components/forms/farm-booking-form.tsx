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
  phone: z.string().min(6, "Add a phone number we can reach"),
  preferredDate: z.string().optional(),
  groupSize: z.string().optional(),
  notes: z.string().optional(),
});

type Form = z.infer<typeof schema>;

export function FarmBookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      groupSize: "",
      notes: "",
    },
  });

  async function onSubmit(values: Form) {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "farm_visit_booking",
          name: values.name,
          email: values.email,
          phone: values.phone,
          interest: "Physical farm visit",
          message: [
            values.preferredDate && `Preferred date: ${values.preferredDate}`,
            values.groupSize && `Group size: ${values.groupSize}`,
            values.notes && `Notes: ${values.notes}`,
          ]
            .filter(Boolean)
            .join("\n"),
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
          <Label htmlFor="fb-name">Full name</Label>
          <Input id="fb-name" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="fb-email">Email</Label>
          <Input id="fb-email" type="email" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="fb-phone">Phone</Label>
        <Input id="fb-phone" {...form.register("phone")} />
        {form.formState.errors.phone ? (
          <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fb-date">Preferred visit window</Label>
          <Input id="fb-date" placeholder="e.g. June 2026, weekday mornings" {...form.register("preferredDate")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fb-group">Group size</Label>
          <Input id="fb-group" placeholder="Solo / team / cooperative" {...form.register("groupSize")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="fb-notes">Notes</Label>
        <Textarea id="fb-notes" rows={4} placeholder="Experience level, goals, accessibility needs…" {...form.register("notes")} />
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request booking"}
      </Button>
      {status === "done" ? (
        <p className="text-sm text-primary">Request received — we will confirm by email or phone.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-destructive">Could not send — please email or call us.</p>
      ) : null}
    </form>
  );
}
