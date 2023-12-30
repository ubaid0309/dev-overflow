import React from "react";
import TagBadge from "./Sidebar/TagBadge";
import Image from "next/image";

interface QuestionCardProps {
  question: {
    _id: number;
    title: string;
    tags: { id: number; title: string }[];
    author: string;
    votes: number;
    answers: number;
    views: number;
    createdAt: string;
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
      <div className="flex justify-between items-center small-regular">
        <div className="flex items-center gap-[5px]">
          <Image
            src="/assets/icons/avatar.svg"
            width={20}
            height={20}
            alt="avatar"
            className="invert-colors"
          />

          <p className="body-medium ">{question?.author}</p>

          <p>asked {question?.createdAt}</p>
        </div>

        <div className="flex gap-[9px]">
          <div className="flex items-center gap-[2px]">
            <Image
              src="/assets/icons/like.svg"
              width={16}
              height={16}
              alt="likes"
            />
            <p>{question?.votes} Votes</p>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image
              src="/assets/icons/message.svg"
              width={16}
              height={16}
              alt="comment"
            />
            <p>{question?.answers} Answers</p>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image
              src="/assets/icons/eye.svg"
              width={16}
              height={16}
              alt="eye"
            />
            <p>{question?.views} Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
