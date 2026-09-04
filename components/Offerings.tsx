import type { ReactNode } from "react";

type IconName =
  | "robot"
  | "cloud"
  | "backup"
  | "globe"
  | "monitor"
  | "shieldSplit"
  | "key"
  | "lock"
  | "chip"
  | "link"
  | "firewall"
  | "database"
  | "chart"
  | "laptop"
  | "rocket"
  | "fileTransfer";

type OfferItem = {
  label: string;
  icon: IconName;
};

const cybersecurity: OfferItem[] = [
  { label: "AI Security", icon: "robot" },
  { label: "Cloud Security", icon: "cloud" },
  { label: "Data Security & Backup", icon: "backup" },
  { label: "Network Security", icon: "globe" },
  { label: "Endpoint Security", icon: "monitor" },
  { label: "Data Loss Prevention (DLP)", icon: "shieldSplit" },
  { label: "Identity & Access Management (IAM)", icon: "key" },
  { label: "PIM / PAM", icon: "lock" },
  { label: "Hardware Security Modules (HSM Appliances)", icon: "chip" },
  { label: "API Security", icon: "link" },
  { label: "Web Application Firewall (WAF)", icon: "firewall" },
  { label: "Database Security", icon: "database" },
  { label: "Database Activity Monitoring (DAM)", icon: "chart" },
];

const itDigital: OfferItem[] = [
  { label: "IT Consulting", icon: "laptop" },
  { label: "Digital Transformation", icon: "rocket" },
  { label: "File Transfer Solutions", icon: "fileTransfer" },
];

const iconClass = "h-5 w-5 shrink-0";

const icons: Record<IconName, ReactNode> = {
  robot: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <circle cx="9" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 8V4M9 4h6" strokeLinecap="round" />
      <path d="M8 19v2M16 19v2" strokeLinecap="round" />
    </svg>
  ),
  cloud: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 18h10.2A3.8 3.8 0 0020 14.4a3.8 3.8 0 00-3.3-3.75A5.2 5.2 0 007.4 9.1 3.7 3.7 0 004 12.7 3.6 3.6 0 006.5 18z" />
    </svg>
  ),
  backup: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 4v4h6V4M8 12h8M8 16h5" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.5 2.8 3.8 5.5 3.8 8s-1.3 5.2-3.8 8c-2.5-2.8-3.8-5.5-3.8-8s1.3-5.2 3.8-8z" />
    </svg>
  ),
  monitor: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="11" rx="1.5" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  ),
  shieldSplit: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3.5l7 3v5.2c0 4.2-2.8 7.1-7 8.8-4.2-1.7-7-4.6-7-8.8V6.5l7-3z" />
      <path d="M12 4v16.2" />
    </svg>
  ),
  key: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H20m-3 0v3m2.5-3v2" strokeLinecap="round" />
    </svg>
  ),
  lock: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M8.5 11V8a3.5 3.5 0 017 0v3" />
    </svg>
  ),
  chip: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" strokeLinecap="round" />
    </svg>
  ),
  link: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" d="M9.5 14.5l5-5M8 12H6.5A3.5 3.5 0 013 8.5 3.5 3.5 0 016.5 5H10M16 12h1.5A3.5 3.5 0 0121 15.5 3.5 3.5 0 0117.5 19H14" />
    </svg>
  ),
  firewall: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c2.2 2.4 3.5 4.3 3.5 6.6A3.5 3.5 0 0112 13.6 3.5 3.5 0 018.5 10.1C8.5 7.8 9.8 5.9 12 3.5z" />
      <path strokeLinecap="round" d="M6 16h12M8 19h8M10 22h4" />
    </svg>
  ),
  database: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="7" ry="2.8" />
      <path d="M5 6.5v11c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-11" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </svg>
  ),
  chart: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" d="M4 19h16M7 16v-4M12 16V8M17 16v-7" />
    </svg>
  ),
  laptop: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="6" width="14" height="9" rx="1.2" />
      <path d="M3.5 17.5h17A1.5 1.5 0 0119 19H5a1.5 1.5 0 01-1.5-1.5z" />
    </svg>
  ),
  rocket: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinejoin="round" d="M14.5 4.5c2.8 1.2 5 4.2 5.5 7.2-2.8.2-5.5-1.3-7.2-3.2-1.9-1.7-3.4-4.4-3.2-7.2 3 .5 6 1.2 4.9 3.2z" />
      <path d="M9.5 14.5l-4 4M8 16.5l-2.5.8.8-2.5" strokeLinecap="round" />
      <circle cx="14.2" cy="9.8" r="1.1" />
    </svg>
  ),
  fileTransfer: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinejoin="round" d="M7 4h7l4 4v12H7V4z" />
      <path d="M14 4v4h4M10 13h6m-6 3h4" strokeLinecap="round" />
    </svg>
  ),
};

function OfferList({ items }: { items: OfferItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-blue-800/40 bg-blue-950/80 text-blue-400 shadow-sm">
            {icons[item.icon]}
          </span>
          <span className="pt-1 text-sm font-semibold text-slate-100 sm:text-base">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Offerings() {
  return (
    <section className="overflow-hidden bg-background py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex justify-center lg:hidden">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-center text-base font-bold leading-tight text-white shadow-xl shadow-blue-600/30">
            What We
            <br />
            offer
          </div>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_9rem_minmax(0,1fr)] lg:gap-0">
          <article className="offer-panel-left rounded-3xl border border-border/80 bg-navy-card px-8 py-10 shadow-xl shadow-black/40">
            <h2 className="mb-8 text-2xl font-bold text-blue-400">
              Cybersecurity Solutions
            </h2>
            <OfferList items={cybersecurity} />
          </article>

          <div className="relative z-10 hidden items-center justify-center lg:flex">
            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-blue-600 text-center text-lg font-bold leading-tight text-white shadow-xl shadow-blue-600/30 ring-8 ring-background">
              What We
              <br />
              offer
            </div>
          </div>

          <article className="offer-panel-right flex flex-col justify-center rounded-3xl border border-border/80 bg-navy-card px-8 py-10 shadow-xl shadow-black/40">
            <h2 className="mb-8 text-center text-2xl font-bold text-blue-400 lg:text-left">
              IT & Digital Solutions
            </h2>
            <div className="lg:ml-6">
              <OfferList items={itDigital} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
