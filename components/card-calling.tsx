import React from "react";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";

const CardCalling = () => {
  return (
    <div className="neu shadow-hard-10 w-3/4 bg-white">
      <section className="bg-primary px-8 py-6 border-b-4 flex items-center justify-between">
        <h1 className="uppercase text-4xl tracking-tighter italic font-bold">
          Now Calling...
        </h1>
        <Button className="neu neu-hover text-white bg-brutal-blue p-5">
          <Volume2 />
        </Button>
      </section>
      <section className="bg-white p-8 flex flex-col items-center justify-center max-w-3/4 mx-auto text-center min-h-[50vh]">
        <h2 className="text-9xl font-semibold tracking-tighter">HELLO WORLD</h2>
        <div className="border-4 w-3/4 my-8" />
      </section>
      <section className="bg-black px-8 py-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <div className="size-5 rounded-full bg-primary" />
          <span className="uppercase text-white font-semibold ">
            Active Connection
          </span>
        </div>
        <span className="uppercase text-gray-500 font-semibold">
          queue orbit monitor
        </span>
      </section>
    </div>
  );
};

export default CardCalling;
