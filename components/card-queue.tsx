import { History, Info } from "lucide-react";

const data = [
  {
    time: "1",
    name: "John Doe",
  },
  {
    time: "2",
    name: "Jane Doe",
  },
  {
    time: "3",
    name: "John Doe",
  },
  {
    time: "4",
    name: "Jane Doe",
  },
  {
    time: "5",
    name: "John Doe",
  },
  {
    time: "6",
    name: "Jane Doe",
  },
];

const CardQueue = () => {
  return (
    <div className="w-1/4 flex flex-col gap-4">
      <div className="neu shadow-hard-6 bg-black text-white flex items-center gap-2 p-4">
        <History />
        <h2 className="uppercase font-semibold">Recently called</h2>
      </div>
      <div className="max-h-[43vh] overflow-y-scroll flex flex-col gap-6">
        {data.map((item, index) => (
          <CardDetail key={index} time={item.time} name={item.name} />
        ))}
      </div>
      <div className="neu shadow-hard-6 bg-brutal-pink text-black flex flex-col items-center justify-center gap-2 p-6">
        <Info className="size-8" />
        <h3 className="uppercase font-semibold w-full md:w-3/4 mx-auto text-center">
          if your name is not listed, please contact the admin
        </h3>
      </div>
    </div>
  );
};

interface CardDetailProps {
  time: string;
  name: string;
}

const CardDetail = ({ time, name }: CardDetailProps) => {
  return (
    <div className="neu shadow-hard-6 bg-white p-6 flex flex-col gap-2">
      <span className="uppercase text-gray-500 font-semibold">
        {time} min ago
      </span>
      <span className="uppercase font-semibold tracking-tighter text-2xl">
        {name}
      </span>
    </div>
  );
};

export default CardQueue;
