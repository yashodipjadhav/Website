import { Users, Cpu, Lightbulb, HeartHandshake, Clock } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const { whyChooseUs } = companyData;

  const iconMap = {
    Users: <Users size={24} />,
    Cpu: <Cpu size={24} />,
    Lightbulb: <Lightbulb size={24} />,
    HeartHandshake: <HeartHandshake size={24} />,
    Clock: <Clock size={24} />,
  };

  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-heading center">
          <div className="section-badge">
            <span>Why TechNova</span>
          </div>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We deliver excellence by combining seasoned engineering talent, modern tech stacks, and customer-first execution.
          </p>
        </div>

        {/* 5-Card Responsive Reason Grid */}
        <div className="reasons-grid">
          {whyChooseUs.map((reason) => (
            <div key={reason.id} className="reason-card glass-card">
              <div className="reason-card-header">
                <div className="reason-icon-wrapper">
                  {iconMap[reason.iconName] || <Cpu size={24} />}
                </div>
                <span className="reason-number">{reason.number}</span>
              </div>

              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;