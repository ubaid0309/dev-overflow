import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <p>HOME</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
