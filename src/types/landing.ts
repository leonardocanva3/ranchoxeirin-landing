export type LandingSectionId =
  | "hero"
  | "about"
  | "features"
  | "gallery"
  | "location"
  | "faq"
  | "cta";

export type GalleryCategory =
  | "área externa"
  | "piscina"
  | "sauna"
  | "quartos"
  | "cozinha"
  | "área gourmet"
  | "lago"
  | "pôr do sol"
  | "natureza"
  | "lazer"
  | "sala";

export type GalleryImage = {
  file: string;
  category: GalleryCategory;
  title: string;
  description: string;
  alt: string;
  width: number;
  height: number;
};

export type ContactInfo = {
  whatsapp: string;
  whatsappMessage: string;
  whatsappUrl: string;
};

export type PendingInformation = {
  key: string;
  label: string;
  status: "pendente";
};

export type FaqItem = {
  question: string;
  answer: string;
};
