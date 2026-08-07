import Image from "next/image";
import { landingContent } from "@/content/landing";

export function Gourmet() {
  return (
    <section className="section gourmet-section">
      <div className="section-inner gourmet-grid">
        <div className="section-copy">
          <p className="eyebrow">Área gourmet</p>
          <h2>{landingContent.gourmet.title}</h2>
          <p>{landingContent.gourmet.text}</p>
          <ul className="highlight-list two-columns">
            {landingContent.gourmet.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="gourmet-media">
          <figure className="image-frame">
            <Image
              src="/images/gallery/masonry_item_4.avif"
              alt="Área gourmet coberta do Rancho Xeirin com mesas e geladeiras"
              width={466}
              height={360}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>
          <figure className="image-frame">
            <Image
              src="/images/gallery/masonry_item_16.avif"
              alt="Bancada da cozinha do Rancho Xeirin com banquetas e churrasqueira"
              width={466}
              height={360}
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
