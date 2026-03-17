export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  fullCaseStudy: {
    challenge: string;
    solution: string;
    results: string[];
  };
  techStack: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  tags: string[];
  color: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "POWER.FIT",
    slug: "power-fit",
    category: "Full-stack Platform",
    year: "2025",
    description: "A next-generation fitness management platform integrating AI, gamification, and high-performance software engineering.",
    fullCaseStudy: {
      challenge: "Solving the fragmentation between workout logging, nutritional tracking, and social motivation while maintaining a high-fidelity user experience.",
      solution: "A scalable SPA with SSR performance, featuring native generative AI for workout orchestration and a contract-driven architecture.",
      results: [
        "AI-powered automatic workout generation",
        "End-to-end Type-Safe architecture with Orval",
        "GitHub-inspired consistency visualization",
        "Asynchronous achievement and XP pipeline"
      ]
    },
    techStack: ["Next.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "BetterAuth", "Vercel AI SDK"],
    images: {
      hero: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0ea5e9 100%)",
      gallery: []
    },
    tags: ["Full-stack", "AI", "Fitness", "Gamification"],
    color: "#38B2AC"
  },
  {
    id: 2,
    title: "PowerVet",
    slug: "powervet",
    category: "Veterinary Medicine",
    year: "2024",
    description: "Expert veterinary care for cats, combining advanced medical treatment with personalized attention for feline wellbeing.",
    fullCaseStudy: {
      challenge: "Providing a digital presence that reflects specialized care for felines, emphasizing long-term health and preventive medicine.",
      solution: "A high-conversion landing page built with modern React patterns, focusing on accessibility and trust through clean, clinical yet warm design.",
      results: [
        "Enhanced brand positioning for specialized feline care",
        "Responsive interface optimized for quick appointment booking",
        "Integration of preventive care education modules",
        "High Lighthouse performance scores for better organic reach"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    images: {
      hero: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #2dd4bf 100%)",
      gallery: []
    },
    tags: ["Healthcare", "Feline Specialist", "Responsive"],
    color: "#14b8a6"
  },
  {
    id: 3,
    title: "Horizon Travels",
    slug: "horizon-travels",
    category: "Travel Agency",
    year: "2024",
    description: "Immersive journeys connecting travelers with authentic experiences and seamless global planning.",
    fullCaseStudy: {
      challenge: "The travel industry requires highly visual and emotional storytelling to convert users into travelers in a competitive market.",
      solution: "A media-rich platform with immersive scroll animations and a curated UX that guides the user through different global destinations.",
      results: [
        "120% increase in user engagement through immersive storytelling",
        "Seamless trip planning flow with interactive destination cards",
        "Optimized image loading strategy for high-resolution visual content",
        "Mobile-first design for travelers on the go"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    images: {
      hero: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)",
      gallery: []
    },
    tags: ["Travel", "Visual Storytelling", "UX/UI"],
    color: "#f97316"
  },
  {
    id: 4,
    title: "Voltage Festival",
    slug: "voltage-festival",
    category: "Music Event",
    year: "2024",
    description: "An immersive indoor electronic music experience featuring world-class DJs and nonstop energy.",
    fullCaseStudy: {
      challenge: "Capturing the 'neon energy' and pulse of a techno rave in a static web environment while maintaining performance.",
      solution: "A high-intensity dark UI with glowing accents, integrated with dynamic visual elements that mimic the rhythm of electronic music.",
      results: [
        "Interactive lineup exploration with real-time DJ status",
        "Neon-inspired design system with OKLCH color optimization",
        "High-performance ticket integration flow",
        "Buzz-generating landing page with social sharing features"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    images: {
      hero: "linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #8b5cf6 100%)",
      gallery: []
    },
    tags: ["Music", "Event", "Interactive", "Neon Design"],
    color: "#8b5cf6"
  },
  {
    id: 5,
    title: "Haven Barbershop",
    slug: "haven-barbershop",
    category: "Premium Grooming",
    year: "2024",
    description: "A premium grooming experience with precision cuts, classic techniques, and modern ritual-focused style.",
    fullCaseStudy: {
      challenge: "Transforming a standard service into a premium ritual through a digital experience that exudes craftsmanship.",
      solution: "A sophisticatedZinc-based color palette with high-contrast typography and focus on architectural layout and photographic craftsmanship.",
      results: [
        "Elevated brand perception as a high-end ritual experience",
        "Integrated booking system with seamless user flow",
        "Mobile-optimized ritual gallery for mobile users",
        "SEO strategy focused on local premium grooming keywords"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    images: {
      hero: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #52525b 100%)",
      gallery: []
    },
    tags: ["Lifestyle", "Branding", "E-commerce", "Local Business"],
    color: "#71717a"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projectsData.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % projectsData.length;
  return projectsData[nextIndex];
}
