export const companyData = {
  brand: {
    name: "TechNova Solutions",
    shortName: "TechNova",
    suffix: "Solutions",
    tagline: "Building Digital Solutions for Tomorrow",
    description:
      "TechNova Solutions is a technology-driven company specializing in modern web development, digital transformation, and innovative software solutions.",
    email: "yashodipjadhav17@gmail.com",
    phone: "+91 9921861864",
    location: "Ahilyanagar Maharastra, India",
    founded: "2018",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    ],
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "Innovating Digital Experiences",
    headingMain: "Building Digital",
    headingAccent: "Solutions for Tomorrow",
    description:
      "We help businesses transform ideas into powerful digital experiences through innovative technology and creative solutions.",
    primaryCta: "Get Started",
    secondaryCta: "Our Services",
    trustBadge: "Trusted by 180+ innovative tech companies worldwide",
    floatingBadges: [
      { label: "Modern React 19", icon: "react" },
      { label: "Cloud Scalability", icon: "cloud" },
      { label: "High Security", icon: "shield" },
      { label: "99.9% Uptime", icon: "check" },
    ],
  },

  about: {
    badge: "About Us",
    heading: "Who We Are",
    description1:
      "TechNova Solutions is a technology-driven company specializing in modern web development, digital transformation, and innovative software solutions.",
    description2:
      "We bridge the gap between complex engineering challenges and seamless user experiences. Our multidisciplinary team partners with visionary startups and global enterprises to engineer scalable, high-impact digital products.",
    stats: [
      {
        id: "exp",
        value: 8,
        suffix: "+",
        label: "Years of Experience",
        description: "Delivering industry-grade software solutions",
      },
      {
        id: "projects",
        value: 250,
        suffix: "+",
        label: "Projects Completed",
        description: "Across enterprise, fintech & healthcare",
      },
      {
        id: "clients",
        value: 180,
        suffix: "+",
        label: "Happy Clients",
        description: "Worldwide trust & lasting partnerships",
      },
      {
        id: "retention",
        value: 99,
        suffix: "%",
        label: "Client Satisfaction",
        description: "Consistently rated 5-stars for quality",
      },
    ],
    highlights: [
      { title: "Agile Execution", desc: "Fast-paced delivery with continuous integration and transparent sprints." },
      { title: "Scalable Architecture", desc: "Future-proof cloud and software infrastructure built to scale gracefully." },
      { title: "Human-Centric UX", desc: "Intuitive interfaces designed to delight users and drive conversion." },
    ],
  },

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Modern, scalable, and responsive websites.",
      extendedDesc:
        "Engineered with cutting-edge frameworks, modular component design, and robust API integrations for lightning-fast speeds and SEO dominance.",
      features: [
        "Single Page & Progressive Web Apps",
        "Modern Component Architecture",
        "Core Web Vitals & SEO Optimized",
        "API & Headless CMS Integration",
      ],
      iconName: "Code2",
      badge: "Core Service",
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "High-performance applications for modern businesses.",
      extendedDesc:
        "Cross-platform iOS and Android applications built with native performance, fluid micro-interactions, and real-time synchronization.",
      features: [
        "iOS & Android Cross-Platform",
        "Offline-First Data Sync",
        "Smooth 60fps Native UI/UX",
        "Push Notifications & Biometrics",
      ],
      iconName: "Smartphone",
      badge: "Popular",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "User-focused and visually engaging digital experiences.",
      extendedDesc:
        "Transforming user journeys through data-driven research, interactive prototyping, and pixel-perfect design systems.",
      features: [
        "Design Systems & Tokenization",
        "Wireframing & Interactive Mockups",
        "User Journey & Usability Audits",
        "Accessible & WCAG Compliant",
      ],
      iconName: "Palette",
      badge: "Creative",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure.",
      extendedDesc:
        "Automated CI/CD pipelines, containerization, serverless architectures, and zero-trust security engineered for maximum uptime.",
      features: [
        "AWS, Azure & Google Cloud Ops",
        "Docker & Kubernetes Orchestration",
        "Automated CI/CD Pipelines",
        "24/7 Monitoring & High Availability",
      ],
      iconName: "Cloud",
      badge: "Enterprise",
    },
  ],

  whyChooseUs: [
    {
      id: "team",
      number: "01",
      title: "Experienced Team",
      description:
        "Seasoned engineers, system architects, and UX designers bringing deep industry expertise to every milestone.",
      iconName: "Users",
    },
    {
      id: "tech",
      number: "02",
      title: "Modern Technologies",
      description:
        "We harness state-of-the-art tech stacks including React, TypeScript, Node.js, and cloud ecosystems for high performance.",
      iconName: "Cpu",
    },
    {
      id: "solutions",
      number: "03",
      title: "Creative Solutions",
      description:
        "Innovative thinking tailored specifically to overcome complex business challenges and unlock new market opportunities.",
      iconName: "Lightbulb",
    },
    {
      id: "client-focus",
      number: "04",
      title: "Client-Focused Approach",
      description:
        "Transparent communication, agile workflows, and dedicated partnership focused wholly on your strategic business goals.",
      iconName: "HeartHandshake",
    },
    {
      id: "delivery",
      number: "05",
      title: "On-Time Delivery",
      description:
        "Predictable sprint schedules, continuous quality assurance, and zero compromises on deadlines and budgets.",
      iconName: "Clock",
    },
  ],

  projects: [
    {
      id: "ecommerce-platform",
      name: "E-Commerce Platform",
      category: "Full-Stack Web App",
      description:
        "A scalable e-commerce platform designed for modern online businesses with real-time inventory and instant checkout.",
      longDescription:
        "Architected with high-concurrency microservices, sub-second product searching, payment gateway integration (Stripe), and real-time order tracking dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redis"],
      metrics: { metric1: "3.2x", label1: "Conversion Boost", metric2: "<80ms", label2: "Response Time" },
      themeGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      accentColor: "#3b82f6",
      previewType: "ecommerce",
      liveUrl: "https://demo.technovasolutions.com/ecommerce",
      githubUrl: "https://github.com/technova-solutions/ecommerce-platform",
    },
    {
      id: "business-analytics",
      name: "Business Analytics",
      category: "Enterprise Dashboard",
      description:
        "An analytics dashboard helping businesses understand their data through interactive data visualization and reporting.",
      longDescription:
        "Real-time business intelligence suite supporting multidimensional querying, automated report generation, telemetry alerting, and multi-tenant access control.",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js", "Docker"],
      metrics: { metric1: "10M+", label1: "Events Processed/day", metric2: "99.99%", label2: "Telemetry Uptime" },
      themeGradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
      accentColor: "#0284c7",
      previewType: "analytics",
      liveUrl: "https://demo.technovasolutions.com/analytics",
      githubUrl: "https://github.com/technova-solutions/business-analytics",
    },
    {
      id: "healthcare-platform",
      name: "Healthcare Platform",
      category: "Telehealth Solution",
      description:
        "A digital healthcare solution connecting patients and professionals with secure consultations and appointment scheduling.",
      longDescription:
        "HIPAA-compliant telemedicine application featuring encrypted video conferencing, medical records synchronization, appointment booking, and automated prescription management.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
      metrics: { metric1: "50k+", label1: "Consultations", metric2: "100%", label2: "HIPAA Compliant" },
      themeGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      accentColor: "#10b981",
      previewType: "healthcare",
      liveUrl: "https://demo.technovasolutions.com/healthcare",
      githubUrl: "https://github.com/technova-solutions/healthcare-platform",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Williams",
      role: "Chief Technology Officer",
      company: "Nova Retail",
      avatarInitials: "SW",
      rating: 5,
      feedback:
        "TechNova transformed our idea into a powerful digital product. Their team was professional, creative, and delivered exactly what we needed within record time.",
      projectRef: "E-Commerce Re-platforming",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "VP of Engineering",
      company: "FinEdge Systems",
      avatarInitials: "MB",
      rating: 5,
      feedback:
        "The team understood our requirements quickly and delivered a clean, scalable solution within the expected timeline. Their technical architecture is top-tier.",
      projectRef: "FinTech Analytics Suite",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Director of Product",
      company: "HealthPlus Solutions",
      avatarInitials: "EJ",
      rating: 5,
      feedback:
        "Working with TechNova was an excellent experience. Their technical expertise, attention to UI/UX detail, and client-focused approach really stood out.",
      projectRef: "Telehealth Platform",
    },
  ],

  cta: {
    badge: "Let's Work Together",
    heading: "Ready to Build Something Amazing?",
    description:
      "Let's turn your ideas into powerful digital experiences. Partner with TechNova Solutions today and accelerate your digital journey.",
    buttonText: "Let's Talk",
    secondaryText: "Schedule a free 30-minute discovery consultation with our technical architects.",
  },

  footer: {
    about:
      "TechNova Solutions is a technology-driven company specializing in modern web development, digital transformation, and innovative software solutions.",
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    servicesList: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security Overview", href: "#" },
    ],
  },
};
