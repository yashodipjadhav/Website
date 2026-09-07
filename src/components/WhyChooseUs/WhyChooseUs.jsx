import { Users, Cpu, Lightbulb, HeartHandshake, Clock } from "lucide-react";
import { companyData } from "../../data/companyData";
import Card3D from "../common/Card3D";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const { whyChooseUs } = companyData;

  const iconMap = {
    Users: <Users size={24} className="reason-icon-svg anim-icon-pulse" />,
    Cpu: <Cpu size={24} className="reason-icon-svg anim-icon-wiggle" />,
    Lightbulb: <Lightbulb size={24} className="reason-icon-svg anim-icon-sparkle" />,
    HeartHandshake: <HeartHandshake size={24} className="reason-icon-svg anim-icon-heartbeat" />,
    Clock: <Clock size={24} className="reason-icon-svg anim-icon-spin" />,
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
            <Card3D
              key={reason.id}
              className="reason-card glass-card"
              maxTilt={12}
              scale={1.025}
              maxGlare={0.22}
            >
              <div className="reason-card-header depth-sm">
                <div className="reason-icon-wrapper animated-icon-halo">
                  {iconMap[reason.iconName] || <Cpu size={24} />}
                </div>
                <span className="reason-number depth-md">{reason.number}</span>
              </div>

              <div className="reason-content depth-xs">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;