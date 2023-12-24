"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import { Navmenu } from "./navbar-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LuMenu } from "react-icons/lu";

const about: { title: string; href: string }[] = [
  {
    title: "Sobre Mim",
    href: "/#About",
  },
  {
    title: "Tecnologias",
    href: "/#Tech",
  },
  {
    title: "Projetos",
    href: "/#Projects",
  },
];

const system: { title: string; href: string }[] = [
  {
    title: "Gamtech",
    href: "/#Gamtech",
  },
  {
    title: "Hotefy",
    href: "/#Hotefy",
  },
  {
    title: "DriveX",
    href: "/#DriveX",
  },
  {
    title: "ONDesk",
    href: "/#ONDesk",
  },
  {
    title: "Cinedex",
    href: "/#Cinedex",
  },
  {
    title: "O Pedal Café",
    href: "/#oPedalCafe",
  },
];

const landings: { title: string; href: string }[] = [
  {
    title: "POWERVET",
    href: "/#POWERVET",
  },
  {
    title: "Geoway",
    href: "/#Geoway",
  },
];

export default function Header() {
  return (
    <Navbar
      className="z-50 bg-transparent drop-shadow-md md:z-[999]"
      isBlurred={true}
    >
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <NavbarContent>
          <NavbarBrand>
            <Link href="#">
              <p className="select-none text-2xl font-black text-white">
                <span className="text-xl text-lime-500">{`. `}</span>Guibus
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Navmenu />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="sm:hidden">
          <NavbarItem className="z-[99999] sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  isIconOnly
                  endContent={<LuMenu size={30} />}
                  className="bg-transparent text-white"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link href="#">
                      <p className="select-none text-2xl font-black text-white">
                        <span className="text-xl text-lime-500">{`. `}</span>
                        Guibus
                      </p>
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <Accordion variant="splitted" className="mt-5" isCompact>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Sobre"
                      >
                        <div className="flex w-full flex-col items-center justify-center">
                          {about.map((aboutButton, index) => (
                            <SheetClose key={index} className="w-full" asChild>
                              <Link href={aboutButton.href} className="w-full">
                                <Button className="mb-2 w-full transition-all duration-300 ease-in-out hover:text-lime-400">
                                  {aboutButton.title}
                                </Button>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        aria-label="Accordion 2"
                        title="Sistemas"
                      >
                        <div className="flex w-full flex-col items-center justify-center">
                          {system.map((systemButton, index) => (
                            <SheetClose key={index} className="w-full" asChild>
                              <Link href={systemButton.href} className="w-full">
                                <Button className="mb-2 w-full transition-all duration-300 ease-in-out hover:text-lime-400">
                                  {systemButton.title}
                                </Button>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionItem>
                      <AccordionItem
                        key="3"
                        aria-label="Accordion 3"
                        title="Landing Pages"
                      >
                        {landings.map((landingsButton, index) => (
                          <SheetClose key={index} className="w-full" asChild>
                            <Link href={landingsButton.href} className="w-full">
                              <Button className="mb-2 w-full transition-all duration-300 ease-in-out hover:text-lime-400">
                                {landingsButton.title}
                              </Button>
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionItem>
                    </Accordion>

                    <Link href="/#Contact" className="mt-2 w-full px-2">
                      <Button className="mb-2 w-full transition-all duration-300 ease-in-out hover:text-lime-400">
                        Contato
                      </Button>
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </NavbarItem>
        </NavbarContent>
      </nav>
    </Navbar>
  );
}
