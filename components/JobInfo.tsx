import React from "react";

const JobInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex gap-4 items-center px-4 py-2">
      {icon}
      {text}
    </div>
  );
};

export default JobInfo;
