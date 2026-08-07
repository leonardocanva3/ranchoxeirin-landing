import Image from "next/image";
import { landingContent } from "@/content/landing";

export function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Início">
      <Image
        className="hero-fallback"
        src={landingContent.assets.heroFallback}
        alt="Piscina do Rancho Xeirin com palmeiras e área externa"
        fill
        priority
        sizes="100vw"
        quality={78}
      />
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={landingContent.assets.heroFallback}
        aria-hidden="true"
      >
        <source
          src={landingContent.assets.heroVideoWebm}
          type="video/webm"
        />
        <source src={landingContent.assets.heroVideoMp4} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content section-inner">
        <p className="eyebrow">{landingContent.hero.eyebrow}</p>
        <h1>{landingContent.hero.title}</h1>
        <p className="hero-subtitle">{landingContent.hero.subtitle}</p>
        <p className="hero-supporting">{landingContent.hero.supportingText}</p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={landingContent.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {landingContent.hero.primaryCta}
          </a>
          <a className="button button-secondary" href="#about">
            {landingContent.hero.secondaryCta}
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>{landingContent.hero.scrollLabel}</span>
      </a>
    </section>
  );
}
