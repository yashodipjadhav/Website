import { Quote, Star } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./Testimonials.css";

const Testimonials = () => {
  const { testimonials } = companyData;

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-heading center">
          <div className="section-badge">
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Read how TechNova Solutions delivers measurable ROI and technological breakthroughs for leading brands.
          </p>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card glass-card">
              <div className="testimonial-card-header">
                <div className="quote-badge">
                  <Quote size={20} className="quote-icon-svg" />
                </div>
                <div className="star-rating" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
              </div>

              <blockquote className="testimonial-feedback">
                "{item.feedback}"
              </blockquote>

              <div className="client-profile">
                <div className="client-avatar">
                  <span>{item.avatarInitials}</span>
                </div>
                <div className="client-info">
                  <h4 className="client-name">{item.name}</h4>
                  <span className="client-meta">
                    {item.role}, <strong>{item.company}</strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;