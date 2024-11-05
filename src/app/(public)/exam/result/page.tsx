"use client";
import React from "react";

import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const Result = () => {
  const selectedQuestion = useAppSelector((state) => state.selectedQuestions.selectedOptions);

  console.log(selectedQuestion); 
  const selectedOptions2 = useAppSelector((state) => state.selectedQuestions.selectedOptions);
  console.log(selectedOptions2);

  console.log("hello")
  // const answeredQuestion = number?.answeredQuestion;
  // const correctAnsCount = number?.correctAnswer;
  // const wrongAnsCount = number?.wrongAnswer;
  // const negetiveMark = wrongAnsCount * 0.5;
  // const finalMarks = correctAnsCount - negetiveMark;
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div
        style={{
          background: "white",
          height: "75vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className=" flex justify-center items-center flex-col space-y-3">
          <h3 className="text-2xl">
            {/* You have Answered : {answeredQuestion} questions */}
          </h3>
          <div className="results text-2xl ">
            <div className="mt-3 bg-cyan-600 text-white font-bold">
              <h6 className=" text-center py-4 px-3">
                {/* correct: {correctAnsCount} */}
              </h6>
            </div>
            <div className="mt-3 bg-cyan-600 text-white font-bold">
              {/* <h6 className=" text-center py-4 px-3">Wrong: {wrongAnsCount}</h6> */}
            </div>
            <div className="mt-3 bg-cyan-600 text-red-200 font-bold">
              <h6 className=" text-center py-4 px-3">
                {/* Negative: {wrongAnsCount} x .50= {negetiveMark} */}
              </h6>
            </div>
          </div>
          <h5
            // className={
            //   finalMarks < 0
            //     ? "text-red-500 font-bold  text-2xl "
            //     : "text-green-500 font-bold  text-2xl "
            // }
          >
            {/* Final Marks: {finalMarks} */}
          </h5>

          <div>{selectedOptions2[0]?.OpId}</div>

          <Link href={`/exam/correct-answer-page/`}>
            <button className="bg-[#013A63] text-white p-2">
              See correct Answer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
