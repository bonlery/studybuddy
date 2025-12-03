import Link from "next/link";
import Header from "../components/Header";
import Bare from "../templates/Bare";

export default function Signup() {
  return (
    <>
      <Bare className="w-screen flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-2"
        >
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Your name"
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Your email"
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Your password"
            className="border rounded p-2"
          />
          <input
            type="submit"
            className="button button--default rounded-[1rem] self-end"
          ></input>
        </form>
      </Bare>
    </>
  );
}
