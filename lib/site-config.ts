export const siteConfig = {
  name: "Sparkbyte Technologies",
  legalName: "Spark byte technologies Pvt.ltd",
  tagline:
    "We are sparkbyte technologies. globally trusted vad and reseller.",
  description:
    "Sparkbyte Technologies is an authorised reseller and system integrator, helping businesses secure, protect, and manage their IT infrastructure through industry-leading software solutions.",
  contact: {
    email: "info@sparkbyte-tech.com",
    phones: ["+91 45678765432", "+1-09876556321"],
    address: {
      line1: "Sparkbyte Technologies Pvt. Ltd.",
      line2: "42, MG Road, Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560038",
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
      slug: "shaik",
      name: "shaik",
      title: "director and ceo",
      experience: "15+ yrs exp",
    },
    {
      slug: "sagar",
      name: "Sagar",
      title: "sales director",
      experience: "15+yrs exp",
    },
    {
      slug: "sophie",
      name: "sophie",
      title: "human resources",
      experience: "6+ yrs exp in human resources",
    },
  ],
} as const;

export function getFormattedAddress() {
  const { line1, line2, city, state, postalCode, country } =
    siteConfig.contact.address;
  return `${line1}, ${line2}, ${city}, ${state} ${postalCode}, ${country}`;
}

export function getGoogleMapsEmbedUrl() {
  const query = encodeURIComponent(getFormattedAddress());
  return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
