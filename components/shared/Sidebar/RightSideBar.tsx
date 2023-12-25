import React from "react";
import TopQuestions from "./TopQuestions";
import PopularTags from "./PopularTags";

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 flex flex-col gap-6 justify-between sticky overflow-y-auto custom-scrollbar right-0 top-0 h-screen p-6 pt-36 lg:w-[350px] max-xl:hidden shadow-light-300 dark:shadow-none light-border">
      <TopQuestions />
      <PopularTags />
    </section>
  );
};

export default RightSideBar;
