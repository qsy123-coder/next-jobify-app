import { JobType } from "@/utils/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import DeleteJobButton from "./DeleteJobButton";
import dayjs from "dayjs";
import { Button } from "./ui/button";
import Link from "next/link";

const JobCard = ({ job }: { job: JobType }) => {
  const time = dayjs(job.createdAt).format("YYYY-MM-DD HH:mm:ss");
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-7 justify-between  ">
          <div className="flex flex-col gap-2">
            <CardTitle className="capitalize font-2xl">
              {job.position}
            </CardTitle>
            <CardDescription className="text-[10px]">
              {job.company}
            </CardDescription>
          </div>
          <p>{time}</p>
        </div>
      </CardHeader>
      <CardContent>{}</CardContent>
      <CardFooter className="flex gap-4 justify-between">
        <Button asChild variant={"outline"}>
          <Link href={`/jobs/${job.id}`}>编辑</Link>
        </Button>
        <DeleteJobButton />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
