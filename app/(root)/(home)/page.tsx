"use client";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import QuestionCard from "@/components/shared/QuestionCard";
import LocalSearchBar from "@/components/shared/Search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { useTheme } from "@/context/ThemeProvider";
import { UserButton } from "@clerk/nextjs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: 1,
      title:
        "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
      tags: [
        { id: 101, title: "javascript" },
        { id: 102, title: "react.js" },
        { id: 103, title: "redux" },
        { id: 104, title: "css" },
      ],
      author: "Sujata",
      votes: 67,
      answers: 55,
      views: 1000,
      createdAt: "2023-12-04",
    },
    {
      _id: 2,
      title:
        "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
      tags: [
        { id: 101, title: "javascript" },
        { id: 102, title: "react.js" },
      ],
      author: "Sujata",
      votes: 67,
      answers: 55,
      views: 1000,
      createdAt: "2023-12-04",
    },
    {
      _id: 3,
      title: "Redux Toolkit Not Updating State as Expected",
      tags: [
        { id: 101, title: "javascript" },
        { id: 105, title: "next.js" },
        { id: 103, title: "javascript" },
      ],
      author: "Sujata",
      votes: 74,
      answers: 247,
      views: 4111,
      createdAt: "2023-12-12",
    },
    {
      _id: 4,
      title: "Async/Await Function Not Handling Errors Properly",
      tags: [
        { id: 101, title: "javascript" },
        { id: 106, title: "es6" },
      ],
      author: "Sujata",
      votes: 44,
      answers: 14,
      views: 800,
      createdAt: "2023-10-23",
    },
  ];
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="min-h-[46px] px-4 py-3 primary-gradient text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-8">
        <LocalSearchBar
          placeholderValue={"Search questions"}
          imageSource="/assets/icons/search.svg"
          iconPosition="left"
          route="/"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px]"
          containerClasses="max-md:flex hidden"
        />
      </div>

      <HomeFilters />

      <div className="mt-[40px] flex flex-col w-full gap-6">
        {questions.map((question) => (
          <QuestionCard key={question?._id} question={question} />
        ))}
      </div>
    </>
  );
}
