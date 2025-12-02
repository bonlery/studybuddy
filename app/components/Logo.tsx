import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
    return (
        <>
            <Link
                href="/"
                className={`text-2xl font-bold my-8 mx-12 ${className} tracking-widest`}
            >
                Study Buddy
            </Link>
        </>
    );
}
