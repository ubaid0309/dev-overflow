"use client";
import LocalSearchBar from "@/components/shared/Search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeProvider";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
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
        <LocalSearchBar placeholderValue={"Search questions"} showFiter />
      </div>
    </>
  );
}
