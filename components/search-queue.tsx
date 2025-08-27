import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";

const SearchQueue = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Cari Nama Antrian Di sini..." />
      <Button className="cursor-pointer">
        <RefreshCcw className="size-5" />
      </Button>
    </div>
  );
};

export default SearchQueue;
