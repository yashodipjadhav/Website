import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, Mail, User, MessageSquare, Briefcase } from "lucide-react";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose, initialService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService || "Web Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", service: "Web Development", message: "" });
        onClose();
      }, 2500);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="modal-success">
            <div className="success-icon-wrap animated-icon-halo">
              <CheckCircle2 size={56} className="success-icon anim-icon-pulse" />
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>
              Thank you for reaching out, <strong>{formData.name}</strong>. Our solutions team at TechNova will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={14} className="anim-icon-sparkle" />
                <span>Get in Touch</span>
              </div>
              <h2 id="modal-title">Let's Build Something Amazing</h2>
              <p>Tell us about your project and our tech specialists will assemble the ideal solution for your business.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">
                  <User size={15} className="form-label-icon" />
                  <span>Your Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={15} className="form-label-icon" />
                  <span>Work Email *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label htmlFor="service">
                  <Briefcase size={15} className="form-label-icon" />
                  <span>Service of Interest</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Full Digital Transformation">Full Digital Transformation</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={15} className="form-label-icon" />
                  <span>Project Overview *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project requirements, goals, or timeline..."
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary modal-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="modal-send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
