import {
  getFormattedAddress,
  getGoogleMapsEmbedUrl,
  siteConfig,
} from "@/lib/site-config";

export function ContactUs() {
  const address = getFormattedAddress();

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Sparkbyte Technologies office location"
              src={getGoogleMapsEmbedUrl()}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Location Address
              </p>
              <p className="mt-2 text-lg text-foreground">{address}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Phone
              </p>
              <ul className="mt-2 space-y-1">
                {siteConfig.contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-lg text-foreground hover:text-primary"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-block text-lg text-foreground hover:text-primary"
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
