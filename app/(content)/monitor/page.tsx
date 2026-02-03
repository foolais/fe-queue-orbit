import CardCalling from "@/components/card-calling";
import CardQueue from "@/components/card-queue";

const MonitorPage = () => {
  return (
    <div className="flex items-start justify-between gap-16 py-4 w-full">
      <CardCalling />
      <CardQueue />
    </div>
  );
};

export default MonitorPage;
