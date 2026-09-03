import { useState } from "react";
import { ArrowRight, Sparkles, Code2, Cloud, ShieldCheck, Zap, Terminal } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./Hero.css";

const Hero = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState("solution");
  const { hero } = companyData;

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Glow Orbs */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Heading & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>{hero.badge}</span>
          </div>

          <h1 className="hero-title">
            {hero.headingMain}{" "}
            <span className="text-gradient hero-title-accent">
              {hero.headingAccent}
            </span>
          </h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary hero-btn-main"
              onClick={() => onOpenContact()}
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight size={18} />
            </button>

            <a href="#services" className="btn btn-secondary hero-btn-alt">
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-avatars">
              <span className="avatar-chip chip-1">TN</span>
              <span className="avatar-chip chip-2">FE</span>
              <span className="avatar-chip chip-3">HP</span>
            </div>
            <div className="trust-text">
              <div className="trust-stars">★★★★★</div>
              <p>{hero.trustBadge}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Modern IT/Tech Visual */}
        <div className="hero-visual-wrapper">
          {/* Floating Badges */}
          <div className="floating-badge badge-top-right">
            <Zap size={16} className="badge-zap" />
            <span>High Performance</span>
          </div>

          <div className="floating-badge badge-bottom-left">
            <ShieldCheck size={16} className="badge-shield" />
            <span>Enterprise Security</span>
          </div>

          {/* Glassmorphic IDE Terminal Visual */}
          <div className="terminal-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="terminal-tabs">
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "solution" ? "active" : ""}`}
                  onClick={() => setActiveTab("solution")}
                >
                  <Code2 size={13} />
                  <span>TechNovaSolution.ts</span>
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "cloud" ? "active" : ""}`}
                  onClick={() => setActiveTab("cloud")}
                >
                  <Cloud size={13} />
                  <span>CloudDeploy.yml</span>
                </button>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="terminal-body">
              {activeTab === "solution" ? (
                <pre className="code-block">
                  <code>
                    <span className="code-line">
                      <span className="code-num">01</span>
                      <span className="code-keyword">import</span> &#123; <span className="code-entity">DigitalTransformation</span> &#125; <span className="code-keyword">from</span> <span className="code-string">"@technova/core"</span>;
                    </span>
                    <span className="code-line">
                      <span className="code-num">02</span>
                      <span className="code-comment">// Transforming visionary ideas into reality</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">03</span>
                      <span className="code-keyword">export const</span> <span className="code-function">buildFuture</span> = <span className="code-keyword">async</span> () =&gt; &#123;
                    </span>
                    <span className="code-line">
                      <span className="code-num">04</span>  <span className="code-keyword">const</span> <span className="code-var">project</span> = <span className="code-keyword">new</span> <span className="code-entity">DigitalTransformation</span>(&#123;
                    </span>
                    <span className="code-line">
                      <span className="code-num">05</span>    framework: <span className="code-string">"React 19 & Cloud Native"</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-num">06</span>    scalability: <span className="code-string">"Infinite"</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-num">07</span>    security: <span className="code-string">"Enterprise-Grade"</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-num">08</span>    speedToMarket: <span className="code-string">"Rapid Deployment"</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-num">09</span>  &#125;);
                    </span>
                    <span className="code-line">
                      <span className="code-num">10</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">11</span>  <span className="code-keyword">return await</span> <span className="code-var">project</span>.<span className="code-function">launch</span>();
                    </span>
                    <span className="code-line">
                      <span className="code-num">12</span>&#125;;
                    </span>
                  </code>
                </pre>
              ) : (
                <pre className="code-block">
                  <code>
                    <span className="code-line">
                      <span className="code-num">01</span>
                      <span className="code-comment"># TechNova Global Infrastructure</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">02</span>
                      <span className="code-entity">version</span>: <span className="code-string">"3.8"</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">03</span>
                      <span className="code-entity">services</span>:
                    </span>
                    <span className="code-line">
                      <span className="code-num">04</span>  <span className="code-function">web-frontend</span>:
                    </span>
                    <span className="code-line">
                      <span className="code-num">05</span>    <span className="code-var">replicas</span>: <span className="code-string">autoscaling</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">06</span>    <span className="code-var">uptime</span>: <span className="code-string">"99.99%"</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">07</span>    <span className="code-var">ssl_tls</span>: <span className="code-keyword">enabled</span>
                    </span>
                    <span className="code-line">
                      <span className="code-num">08</span>    <span className="code-var">cdn_acceleration</span>: <span className="code-keyword">true</span>
                    </span>
                  </code>
                </pre>
              )}

              {/* Status Footer Inside Terminal */}
              <div className="terminal-status-bar">
                <div className="status-live">
                  <span className="status-indicator" />
                  <span>Build Status: Passing</span>
                </div>
                <div className="status-meta">
                  <Terminal size={12} />
                  <span>Node.js v22 • UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;