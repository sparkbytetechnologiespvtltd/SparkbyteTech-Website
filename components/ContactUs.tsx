import {
  getFormattedAddress,
  getGoogleMapsEmbedUrl,
  siteConfig,
} from "@/lib/site-config";

export function ContactUs() {
  const address = getFormattedAddress();

  return (
    <section id="contact" className="bg-background py-20 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-navy-card shadow-xl">
              <iframe
                title="Sparkbyte Technologies office location"
                src={getGoogleMapsEmbedUrl()}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Location Address
              </p>
              <p className="mt-2 text-lg font-medium text-slate-200">{address}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Phone
              </p>
              <ul className="mt-2 space-y-1">
                {siteConfig.contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-lg font-medium text-slate-200 transition-colors hover:text-blue-400"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-block text-lg font-medium text-slate-200 transition-colors hover:text-blue-400"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
