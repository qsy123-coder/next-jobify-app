import CreateAndEditJobForm from "@/components/CreateAndEditJobForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const AddJobPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateAndEditJobForm />;
    </HydrationBoundary>
  );
};

export default AddJobPage;
