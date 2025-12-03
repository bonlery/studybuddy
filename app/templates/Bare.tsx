import { Link } from "lucide-react";
import Logo from "../components/Logo";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="bottom-right" />
    </div>
  );
}
