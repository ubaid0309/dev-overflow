"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignIn, SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <section className="left-side-bar max-sm:hidden background-light900_dark200 pt-36 p-6 flex flex-col h-screen justify-between custom-scrollbar  shadow-light-300 dark:shadow-none fixed left-0 top-0 lg:w-[280px]">
      <div className="flex flex-col flex-1 gap-[14px]">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link?.route) && link?.route.length > 1) ||
            pathName === link?.route;

          return (
            <Link
              href={link?.route}
              key={link?.route}
              className={`${
                isActive
                  ? "primary-gradient text-light-900"
                  : "text-dark300_light900"
              } flex-start gap-4 p-4 rounded-lg bg-none`}
            >
              <Image
                src={link?.imgURL}
                width={18}
                height={18}
                alt={link?.label}
                className={isActive ? "" : "invert-colors"}
              />

              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {link?.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <Link href="/sign-in">
          <Button className="outline-none my-2 rounded-lg w-full min-h-[41px] small-medium btn-secondary px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/account.svg"
              height={24}
              width={24}
              alt="logout"
              className="lg:hidden invert-colors"
            />
            <p className="max-lg:hidden primary-text-gradient">Login</p>
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button className="light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/sign-up.svg"
              height={24}
              width={24}
              alt="logout"
              className="lg:hidden invert-colors"
            />
            <p className="max-lg:hidden">Sign Up</p>
          </Button>
        </Link>
      </SignedOut>

      <SignedIn>
        <Link href="/">
          <Button className="light-border-2 invert-colors  btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none flex-start gap-4">
            <Image
              src="/assets/icons/arrow-left.svg"
              height={24}
              width={24}
              alt="logout"
            />
            <p className="max-lg:hidden">Logout</p>
          </Button>
        </Link>
      </SignedIn>
    </section>
  );
};

export default LeftSideBar;
