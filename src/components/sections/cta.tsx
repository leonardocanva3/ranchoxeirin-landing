import Image from "next/image";
import { landingContent } from "@/content/landing";

export function CTA() {
  return (
    <section id="cta" className="cta-section">
      <Image
        src="/images/gallery/masonry_item_6.avif"
        alt="Pôr do sol no Lago Corumbá IV"
        fill
        sizes="100vw"
      />
      <div className="cta-overlay" />
      <div className="section-inner cta-content">
        <p className="eyebrow">Reserva</p>
        <h2>{landingContent.cta.title}</h2>
        <p>{landingContent.cta.text}</p>
        <a
          className="button button-primary"
          href={landingContent.contact.availabilityUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {landingContent.cta.button}
        </a>
      </div>
    </section>
  );
}
