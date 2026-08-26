import Image from "next/image";

import { getOemLogos } from "@/lib/get-oem-logos";

export function OEMs() {
  const oemLogos = getOemLogos();

  return (
    <section id="partners" className="bg-section-alt py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Our OEMS
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {oemLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-28 items-center justify-center rounded-2xl border border-border bg-white p-4 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
