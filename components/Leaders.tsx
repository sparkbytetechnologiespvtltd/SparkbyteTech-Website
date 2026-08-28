"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

function ProfilePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-500">
      <svg
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
  );
}

function LeaderAvatar({ slug, name }: { slug: string; name: string }) {
  const [hasError, setHasError] = useState(false);
  const imagePath = `/images/leaders/${slug}.webp`;

  return (
    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-border bg-navy-card shadow-xl">
      {hasError ? (
        <ProfilePlaceholder />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imagePath}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

export function Leaders() {
  return (
    <section id="leaders" className="bg-section-alt py-20 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Our Leaders
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.leaders.map((leader) => (
            <article key={leader.slug} className="text-center">
              <LeaderAvatar slug={leader.slug} name={leader.name} />
              <h3 className="mt-4 text-xl font-semibold capitalize text-white">
                {leader.name}
              </h3>
              <p className="mt-1 font-medium capitalize text-blue-400">{leader.title}</p>
              <p className="mt-2 text-sm text-slate-400">{leader.experience}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
