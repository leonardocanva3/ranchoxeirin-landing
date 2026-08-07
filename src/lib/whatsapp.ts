const whatsappPhone = "5561996643612";

export const whatsappMessages = {
  general:
    "Olá! Vi o site do Rancho Xeirin e gostaria de mais informações.",
  reservation:
    "Olá! Vi o site do Rancho Xeirin e gostaria de consultar disponibilidade e receber mais informações.",
  location:
    "Olá! Gostaria de receber a localização do Rancho Xeirin e informações para chegar até o local.",
} as const;

export type WhatsAppMessageType = keyof typeof whatsappMessages;

export function createWhatsAppUrl(messageType: WhatsAppMessageType) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    whatsappMessages[messageType],
  )}`;
}
