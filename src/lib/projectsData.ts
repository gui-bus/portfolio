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
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "power-fit",
    year: "2025",
    techStack: ["Next.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "BetterAuth", "Vercel AI SDK"],
    images: {
      hero: "/logos/logo/white_logo.png",
      gallery: []
    },
    icon: "/logos/icon/white_icon.png",
    color: "#38B2AC"
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
    color: "#14b8a6"
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
    color: "#f97316"
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
    color: "#8b5cf6"
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
