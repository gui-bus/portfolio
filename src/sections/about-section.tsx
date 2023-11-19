import Image from "next/image";
import React from "react";

import Profile from "../../public/ProfileSM.png";

const quality: { title: string; text: string }[] = [
  {
    title: "Organização",
    text: "Valorizo organização e planejamento como alicerces para o sucesso em qualquer projeto.",
  },
  {
    title: "Responsabilidade",
    text: "Comprometimento total com meus deveres, buscando contribuir da melhor forma possível.",
  },
  {
    title: "Determinação",
    text: "Minha determinação impulsiona meu foco nos estudos, buscando constante evolução profissional.",
  },
  {
    title: "Criatividade",
    text: "A criatividade me conduz a soluções inovadoras por meio de prática e exploração.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full max-w-[90%] select-none py-10">
      <p className="select-none mb-8 text-3xl font-black text-white">
        <span className="text-xl text-lime-500">{`. `}</span>Sobre Mim
      </p>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center px-5 md:mt-0">
        <h2 className="w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-white px-8 py-2 text-sm text-black md:max-w-sm">
          Olá, eu sou o Guilherme Bustamante!
        </h2>
        <div className="flex flex-col rounded-b-3xl border  border-white pb-5 md:rounded-b-[3rem] md:rounded-t-[3rem] md:py-5">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-8">
            <Image
              src={Profile}
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto mt-8 flex aspect-square h-auto w-44 items-center justify-center rounded-full object-cover md:mt-0"
            />
            <p className="pb-2 text-sm font-light sm:text-base">
              Sou um Desenvolvedor Frontend de 25 anos com experiência em React,
              Next.Js, TypeScript, Tailwind, e outras tecnologias. Meu percurso
              é conduzido pela paixão pelo design web e pela busca incessante
              por conhecimento. <br />
              <br />{" "}
              <span className="font-medium italic">
                Além disso, estou sempre pronto para enfrentar novos desafios,
                mantendo-me constantemente atualizado com as últimas tendências
                e tecnologias do mercado.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-1 gap-4 rounded-md p-4 md:grid-cols-2">
        {quality.map((item, index) => (
          <div
            className="flex w-full flex-col items-start justify-start rounded-md p-4 text-start"
            key={index}
          >
            <h3 className="mb-2 text-xl font-bold italic">
              <span className="text-xl text-lime-500">{`.`}</span>
              {item.title}
            </h3>
            <p className="text-sm font-light">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="select-none text-xl font-black text-white">
        Frontend <span className="text-xl text-lime-500">{` . `}</span> Web
        Design <span className="text-xl text-lime-500">{`. `}</span> UI/UX{" "}
        <span className="text-xl text-lime-500">{`. `}</span> Design Responsivo{" "}
        <span className="text-xl text-lime-500">{`. `}</span> Soluções Criativas{" "}
        <span className="text-xl text-lime-500">{`. `}</span> Interfaces
        Atraentes{" "}
      </p>
    </section>
  );
};

export default AboutSection;
