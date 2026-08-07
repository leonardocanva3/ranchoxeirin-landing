"use client";

import { useEffect, useState } from "react";
import { landingContent, navigationItems } from "@/content/landing";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled || isOpen ? "is-solid" : ""}`}>
      <nav className="header-nav" aria-label="Navegação principal">
        <a className="brand-mark" href="#hero" onClick={closeMenu}>
          <span>Rancho</span>
          <strong>Xeirin</strong>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-menu"
          className={`header-menu ${isOpen ? "is-open" : ""}`}
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button-primary header-cta"
            href={landingContent.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Reservar pelo WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
