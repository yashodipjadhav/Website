import { ArrowRight, Sparkles } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./CTA.css";

const CTA = ({ onOpenContact }) => {
  const { cta } = companyData;

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-card">
          {/* Decorative Glow */}
          <div className="cta-glow" aria-hidden="true" />

          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={15} />
              <span>{cta.badge}</span>
            </div>

            <h2 className="cta-heading">{cta.heading}</h2>
            <p className="cta-description">{cta.description}</p>
            <p className="cta-subtext">{cta.secondaryText}</p>
          </div>

          <div className="cta-action-wrap">
            <button
              type="button"
              className="btn cta-button"
              onClick={() => onOpenContact()}
              aria-label="Open contact form to talk with TechNova Solutions"
            >
              <span>{cta.buttonText}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;