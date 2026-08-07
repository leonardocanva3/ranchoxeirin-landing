import Image from "next/image";
import { landingContent } from "@/content/landing";

export function Location() {
  return (
    <section id="location" className="section location-section">
      <div className="location-panorama">
        <Image
          src={landingContent.assets.locationHeader}
          alt="Pôr do sol sobre o Lago Corumbá IV"
          fill
          sizes="100vw"
        />
      </div>
      <div className="section-inner location-content">
        <div className="section-copy">
          <p className="eyebrow">Lago Corumbá IV</p>
          <h2>{landingContent.lake.title}</h2>
          <p>{landingContent.lake.text}</p>
        </div>
        <ul className="location-details">
          {landingContent.lake.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="directions-box">
          <h3>{landingContent.lake.directions.title}</h3>
          <p>{landingContent.lake.directions.text}</p>
          <a
            className="button button-secondary"
            href={landingContent.contact.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {landingContent.lake.directions.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
