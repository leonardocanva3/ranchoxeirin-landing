import { landingContent, navigationItems } from "@/content/landing";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <a className="brand-mark footer-brand" href="#hero">
            <span>Rancho</span>
            <strong>Xeirin</strong>
          </a>
          <p>
            {landingContent.location.lake} ·{" "}
            {landingContent.location.condominium}
          </p>
          <p className="footer-year">© {currentYear} {landingContent.name}</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <span>WhatsApp</span>
          <a
            href={landingContent.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {landingContent.contact.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
}
