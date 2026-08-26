import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-primary/5"
    >
      <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {siteConfig.name}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {siteConfig.tagline}
        </h1>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
    </section>
  );
}
