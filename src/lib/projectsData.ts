export interface Project {
  id: number;
  slug: string;
  year: string;
  techStack: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  icon: string;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "power-fit",
    year: "2025",
    techStack: ["Next.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "BetterAuth", "Vercel AI SDK"],
    images: {
      hero: "/projects/powerfit.png",
      gallery: []
    },
    icon: "/projects/powerfit.png",
    color: "#38B2AC",
    liveUrl: "https://powerfit.guibus.dev",
    githubUrl: "https://github.com/guibus/powerfit"
  },
  {
    id: 2,
    slug: "powervet",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    images: {
      hero: "/logos/logo/white_logo.png",
      gallery: []
    },
    icon: "/logos/icon/white_icon.png",
    color: "#14b8a6",
    liveUrl: "https://powervet.guibus.dev",
    githubUrl: "https://github.com/guibus/powervet"
  },
  {
    id: 3,
    slug: "horizon-travels",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    images: {
      hero: "/logos/logo/white_logo.png",
      gallery: []
    },
    icon: "/logos/icon/white_icon.png",
    color: "#f97316",
    liveUrl: "https://horizon.guibus.dev",
    githubUrl: "https://github.com/guibus/horizon-travels"
  },
  {
    id: 4,
    slug: "voltage-festival",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    images: {
      hero: "/logos/logo/white_logo.png",
      gallery: []
    },
    icon: "/logos/icon/white_icon.png",
    color: "#8b5cf6",
    liveUrl: "https://voltage.guibus.dev",
    githubUrl: "https://github.com/guibus/voltage-festival"
  },
  {
    id: 5,
    slug: "haven-barbershop",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    images: {
      hero: "/logos/logo/white_logo.png",
      gallery: []
    },
    icon: "/logos/icon/white_icon.png",
    color: "#71717a",
    liveUrl: "https://haven.guibus.dev",
    githubUrl: "https://github.com/guibus/haven-barbershop"
  }
];
