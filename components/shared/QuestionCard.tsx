import React from "react";
import TagBadge from "./Sidebar/TagBadge";
import Image from "next/image";
import Metric from "./Metric";
import { getNumberInExtension, getTime } from "@/lib/utils";

interface QuestionCardProps {
  question: {
    _id: number;
    title: string;
    tags: { id: number; title: string }[];
    author: { id: number; name: string };
    votes: number;
    answers: number;
    views: number;
    createdAt: Date;
  };
}
const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <div className="px-[45px] py-9 w-full background-light800_darkgradient flex flex-col gap-6 text-dark200_light900">
      <div className="flex flex-col gap-[14px] w-[70%]">
        <p className="h3-semibold ">{question?.title}</p>
        <div className="flex gap-2">
          {question?.tags.map((tag) => (
            <TagBadge key={tag?.id} id={tag?.id} title={tag?.title} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center small-regular flex-wrap">
        <Metric
          imgURL={"/assets/icons/avatar.svg"}
          alt={"avatar"}
          title={`- asked ${getTime(question?.createdAt)}`}
          value={question?.author?.name}
          href={`/profile/${question?.author?.id}`}
          isAuthor
        />
        <Metric
          imgURL="/assets/icons/like.svg"
          alt={"avatar"}
          title={"Votes"}
          value={`${getNumberInExtension(question?.votes)}`}
        />
        <Metric
          imgURL="/assets/icons/message.svg"
          alt={"upvotes"}
          title={"Answers"}
          value={`${getNumberInExtension(question?.answers)}`}
        />
        <Metric
          imgURL="/assets/icons/eye.svg"
          alt={"views"}
          title={"Views"}
          value={`${getNumberInExtension(question?.views)}`}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
