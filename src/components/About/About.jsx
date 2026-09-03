import { Award, Briefcase, Users, CheckCircle2, Shield, Rocket, HeartHandshake } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./About.css";

const About = () => {
  const { about } = companyData;

  const statIcons = {
    exp: <Award className="stat-icon-svg" size={26} />,
    projects: <Briefcase className="stat-icon-svg" size={26} />,
    clients: <Users className="stat-icon-svg" size={26} />,
    retention: <HeartHandshake className="stat-icon-svg" size={26} />,
  };

  const pillarIcons = [
    <Rocket size={20} className="pillar-icon" />,
    <Shield size={20} className="pillar-icon" />,
    <CheckCircle2 size={20} className="pillar-icon" />,
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-badge">
            <span>{about.badge}</span>
          </div>
          <h2 className="section-title">{about.heading}</h2>
        </div>

        {/* 2-Column About Grid */}
        <div className="about-grid">
          {/* Left Text & Value Pillars */}
          <div className="about-story">
            <p className="about-lead">
              {about.description1}
            </p>
            <p className="about-subtext">
              {about.description2}
            </p>

            <div className="about-pillars">
              {about.highlights.map((pillar, idx) => (
                <div key={pillar.title} className="pillar-item">
                  <div className="pillar-icon-wrap">
                    {pillarIcons[idx % pillarIcons.length]}
                  </div>
                  <div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Statistics Grid */}
          <div className="about-stats-container">
            <div className="stats-grid">
              {about.stats.map((stat) => (
                <div key={stat.id} className="stat-card glass-card">
                  <div className="stat-card-header">
                    <div className="stat-icon-wrap">
                      {statIcons[stat.id] || <Award size={24} />}
                    </div>
                    <span className="stat-number">
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-desc">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;