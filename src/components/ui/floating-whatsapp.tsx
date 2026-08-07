import { landingContent } from "@/content/landing";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={landingContent.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Rancho Xeirin pelo WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false" role="img">
          <path
            fill="currentColor"
            d="M16.02 3.2c-7.02 0-12.73 5.7-12.73 12.72 0 2.25.59 4.44 1.71 6.37L3.18 28.8l6.67-1.75a12.7 12.7 0 0 0 6.17 1.58h.01c7.02 0 12.72-5.7 12.72-12.72S23.04 3.2 16.02 3.2Zm0 23.28h-.01c-1.94 0-3.84-.52-5.5-1.51l-.39-.23-3.95 1.04 1.05-3.86-.25-.4a10.53 10.53 0 0 1-1.6-5.6c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.58 10.58 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.65 10.64Zm5.84-7.97c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.47 4.84.77.33 1.36.52 1.83.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </span>
      <span className="whatsapp-tooltip">Reservar pelo WhatsApp</span>
    </a>
  );
}
