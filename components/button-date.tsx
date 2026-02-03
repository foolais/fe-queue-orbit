"use client";

import { useEffect, useState } from "react";

const ButtonDate = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="neu neu-hover font-semibold shadow-hard-6 bg-brutal-yellow py-1 px-4 text-black text-lg">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default ButtonDate;
