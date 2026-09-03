import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { companyData } from "../../data/companyData";
import "./Footer.css";

const Footer = ({ onOpenContact }) => {
  const { brand, footer } = companyData;

  const socialIconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Company Info Column */}
          <div className="footer-col-company">
            <a href="#home" className="footer-brand" aria-label="TechNova Solutions Home">
              <div className="brand-icon-wrapper">
                <svg
                  className="brand-logo-svg"
                  width="32"
                  height="32"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3 L22 14 L33 18 L22 22 L18 33 L14 22 L3 18 L14 14 Z"
                    fill="url(#footerBrandGrad)"
                  />
                  <circle cx="18" cy="18" r="3" fill="#ffffff" />
                  <defs>
                    <linearGradient id="footerBrandGrad" x1="3" y1="3" x2="33" y2="33" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">{brand.shortName}</span>
                <span className="brand-suffix">{brand.suffix}</span>
              </div>
            </a>

            <p className="footer-company-desc">{footer.about}</p>

            {/* Social Media Links */}
            <div className="footer-socials">
              {brand.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TechNova Solutions on ${soc.name}`}
                  title={soc.name}
                  className="social-icon-btn"
                >
                  {socialIconMap[soc.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link-item">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {footer.servicesList.map((srv) => (
                <li key={srv.name}>
                  <a
                    href="#services"
                    className="footer-link-item"
                    onClick={() => onOpenContact && onOpenContact(srv.name)}
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${brand.email}`} className="contact-row">
                <Mail size={16} className="contact-icon" />
                <span>{brand.email}</span>
              </a>
              <a href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`} className="contact-row">
                <Phone size={16} className="contact-icon" />
                <span>{brand.phone}</span>
              </a>
              <div className="contact-row">
                <MapPin size={16} className="contact-icon" />
                <span>{brand.location}</span>
              </div>
            </div>

            <button
              type="button"
              className="footer-schedule-btn"
              onClick={() => onOpenContact()}
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <div className="footer-legal-links">
            {footer.legalLinks.map((item) => (
              <a key={item.name} href={item.href} className="legal-link">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;