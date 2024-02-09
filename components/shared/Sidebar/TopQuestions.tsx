import { getQuestions } from "@/lib/serveractions/question.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopQuestions = async () => {
  const questionsLink = await getQuestions({});
  return (
    <div className="flex flex-col gap-6">
      <p className="h3-bold text-dark200_light900">Top Questions</p>

      <div className="questions body-medium text-dark500_light700 flex flex-col items-start gap-[30px]">
        {questionsLink?.questions
          ?.map((question) => (
            <Link
              href={`/question/${question._id}`}
              className="flex-between gap-2 w-full"
              key={question._id}
            >
              <p>{question.title}</p>

              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="right-arrow"
                className="invert-colors"
              />
            </Link>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default TopQuestions;
