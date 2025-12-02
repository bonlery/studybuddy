import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-max">
      <h2>
        Challenge or Solution from
        <span className="text-[var(--default)]"> CodeCraft</span> Created by
        <span className="text-[var(--default)]">
          {" "}
          Vonlery Villanueva&apos;s
        </span>
      </h2>
    </footer>
  );
}
