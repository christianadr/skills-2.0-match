import React from "react";
import { DUMMY_DATA_ABOUT } from "../lib/consts/dummy/dummy";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PostJob } from "../PostJob";

export default function Header() {
  return (
    <div className="p-3">
      <div className="items-center h-28 px-5 py-5 flex flex-row pt-2 border-b border-blue gap">
        <div className="flex-1 flex flex-row gap-3">
          {DUMMY_DATA_ABOUT.map((item, index) => (
            <>
              <div key={index}>
                <img src={item.image} height={"72px"} width={"72px"} />
              </div>
              <div className="flex-1 flex flex-col py-2">
                <span className="font-normal text-gray">Company</span>
                <span className="font-bold text-lg">{item.name}</span>
              </div>
            </>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <IoIosNotificationsOutline fontSize={36} />
          <PostJob />
        </div>
      </div>
    </div>
  );
}
