import React from "react";

const ExamTopicCard = ({ params }: any) => {
  return <div className="mx-auto">exam topic: {params?.id}</div>;
};

export default ExamTopicCard;
