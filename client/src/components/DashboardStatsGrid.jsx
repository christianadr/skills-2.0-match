import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { DUMMY_DATA_INFO } from "../lib/consts/dummy/dummy";

export default function DashboardStatsGrid() {
  return (
    <>
      {DUMMY_DATA_INFO.map((item) => (
        <div className="flex gap-2 py-5">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-blue flex items-center justify-center">
              <IoPeopleSharp className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">
                Candidates to Review
              </span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.candidatesReview} New Candidates
                </strong>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-blue flex items-center justify-center">
              <IoPeopleSharp className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">
                Schedule for Interivew
              </span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.toInterview} Candidates for Interview
                </strong>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-blue flex items-center justify-center">
              <IoPeopleSharp className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">Messages Received</span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.receivedMessages} messages
                </strong>
              </div>
            </div>
          </BoxWrapper>
        </div>
      ))}
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-light-green rounded p-4 flex-1 flex items-center h-24">
      {children}
    </div>
  );
}
