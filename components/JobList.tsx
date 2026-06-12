"use client";
import { getAllJobsAction } from "@/utils/actions";
import { JobType } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import JobCard from "./JobCard";

const JobList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobstatus") || "all";

  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];
  if (isPending) return <div>加载中....</div>;
  if (jobs.length < 1) return <div>There is no jobs found...</div>;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-6 bg-muted p-10 ">
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
};

export default JobList;
