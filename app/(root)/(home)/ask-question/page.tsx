import QuestionForm from "@/components/form/QuestionForm";
import { getUserById } from "@/lib/serveractions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "CL123456";

  if (!userId) {
    redirect("/sign-up");
  }

  const mongoUser = await getUserById({ userId });
  return (
    <div>
      <h1 className="text-dark100_light900 h1-bold">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
