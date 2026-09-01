"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

function ProfilePlaceholder() {
  return (
    <div className="flex h-full w-full items-end justify-center bg-slate-800 overflow-hidden">
      <svg
        className="h-32 w-32 text-slate-400 translate-y-3"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function LeaderAvatar({ image, name }: { image?: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-blue-500/30 bg-navy-card shadow-xl">
      {image && !hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <ProfilePlaceholder />
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
            <article key={leader.name} className="text-center">
              <LeaderAvatar image={(leader as { image?: string }).image} name={leader.name} />
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
