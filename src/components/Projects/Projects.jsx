import { useState } from "react";
import { ShoppingBag, BarChart3, Activity, ArrowUpRight, X } from "lucide-react";
import { companyData } from "../../data/companyData";
import Card3D from "../common/Card3D";
import "./Projects.css";

const Projects = ({ onOpenContact }) => {
  const { projects } = companyData;
  const [selectedProject, setSelectedProject] = useState(null);

  const renderProjectVisual = (type) => {
    if (type === "ecommerce") {
      return (
        <div className="preview-mockup mockup-ecommerce depth-md">
          <div className="mockup-header-bar">
            <div className="mockup-dots">
              <span className="m-dot red" />
              <span className="m-dot yellow" />
              <span className="m-dot green" />
            </div>
            <span className="mockup-url">store.technova.dev</span>
          </div>
          <div className="mockup-inner-grid">
            <div className="mockup-card-item">
              <div className="mockup-item-img ecom-img-1 animated-icon-halo">
                <ShoppingBag size={20} className="anim-icon-bounce" />
              </div>
              <div className="mockup-item-info">
                <span className="mockup-item-title">Quantum X Laptop</span>
                <span className="mockup-item-price">$1,499.00</span>
              </div>
            </div>
            <div className="mockup-card-item">
              <div className="mockup-item-img ecom-img-2 animated-icon-halo">
                <ShoppingBag size={20} className="anim-icon-wiggle" />
              </div>
              <div className="mockup-item-info">
                <span className="mockup-item-title">Aero Pro Headphones</span>
                <span className="mockup-item-price">$299.00</span>
              </div>
            </div>
          </div>
          <div className="mockup-stat-pill anim-icon-pulse">
            <span>⚡ Sub-second checkout</span>
          </div>
        </div>
      );
    }

    if (type === "analytics") {
      return (
        <div className="preview-mockup mockup-analytics depth-md">
          <div className="mockup-header-bar">
            <div className="mockup-dots">
              <span className="m-dot red" />
              <span className="m-dot yellow" />
              <span className="m-dot green" />
            </div>
            <span className="mockup-url">analytics.technova.dev</span>
          </div>
          <div className="mockup-chart-grid">
            <div className="mockup-bars">
              <span className="mockup-bar bar-1 live-bar" style={{ height: "45%" }} />
              <span className="mockup-bar bar-2 live-bar" style={{ height: "70%" }} />
              <span className="mockup-bar bar-3 live-bar" style={{ height: "55%" }} />
              <span className="mockup-bar bar-4 live-bar" style={{ height: "90%" }} />
              <span className="mockup-bar bar-5 live-bar" style={{ height: "80%" }} />
            </div>
            <div className="mockup-metrics-mini">
              <div className="mini-metric">
                <BarChart3 size={14} className="anim-icon-wiggle" />
                <span>+34.8% Growth</span>
              </div>
              <div className="mini-metric-value">$128,450 MRR</div>
            </div>
          </div>
          <div className="mockup-stat-pill anim-icon-pulse">
            <span>📊 10M+ Telemetry Events</span>
          </div>
        </div>
      );
    }

    // Healthcare platform
    return (
      <div className="preview-mockup mockup-healthcare depth-md">
        <div className="mockup-header-bar">
          <div className="mockup-dots">
            <span className="m-dot red" />
            <span className="m-dot yellow" />
            <span className="m-dot green" />
          </div>
          <span className="mockup-url">care.technova.dev</span>
        </div>
        <div className="mockup-health-inner">
          <div className="mockup-patient-card">
            <div className="health-avatar animated-icon-halo">
              <Activity size={18} className="anim-icon-heartbeat" />
            </div>
            <div>
              <span className="patient-name">Live Telehealth Session</span>
              <span className="patient-status">● Encrypted HD WebRTC</span>
            </div>
          </div>
          <div className="mockup-health-vitals">
            <div className="vital-tag">Pulse: 72 bpm</div>
            <div className="vital-tag">O2: 99%</div>
          </div>
        </div>
        <div className="mockup-stat-pill anim-icon-pulse">
          <span>🔒 HIPAA Compliant</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-heading center">
          <div className="section-badge">
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore some of our recent digital engineering triumphs across e-commerce, cloud analytics, and healthcare.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <Card3D
              key={project.id}
              as="article"
              className="project-card glass-card"
              maxTilt={12}
              scale={1.025}
              maxGlare={0.25}
            >
              {/* Rich Visual Mockup */}
              <div
                className="project-visual-container"
                style={{ background: project.themeGradient }}
              >
                {renderProjectVisual(project.previewType)}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-category-tag depth-xs">{project.category}</div>
                <h3 className="project-name depth-xs">{project.name}</h3>
                <p className="project-desc depth-xs">{project.description}</p>

                {/* Technology Tags */}
                <div className="technology-tags depth-sm">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-actions depth-sm">
                  <button
                    type="button"
                    className="project-btn-primary"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View details for ${project.name}`}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={16} className="project-arrow-icon" />
                  </button>
                  <button
                    type="button"
                    className="project-btn-alt"
                    onClick={() => onOpenContact(`Project Inquiry: ${project.name}`)}
                    aria-label={`Inquire about ${project.name}`}
                  >
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div
              className="modal-banner"
              style={{ background: selectedProject.themeGradient }}
            >
              {renderProjectVisual(selectedProject.previewType)}
            </div>

            <div className="modal-inner-content">
              <span className="project-category-tag">{selectedProject.category}</span>
              <h2>{selectedProject.name}</h2>
              <p className="modal-long-desc">{selectedProject.longDescription}</p>

              <div className="modal-metrics-grid">
                <div className="metric-box">
                  <span className="metric-val">{selectedProject.metrics.metric1}</span>
                  <span className="metric-lbl">{selectedProject.metrics.label1}</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{selectedProject.metrics.metric2}</span>
                  <span className="metric-lbl">{selectedProject.metrics.label2}</span>
                </div>
              </div>

              <div className="modal-tech-stack">
                <h4>Technology Stack:</h4>
                <div className="technology-tags">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions-bar">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContact(`Project: ${selectedProject.name}`);
                  }}
                >
                  <span>Request Similar Solution</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;