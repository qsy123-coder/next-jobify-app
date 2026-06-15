"use server";
import { Prisma } from "@prisma/client";
import { createAndEditJobSchema, CreateAndEditJobType, JobType } from "./types";
import prisma from "./db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const validateAuthAndRedirect = (): string => {
  const { userId } = auth();
  if (!userId) redirect("/");
  return userId;
};

//创建职位操作
export const CreateJobAction = async (
  values: CreateAndEditJobType,
): Promise<JobType | null> => {
  const userId = validateAuthAndRedirect();
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: { ...values, clerkId: userId },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//获取所有职位操作
export type GetJobsProps = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export const getAllJobsAction = async ({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetJobsProps): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPage: number;
}> => {
  const userId = validateAuthAndRedirect();
  let whereClause: Prisma.JobWhereInput = {
    clerkId: userId,
  };

  if (search) {
    whereClause = {
      ...whereClause,
      OR: [
        {
          position: {
            contains: search,
          },
        },
        {
          location: {
            contains: search,
          },
        },
      ],
    };
  }

  if (jobStatus && jobStatus !== "all") {
    whereClause = {
      ...whereClause,
      status: jobStatus,
    };
  }

  try {
    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });
    return { jobs, count: 0, page: 1, totalPage: 0 };
  } catch (error) {
    console.log(error);
    return { jobs: [], count: 0, page: 1, totalPage: 0 };
  }
};

//删除job操作

export const deleteJobsAction = async ({
  id,
}: {
  id: string;
}): Promise<JobType | null> => {
  const userId = validateAuthAndRedirect();
  try {
    const job: JobType = await prisma.job.delete({
      where: {
        clerkId: userId,
        id: id,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
};
