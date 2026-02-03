import { CardQueueLoading } from "./card-queue";

const ListQueue = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Daftar Antrian</h1>
      <div className="w-full h-[73vh] overflow-y-auto mt-6 p-2">
        <div className="grid gap-8">
          {Array.from({ length: 11 }).map((_, index) => (
            <CardQueueLoading key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListQueue;
