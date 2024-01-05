import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface NoResultProps {
  title: string;
  description: string;
  linkTo: string;
  linkTitle: string;
}
const NoResult = ({ title, description, linkTo, linkTitle }: NoResultProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <Image
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        alt="light-illustration"
        className="block dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        alt="light-illustration"
        className="hidden dark:block"
      />

      <h2 className="h3-bold text-dark-200_light900">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={linkTo}>
        <Button className="primary-gradient text-light-900 px-4 py-3 paragraph-medium mt-5 min-h-[46px] rounded-lg">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
