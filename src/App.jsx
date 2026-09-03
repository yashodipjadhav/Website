import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import ContactModal from "./components/ContactModal/ContactModal";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  // Theme state persisted in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("technova-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Contact Modal state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactService, setContactService] = useState("");

  useEffect(() => {
    localStorage.setItem("technova-theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenContact = (serviceName = "") => {
    setContactService(serviceName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactService("");
  };

  return (
    <div className={isDarkMode ? "app dark" : "app"}>
      {/* Navigation Header */}
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Services onOpenContact={handleOpenContact} />
        <WhyChooseUs />
        <Projects onOpenContact={handleOpenContact} />
        <Testimonials />
        <CTA onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact Modal */}
      <ContactModal
        key={`${contactService}-${isContactOpen}`}
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={contactService}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;