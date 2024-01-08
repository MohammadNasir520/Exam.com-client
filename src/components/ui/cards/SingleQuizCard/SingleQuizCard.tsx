"use client";

import { useAppDispatch } from "@/redux/hooks";
import "./SingleQuizCard.css";
import React from "react";
import { useState } from "react";
import { answeredQuestionCount } from "@/redux/slices/examNumberSlices/examNumberSlieces";

const SingleQuizCard = ({
  question,
  serial,
  setAnsweredQuestion,
  answeredQuestion,
  answered,
  setAnswered,
  correctAnsCount,
  setCorrectAnsCount,
  wrongAnsCount,
  setWrongAnsCount,
}: {
  question: any;
  serial: any;
  setAnsweredQuestion: any;
  answeredQuestion: any;
  answered: any;
  setAnswered: any;
  correctAnsCount: any;
  setCorrectAnsCount: any;
  wrongAnsCount: any;
  setWrongAnsCount: any;
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
      return setCorrectAnsCount(correctAnsCount + 1);
    } else if (anseredQestion !== correctAnswer) {
      return setWrongAnsCount(wrongAnsCount + 1);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="my-10 w-full  md:w-4/5   border  bg-red-50 ">
        <div className="questions text-center">
          {serial}.{question.question}
        </div>

        <div className="options-container">
          {question?.options?.map((option: any, index: number) => (
            <div key={index} className=" md:text-xl lg:text-base rounded">
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
