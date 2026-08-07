import { landingContent } from "@/content/landing";
import { getSiteUrl } from "@/config/site";
import type { JsonLd } from "@/types/seo";

const siteUrl = getSiteUrl();

export const lodgingStructuredData: JsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: landingContent.name,
  description:
    "Rancho para temporada no Lago Corumbá IV, em condomínio fechado, com piscina aquecida, sauna, churrasqueira, suítes e área de lazer.",
  telephone: landingContent.contact.whatsapp,
  ...(siteUrl
    ? {
        url: new URL("/", siteUrl).toString(),
        image: [
          new URL("/images/gallery/masonry_item_3.avif", siteUrl).toString(),
          new URL("/images/gallery/masonry_item_6.avif", siteUrl).toString(),
          new URL("/images/location/heading_bg.avif", siteUrl).toString(),
        ],
      }
    : {}),
  amenityFeature: landingContent.featureGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item,
      value: true,
    })),
  ),
  containedInPlace: {
    "@type": "Place",
    name: landingContent.location.condominium,
  },
};
