import Image from "next/image";
import Link from "next/link";
import { landingContent } from "@/content/landing";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Image
        src="/images/location/heading_bg.avif"
        alt="Pôr do sol sobre o Lago Corumbá IV"
        fill
        priority
        sizes="100vw"
      />
      <div className="not-found-overlay" />
      <section className="not-found-content">
        <p className="eyebrow">Rancho Xeirin</p>
        <h1>Parece que você saiu da trilha.</h1>
        <p>A página que você procura não foi encontrada.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Voltar para o início
          </Link>
          <a
            className="button button-secondary"
            href={landingContent.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
