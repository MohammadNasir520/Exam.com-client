import ExamTopicCard from "@/components/ui/ExamTopicsCard/ExamTopicCard";
import React from "react";

const ExamTopics = ({ params }: any) => {
  console.log(params);
  return (
    <div>
      <ExamTopicCard params={params}></ExamTopicCard>
    </div>
  );
};

export default ExamTopics;
