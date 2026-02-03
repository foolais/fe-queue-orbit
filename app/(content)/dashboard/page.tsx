import CardAction from "@/components/card-action";
import CardSystemOverview from "@/components/card-system-overview";

const DashboardPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col gap-4">
      <h1 className="text-7xl font-bold max-w-2xl text-center italic mb-4">
        INSTANT VOICE QUEUEING
      </h1>
      <div className="border-8 border-black w-full -mb-2" />
      <div className="flex items-center justify-between w-full font-semibold uppercase text-lg px-4">
        <span>Listening...</span>
        <span>Connected</span>
        <span>Broadcasting</span>
      </div>
      <div className="flex items-center justify-center gap-16 w-full my-8">
        <CardAction
          title="Display Monitor"
          description="Open the public queue screen for lobby and waiting areas"
          type="monitor"
          href="/monitor"
        />
        <CardAction
          title="Create a Call"
          description="Initiate a new voice call and add to the queue"
          type="call"
          href="/call"
        />
      </div>
      <div className="my-20 w-full">
        <CardSystemOverview />
      </div>
    </div>
  );
};

export default DashboardPage;
