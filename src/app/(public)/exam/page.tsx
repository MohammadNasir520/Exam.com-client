"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import math from "@/assets/images/math.jpeg";
import { Button } from "antd";
import Link from "next/link";

const ExamTopics = () => {
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
          question: "which one is corrective",
          options: [
            "Kazi Nazrul Islam is the Shelly of Bangladesh",
            "Kazi Nazrul Islam is the Shelly of the Bangladesh",
            "Kazi Nazrul Islam is a Shelly of Bangladesh",
            "Kazi Nazrul Islam is a Shelly of the Bangladesh",
          ],
          correctAnswer: "Kazi Nazrul Islam is the Shelly of Bangladesh",
        },
        {
          question:
            "The Charity of Hatem Tai is known to all. here charity ___Noun",
          options: ["material", "Common", "abstract", "common"],
          correctAnswer: "Common",
        },
        {
          question:
            'He is a justice of  the high court. Here "justice" is a/an ____ noun.',
          options: ["abstract", "material", "proper", "common"],
          correctAnswer: "common",
        },
        {
          question: "Drive the nail into the table. here nail is_____ noun",
          options: ["Proper", "common", "collective", "abstract"],
          correctAnswer: "common",
        },
        {
          question: "The rice of Dinajpur is fine. rice is _____noun",
          options: ["proper", "common", "collective", "material"],
          correctAnswer: "common",
        },
        {
          question:
            'Our class consists of twenty Here "public" is an example of   ',
          options: [
            "Common noun",
            "Proper noun",
            "collective noun",
            "Abstract noun",
          ],
          correctAnswer: "Common noun",
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
        {
          question: 'what type of noun is "freedom"?',
          options: ["proper", "abstract", "collective", "common"],
          correctAnswer: "abstract",
        },
        {
          question:
            "They praised the honesty of the girl. here honesty is ____ noun",
          options: ["material", "abstract", "common", "proper"],
          correctAnswer: "common",
        },
        {
          question: 'The word "infant" is a _____ noun.',
          options: ["Proper", "commin", "material", "collective"],
          correctAnswer: "commin",
        },
      ],
      topic: "Noun",
    },
  ];
  return (
    <Link href={`/exam-topics/`}>
      <div className=" h-[120px] w-[300px]     bg-[#f6fff8] rounded-sm flex  cursor-pointer ">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={math} height={160} width={140} alt="math pic"></Image>
        </div>
        <div className="w-1/2 text-gray-500 p-2">
          <h1 className="  text-center font-bold text-lg "></h1>
          <p className="font-semibold">Topic: </p>
          <p className="font-semibold">Questions: </p>
        </div>
      </div>
    </Link>
  );
};

export default ExamTopics;
