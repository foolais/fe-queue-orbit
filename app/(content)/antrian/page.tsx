import { CardQueue, CreateCardQueue } from "@/components/card-queue";
import SearchQueue from "@/components/search-queue";

const AntrianPage = () => {
  return (
    <div className="w-4/5 mx-auto p-8">
      <SearchQueue />
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        <CreateCardQueue />
        {Array.from({ length: 11 }).map((_, index) => (
          <div key={index} className="mb-4">
            <CardQueue />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AntrianPage;
