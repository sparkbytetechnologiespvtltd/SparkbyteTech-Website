import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] overflow-hidden bg-navy py-20 md:py-28 lg:py-32"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Sparkbyte Technologies Cybersecurity Network Map"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay Gradient for High-Contrast Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />

      {/* Hero Content Container */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/80 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 sm:text-sm">
              {siteConfig.name}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-slate-200 drop-shadow-md sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href="/solutions-services"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/50"
            >
              Explore Solutions
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-slate-900/60 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
