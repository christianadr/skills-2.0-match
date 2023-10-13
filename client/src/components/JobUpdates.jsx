import { React, Image } from "react";
import { JOB_UPDATES } from "./lib/consts/dummy/dummy";
import { Avatar } from "@material-tailwind/react";

export default function JobUpdates() {
  return (
    <div className="bg-white p-4 rounded-md border border-gray flex flex-col flex-1">
      <div className="flex flex-row justify-between items-center">
        <strong className="font-bold text-3xl">Job Updates</strong>
        <strong className="font-bold text-xl">View All</strong>
      </div>
      <div className="flex gap-2 py-4">
        <BoxWrapper>
          <div className="flex flex-row justify-between items-center py-4">
            <Avatar src="src/assets/dell-logo.svg" size="xl" />
            <div className="bg-light-yellow rounded-lg p-3">
              <span className="font-bold">Full Time</span>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <span className="font-bold">Social Media Assistant</span>
            <span className="font-bold">Dell - Philippines</span>
          </div>
          <div className="flex flex-row gap-1.5">
            <div className="border border-dark-yellow rounded-lg p-3">
              <span className="font-bold text-dark-yellow">Marketing</span>
            </div>
            <div className="border border-green rounded-lg p-3">
              <span className="font-bold text-green">Design</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper></BoxWrapper>
        <BoxWrapper></BoxWrapper>
        <BoxWrapper></BoxWrapper>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md border border-gray p-4 h-[20rem] flex-1">
      {children}
    </div>
  );
}
