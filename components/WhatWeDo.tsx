import { siteConfig } from "@/lib/site-config";

export function WhatWeDo() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-foreground">what we do ?</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
