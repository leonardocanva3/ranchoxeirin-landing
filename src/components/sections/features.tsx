import { landingContent } from "@/content/landing";

export function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Estrutura</p>
          <h2>Estrutura para aproveitar cada momento</h2>
        </div>
        <div className="feature-groups">
          {landingContent.featureGroups.map((group) => (
            <section className="feature-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
