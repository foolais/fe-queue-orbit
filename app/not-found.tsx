import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="neo-grid min-h-svh max-h-svh flex flex-col p-4 md:p-8">
      <Header />
      <div className="flex flex-1 flex-col gap-8 items-center justify-center ">
        <h1 className="text-9xl md:text-[10rem] font-extrabold tracking-tighter text-shadow">
          404
        </h1>
        <div className="neu neu-hover shadow-hard-6 px-6 py-4">
          <h2 className="uppercase text-3xl font-extrabold tracking-tighter italic">
            Lost in the queue?
          </h2>
        </div>
        <Link href="/dashboard">
          <div className="neu neu-hover cursor-pointer shadow-hard-6 bg-brutal-yellow flex items-center justify-center p-4 mt-8">
            <h3 className="uppercase font-extrabold">Go back to dashboard</h3>
            <ArrowRight />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
