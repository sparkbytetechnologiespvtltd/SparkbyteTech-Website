import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ITService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logos/sparkbyte-logo.webp`,
          caption: siteConfig.name,
        },
        image: `${siteConfig.url}/logos/sparkbyte-logo.webp`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phones[0],
        email: siteConfig.contact.email,
        priceRange: "$$",
        taxID: siteConfig.gstin,
        identifier: {
          "@type": "PropertyValue",
          name: "CIN",
          value: siteConfig.cin,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.line2,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.state,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.contact.mapsUrl,
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.linkedin,
          siteConfig.social.twitter,
          siteConfig.social.youtube,
        ].filter(Boolean),
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "AdministrativeArea",
            name: "Karnataka",
          },
          {
            "@type": "City",
            name: "Bengaluru",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SolutionsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sparkbyte Technologies Solutions & Services",
    description:
      "Enterprise cybersecurity, IT consulting, cloud security, and digital transformation solutions provided by Sparkbyte Technologies.",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Cybersecurity Solutions",
        serviceType: "Information Security",
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        description:
          "AI Security, Cloud Security, DLP, Endpoint Security, IAM, PAM, HSM Appliances, and Web Application Firewall (WAF) integration.",
      },
      {
        "@type": "Service",
        position: 2,
        name: "IT & Digital Solutions",
        serviceType: "IT Consulting & Digital Transformation",
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        description:
          "IT Consulting, Enterprise Digital Transformation, and Secure File Transfer Solutions.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
