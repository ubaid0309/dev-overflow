import { Button } from "@/components/ui/button";
import { questionsLink, tagsLink } from "@/constants";
import Image from "next/image";
import React from "react";

const PopularTags = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="h3-bold text-dark200_light900">Popular Tags</p>

      <div className="questions body-medium text-dark500_light700 flex flex-col items-start gap-[30px]">
        {tagsLink.map((tag) => (
          <div
            className="flex-between w-full text-dark400_light500"
            key={tag.id}
          >
            <Button className="btn">{tag.title}</Button>

            {/* <Image
              src="/assets/icons/arrow-right.svg"
              width={20}
              height={20}
              alt="right-arrow"
              className="invert-colors"
            /> */}

            <p>{tag.tagCount}+</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
