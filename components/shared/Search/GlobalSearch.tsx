"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative max-w-[600px] w-full max-lg:hidden">
      <div className="relative background-light800_darkgradient flex min-h-[56px] rounded-[10px]  grow gap-1 items-center px-4">
        <Image
          src="/assets/icons/search.svg"
          width="24"
          height="24"
          alt="search"
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search anything globally"
          value=""
          onClick={() => {}}
          className="no-focus placeholder paragraph-regular background-light800_darkgradient border-none shadow-none "
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
