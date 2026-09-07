import { Award, Briefcase, Users, CheckCircle2, Shield, Rocket, HeartHandshake } from "lucide-react";
import { companyData } from "../../data/companyData";
import Card3D from "../common/Card3D";
import "./About.css";

const About = () => {
  const { about } = companyData;

  const statIcons = {
    exp: <Award className="stat-icon-svg anim-icon-wiggle" size={26} />,
    projects: <Briefcase className="stat-icon-svg anim-icon-float" size={26} />,
    clients: <Users className="stat-icon-svg anim-icon-pulse" size={26} />,
    retention: <HeartHandshake className="stat-icon-svg anim-icon-heartbeat" size={26} />,
  };

  const pillarIcons = [
    <Rocket size={20} className="pillar-icon pillar-rocket" />,
    <Shield size={20} className="pillar-icon pillar-shield" />,
    <CheckCircle2 size={20} className="pillar-icon pillar-check" />,
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
                <Card3D
                  key={pillar.title}
                  className="pillar-item glass-card"
                  maxTilt={6}
                  scale={1.015}
                  maxGlare={0.15}
                >
                  <div className="pillar-inner depth-sm">
                    <div className="pillar-icon-wrap animated-icon-halo">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Right Statistics Grid */}
          <div className="about-stats-container">
            <div className="stats-grid">
              {about.stats.map((stat) => (
                <Card3D
                  key={stat.id}
                  className="stat-card glass-card"
                  maxTilt={12}
                  scale={1.03}
                  maxGlare={0.25}
                >
                  <div className="stat-card-header depth-sm">
                    <div className="stat-icon-wrap animated-icon-halo">
                      {statIcons[stat.id] || <Award size={24} />}
                    </div>
                    <span className="stat-number depth-md">
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  <h3 className="stat-label depth-xs">{stat.label}</h3>
                  <p className="stat-desc depth-xs">{stat.description}</p>
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;