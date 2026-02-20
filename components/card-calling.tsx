"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Queue = {
  id: string;
  name: string;
  status: "waiting" | "calling" | "done";
};

const CardCalling = () => {
  const [calledQueue, setCalledQueue] = useState<Queue[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const speakingRef = useRef(false);

  const unlockSound = () => {
    const u = new SpeechSynthesisUtterance("sound ready");
    speechSynthesis.speak(u);
    speechSynthesis.cancel();
    setSoundEnabled(true);
  };

  const ensureCalling = async () => {
    const { data: calling } = await supabase
      .from("queues")
      .select("*")
      .eq("status", "calling")
      .maybeSingle();

    if (!calling) {
      console.log("No active calling → trigger call_next()");
      await supabase.rpc("call_next");
    } else {
      setCalledQueue([calling]);
    }
  };

  useEffect(() => {
    ensureCalling();

    const channel = supabase
      .channel("queue-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "queues",
        },
        async (payload) => {
          const newRow = payload.new as Queue | null;
          if (!newRow) return;

          if (payload.eventType === "INSERT" && newRow.status === "waiting") {
            await ensureCalling();
            return;
          }

          setCalledQueue((prev) => {
            const copy = [...prev];
            const idx = copy.findIndex((q) => q.id === newRow.id);

            if (idx !== -1) {
              copy[idx] = newRow;
            } else if (newRow.status === "calling") {
              copy.unshift(newRow);
            } else if (newRow.status === "done") {
              return copy.filter((q) => q.id !== newRow.id);
            }

            return copy.slice(0, 5);
          });
        }
      )
      .subscribe();

    const interval = setInterval(async () => {
      const { data } = await supabase
        .from("queues")
        .select("*")
        .eq("status", "calling");

      if (data?.length) setCalledQueue(data.slice(0, 5));
    }, 3000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  const currentCalling = calledQueue[0];

  useEffect(() => {
    if (!currentCalling) return;
    if (!soundEnabled) return;
    if (speakingRef.current) return;

    speakingRef.current = true;
    const speakingId = currentCalling.id;
    const speakingName = currentCalling.name;

    const utterance = new SpeechSynthesisUtterance(
      `Panggilan atas nama ${speakingName}`
    );
    utterance.lang = "ja-JP";

    utterance.onend = async () => {
      speakingRef.current = false;
      console.log("Finished speaking:", speakingName);
      setTimeout(
        () => setCalledQueue((prev) => prev.filter((q) => q.id !== speakingId)),
        2000
      );

      await supabase
        .from("queues")
        .update({ status: "done" })
        .eq("id", speakingId);

      await supabase.rpc("call_next");
    };

    utterance.onerror = () => {
      speakingRef.current = false;
      console.error("TTS error for", speakingName);
    };

    speechSynthesis.speak(utterance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCalling?.id, soundEnabled]);

  return (
    <div className="neu shadow-hard-10 w-full bg-white">
      <section className="bg-primary px-8 py-4 lg:py-6 border-b-4 flex items-center justify-between">
        <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl tracking-tighter italic font-bold">
          {calledQueue.length > 0
            ? "Now Calling..."
            : "No one is currently being called"}
        </h1>

        <Button
          className="neu neu-hover text-white bg-brutal-blue p-5"
          onClick={unlockSound}
        >
          <Volume2 />
        </Button>
      </section>

      <section className="bg-white flex flex-col items-center justify-center max-w-11/12 lg:max-w-3/4 mx-auto text-center h-[50vh]">
        {soundEnabled ? (
          <h2 className="text-6xl xl:text-8xl font-semibold tracking-tighter">
            {calledQueue.length > 0
              ? calledQueue[0].name
              : "No one is currently being called"}
          </h2>
        ) : (
          <Button
            className="neu neu-hover bg-primary text-black p-10 text-4xl flex gap-4"
            onClick={unlockSound}
          >
            Click to Start Queue <Volume2 className="size-15" />
          </Button>
        )}
      </section>
    </div>
  );
};

export default CardCalling;
