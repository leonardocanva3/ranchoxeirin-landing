import { faqItems } from "@/content/landing";

export function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="section-inner faq-grid">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Dúvidas frequentes</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
