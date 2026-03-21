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
    year: "2026",
    techStack: ["Next.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "BetterAuth", "Vercel AI SDK"],
    images: {
      hero: "/projects/powerfit.png",
      gallery: []
    },
    icon: "/projects/powerfit.png",
    color: "#38B2AC",
    liveUrl: "https://powerfit.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 2,
    slug: "powervet",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    images: {
      hero: "/projects/powervet.png",
      gallery: []
    },
    icon: "/projects/powervet.png",
    color: "#14b8a6",
    liveUrl: "https://powervet.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 3,
    slug: "horizon-travels",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    images: {
      hero: "/projects/horizon.png",
      gallery: []
    },
    icon: "/projects/horizon.png",
    color: "#f97316",
    liveUrl: "https://horizon.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 4,
    slug: "voltage-festival",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    images: {
      hero: "/projects/voltage.png",
      gallery: []
    },
    icon: "/projects/voltage.png",
    color: "#8b5cf6",
    liveUrl: "https://voltage.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 5,
    slug: "haven-barbershop",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    images: {
      hero: "/projects/haven.png",
      gallery: []
    },
    icon: "/projects/haven.png",
    color: "#71717a",
    liveUrl: "https://haven.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 6,
    slug: "onyx",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    images: {
      hero: "/projects/onyx.png",
      gallery: []
    },
    icon: "/projects/onyx.png",
    color: "#71717a",
    liveUrl: "https://onyx.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  },
  {
    id: 7,
    slug: "starkfit",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    images: {
      hero: "/projects/starkfit.png",
      gallery: []
    },
    icon: "/projects/starkfit.png",
    color: "#71717a",
    liveUrl: "https://starkfit.guibus.dev",
    githubUrl: "https://github.com/gui-bus"
  }
];
