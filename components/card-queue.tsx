import { PhoneCall, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export const CardQueue = () => {
  return (
    <Card className="w-full h-[200px] flex items-center justify-center">
      <CardContent className="text-center">
        <h1 className="text-2xl font-bold primary-text">Wahyu </h1>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer ml-auto">
          Panggil <PhoneCall className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CreateCardQueue = () => {
  return (
    <Card className="w-full h-[200px] flex items-center justify-center primary-bg">
      <CardContent>
        <h1 className="text-2xl font-bold text-white">Tambah Antrian Baru</h1>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer" variant={"outline"}>
          Tambah <Plus className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
