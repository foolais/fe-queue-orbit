import React from "react";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";

const CardCalling = () => {
  return (
    <div className="neu shadow-hard-10 w-full md:w-3/4 bg-white">
      <section className="bg-primary px-8 py-4 lg:py-6 border-b-4 flex items-center justify-between">
        <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl tracking-tighter italic font-bold">
          Now Calling...
        </h1>
        <Button className="neu neu-hover text-white bg-brutal-blue p-5">
          <Volume2 />
        </Button>
      </section>
      <section className="bg-white flex flex-col items-center justify-center max-w-11/12 lg:max-w-3/4 mx-auto text-center h-[45vh]">
        <h2 className="text-6xl xl:text-8xl font-semibold tracking-tighter">
          Wahyu Esya Nasution
        </h2>
        <div className="border-4 w-3/4 my-8" />
      </section>
      <section className="bg-black px-4 md:px-8 py-4 flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-center gap-3">
          <div className="size-3 md:size-5 rounded-full bg-primary" />
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
