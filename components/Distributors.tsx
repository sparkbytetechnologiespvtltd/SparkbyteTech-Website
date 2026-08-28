import Image from "next/image";

import { getDistributorLogos } from "@/lib/get-distributor-logos";

export function Distributors() {
  const distributorLogos = getDistributorLogos();

  return (
    <section id="distributors" className="bg-section-alt py-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Our Distributors
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {distributorLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-28 w-64 items-center justify-center rounded-2xl border border-border bg-navy-card p-3 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/95 p-3">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={70}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
