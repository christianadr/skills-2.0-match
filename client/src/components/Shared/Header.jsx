import React from "react";
import { DUMMY_DATA_ABOUT } from "../lib/consts/dummy/dummy";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "@mui/material/Button";
import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { PostJob } from "../PostJob";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

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

          <Button
            variant="contained"
            startIcon={<HiOutlinePlusSm />}
            onClick={handleOpen}
          >
            <PostJob open={open} handleOpen={handleOpen} />
            Post a job listing
          </Button>
        </div>
      </div>
    </div>
  );
}
