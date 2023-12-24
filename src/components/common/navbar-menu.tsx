"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import Code from "../../../public/code.webp";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Gamtech",
    href: "/#Gamtech",
    description: "A Gamtech é um e-commerce de hardware para computadores.",
  },
  {
    title: "Hotefy",
    href: "/#Hotefy",
    description: "A Hotefy é uma plataforma de reserva de viagens incríveis.",
  },
  {
    title: "DriveX",
    href: "/#DriveX",
    description: "A DriveX é um sistema web de compra e venda de veículos.",
  },
  {
    title: "ONDesk",
    href: "/#ONDesk",
    description: "A ONDesk facilita o gerenciamento empresárial.",
  },
  {
    title: "Cinedex",
    href: "/#Cinedex",
    description:
      "A Cinedex é um catálogo de informaçoes sobre filmes e séries.",
  },
  {
    title: "O Pedal Café",
    href: "/#oPedalCafe",
    description: "O Pedal Café é um sistema de administração de pedidos.",
  },
];

const landings: { title: string; href: string; description: string }[] = [
  {
    title: "POWERVET",
    href: "/#POWERVET",
    description: "Landing Page para uma clínica veterinária fictícia.",
  },
  {
    title: "Geoway",
    href: "/#Geoway",
    description:
      "Landing Page para um app fictício de rotas para trilhas e viagens.",
  },
];

export function Navmenu() {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Sobre
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-row-reverse items-center justify-between gap-4 p-4 md:w-[400px] lg:w-[500px]">
              <div className="w-1/3">
                <Image
                  src={Code}
                  alt="Code"
                  className="h-full w-full rounded-3xl"
                />
              </div>
              <div className="flex w-2/3 flex-col text-center">
                <ListItem
                  href="/#About"
                  title="Sobre Mim"
                  className="whitespace-pre-wrap"
                >
                  Descubra mais sobre a pessoa que está por trás dos códigos.
                </ListItem>
                <ListItem
                  href="/#Tech"
                  title="Tecnologias"
                  className="whitespace-pre-wrap"
                >
                  Navegue pelas tecnologias que permeiam meu dia a dia.
                </ListItem>
                <ListItem
                  href="/#Projects"
                  title="Projetos"
                  className="whitespace-pre-wrap"
                >
                  Explore uma seleção de projetos que representam minha jornada.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Sistemas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Landing Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {landings.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#Contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
