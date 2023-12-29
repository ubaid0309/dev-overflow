import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="hidden md:flex gap-3">
      {HomePageFilters.map((filter) => (
        <Button
          className={` body-medium capitalize rounded-lg background-light800_dark400 px-6 py-3 ${
            active === filter.value
              ? "bg-primary-100 text-primary-500"
              : " text-light-500"
          }`}
          key={filter?.value}
        >
          {filter?.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
