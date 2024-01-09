"use client";
import React, { useState } from "react";

import Link from "next/link";
import SingleQuizCard from "@/components/ui/cards/SingleQuizCard/SingleQuizCard";
import { useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ExamPage = () => {
  const data = [
    {
      _id: "63fa5d203390caf05411d521",
      total: 8,
      id: 1,
      name: "English",
      logo: "https://4.bp.blogspot.com/-59mKGUm2lzA/XMEufd6mNoI/AAAAAAAAAco/15nrLpxcarkFdDLP78FxOFf8JDcmHv9MQCLcBGAs/s1600/bcs%2Benglish.jpg",
      questions: [
        {
          question: "Rice is ___Noun",
          options: ["common ", "proper", "collective", "material"],
          correctAnswer: "material",
        },

        {
          question: 'which of the following words not similar to "school"?',
          options: ["flock", "herd", "college", "pack"],
          correctAnswer: "college",
        },
        {
          question: "Which one is not parts of speech?",
          options: ["noun", "pronoun", "gerund", "pack"],
          correctAnswer: "pack",
        },
        {
          question: "which one is not abstract noun?",
          options: ["Movement", "Wise", "Theft", "Deth"],
          correctAnswer: "Wise",
        },
      ],
      topic: "Noun",
    },
  ];

  const numberCount = useAppSelector(
    (state) => state.examNumberCalculation.answeredQuestion
  );

  const [answered, setAnswered] = useState(0);

  // stored answered option for checking correct anser
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  // console.log(answeredQuestion);

  let serial = 0;

  const router = useRouter();
  const handleSubmit = () => {
    if (!numberCount || numberCount === 0) {
      return toast.error("Please answer questions first");
    }
    router.push("/exam/result");
  };

  return (
    <div className="my-5">
      <h2 className=" text-center">
        Take a Quiz about : <span className="text-success"> abcd</span>{" "}
      </h2>

      <div>
        {
          // quizDetails.data.questions.map(question => {
          data[0]?.questions?.map((question, index) => {
            serial++;
            return (
              <SingleQuizCard
                key={index}
                serial={serial}
                question={question}
                setAnsweredQuestion={setAnsweredQuestion}
                answeredQuestion={answeredQuestion}
                answered={answered}
                setAnswered={setAnswered}
              ></SingleQuizCard>
            );
          })
        }
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleSubmit}
          className="text-center bg-[#013a63] text-white font-semibold px-10 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ExamPage;
