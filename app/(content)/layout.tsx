import ButtonDate from "@/components/button-date";
import { Mic } from "lucide-react";
import Link from "next/link";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="neo-grid min-h-screen p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <Link href="/dashboard">
          <div className="neu neu-hover font-semibold uppercase shadow-hard-6 flex items-center justify-center py-1 px-8 bg-black text-white gap-2 text-xl cursor-pointer">
            <Mic className="size-6 text-primary" />
            Queue Orbit
          </div>
        </Link>
        <ButtonDate />
      </div>
      <div className="my-4 min-h-[75vh]">{children}</div>
      {/* FOOTER */}
      <div>
        <div className="border-4 border-black" />
        <div className="font-medium text-gray-500 py-4 flex items-center justify-between">
          <div className="flex gap-6">
            <span>
              <span>ID:</span> Q-ORBIT_V1.0
            </span>
            <span>
              <span>LOC:</span> GLOBAL_NODE
            </span>
          </div>
          <span>EST. 2026 // BY FOOLAIS</span>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
