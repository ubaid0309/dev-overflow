import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { ComboBoxFilter } from "../ComboBoxFilter";
import { Filter } from "lucide-react";
interface LoacalSearchBarProps {
  placeholderValue: string;
  showFiter?: boolean;
}

const LocalSearchBar = ({
  placeholderValue,
  showFiter,
}: LoacalSearchBarProps) => {
  return (
    <div className="relative w-full flex items-center gap-[30px]">
      <div className="relative border border-red-500 background-light800_darkgradient flex min-h-[56px] rounded-[10px]  grow gap-1 items-center px-4">
        <Image
          src="/assets/icons/search.svg"
          width="24"
          height="24"
          alt="search"
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder={placeholderValue}
          value=""
          onClick={() => {}}
          className="no-focus placeholder paragraph-regular background-light800_darkgradient border-none shadow-none "
        />
      </div>
      {showFiter && <ComboBoxFilter />}
    </div>
  );
};

export default LocalSearchBar;
