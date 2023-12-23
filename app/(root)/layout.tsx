import Navbar from "@/components/shared/Navbar/Navbar";
import LeftSideBar from "@/components/shared/Sidebar/LeftSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex flex-1 flex-col max-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="max-w-5xl w-full mx-auto">{children}</div>
        </section>
        Right SideBar
      </div>
      Toaster
    </main>
  );
};

export default Layout;
