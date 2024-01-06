import FreeExamTopicCard from "@/components/Views/FreeExams/FreeExamTopicCard/FreeExamTopicCard";
import LiveExamTopicCard from "@/components/ui/LiveExamTopicCard/LiveExamTopicCard";
import React from "react";

const FreeExams = () => {
  const FreeExamTopicData = [
    { title: "math", id: 1, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 2, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 3, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 4, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 5, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 6, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 7, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 8, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 9, totalTopic: 20, totalQuestion: 687 },
    { title: "math", id: 10, totalTopic: 20, totalQuestion: 687 },
  ];
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-center">Free Exams</h1>
        <p className="text-center ">
          Here You can Participants Free of cost exams how many times you want
        </p>
      </div>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 ">
        {FreeExamTopicData?.map((topic) => (
          <div key={topic.id} className="flex justify-center items-center">
            <FreeExamTopicCard FreeExamTopicData={topic}></FreeExamTopicCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeExams;
