import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import DialogCreateQueue from "./dialog-create-queue";

export const CardQueue = () => {
  return (
    <Card className="w-full h-[200px] flex items-center justify-center">
      <CardContent className="text-center">
        <h1 className="text-2xl font-bold">Wahyu </h1>
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
        <h1 className="text-2xl font-bold text-white text-center">
          Antrian Baru
        </h1>
      </CardContent>
      <CardFooter>
        <DialogCreateQueue />
      </CardFooter>
    </Card>
  );
};

export const CardQueueLoading = () => {
  return (
    <Card className="w-full">
      <CardContent className="grid gap-2">
        <h1 className="text-2xl font-bold truncate">Wahyu Esya Nasution</h1>
        <Button className="cursor-pointer ml-auto" disabled>
          Sedang Memanggil <PhoneCall className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
