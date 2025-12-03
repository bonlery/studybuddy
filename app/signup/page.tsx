import Link from "next/link";
import Header from "../components/Header";
import Bare from "../templates/Bare";
import FormSignup from "../components/forms/FormSignup";

export default function Signup() {
  return (
    <>
      <Bare className="w-screen flex flex-col justify-center items-center">
        <FormSignup />
      </Bare>
    </>
  );
}
