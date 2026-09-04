import Image from "next/image";

import { getOemLogos } from "@/lib/get-oem-logos";

export function OEMs() {
  const oemLogos = getOemLogos();

  return (
    <section id="partners" className="bg-section-alt py-20 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Technology Partners (OEMs)
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {oemLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-28 items-center justify-center rounded-2xl border border-border bg-navy-card p-3 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white/95 p-3">
                <Image
                  src={logo.src}
                  alt={`${logo.name} - Authorised OEM Technology Partner`}
                  fill
                  sizes="160px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
