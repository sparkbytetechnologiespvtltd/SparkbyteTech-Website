export const siteConfig = {
  name: "Sparkbyte Technologies",
  legalName: "Sparkbyte Technologies Pvt.ltd",
  cin: "U62020KA2026PTC221572",
  gstin: "29ABTCS8828H1ZD",
  tagline:
    "We are Sparkbyte Technologies. Globally Trusted System Integrator and Reseller.",
  description:
    "Authorised Reseller and System Integrator helping businesses secure, protect, and manage IT infrastructure through leading Software, Hardware, AI and Cloud solutions.",
  whoWeAre: [
    "Sparkbyte Technologies is a trusted system integrator and authorised reseller delivering innovative IT solutions that help businesses secure, protect, and manage their infrastructure. We specialise in leading Software, Hardware, AI, and Cloud technologies, empowering organisations of all sizes with seamless connectivity, robust security, and scalable, future-ready systems.",
    "As a globally oriented technology partner based in Bengaluru, we work closely with top OEMs and distributors to bring the latest, most reliable solutions to market. From strengthening enterprise networks and safeguarding digital assets to enabling AI-driven insights and accelerating cloud transformations, our focus remains on practical results and long-term customer success.",
  ],
  contact: {
    email: "info@sparkbyte-tech.com",
    phones: ["+91 63631 17882", "+91 91879 13773"],
    mapsUrl: "https://maps.app.goo.gl/3NwDFHGboJm1N5Bw9",
    address: {
      line1: "Sparkbyte Technologies Pvt. Ltd.",
      line2: "Cabin No. 9, 4 th floor , Golden Square , Eden Park, 102, 20, Vittal Mallya Rd., Bengaluru, Karnataka 560001",
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
      slug: "Mr. Shaik",
      name: "Mr. Shaik",
      title: "Co-founder and CEO",
      experience: "15+ yrs exp",
    },
    {
      slug: "Mr. K.S.Sagar",
      name: "Mr. K.S.Sagar",
      title: "Sales Director",
      experience: "15+yrs exp",
    },
    {
      slug: "Ms. Sophia",
      name: "Ms. Sophia",
      title: "Co-founder and HR",
      experience: "15+ yrs experience in talent aquisition",
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
