"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
interface LoacalSearchBarProps {
  placeholderValue: string;
  imageSource: string;
  route: string;
  iconPosition: string;
  otherClasses: string;
}

const LocalSearchBar = ({
  placeholderValue,
  imageSource,
  otherClasses,
  route,
  iconPosition,
}: LoacalSearchBarProps) => {
  return (
    <div
      className={`background-light800_darkgradient light-border-2 rounded-[10px] px-4   flex  gap-4 items-center min-h-[56px] mb-5 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imageSource}
          width={24}
          height={24}
          alt="search-icon"
          className="cursor-pointer "
        />
      )}

      <Input
        type="text"
        placeholder={placeholderValue}
        onClick={() => {}}
        className="no-focus placeholder paragraph-regular background-light800_darkgradient border-none shadow-none "
      />

      {iconPosition === "right" && (
        <Image
          src={imageSource}
          width={24}
          height={24}
          alt="search-icon"
          className="cursor-pointer "
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
