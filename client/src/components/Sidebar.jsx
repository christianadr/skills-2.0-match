import React from "react";
import { Link } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-green-100 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-blue-200 w-48 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        {/* <FcBullish /> */}
        <span className="font-bold">Skills2.0Match</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div>Bottom Part</div>
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      {/* <span className="text-xl">{item.label}</span> */}
      {item.label}
    </Link>
  );
}
