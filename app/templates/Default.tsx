import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Default({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between w-screen h-screen">
            <Header />
            <main className={`flex flex-1 ${className}`}>{children}</main>
            <Footer />
        </div>
    );
}
