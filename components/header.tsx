import { Mic } from "lucide-react";
import ButtonDate from "./button-date";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/dashboard">
        <div className="neu neu-hover font-semibold uppercase shadow-hard-6 flex items-center justify-center py-1 px-4 md:px-8 bg-black text-white gap-2 text-xl cursor-pointer">
          <Mic className="size-6 text-primary" />
          Queue Orbit
        </div>
      </Link>
      <ButtonDate />
    </div>
  );
};

export default HeaderComponent;
