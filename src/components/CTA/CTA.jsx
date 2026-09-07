import { ArrowRight, Sparkles } from "lucide-react";
import { companyData } from "../../data/companyData";
import Card3D from "../common/Card3D";
import "./CTA.css";

const CTA = ({ onOpenContact }) => {
  const { cta } = companyData;

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <Card3D
          className="cta-card"
          maxTilt={6}
          scale={1.015}
          maxGlare={0.2}
        >
          {/* Decorative Glow */}
          <div className="cta-glow" aria-hidden="true" />

          <div className="cta-content depth-sm">
            <div className="cta-badge">
              <Sparkles size={15} className="anim-icon-sparkle" />
              <span>{cta.badge}</span>
            </div>

            <h2 className="cta-heading depth-xs">{cta.heading}</h2>
            <p className="cta-description depth-xs">{cta.description}</p>
            <p className="cta-subtext depth-xs">{cta.secondaryText}</p>
          </div>

          <div className="cta-action-wrap depth-md">
            <button
              type="button"
              className="btn cta-button"
              onClick={() => onOpenContact()}
              aria-label="Open contact form to talk with TechNova Solutions"
            >
              <span>{cta.buttonText}</span>
              <ArrowRight size={18} className="cta-arrow-icon" />
            </button>
          </div>
        </Card3D>
      </div>
    </section>
  );
};

export default CTA;