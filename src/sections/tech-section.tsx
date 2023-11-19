import Image from "next/image";
import React from "react";

import { Tooltip } from "@nextui-org/react";

const icons: { name: string; src: string }[] = [
  {
    name: "JavaScript",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Javascript.svg",
  },
  {
    name: "TypeScript",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Typescript.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React.svg",
  },
  {
    name: "Vite",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vite.svg",
  },
  {
    name: "NextJS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextJS.svg",
  },
  {
    name: "Node.js",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NodeJS.svg",
  },
  {
    name: "Prisma",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/PrismaORM.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/PostgreSQL.svg",
  },
  {
    name: "Supabase",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Supabase.svg",
  },
  {
    name: "Firebase",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Firebase.svg",
  },
  {
    name: "Axios",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/Axios.svg",
  },
  {
    name: "Express.js",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/ExpressJS.svg",
  },
  {
    name: "NextUI",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextUI.svg",
  },
  {
    name: "ShadCN/UI",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/ShadCNUI.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/TailwindCSS.svg",
  },
  {
    name: "Sass",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Sass.svg",
  },
  {
    name: "Bootstrap",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Bootstrap.svg",
  },
  {
    name: "CSS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/CSS3.svg",
  },
  {
    name: "Framer Motion",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Framer%20Motion.svg",
  },
  {
    name: "Figma",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Figma.svg",
  },
  {
    name: "Vercel",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vercel.svg",
  },
  {
    name: "GIT",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/GIT.svg",
  },
  {
    name: "React Hook Form",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React%20Hook%20Form.svg",
  },
  {
    name: "Stripe",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Stripe.svg",
  },
  {
    name: "Next Auth",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Next%20Auth.svg",
  },
  {
    name: "Swiper",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Swiper.svg",
  },
  {
    name: "React Native",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React%20Native.svg",
  },
  {
    name: "Expo",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Expo.svg",
  },
];

const TechSection = () => {
  return (
    <section className="relative mt-36 flex h-screen max-h-[43rem]  w-full select-none flex-col items-center justify-center">
      <video autoPlay muted loop className="w-full md:opacity-40">
        <source src="/videos/tech.mp4" type="video/mp4"></source>
      </video>

      <div className="z-50 mt-10 flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-5 text-white md:absolute md:mt-0">
        <div className="mx-auto w-full">
          <p className="mb-8 select-none text-3xl font-black text-white">
            <span className="text-xl text-lime-500">{`. `}</span>Tecnologias
          </p>
          <h2 className="text-light px-5 text-sm">
            Abaixo está uma lista das tecnologias com as quais ja tive contato e
            constantemente utilizo em meus projetos pessoais.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {icons.map((icon, index) => (
            <Tooltip
              content={<p className="text-tiny">{icon.name}</p>}
              key={index}
              placement="bottom"
              color="foreground"
              delay={0}
              closeDelay={0}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-16 w-16 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 md:h-20 md:w-20"
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
