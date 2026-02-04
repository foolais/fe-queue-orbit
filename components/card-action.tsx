import { Eye, Mic } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardActionProps {
  title: string;
  description: string;
  type: "monitor" | "call";
  href: string;
}

const CardAction = ({ title, description, type, href }: CardActionProps) => {
  return (
    <section
      className={`neu shadow-hard-10 flex items-center justify-center flex-col p-8 w-xs md:w-lg ${
        type === "monitor"
          ? "bg-primary text-black"
          : " bg-brutal-blue text-white"
      }`}
    >
      {type === "monitor" ? (
        <Eye className="size-24" />
      ) : (
        <Mic className="size-24" />
      )}
      <div className="md:w-11/12 lg:w-4/5 mx-auto text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter uppercase my-4">
          {title}
        </h3>
        <span className="text-sm md:text-base uppercase text-center">
          {description}
        </span>
      </div>
      <Link href={href}>
        <Button
          className={`mt-6 px-8 uppercase font-semibold ${
            type === "monitor" ? "bg-black text-white" : "bg-white text-black"
          } `}
        >
          {type === "monitor" ? "Open Monitor" : "Start Session"}
        </Button>
      </Link>
    </section>
  );
};

export default CardAction;
