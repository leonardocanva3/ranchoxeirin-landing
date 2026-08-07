import Image from "next/image";
import { landingContent } from "@/content/landing";

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner about-grid">
        <div className="section-copy">
          <p className="eyebrow">{landingContent.about.eyebrow}</p>
          <h2>{landingContent.about.title}</h2>
          {landingContent.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-media" aria-label="Fotos do Rancho Xeirin">
          <figure className="image-frame about-image-large">
            <Image
              src="/images/gallery/about_us.avif"
              alt="Piscina do Rancho Xeirin com espreguiçadeira e palmeiras"
              width={700}
              height={410}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </figure>
          <figure className="image-frame about-image-small">
            <Image
              src="/images/gallery/masonry_item_7.avif"
              alt="Área externa do Rancho Xeirin com gramado, palmeiras e fachada"
              width={932}
              height={360}
              sizes="(max-width: 900px) 48vw, 22vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
