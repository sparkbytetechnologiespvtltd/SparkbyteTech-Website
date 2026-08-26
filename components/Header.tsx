import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/#home" className="shrink-0">
          <Image
            src="/logos/sparkbyte-full.png"
            alt={siteConfig.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <nav className="hidden rounded-full border border-border bg-white px-2 py-1 shadow-sm md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-section-alt hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-border px-4 py-2 text-sm font-medium">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 w-56 rounded-2xl border border-border bg-white p-2 shadow-lg">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-2 text-sm hover:bg-section-alt"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
