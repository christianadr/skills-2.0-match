import React from "react";
import { DUMMY_DATA_INFO } from "../lib/consts/dummy/dummy";

export default function Dashboard() {
  return (
    <div>
      {DUMMY_DATA_INFO.map((item) => (
        <div className="h-32 p-3 px-5 flex flex-col">
          <div className="items-center flex flex-row">
            <div className="flex-1 flex flex-col gap-3">
              <span className="font-black text-4xl">
                Good morning, {item.name}
              </span>
              <span className="text-base">
                Here is your job listing statistic report from {item.date}
              </span>
            </div>
            <div className="w-48 p-3 bg-blue rounded-md">{item.date}</div>
          </div>
          <div>top-botom side</div>
        </div>
      ))}

      <div>stats div</div>
    </div>
  );
}
