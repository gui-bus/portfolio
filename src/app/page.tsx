import AboutSection from "@/sections/about-section";
import HeroSection from "@/sections/hero-section";
import ProjectSection from "@/sections/project-section";
import TechSection from "@/sections/tech-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Guilherme Bustamante",
  description:
    "Bem-vindo ao meu portfólio pessoal. Aqui, você encontrará uma coleção cuidadosamente elaborada de projetos que destacam minha experiência em criar soluções digitais inovadoras. Explore websites responsivos, interfaces intuitivas e aplicações web de alto desempenho. Minha jornada no desenvolvimento web reflete dedicação à excelência técnica e à entrega de resultados impactantes. Descubra como minha paixão pela inovação se traduz em projetos que vão além das expectativas. Seja bem-vindo a um mergulho no meu universo digital.",
  keywords:
    "desenvolvimento web, front-end, HTML, CSS, JavaScript, React, NextJS, UI/UX, portfólio, inovação digital, websites responsivos, interfaces intuitivas, programação web, desenvolvedor web, codificação, experiência do usuário, design de interface, tecnologia da informação, desenvolvimento de software, projetos digitais, codificador, portfolio online, criatividade digital, construção de sites, desenvolvimento ágil, tecnologias web, desenvolvimento responsivo, interatividade, tecnologias front-end, design web, programador React, habilidades de desenvolvimento, experiência em UI, frameworks web, construção de aplicativos, design centrado no usuário, codificação eficiente, soluções digitais, modernização de websites, otimização de desempenho, projetos interativos, desenvolvimento orientado ao usuário, arquitetura web, interfaces modernas, layout responsivo, estratégias de design, tecnologia UX, inovações em web design, HTML5, CSS3, JavaScript moderno, Typescript, Vite, Node.js, NodeJS, Next.js, Prisma, PrismaORM, PostgreSQL, Supabase, Firebase, Axios, Express, Next UI, NextUI, ShadCN/UI, ShadCN, TailwindCSS, Tailwind, Sass, Bootstrap, Framer Motion, Figma, UI, UX, UI/UX, UX/UI, Vercel, Git, React Native, Expo, Next Auth, Auth.js, Swiper, Stripe, Gamtech, Hotefy, DriveX, Cinedex, O Pedal Café, Pedal Café, Geoway",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden text-center">
      <HeroSection />
      <AboutSection />
      <TechSection />

      <ProjectSection />
    </main>
  );
}
