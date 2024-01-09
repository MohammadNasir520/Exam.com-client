import React from "react";

import "./CorrectAnswer.css";

const CorrectAnswer = () => {
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

  return (
    <div>
      <h1 className="text-center font-bold text-2xl"> Correct Answer</h1>
      {data[0]?.questions?.map((question: any, i: number) => (
        //single question
        <div className="flex justify-center items-center flex-col " key={i}>
          <div className="border border-primary m-3 my-10 w-full  md:w-4/5     bg-[#A9D6E5] px-4  ">
            {/* question text */}
            <p className="questions text-center"> {question.question}</p>

            <div className="grid md: grid-cols-2 gap-3">
              {/* options mapping */}
              {question?.options?.map((option: any, i: number) => (
                <div className="" key={i}>
                  <p
                    className={`${
                      question.correctAnswer === option
                        ? "bg-green-600 text-white"
                        : "text-black-500 bg-white"
                    }  option bg-white `}
                  >
                    {option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CorrectAnswer;
