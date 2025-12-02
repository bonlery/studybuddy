import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between w-full h-max">
        {/* Logo */}
        <Logo></Logo>
        {/* Action Buttons */}
        <div className="flex p-2 text-[var(--foreground)] gap-4 ">
          <Link href="/login" className="button button--transparent-border">
            Login
          </Link>
          <Link href="/signup" className="button button--default">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
