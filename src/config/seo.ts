import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/config/site";

const configuredSiteUrl = getSiteUrl();

export const defaultMetadata: Metadata = {
  metadataBase: configuredSiteUrl,
  title: {
    default: "Rancho Xeirin | Rancho para aluguel em Corumbá IV próximo a Brasília",
    template: "%s | Rancho Xeirin",
  },
  description:
    "Alugue o Rancho Xeirin no Lago Corumbá IV, em condomínio fechado, com piscina aquecida, sauna, churrasqueira, suítes e área de lazer para família e amigos.",
  alternates: configuredSiteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: configuredSiteUrl ? "/" : undefined,
    siteName: "Rancho Xeirin",
    title: "Rancho Xeirin | Rancho para aluguel em Corumbá IV próximo a Brasília",
    description:
      "Alugue o Rancho Xeirin no Lago Corumbá IV, em condomínio fechado, com piscina aquecida, sauna, churrasqueira, suítes e área de lazer para família e amigos.",
    images: configuredSiteUrl
      ? [
          {
            url: "/images/gallery/masonry_item_3.avif",
            width: 466,
            height: 360,
            alt: "Piscina do Rancho Xeirin com palmeiras e área externa",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rancho Xeirin | Rancho para aluguel em Corumbá IV próximo a Brasília",
    description:
      "Alugue o Rancho Xeirin no Lago Corumbá IV, em condomínio fechado, com piscina aquecida, sauna, churrasqueira, suítes e área de lazer para família e amigos.",
    images: configuredSiteUrl ? ["/images/gallery/masonry_item_3.avif"] : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
};
