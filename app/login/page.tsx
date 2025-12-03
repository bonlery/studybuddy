import Link from "next/link";
import Header from "../components/Header";
import Bare from "../templates/Bare";
import FormSignup from "../components/forms/FormSignup";
import FormLogin from "../components/forms/FormLogin";

export default function Login() {
  return (
    <>
      <Bare className="w-screen flex flex-col justify-center items-center">
        <FormLogin />
      </Bare>
    </>
  );
}
