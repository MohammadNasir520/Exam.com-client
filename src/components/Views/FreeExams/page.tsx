import FreeExamCard from "@/components/Views/FreeExams/FreeExamCard/FreeExamTopicCard";
import LiveExamTopicCard from "@/components/ui/LiveExamTopicCard/LiveExamTopicCard";
import React from "react";

const FreeExams = () => {
  const FreeExamTopicData = [
    { title: "Math", id: 1, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 2, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 3, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 4, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 5, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 6, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 7, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 8, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 9, totalTopic: 20, totalQuestion: 687 },
    { title: "Math", id: 10, totalTopic: 20, totalQuestion: 687 },
  ];
  return (
    <div className="min-h-screen my-7">
      <div>
        <h1 className="font-bold text-2xl text-center my-6 ">Free Exams</h1>
        <p className="text-center  my-6">
          Here You can Participants Free of cost exams how many times you want
        </p>
      </div>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 space-y-6 ">
        {FreeExamTopicData?.map((topic) => (
          <div className="flex justify-center items-center  " key={topic.id}>
            <FreeExamCard FreeExamTopicData={topic}></FreeExamCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeExams;
