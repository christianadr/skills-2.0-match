import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export function PostJob({ open, handleOpen }) {
  return (
    <Dialog size="xs" open={open} handler={handleOpen} className="bg-white">
      <Card className="mx-auto w-full max-w-screen bg-green">
        <CardHeader
          variant="gradient"
          // color="blue"
          className="mb-4 grid h-28 place-items-center bg-blue"
        >
          <Typography variant="h4" color="white">
            Post a Job Now
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Job Title" size="lg" />
          <Input label="Location" size="lg" />
          <Input label="Job Type" size="lg" />
          <Input label="Workspace Type" size="lg" />
          <Input label="Estimated Salary" size="lg" />
          <Input label="Skills Requirement" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            onClick={handleOpen}
            fullWidth
            className="bg-blue"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
