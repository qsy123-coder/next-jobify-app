"use client";
import { deleteJobsAction } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const DeleteJobButton = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobsAction({ id }),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "There is null" });
      }
      toast({ description: "删除成功" });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
    },
  });
  return (
    <Button
      onClick={() => {
        mutate(id);
      }}
      disabled={isPending}
    >
      {isPending ? "删除中..." : "删除"}
    </Button>
  );
};

export default DeleteJobButton;
