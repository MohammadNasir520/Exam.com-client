"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { data } from "@/FakeData/fakedata";
import { useDispatch } from "react-redux";
import SelectedQuestionSlice, { setSelectQuestions } from "@/redux/features/SelectedQuestionSlice";
import { useAppSelector } from "@/redux/hooks";

const ExamPage = () => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  console.log(selectedOptions);
  const dispatch = useDispatch();


  const router = useRouter();
  const handleSubmit = () => {
    // if (!numberCount || numberCount === 0) {
    //   return toast.error("Please answer questions first");
    // }
    router.push("/exam/result");
  };

  // access fake data
  const Quiz: any = data;

  // dispatch(setSelectedOptions( {QId: QId, OpId: OpId} ))
  const handleOptionSelect = (QId: number, OpId: number) => {
    dispatch(setSelectQuestions({ QId, OpId }));
    setSelectedOptions((prev: any[]) => [
      ...prev.filter((option) => option.QId !== QId),
      { QId, OpId },
    ]);
  };

  const isSelected = (QId: number, OpId: string) =>
    selectedOptions.some(
      (option) => option.QId === QId && option.OpId === OpId
    );

  const isDisabled = (QId: number) =>
    selectedOptions.some((option) => option.QId === QId);

  return (
    <div className="my-5">
      <h2 className="text-center">
        Take a Quiz about: <span className="text-success"> {Quiz?.title}</span>
      </h2>

      <div>
        {Quiz?.questions?.map((question: any, index: number) => {
          return (
            <div
              key={question.QId}
              className="border p-4 shadow-md my-9 md:mx-10 rounded"
            >
              <p className="text-black text-center">
                {index + 1}. {question?.question}
              </p>

              <div className="grid grid-cols-2">
                {question.options?.map((option: any, i: number) => {
                  const optionSelected = isSelected(question.QId, option.OpId);
                  const optionDisabled = isDisabled(question.QId);

                  return (
                    <div
                      key={i}
                      onClick={() =>
                        !optionDisabled &&
                        handleOptionSelect(question.QId, option.OpId)
                      }
                      className={`${
                        optionSelected
                          ? "bg-slate-700 text-white"
                          : "text-slate-700"
                      } ${
                        optionDisabled ? "cursor-not-allowed" : "cursor-pointer"
                      } 
                      w-11/12 lg:w-4/5 my-2 mx-auto relative ${
                        !optionDisabled && "hover:bg-slate-700 hover:text-white"
                      } bg-[#35b9f760] font-poppins border-2 border-slate-100 
                      rounded p-2.5 flex justify-center items-center shadow-md`}
                    >
                      <div className="flex items-center gap-2 text-start">
                        <div className="h-6 w-6 bg-white flex items-center justify-center rounded-full p-2">
                          <p className="text-black">
                            {String.fromCharCode(97 + i)}{" "}
                            {/* 'a', 'b', 'c', 'd', etc. */}
                          </p>
                        </div>
                        <p>{option.option}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
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
