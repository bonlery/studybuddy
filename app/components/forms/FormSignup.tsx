"use client";

import { createUser } from "@/app/lib/actions/user";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function FormSignup() {
  // Init
  const initialState = {
    success: false,
    payload: null,
    message: null,
    errors: [],
    input: null,
  };

  // Router
  const { push: redirect } = useRouter();

  const [state, handleSubmit, isPending] = useActionState(
    createUser,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      // Do toast
      toast.success("User created successfully! Redirecting to login...");

      //
      setTimeout(() => {
        redirect("/login");
      }, 1000);

      //
    }
  }, [state]);

  return (
    <form
      data-loading={isPending}
      action={handleSubmit}
      className="flex flex-col w-[25rem] gap-3"
      noValidate
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-8 self-center">SIGN UP</h1>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          defaultValue={state?.input?.name}
          className={`w-full border border-[var(--foreground)] rounded p-2 ${
            state?.errors.find((error) => error.field === "name")
              ? "border-red-500!"
              : ""
          }`}
        />
        {state?.errors.find((error) => error.field === "name") && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === "name")?.message}
          </p>
        )}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          defaultValue={state?.input?.email}
          className={`w-full border border-[var(--foreground)] rounded p-2 ${
            state?.errors.find((error) => error.field === "email")
              ? "border-red-500!"
              : ""
          }`}
        />
        {state?.errors.find((error) => error.field === "email") && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === "email")?.message}
          </p>
        )}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className={`w-full border border-[var(--foreground)] rounded p-2 ${
            state?.errors.find((error) => error.field === "password")
              ? "border-red-500!"
              : ""
          }`}
        />
        {state?.errors.find((error) => error.field === "password") && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === "password")?.message}
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <button type="submit" className="button button--default rounded w-full">
          {isPending ? "Please wait..." : "Sign up"}
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 w-[90%] self-center m-4">
        <hr className="flex-1 border-t text-[var(--foreground)]" />
        <p>Have An Account?</p>
        <hr className="flex-1 border-t text-[var(--foreground)]" />
      </div>
      <div className="flex justify-center mb-[6rem]">
        <Link
          href="\login"
          className="button button--transparent-border rounded w-full"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
