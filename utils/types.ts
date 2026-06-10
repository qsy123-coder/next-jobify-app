import z from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  location: string;
  position: string;
  company: string;
  status: string;
  mod: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

export const createAndEditJobSchema = z.object({
  location: z.string().min(2, { message: "location must be at least 2" }),
  position: z.string().min(2, { message: "position word must be at least 2" }),
  company: z.string().min(2, { message: "company word must be at least 2" }),
  status: z.nativeEnum(JobStatus),
  mod: z.nativeEnum(JobMode),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
