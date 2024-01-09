"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import math from "@/assets/images/math.jpeg";
import { Button } from "antd";
import Link from "next/link";

const ExamTopics = () => {
  const data = [
    {
      id: 1,
      name: "React",
      logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
      total: 8,
    },
    {
      id: 2,
      name: "JavaScript",
      logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
      total: 9,
    },
    {
      id: 4,
      name: "CSS",
      logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
      total: 8,
    },
    {
      id: 5,
      name: "Git",
      logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
      total: 11,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-3 mt-8">
      {data?.map((topic) => (
        <div key={topic?.id}>
          <Link href={`/exam/exam-page/${topic?.id}`}>
            <div className=" h-[120px] w-[300px]     bg-[#e5f4fa] rounded-sm flex  cursor-pointer ">
              <div className="w-1/2 flex justify-center items-center">
                {/* <img
                  src={topic?.logo}
                  height={160}
                  width={140}
                  alt="math pic"
                ></img> */}
              </div>
              <div className="w-1/2 text-gray-500 p-2">
                <h1 className="  text-center font-bold text-lg "></h1>
                <p className="font-semibold">Topic: </p>
                <p className="font-semibold">Questions: </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExamTopics;
