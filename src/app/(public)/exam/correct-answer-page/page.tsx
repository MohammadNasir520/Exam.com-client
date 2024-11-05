"use client";

import React, { useState } from "react";
import "./CorrectAnswer.css";
import { useAppSelector } from "@/redux/hooks";
import { data } from "@/FakeData/fakedata";
import { FaCheck } from "react-icons/fa";

const CorrectAnswer = () => {
  const selectedOptions = useAppSelector(
    (state) => state.selectedQuestions.selectedOptions
  );

  const [isCorrect, setIscorrect] = useState<any>("");

  const Quiz: any = data;

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        Here are the Correct Answers
      </h1>

      <div>
        {Quiz?.questions?.map((question: any, index: number) => {
          const selectedOption = selectedOptions.find(
            (option) => option.QId === question.QId
          );
          const selectedOpId = selectedOption?.OpId; // Get the OpId of the selected option

          return (
            <div
              key={question.QId}
              className="border p-4 shadow-md my-9 md:mx-10 rounded"
            >
              <p className="text-black text-center">
                {index + 1}. {question?.question} {isCorrect && "correct"}
              </p>

              <div className="grid grid-cols-2 gap-9 my-5">
                {question.options?.map((option: any, i: number) => {
                  const isCorrect = option.OpId === question.correctAnswer;
                  // setIscorrect(isCorrect)
                  const isSelected = selectedOpId === option.OpId;

                  // Determine the background color based on the selected answer
                  let bgColor = "";
                  if (isSelected) {
                    // Selected option handling
                    if (isCorrect) {
                      bgColor = "bg-green-900"; // Correct answer selected
                    } else {
                      bgColor = "bg-red-700"; // Wrong answer selected
                    }
                  } else if (isCorrect) {
                    bgColor = "bg-green-500"; // Correct answer not selected
                  } else {
                    bgColor = "bg-[#35b9f760]"; // Default background color for unselected options
                  }

                  return (
                    <div
                      key={i}
                      className={`${bgColor} gap-7 font-poppins border-2 border-slate-100 rounded p-2.5 flex justify-center items-center shadow-md`}
                    >
                      {isSelected && isCorrect && (
                        <div className="h-5 w-5 bg-white flex rounded-full items-center justify-center bg-transparent ">
                          <FaCheck />
                        </div>
                      )}
                      {isSelected && !isCorrect && (
                        <div className="h-5 w-5 bg-white flex rounded-full items-center justify-center bg-transparent ">
                        X
                        </div>
                      )}
                      {option.option}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CorrectAnswer;
