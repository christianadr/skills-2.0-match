import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import { TextField } from "@mui/material";

export default function Messages() {
  return (
    <div className="flex flex-col p-3 gap-5">
      <span className="text-3xl font-black">Messages</span>

      <div className="flex flex-row gap-3 h-screen">
        <div className="flex flex-col overflow-auto w-72 p-3">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="sticky top-0 "
          />

          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
        </div>
        <div className="flex-1 p-3">messages content</div>
      </div>
    </div>
  );
}

function Contact({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Handle the click event for the contact here
    // For example, you can open a chat window or perform any other action
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`flex flex-row justify-start py-3 gap-3 border-b border-gray-50 ${
        isClicked ? "bg-light-green" : ""
      }`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Avatar src="src/components/lib/consts/dummy/profile2.svg" alt="avatar" />
      <div className="flex flex-col">
        <div className="flex flex-1 justify-between items-center">
          <span className="font-bold">Contact Name</span>
          <span className="text-xs text-gray-50">12 mins</span>
        </div>
        <div>
          <span className="text-s text-gray-50">
            Hi Relani. Sure, I would l...
          </span>
        </div>
      </div>
    </div>
  );
}
