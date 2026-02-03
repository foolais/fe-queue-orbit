import FormCreateCall from "@/components/form-create-call";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CallPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div>
        <Link href="/dashboard">
          <Button className="justify-self-start place-self-start text-white font-bold uppercase bg-brutal-pink py-4">
            <ArrowLeft className="size-5" />
            Back
          </Button>
        </Link>
        <div className="mt-4 neu shadow-hard-10 bg-white w-md p-8">
          <h1 className="text-3xl font-extrabold tracking-tighter uppercase">
            Initiate <br /> Voice Call
          </h1>

          <div className="my-8">
            <FormCreateCall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
