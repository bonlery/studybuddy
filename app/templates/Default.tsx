import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-screen h-screen pt-6 px-18">
      <Header />
      <main className="flex items-center justify-center flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
