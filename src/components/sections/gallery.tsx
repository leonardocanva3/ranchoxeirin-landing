"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/content/landing";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Galeria</p>
          <h2>Fotos reais do Rancho Xeirin</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.file}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Abrir foto: ${image.title}`}
            >
              <Image
                src={image.file}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={74}
              />
              <span className="gallery-caption">
                <strong>{image.title}</strong>
                <small>{image.category}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <button
            className="lightbox-backdrop"
            type="button"
            aria-label="Fechar galeria"
            onClick={() => setActiveIndex(null)}
          />
          <div className="lightbox-panel">
            <button
              className="lightbox-close"
              type="button"
              aria-label="Fechar galeria"
              onClick={() => setActiveIndex(null)}
            >
              ×
            </button>
            <figure>
              <Image
                src={activeImage.file}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                sizes="90vw"
                priority
                quality={86}
              />
              <figcaption>
                <strong>{activeImage.title}</strong>
                <span>{activeImage.description}</span>
              </figcaption>
            </figure>
            <div className="lightbox-controls">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) =>
                    current === null
                      ? current
                      : (current - 1 + galleryImages.length) %
                        galleryImages.length,
                  )
                }
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) =>
                    current === null
                      ? current
                      : (current + 1) % galleryImages.length,
                  )
                }
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
