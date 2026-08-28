import { siteConfig } from "@/lib/site-config";

export function WhatWeDo() {
  return (
    <section id="about" className="bg-background py-20 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold capitalize text-white">Who We Are ?</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
