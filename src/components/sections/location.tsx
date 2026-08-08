import Image from "next/image";
import { landingContent } from "@/content/landing";

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15319.361088453563!2d-48.3990218!3d-16.2799549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe50ef19afc36c751!2sRancho%20Xeirin!5e0!3m2!1spt-BR!2sbr!4v1620566684627!5m2!1spt-BR!2sbr";

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
          <iframe
            className="directions-map"
            src={googleMapsEmbedUrl}
            title="LocalizaÃ§Ã£o do Rancho Xeirin no Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
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
