import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between w-full h-max ">
                {/* Logo */}
                <Logo></Logo>
                {/* Action Buttons */}
                <div className="flex text-[var(--foreground)] gap-4 my-8 mx-12">
                    <Link
                        href="/login"
                        className="button button--transparent-border rounded-[16rem]"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="button button--default rounded-[16rem]"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}
