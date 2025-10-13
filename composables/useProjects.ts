export const useProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Trading Waitlist",
      company: "Cowrywise",
      role: "Lead Frontend Engineer",
      year: "2024",
      category: "Product Launch",
      description: "High-converting waitlist landing page for stock trading launch",
      fullDescription: "Built conversion-optimized waitlist experience to validate market demand for Cowrywise's stock trading feature launch.",
      challenge: "Create an engaging, conversion-optimized waitlist experience to validate market demand for stock trading feature",
      solution: "Designed and developed animated landing page with GSAP interactions, email capture, and social proof elements",
      stack: ["Nuxt 2", "TypeScript", "GSAP", "SCSS"],
      highlights: [
        "Generated 80,000+ waitlist subscribers in first month",
        "40% conversion rate from landing page visits",
        "Smooth GSAP animations for enhanced user engagement",
        "Fully responsive design optimized for mobile"
      ],
      metrics: "80K+ subscribers",
      image: "/images/placeholder-project.jpg"
    },
    {
      id: 2,
      title: "Cowrywise Kids",
      company: "Cowrywise",
      role: "Lead Frontend Engineer",
      year: "2025",
      category: "Product Launch",
      description: "Design-heavy landing page for new kids' investment product",
      fullDescription: "Created visually engaging landing page with advanced animations that resonates with parents while showcasing product value.",
      challenge: "Create visually engaging landing page that resonates with parents while showcasing the product's value proposition",
      solution: "Built animated, scroll-driven landing page with marquee effects and interactive elements",
      stack: ["Nuxt 3", "TypeScript", "GSAP", "Tailwind CSS"],
      highlights: [
        "Marquee animations for dynamic content display",
        "Scroll-triggered interactions throughout the page",
        "Performance-optimized animations",
        "Mobile-first responsive design"
      ],
      metrics: "In Progress",
      image: "/images/placeholder-project.jpg"
    },
    {
      id: 3,
      title: "Hide Balances",
      company: "Cowrywise",
      role: "Lead Frontend Engineer",
      year: "2024",
      category: "Feature",
      description: "System-wide privacy feature for sensitive financial data",
      fullDescription: "Implemented consistent balance hiding across 80+ files while maintaining context for non-sensitive data like stock prices.",
      challenge: "Implement consistent balance hiding across 80+ files while maintaining context for non-sensitive data like stock prices and percentage gains",
      solution: "Built centralized state management system with granular control over what gets hidden vs displayed",
      stack: ["Nuxt 3", "TypeScript", "Sass", "Pinia"],
      highlights: [
        "Touched 80+ components for consistent implementation",
        "Smart logic to differentiate sensitive vs contextual data",
        "Persistent user preference across sessions",
        "18% increase in daily active usage among privacy-conscious users"
      ],
      metrics: "80+ files",
      image: "/images/placeholder-project.jpg"
    },
    {
      id: 4,
      title: "Cadobook",
      company: "Co-founder",
      role: "Lead Frontend Engineer",
      year: "2025",
      category: "SaaS Product",
      description: "AI-powered platform for quote and invoice automation",
      fullDescription: "Co-built complete SaaS invoicing platform with Trojan Okoh (former CTO of Thepeer, Abeg/Pocketapp).",
      challenge: "Build complete invoicing platform from scratch with real-time collaboration features and payment processing",
      solution: "Architected and built full frontend including admin dashboards, customer portals, real-time chat, and Stripe integration",
      stack: ["Nuxt 3", "TypeScript", "Pinia", "Tailwind", "shadcn/ui"],
      highlights: [
        "Complete quote/invoice system with live document preview",
        "Built-in REST-based chat with infinite scroll pagination",
        "Multi-business support with subscription management",
        "Custom form builder for dynamic data collection",
        "Customer portal for quote approval and payments"
      ],
      metrics: "Full Product",
      link: "https://cadobook.com",
      image: "/images/cadobook-favicon.png"
    },
    {
      id: 5,
      title: "The 1897",
      company: "Client Project",
      role: "Frontend Engineer",
      year: "2025",
      category: "Gallery",
      description: "Art gallery and advisory for Black & African contemporary art",
      fullDescription: "Created sophisticated, gallery-quality digital experience with CMS integration for exhibitions and artist profiles.",
      challenge: "Create sophisticated, gallery-quality digital experience with CMS integration for exhibitions and artist profiles",
      solution: "Built full Sanity-powered site with dynamic gallery views, artist profiles, and exhibition pages",
      stack: ["Nuxt 3", "TypeScript", "GSAP", "Sanity CMS"],
      highlights: [
        "Sanity CMS integration for content management",
        "Dynamic gallery and exhibition systems",
        "Individual artist profile pages",
        "Smooth page transitions and animations",
        "Advisory and contact sections"
      ],
      metrics: "4-5 weeks",
      link: "https://the1897.com",
      image: "/images/placeholder-project.jpg"
    },
    {
      id: 6,
      title: "David Blackmoore",
      company: "Client Project",
      role: "Shopify Developer",
      year: "2024",
      category: "E-commerce",
      description: "Fashion e-commerce store built with Shopify Hydrogen",
      fullDescription: "Built modern, performant Shopify storefront with custom animations and payment integration for Nigerian market.",
      challenge: "Build modern, performant Shopify storefront with custom animations beyond standard theme capabilities",
      solution: "Developed custom Hydrogen-based Shopify theme with GSAP animations, Lenis smooth scroll, and Paystack integration",
      stack: ["Shopify Hydrogen", "TypeScript", "GSAP", "Lenis"],
      highlights: [
        "Full custom Shopify Hydrogen build",
        "GSAP animations for enhanced UX",
        "Lenis smooth scrolling implementation",
        "Paystack payment integration for Nigerian market",
        "Optimized product pages and checkout flow"
      ],
      metrics: "5-6 weeks",
      link: "https://davidblackmoore.com",
      image: "/images/david-blackmoore-favicon.png"
    }
  ]

  return {
    projects
  }
}
