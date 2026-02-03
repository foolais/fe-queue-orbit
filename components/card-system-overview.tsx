import React from "react";

interface CardDetailProps {
  title: string;
  data: string;
  description: string;
  className: string;
}

const data = [
  {
    title: "Live Connections",
    data: "12",
    description: "Active voice streams currently in progress",
  },
  {
    title: "Buffer Queue",
    data: "05",
    description: "Requests waiting for next available slot",
  },
  {
    title: "Active Sessions",
    data: "23",
    description: "Total authenticated users currently synced",
  },
  {
    title: "Core Stability",
    data: "99.9%",
    description: "Total system uptime and resource health",
  },
];

const CardSystemOverview = () => {
  return (
    <div className="neu shadow-hard-6 w-full p-4 relative">
      <div className="absolute -top-12 -left-1 w-max bg-black text-white py-2 px-4">
        <h2 className="text-xl font-bold">System Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <CardDetail
            key={index}
            title={item.title}
            data={item.data}
            description={item.description}
            className={
              index === 1
                ? "bg-brutal-pink"
                : index === 3
                ? "bg-brutal-yellow"
                : "bg-white"
            }
          />
        ))}
      </div>
    </div>
  );
};

const CardDetail = ({
  title,
  data,
  description,
  className,
}: CardDetailProps) => {
  return (
    <div
      className={`border-4 border-black py-4 px-8 h-48 aspect-video flex justify-center flex-col gap-2  ${className}`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-6xl font-extrabold">{data}</p>
      <p className="text-sm h-16 w-4/5">{description}</p>
    </div>
  );
};

export default CardSystemOverview;
