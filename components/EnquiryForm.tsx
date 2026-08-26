"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function EnquiryForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      requirements: String(formData.get("requirements") ?? ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
        warnings?: string[];
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setFormState("success");
      form.reset();

      if (data.warnings?.length) {
        setErrorMessage(data.warnings.join(" "));
      }
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="enquiry" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          For More Enquiry
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 sm:grid-cols-5">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="phone number"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="company name"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="requirements" className="sr-only">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              required
              rows={5}
              placeholder="specify your requirements here."
              className={`${inputClass} resize-y`}
            />
          </div>
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={formState === "loading"}
              className="rounded-full border-2 border-red-500 px-10 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "loading" ? "Submitting..." : "Submit"}
            </button>
            {formState === "success" && (
              <p className="text-sm text-green-600">
                Thank you! Your enquiry has been submitted.
              </p>
            )}
            {formState === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            {formState === "success" && errorMessage && (
              <p className="text-sm text-amber-600">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
