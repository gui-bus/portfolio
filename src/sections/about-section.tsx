import Image from "next/image";
import React from "react";

import Profile from "../../public/ProfileSM.png";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

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
    text: "Minha determinação impulsiona meu foco nos estudos, buscando constante evolução.",
  },
  {
    title: "Criatividade",
    text: "A criatividade me conduz a soluções inovadoras por meio de prática e exploração.",
  },
  {
    title: "Colaboração",
    text: "Acredito na importância da colaboração para alcançar resultados excepcionais em equipe.",
  },
  {
    title: "Adaptabilidade",
    text: "Sou flexível e capaz de me adaptar a novos desafios aprendendo rapidamente.",
  },
  {
    title: "Detalhista",
    text: "Comprometido com a precisão e atenção aos detalhes, garantindo entregas de alta qualidade.",
  },
  {
    title: "Autoaprendizado",
    text: "Demonstro uma forte capacidade de aprendizado autodidata.",
  },
  {
    title: "Gestão do Tempo",
    text: "Habilidade em gerenciar eficientemente o tempo para cumprir prazos e prioridades.",
  },
];

const tel = "12981847553";

const AboutSection = ({ id }: { id: string }) => {
  return (
    <section className="mx-auto w-full max-w-[90%] select-none py-10" id={id}>
      <p className="mb-8 select-none text-3xl font-black text-white">
        <span className="text-xl text-lime-500">{`. `}</span>Sobre Mim
      </p>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center px-5 md:mt-0">
        <h2 className="w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-white px-8 py-2 text-sm text-black md:max-w-sm">
          Olá, eu sou o Guilherme Bustamante
        </h2>
        <div className="flex flex-col rounded-b-2xl border  border-white pb-5 md:rounded-b-2xl md:rounded-t-2xl md:py-5">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-8 lg:flex-row">
            <Image
              src={Profile}
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto mt-8 flex aspect-square h-auto w-44 items-center justify-center rounded-full object-cover md:mt-0"
            />
            <p className="pb-2 text-sm font-light">
              Sou um Desenvolvedor Frontend especializado em React, Next.js,
              TypeScript e Tailwind. Além disso também possuo conhecimentos de
              diversas tecnologias relevantes como Node.js, PrismaORM,
              PostgreSQL, MongoDB, GIT, Docker, Jest, Figma entre outros. <br />
              <br /> Tenho trabalhado em diversos projetos que demonstram minhas
              habilidades, com foco principal na implementação das melhores
              práticas de responsividade e de código limpo e bem estruturado,
              dessa forma sempre garantindo eficiência e qualidade em cada entrega.
            </p>
          </div>

          <Divider className="mt-5" />

          <div className="flex w-full flex-col items-center justify-center">
            <p className="mt-5 px-5 pb-2 text-sm font-light">
              Atualmente, estou em busca de oportunidades desafiadoras para
              aplicar minhas habilidades. Busco uma posição que não apenas me
              permita contribuir para projetos inovadores, mas também
              proporcione um ambiente de aprendizado e crescimento
              profissional.
            </p>

            <p className="px-5 pb-2 text-sm font-semibold">
              Se você tiver alguma oportunidade de emprego ou freelance
              que possa se beneficiar das minhas habilidades, ficarei muito
              grato em receber sua mensagem. Estou aberto a discussões e pronto
              para colaborar em projetos empolgantes.
            </p>

            <Link
              className="group mx-auto mt-2 w-full max-w-full px-5"
              target="_blank"
              href={`https://wa.me/${tel}?text=${encodeURI(
                "Olá, visitei seu portfólio e gostaria de discutir sobre uma oportunidade de emprego/freelance. Podemos conversar mais sobre?",
              )}`}
            >
              <Button
                variant="shadow"
                className="w-full transition-all duration-300 ease-in-out group-hover:text-lime-400"
                endContent={<FaWhatsapp size={20} />}
              >
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 gap-4 rounded-md p-4 md:grid-cols-3">
        {quality.map((item, index) => (
          <div
            className="flex w-full flex-col items-center justify-center rounded-md p-4 text-center"
            key={index}
          >
            <h3 className="mb-2 text-xl font-bold italic border-b-1 border-lime-500">
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
