import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";
import Link from "next/link";

import { FaBehance, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

import { Tooltip } from "@nextui-org/react";

const tel = "12981847553";

const icons: { title: string; href: string; icon: ReactNode }[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gui-bus/",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    title: "Github",
    href: "https://github.com/gui-bus",
    icon: <FaGithub size={20} />,
  },
  {
    title: "Behance",
    href: "https://www.behance.net/gui-bus",
    icon: <FaBehance size={20} />,
  },
  {
    title: "E-mail",
    href: "mailto:guibus.dev@gmail.com",
    icon: <FaMailBulk size={20} />,
  },
  {
    title: "WhatsApp",
    href: `https://wa.me/${tel}?text=${encodeURI(
      "Olá, vim do seu portfólio e gostaria de tirar uma dúvida.",
    )}`,
    icon: <FaWhatsapp size={20} />,
  },
];



const HeroSection = () => {
  return (
    <section className="h-full w-full bg-black">
      <video autoPlay muted loop className="pt-10 sm:pt-0">
        <source src="/videos/hero.mp4" type="video/mp4"></source>
      </video>

      <div className="mt-10 flex items-center justify-center sm:inset-0 sm:mt-0 md:absolute">
        <div className="z-50 flex h-full w-full flex-col items-center justify-center">
          <h1 className="my-3 px-5 text-center text-2xl font-bold text-white md:my-0 md:text-3xl lg:text-5xl">
            Guilherme Bustamante
          </h1>
          <h2 className="px-5 text-center text-2xl  font-extralight text-white">
            Desenvolvedor Frontend & UI/UX Designer
          </h2>

          <div className="mt-5 flex items-center justify-center gap-2">
            {icons.map((icon, index) => (
              <Tooltip
                content={<p className="text-tiny">{icon.title}</p>}
                key={index}
                placement="bottom"
                color="foreground"
                delay={0}
                closeDelay={0}
              >
                <Link href={icon.href} target="_blank">
                  <Button
                    variant="shadow"
                    isIconOnly
                    startContent={icon.icon}
                    className="transition-all duration-300 ease-in-out hover:text-lime-400"
                  />
                </Link>
              </Tooltip>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
