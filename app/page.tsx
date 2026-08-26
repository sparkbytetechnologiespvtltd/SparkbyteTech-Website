import { ContactUs } from "@/components/ContactUs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Leaders } from "@/components/Leaders";
import { OEMs } from "@/components/OEMs";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <OEMs />
        <ContactUs />
        <Leaders />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
