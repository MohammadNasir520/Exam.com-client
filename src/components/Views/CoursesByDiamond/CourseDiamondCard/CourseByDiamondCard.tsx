import Image from "next/image";
import React from "react";
import math from "@/assets/images/math.jpeg";
import Link from "next/link";

const CourseByDiamondCard = ({
  courseDiamondData,
}: {
  courseDiamondData: any;
}) => {
  const { title, totalTopic, totalQuestion, id } = courseDiamondData;

  return (
    <Link href={`/exam/topics/${id}`}>
      <div className=" h-[120px] w-[300px]   border  bg-[#f6fff8] rounded-sm flex  cursor-pointer ">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={math} height={160} width={140} alt="math pic"></Image>
        </div>
        <div className="w-1/2 text-[#012a4a]  p-2">
          <h1 className="  text-center font-bold text-lg"> {title}</h1>
          <p className="font-semibold">Topic: {totalTopic}</p>
          <p className="font-semibold">Questions: {totalQuestion}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseByDiamondCard;
