import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return <SignUp afterSignUpUrl={"/"} />;
};

export default Page;
