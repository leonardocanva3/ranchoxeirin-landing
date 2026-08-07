import Image from "next/image";
import { landingContent } from "@/content/landing";

export function Leisure() {
  return (
    <section className="section leisure-section">
      <div className="section-inner leisure-grid">
        <div className="leisure-media">
          <figure className="image-frame leisure-main">
            <Image
              src="/images/gallery/masonry_item_17.avif"
              alt="Piscina do Rancho Xeirin integrada à área gourmet"
              width={466}
              height={360}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </figure>
          <figure className="image-frame">
            <Image
              src="/images/gallery/masonry_item_9.avif"
              alt="Sauna do Rancho Xeirin com vista para a piscina"
              width={466}
              height={360}
              sizes="(max-width: 900px) 48vw, 22vw"
            />
          </figure>
          <figure className="image-frame">
            <Image
              src="/images/gallery/masonry_item_15.avif"
              alt="Piscina externa do Rancho Xeirin próxima à área coberta"
              width={466}
              height={360}
              sizes="(max-width: 900px) 48vw, 22vw"
            />
          </figure>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Piscina e lazer</p>
          <h2>{landingContent.leisure.title}</h2>
          <p>{landingContent.leisure.text}</p>
          <ul className="highlight-list">
            {landingContent.leisure.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
