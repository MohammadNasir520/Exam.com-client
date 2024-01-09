"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import "./SingleQuizCard.css";
import React from "react";
import { useState } from "react";
import {
  answeredQuestionCount,
  correctAnsweredCount,
  wrongAnsweredCount,
} from "@/redux/slices/examNumberSlices/examNumberSlieces";

const SingleQuizCard = ({
  question,
  serial,
  setAnsweredQuestion,
  answeredQuestion,
  answered,
  setAnswered,
}: {
  question: any;
  serial: any;
  setAnsweredQuestion: any;
  answeredQuestion: any;
  answered: any;
  setAnswered: any;
}) => {
  const [disabled, setDisabled] = useState(false);
  const correctAnswer = question?.correctAnswer;

  const dispatch = useAppDispatch();

  const handleOption = (anseredQestion: any) => {
    setAnsweredQuestion([...answeredQuestion, { question, anseredQestion }]);

    setDisabled(true);

    if (anseredQestion) {
      setAnswered(answered + 1);
      dispatch(answeredQuestionCount());
    }
    if (anseredQestion === correctAnswer) {
      console.log("correct answer", correctAnswer);
      return dispatch(correctAnsweredCount());
    } else if (anseredQestion !== correctAnswer) {
      return dispatch(wrongAnsweredCount());
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="my-10 w-full  md:w-4/5   border  bg-[#A9D6E5] ">
        <div className="questions text-center">
          {serial}.{question.question}
        </div>

        <div className="options-container">
          {question?.options?.map((option: any, index: number) => (
            <div key={index} className={` md:text-xl lg:text-base rounded`}>
              <input
                type="radio"
                name={`question-${serial}`}
                id={`option-${serial}-${index}`}
                disabled={disabled ? true : false}
                onClick={() => {
                  handleOption(option);
                }}
              />
              <label htmlFor={`option-${serial}-${index}`}>{option} </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleQuizCard;
