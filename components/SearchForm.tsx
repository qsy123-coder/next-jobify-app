"use client";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { JobStatus } from "@/utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobstatus") || "all";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    let params = new URLSearchParams();
    params.set("search", search);
    params.set("jobstatus", jobStatus);

    router.push(`${path}?${params.toString()}`);
    console.log(search, jobStatus);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center  mb-10 bg-muted p-10 rounded-md"
    >
      <Input
        type="text"
        name="search"
        placeholder="搜索...."
        defaultValue={search}
      />
      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger className="w-full ">
          <SelectValue placeholder="职位状态" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup>
            {["all", ...Object.values(JobStatus)].map((jobStatus) => {
              return (
                <SelectItem
                  key={jobStatus}
                  value={jobStatus}
                  className="capitalize"
                >
                  {jobStatus}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit">搜索</Button>
    </form>
  );
};

export default SearchForm;
