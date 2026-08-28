export const siteConfig = {
  name: "Sparkbyte Technologies",
  legalName: "Sparkbyte Technologies Pvt.ltd",
  tagline:
    "We are Sparkbyte Technologies. Globally trusted System Integrator and Reseller.",
  description:
    "Authorised Reseller and System Integrator helping businesses secure, protect, and manage IT infrastructure through leading software, hardware, and cloud solutions.",
  contact: {
    email: "info@sparkbyte-tech.com",
    phones: ["+91 63631 17882", "+91 91879 13773"],
    mapsUrl: "https://maps.app.goo.gl/3NwDFHGboJm1N5Bw9",
    address: {
      line1: "Sparkbyte Technologies Pvt. Ltd.",
      line2: "Cabin No. 9, 4 th floor , Golden Square , Eden Park, 102, 20, Vittal Mallya Rd.",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560001",
      country: "India",
    },
  },
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
  },
  corporateLinks: [
    { label: "About Us", href: "/#about" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
  navLinks: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Solutions & Services", href: "/solutions-services" },
    { label: "Partners", href: "/#partners" },
    { label: "Contact Us", href: "/#contact" },
  ],
  leaders: [
    {
      slug: "Shaik",
      name: "Shaik",
      title: "CEO and MD",
      experience: "15+ yrs exp",
    },
    {
      slug: "Sagar",
      name: "Sagar",
      title: "Sales Director",
      experience: "15+yrs exp",
    },
    {
      slug: "Sophia",
      name: "Sophia",
      title: "Business Development Manager",
      experience: "Experience in Business Development",
    },
  ],
} as const;

export function getFormattedAddress() {
  const { line1, line2, city, state, postalCode, country } =
    siteConfig.contact.address;
  return `${line1}, ${line2}, ${city}, ${state} ${postalCode}, ${country}`;
}

export function getGoogleMapsEmbedUrl() {
  const query = encodeURIComponent(
    "Golden Square - Vittal Mallya Road, 102, 20, Vittal Mallya Rd, Bengaluru, Karnataka 560001",
  );
  return `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
}
