import React from "react";
import { SignIn } from "@clerk/nextjs";
const Page = () => {
  return <SignIn afterSignInUrl={"/"} />;
};

export default Page;
