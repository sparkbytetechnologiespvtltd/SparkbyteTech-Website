import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Offerings } from "@/components/Offerings";

export const metadata: Metadata = {
  title: "Solutions & Services | Sparkbyte Technologies",
  description:
    "Explore Sparkbyte Technologies cybersecurity, IT consulting, and digital transformation solutions.",
};

export default function SolutionsServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-bold text-foreground">
              Solutions & Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Sparkbyte Technologies delivers authorised software solutions and
              integration services from industry-leading OEM partners.
            </p>
          </div>
        </section>
        <Offerings />
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <Link
              href="/#enquiry"
              className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
