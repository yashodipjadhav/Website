import { Code2, Smartphone, Palette, Cloud, ArrowUpRight, Check } from "lucide-react";
import { companyData } from "../../data/companyData";
import Card3D from "../common/Card3D";
import "./Services.css";

const Services = ({ onOpenContact }) => {
  const { services } = companyData;

  const iconMap = {
    Code2: <Code2 size={26} className="service-icon-svg anim-icon-wiggle" />,
    Smartphone: <Smartphone size={26} className="service-icon-svg anim-icon-float" />,
    Palette: <Palette size={26} className="service-icon-svg anim-icon-sparkle" />,
    Cloud: <Cloud size={26} className="service-icon-svg anim-icon-float" />,
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-heading center">
          <div className="section-badge">
            <span>Our Expertise</span>
          </div>
          <h2 className="section-title">Comprehensive IT Services</h2>
          <p className="section-subtitle">
            Technology solutions designed to help your business grow, innovate, and lead in your industry.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <Card3D
              key={service.id}
              as="article"
              className="service-card glass-card"
              maxTilt={14}
              scale={1.03}
              maxGlare={0.25}
            >
              <div className="service-card-top depth-sm">
                <div className="service-icon-box animated-icon-halo">
                  {iconMap[service.iconName] || <Code2 size={26} />}
                </div>
                <span className="service-badge-pill">{service.badge}</span>
              </div>

              <h3 className="service-title depth-xs">{service.title}</h3>
              <p className="service-description depth-xs">{service.description}</p>

              <ul className="service-features-list depth-sm">
                {service.features.map((feat) => (
                  <li key={feat} className="feature-item">
                    <Check size={14} className="feature-check-icon anim-icon-pulse" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="service-link-btn depth-sm"
                onClick={() => onOpenContact(service.title)}
                aria-label={`Inquire about ${service.title}`}
              >
                <span>Inquire About Service</span>
                <ArrowUpRight size={17} className="service-arrow" />
              </button>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;