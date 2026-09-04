import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SolutionsJsonLd } from "@/components/JsonLd";
import { Offerings } from "@/components/Offerings";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cybersecurity, IT & Cloud Solutions",
  description:
    "Discover enterprise cybersecurity, AI security, cloud backup, DLP, IAM, PAM, HSM appliances, and IT consulting solutions by Sparkbyte Technologies.",
  alternates: {
    canonical: "/solutions-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/solutions-services`,
    siteName: siteConfig.name,
    title: "Cybersecurity, IT & Cloud Solutions | Sparkbyte Technologies",
    description:
      "Enterprise cybersecurity, AI security, cloud backup, DLP, IAM, PAM, HSM appliances, and IT consulting solutions.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Sparkbyte Technologies Enterprise Solutions & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity, IT & Cloud Solutions | Sparkbyte Technologies",
    description:
      "Enterprise cybersecurity, AI security, cloud backup, DLP, IAM, PAM, HSM appliances, and IT consulting solutions.",
    site: "@SparkbyteTech",
    creator: "@SparkbyteTech",
    images: ["/images/hero-bg.webp"],
  },
};

export default function SolutionsServicesPage() {
  return (
    <>
      <SolutionsJsonLd />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-navy via-[#0c1527] to-[#172554] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-bold text-white">
              Solutions & Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Sparkbyte Technologies delivers authorised software solutions and
              integration services from industry-leading OEM partners.
            </p>
          </div>
        </section>
        <Offerings />
        <section className="bg-background pb-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <Link
              href="/#enquiry"
              className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
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
