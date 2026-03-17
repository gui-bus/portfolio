export interface Project {
  id: number
  title: string
  slug: string
  category: string
  year: string
  description: string
  fullCaseStudy: {
    challenge: string
    solution: string
    results: string[]
  }
  techStack: string[]
  images: {
    hero: string
    gallery: string[]
  }
  tags: string[]
  color: string
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "NEXUS AI",
    slug: "nexus-ai",
    category: "Web Platform",
    year: "2024",
    description: "An enterprise-grade AI orchestration platform that revolutionizes how companies deploy and manage machine learning models at scale.",
    fullCaseStudy: {
      challenge: "Enterprise clients struggled with fragmented ML workflows, spending 70% of their time on infrastructure instead of innovation. Model deployment took weeks, and monitoring was scattered across multiple tools.",
      solution: "We architected a unified command center that abstracts away infrastructure complexity. A visual pipeline builder lets teams drag-and-drop models into production, while real-time observability surfaces performance insights instantly.",
      results: [
        "Reduced deployment time from 3 weeks to 2 hours",
        "40% decrease in infrastructure costs",
        "99.9% uptime achieved across all client deployments",
        "Featured in TechCrunch as 'Platform of the Year'"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Python", "TensorFlow", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
    images: {
      hero: "linear-gradient(135deg, #1a0a2e 0%, #16082e 50%, #0f0460 100%)",
      gallery: []
    },
    tags: ["AI/ML", "Enterprise", "Dashboard", "Real-time"],
    color: "#8B5CF6"
  },
  {
    id: 2,
    title: "PULSE",
    slug: "pulse",
    category: "Mobile App",
    year: "2024",
    description: "A biometric-driven health companion that transforms raw sensor data into actionable wellness insights.",
    fullCaseStudy: {
      challenge: "Health apps overwhelm users with raw data without context. Users see heart rates and step counts but don't understand what it means for their personal wellness journey.",
      solution: "We built an AI layer that contextualizes every metric. The app learns your baseline, detects anomalies, and delivers personalized nudges. A 'Wellness Score' gamifies progress without creating anxiety.",
      results: [
        "4.9 star rating across 50K+ reviews",
        "78% of users report improved sleep within 30 days",
        "Acquired by major health tech company",
        "Featured in Apple's 'Apps We Love'"
      ]
    },
    techStack: ["React Native", "TypeScript", "Node.js", "TensorFlow Lite", "HealthKit", "Firebase", "GraphQL"],
    images: {
      hero: "linear-gradient(135deg, #0c0c1c 0%, #1a0a2a 50%, #2d1d3d 100%)",
      gallery: []
    },
    tags: ["Mobile", "Health Tech", "AI", "Biometrics"],
    color: "#EC4899"
  },
  {
    id: 3,
    title: "VERTEX",
    slug: "vertex",
    category: "E-commerce",
    year: "2023",
    description: "A luxury fashion marketplace that blends editorial content with seamless commerce, redefining digital retail.",
    fullCaseStudy: {
      challenge: "High-end fashion brands struggled to translate their in-store luxury experience to digital. Generic e-commerce templates felt cheap and eroded brand equity.",
      solution: "We created an immersive shopping experience with editorial storytelling. 3D product visualization lets customers examine items from every angle. AI styling recommendations feel like a personal shopper.",
      results: [
        "180% increase in average session duration",
        "45% higher conversion rate vs industry average",
        "Reduced returns by 32% through better visualization",
        "Won FWA Site of the Day"
      ]
    },
    techStack: ["Next.js", "Three.js", "Shopify", "Sanity CMS", "Stripe", "Algolia", "Vercel"],
    images: {
      hero: "linear-gradient(135deg, #141e30 0%, #1a2550 50%, #243b55 100%)",
      gallery: []
    },
    tags: ["E-commerce", "3D", "Luxury", "Editorial"],
    color: "#06B6D4"
  },
  {
    id: 4,
    title: "QUANTUM",
    slug: "quantum",
    category: "Dashboard",
    year: "2023",
    description: "A real-time financial analytics dashboard that processes millions of transactions to surface actionable trading signals.",
    fullCaseStudy: {
      challenge: "Quantitative traders were drowning in data streams. Existing tools either lagged behind market movements or required PhD-level expertise to operate.",
      solution: "We built a WebSocket-powered dashboard that visualizes complex market patterns in real-time. Custom-built charting components handle 10K+ data points without lag. AI alerts surface anomalies before they hit mainstream news.",
      results: [
        "Sub-100ms data latency achieved",
        "Traders report 3x faster decision making",
        "Scaled to handle $500M daily transaction volume",
        "Featured case study by Vercel"
      ]
    },
    techStack: ["Next.js", "WebSocket", "D3.js", "Python", "Redis", "TimescaleDB", "Docker", "Kubernetes"],
    images: {
      hero: "linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #252550 100%)",
      gallery: []
    },
    tags: ["FinTech", "Real-time", "Data Viz", "Analytics"],
    color: "#10B981"
  },
  {
    id: 5,
    title: "AURORA",
    slug: "aurora",
    category: "SaaS",
    year: "2023",
    description: "A collaborative design system platform that keeps distributed teams in sync across Figma, code, and documentation.",
    fullCaseStudy: {
      challenge: "Design systems break down at scale. Designers update Figma, but developers never see it. Documentation goes stale. Tokens drift between platforms.",
      solution: "We created a single source of truth that bridges the designer-developer gap. Figma changes automatically sync to code. A visual diff tool surfaces inconsistencies before they ship.",
      results: [
        "60% reduction in design-dev handoff time",
        "Zero design drift incidents reported",
        "Adopted by 3 Fortune 500 companies",
        "Open-source version has 15K+ GitHub stars"
      ]
    },
    techStack: ["Next.js", "TypeScript", "Figma API", "Style Dictionary", "GitHub Actions", "Supabase", "Tailwind"],
    images: {
      hero: "linear-gradient(135deg, #1a1a2a 0%, #252538 50%, #303048 100%)",
      gallery: []
    },
    tags: ["SaaS", "Design Systems", "Collaboration", "DevTools"],
    color: "#F59E0B"
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find(project => project.slug === slug)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = PROJECTS_DATA.findIndex(p => p.slug === currentSlug)
  if (currentIndex === -1) return undefined
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length
  return PROJECTS_DATA[nextIndex]
}
