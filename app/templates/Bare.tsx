import { Link } from "lucide-react";
import Logo from "../components/Logo";

export default function Bare({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header className="my-8 mx-1">
        <Logo></Logo>
      </header>
      <div className={`flex flex-1 ${className}`}>{children}</div>
      <div className="flex flex-row items-center gap-2 w-[70%] self-center">
        <hr className="flex-1 border-t text-[var(--foreground)]" />
        <p>or</p>
        <hr className="flex-1 border-t text-[var(--foreground)]" />
      </div>
    </div>
  );
}
