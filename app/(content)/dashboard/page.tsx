import CardAction from "@/components/card-action";
import CardSystemOverview from "@/components/card-system-overview";

const DashboardPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter md:max-w-2xl text-center italic mt-4 mb-0">
        INSTANT VOICE <br /> QUEUEING
      </h1>
      <div className="border-8 border-black w-full -mb-2" />
      <div className="flex items-center justify-between w-full font-semibold uppercase text-sm md:text-lg px-4">
        <span>Listening...</span>
        <span>Connected</span>
        <span>Broadcasting</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-8 md:gap-12 lg:gap-16 w-full mt-4 mb-8">
        <CardAction
          title="Display Monitor"
          description="Open the public queue screen to view the queue"
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
      <div className="my-10 md:my-20 w-full">
        <CardSystemOverview />
      </div>
    </div>
  );
};

export default DashboardPage;
