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
