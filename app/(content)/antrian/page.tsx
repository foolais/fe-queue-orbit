import { CardQueue, CreateCardQueue } from "@/components/card-queue";
import ListQueue from "@/components/list-queue";
import SearchQueue from "@/components/search-queue";

const AntrianPage = () => {
  return (
    <div className="w-full mx-auto flex gap-6">
      <div className="w-full lg:w-3/4">
        <SearchQueue />
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-h-svh lg:max-h-[73vh] overflow-y-auto">
          <CreateCardQueue />
          {Array.from({ length: 11 }).map((_, index) => (
            <div key={index} className="mb-4">
              <CardQueue />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 hidden lg:block">
        <ListQueue />
      </div>
    </div>
  );
};

export default AntrianPage;
