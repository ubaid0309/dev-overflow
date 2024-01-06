import QuestionForm from "@/components/form/QuestionForm";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-dark100_light900 h1-bold">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default Page;
