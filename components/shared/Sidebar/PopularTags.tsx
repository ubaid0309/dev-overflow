import { tagsLink } from "@/constants";
import React from "react";
import TagBadge from "./TagBadge";

const PopularTags = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="h3-bold text-dark200_light900">Popular Tags</p>

      <div className="questions body-medium text-dark500_light700 flex flex-col items-start gap-[30px]">
        {tagsLink.map((tag) => (
          <TagBadge
            key={tag.id}
            title={tag?.title}
            questionsCount={tag.tagCount}
            id={tag?.id}
            showCount
            otherClasses="justify-between w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
