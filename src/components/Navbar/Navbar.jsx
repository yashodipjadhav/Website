import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, ArrowRight } from "lucide-react";
import { companyData } from "../../data/companyData";
import "./Navbar.css";

const Navbar = ({ isDarkMode, onThemeToggle, onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { brand, navLinks } = companyData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    if (href === "#contact" && onOpenContact) {
      // smooth scroll to contact or open modal
    }
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => handleLinkClick("#home")}
          aria-label="TechNova Solutions Home"
        >
          <div className="brand-icon-wrapper">
            <svg
              className="brand-logo-svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3 L22 14 L33 18 L22 22 L18 33 L14 22 L3 18 L14 14 Z"
                fill="url(#brandGrad)"
              />
              <circle cx="18" cy="18" r="3" fill="#ffffff" />
              <defs>
                <linearGradient id="brandGrad" x1="3" y1="3" x2="33" y2="33" gradientUnits="userSpaceOnUse">
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

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-link ${isActive ? "active" : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onThemeToggle}
            aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            {isDarkMode ? <Sun size={19} className="theme-icon sun" /> : <Moon size={19} className="theme-icon moon" />}
          </button>

          {/* Quick CTA Button */}
          <button
            type="button"
            className="btn btn-primary btn-sm nav-cta-btn"
            onClick={() => onOpenContact()}
          >
            <span>Let's Talk</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-header">
            <div className="brand-text">
              <span className="brand-name">{brand.shortName}</span>
              <span className="brand-suffix">{brand.suffix}</span>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-links-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className="mobile-link-arrow" />
                </a>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-primary mobile-cta-btn"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
            >
              <span>Ready to Build? Let's Talk</span>
              <Sparkles size={16} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;