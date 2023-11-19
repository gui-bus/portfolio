import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { LuClipboardList } from "react-icons/lu";

interface ImageLeftProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ImageLeft = ({
  imageUrl,
  title,
  subtitle,
  description,
  link,
}: ImageLeftProps) => {
  return (
    <section className="mx-auto mt-10 w-full overflow-hidden text-center dark:text-gray-200">
      <div className="flex flex-col justify-center xl:flex-row">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-video h-full w-full object-contain object-center px-8 xl:w-2/4"
        />

        <div className="flex w-full flex-col items-center justify-center p-5 text-center md:items-start md:text-start xl:w-2/4">
          <p className="regular-18 mb-3 flex items-center justify-center gap-2 uppercase text-lime-400 md:justify-start">
            {subtitle}
          </p>
          <div className="w-full">
            <h2 className="text-3xl font-black lg:text-6xl 2xl:text-7xl">
              {title}
            </h2>
            <p className="mt-5 w-full text-sm font-light xl:max-w-3xl">
              {description}
            </p>
          </div>

          <Link href={link} className="mt-4 w-full">
            <Button
              className=" w-full p-8 font-bold text-white transition-all duration-300 ease-in-out hover:border-lime-400 hover:text-lime-400"
              endContent={<LuClipboardList size={24} />}
              variant="bordered"
            >
              Ver projeto
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageLeft;
