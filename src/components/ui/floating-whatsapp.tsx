import { landingContent } from "@/content/landing";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={landingContent.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar pelo WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        W
      </span>
      <span className="whatsapp-tooltip">Reservar pelo WhatsApp</span>
    </a>
  );
}
