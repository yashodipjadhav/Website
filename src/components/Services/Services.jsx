import { Code2, Smartphone, Palette, Cloud, ArrowUpRight, Check } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./Services.css";

const Services = ({ onOpenContact }) => {
  const { services } = companyData;

  const iconMap = {
    Code2: <Code2 size={26} />,
    Smartphone: <Smartphone size={26} />,
    Palette: <Palette size={26} />,
    Cloud: <Cloud size={26} />,
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
            <article key={service.id} className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {iconMap[service.iconName] || <Code2 size={26} />}
                </div>
                <span className="service-badge-pill">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features-list">
                {service.features.map((feat) => (
                  <li key={feat} className="feature-item">
                    <Check size={14} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="service-link-btn"
                onClick={() => onOpenContact(service.title)}
                aria-label={`Inquire about ${service.title}`}
              >
                <span>Inquire About Service</span>
                <ArrowUpRight size={17} className="service-arrow" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;