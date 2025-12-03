"use client";

import Link from "next/link";
import Default from "../templates/Default";
import FormChat from "../components/forms/FormChat";
import { useState } from "react";

export default function Home() {
  const [isChatting, setIsChatting] = useState(false);

  return (
    <>
      <Default className="items-center justify-center flex flex-col gap-6">
        {!isChatting && (
          <div className="flex flex-col gap-6 w-[35.5rem]">
            <h1 className="self-center text-center text-4xl font-bold tracking-wide">
              Hello Guest!
            </h1>

            <p className="text-center">
              Welcome to Study Buddy! Create your free account and upload your
              notes to get instant AI-Powered study help.
            </p>
          </div>
        )}
        <FormChat setIsChatting={setIsChatting} />
      </Default>
    </>
  );
}
