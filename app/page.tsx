import Link from "next/link";
import Header from "./components/Header";
import Default from "./templates/Default";
import FormChat from "./components/forms/FormChat";

export default function Home() {
  return (
    <Default className="items-center justify-center">
      <div className="flex flex-col w-[35.5rem] gap-6 pb-50">
        <h1 className="self-center text-4xl font-bold tracking-wide">
          Hello Guest!
        </h1>
        <p className="text-center">
          Welcome to Study Buddy! Create your free account and upload your notes
          to get instant AI-Powered study help.
        </p>
        <FormChat />
      </div>
    </Default>
  );
}
