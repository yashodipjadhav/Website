import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <svg className="progress-ring" width="46" height="46">
        <circle
          className="progress-ring__circle-bg"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r="19"
          cx="23"
          cy="23"
        />
        <circle
          className="progress-ring__circle"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r="19"
          cx="23"
          cy="23"
          style={{
            strokeDasharray: `${2 * Math.PI * 19}`,
            strokeDashoffset: `${2 * Math.PI * 19 * (1 - scrollProgress / 100)}`,
          }}
        />
      </svg>
      <ArrowUp size={18} className="scroll-arrow-icon" />
    </button>
  );
};

export default ScrollToTop;
