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
import JobInfo from "./JobInfo";
import {
  BrainIcon,
  Briefcase,
  Calendar,
  CalendarDays,
  MapPin,
  Radio,
  RadioTower,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const JobCard = ({ job }: { job: JobType }) => {
  const time = new Date(job.createdAt).toLocaleDateString();
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
      <Separator />
      <CardContent className="grid grid-cols-2 gap-4 items-center capitalize mt-4">
        <JobInfo icon={<Briefcase />} text={job.mod} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<CalendarDays />} text={time} />
        <Badge className=" w-26">
          <JobInfo icon={<RadioTower />} text={job.status} />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4 justify-between">
        <Button asChild variant={"outline"}>
          <Link href={`/jobs/${job.id}`}>编辑</Link>
        </Button>
        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
