import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Solutions & Services | Sparkbyte Technologies",
  description:
    "Explore Sparkbyte Technologies solutions and services for IT security, infrastructure, and software integration.",
};

const services = [
  {
    title: "Cybersecurity Solutions",
    description:
      "Enterprise-grade security software from leading OEM partners including Trend Micro, helping protect your endpoints, networks, and cloud workloads.",
  },
  {
    title: "Data Protection & Backup",
    description:
      "Commvault-powered backup, recovery, and data management solutions to safeguard critical business data across on-premises and cloud environments.",
  },
  {
    title: "Application Development & Integration",
    description:
      "Progress platform solutions and system integration services to modernize applications and streamline business operations.",
  },
  {
    title: "Licensing & Reseller Services",
    description:
      "Authorised VAD and reseller services with competitive licensing, renewals, and dedicated account support for enterprise customers.",
  },
];

export default function SolutionsServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-bold text-foreground">
              Solutions &amp; Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Sparkbyte Technologies delivers authorised software solutions and
              integration services from industry-leading OEM partners.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-6xl px-6 text-center">
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
