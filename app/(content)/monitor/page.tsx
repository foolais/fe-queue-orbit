import CardCalling from "@/components/card-calling";
import CardQueue from "@/components/card-queue";

const MonitorPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-16 py-4 w-full">
      <CardCalling />
      <CardQueue />
    </div>
  );
};

export default MonitorPage;
