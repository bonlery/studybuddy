import Link from "next/link";
import Header from "./components/Header";
import Default from "./templates/Default";
import FormChat from "./components/forms/FormChat";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <Logo className=" absolute text-[var(--background)] my-8 mx-12" />
      <div className="w-screen h-screen flex ">
        <div className="justify-center items-center panel default-panel basis-[40%]">
          {/* <img
                        src="/Mascot.gif"
                        alt="animated gif"
                        className=" object-contain"
                    /> */}
        </div>
        <div className="justify-center items-center panel background-panel basis-[60%]">
          <div className="flex flex-col w-[35.5rem] gap-6">
            <h1 className=" text-4xl font-bold tracking-wide">Hello Guest!</h1>
            <p className="lg:text-blue-600">
              Meet Study Buddy — your brainy sidekick! Upload your notes, and
              watch me turn them into instant A+ guidance. Free, friendly, and
              powered by AI—let’s ace this together!
            </p>
            <Link
              href="/chat"
              className="button button--default w-full rounded-[16rem]"
            >
              Start Chatting
            </Link>
            <Link
              href="/login"
              className="button button--transparent-border rounded-[16rem]"
            >
              Login
            </Link>
            <div className="flex flex-row items-center gap-2 w-[70%] self-center">
              <hr className="flex-1 border-t text-[var(--foreground)]" />
              <p>or</p>
              <hr className="flex-1 border-t text-[var(--foreground)]" />
            </div>
            <Link
              href="/signup"
              className="button button--hover text-[var(--default)] "
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
    // <Default className="items-center justify-center">
    // </Default>
  );
}
