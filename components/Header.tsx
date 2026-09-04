import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/#home" className="shrink-0">
          <Image
            src="/logos/sparkbyte-logo.webp"
            alt={siteConfig.name}
            width={220}
            height={65}
            className="h-9 w-auto object-contain sm:h-10 md:h-11 brightness-110"
            priority
          />
        </Link>
        <nav className="hidden rounded-full border border-border/80 bg-slate-900/70 px-2 py-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-blue-600/20 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none select-none rounded-full border border-border bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:text-white">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-navy p-2 shadow-xl shadow-black/50">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-2 text-sm text-slate-200 hover:bg-blue-600/20 hover:text-white"
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
