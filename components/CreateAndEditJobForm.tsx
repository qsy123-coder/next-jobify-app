"use client";

import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
} from "@/utils/types";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { SelectInput, TextInput } from "./FormComponent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { CreateJobAction } from "@/utils/actions";
import { useRouter } from "next/navigation";

export default function CreateAndEditJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      location: "",
      position: "",
      company: "",
      status: JobStatus.Pending,
      mod: JobMode.FullTime,
    },
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => CreateJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "Data is null" });
        // console.log("fff");
      }
      toast({ description: "Job create successfully" });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
      router.push("/jobs");
    },
  });

  const onSubmit = (values: CreateAndEditJobType) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-10 rounded-sm"
      >
        <h2 className="font-semibold text-4xl tracking-wide mb-4">Add Job</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start  ">
          <TextInput name="location" />
          <TextInput name="position" />
          <TextInput name="company" />
          <SelectInput name="status" items={Object.values(JobStatus)} />
          <SelectInput name="mod" items={Object.values(JobMode)} />
          <Button type="submit" className="self-end " disabled={isPending}>
            {isPending ? "提交中..." : "提交"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
