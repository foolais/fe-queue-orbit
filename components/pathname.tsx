"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Antrian", path: "/antrian" },
];

const Pathname = () => {
  const path = usePathname();

  return (
    <div className="flex gap-6">
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          className={cn(
            path === route.path
              ? "font-bold primary-text"
              : "font-semibold text-gray-600",
            "hover:scale-105 transition-transform duration-300"
          )}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Pathname;
