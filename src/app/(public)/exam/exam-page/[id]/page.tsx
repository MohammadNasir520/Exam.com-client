"use client";
import React, { useState } from "react";

// import "./Quiz.css";

// import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import SingleQuizCard from "@/components/ui/cards/SingleQuizCard/SingleQuizCard";

const Quiz = () => {
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
          correctAnswer: "proper",
        },

        {
          question: 'which of the following words not similar to "school"?',
          options: ["flock", "herd", "college", "pack"],
          correctAnswer: "college",
        },
        {
          question: "Which one is not parts of speech?",
          options: ["noun", "pronoun", "gerund", "pack"],
          correctAnswer: "gerund",
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

  const [answered, setAnswered] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [wrongAnsCount, setWrongAnsCount] = useState(0);

  const result = { answered, correctAnsCount, wrongAnsCount };

  // stored answered option for checking correct anser
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  console.log(answeredQuestion);

  let serial = 0;

  return (
    <div>
      <h2>
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
                correctAnsCount={correctAnsCount}
                setCorrectAnsCount={setCorrectAnsCount}
                wrongAnsCount={wrongAnsCount}
                setWrongAnsCount={setWrongAnsCount}
              ></SingleQuizCard>
            );
          })
        }
      </div>
      <Link href="">
        <button className="btn btn-primary">Submit</button>
      </Link>
    </div>
  );
};

export default Quiz;
