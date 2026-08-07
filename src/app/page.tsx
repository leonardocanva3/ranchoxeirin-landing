import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { Gourmet } from "@/components/sections/gourmet";
import { Hero } from "@/components/sections/hero";
import { Leisure } from "@/components/sections/leisure";
import { Location } from "@/components/sections/location";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StructuredData } from "@/components/seo/structured-data";
import { lodgingStructuredData } from "@/config/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData data={lodgingStructuredData} />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Leisure />
        <Gourmet />
        <Location />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
