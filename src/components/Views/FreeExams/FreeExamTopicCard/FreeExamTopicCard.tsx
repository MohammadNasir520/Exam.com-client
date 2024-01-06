import Image from "next/image";
import React from "react";
import math from "@/assets/images/math.jpeg";

const FreeExamTopicCard = ({
  FreeExamTopicData,
}: {
  FreeExamTopicData: any;
}) => {
  const { title } = FreeExamTopicData;
  console.log(FreeExamTopicData);
  console.log(title);

  return (
    <div className=" flex  h-[120px] w-[300px]   border  bg-[#61a5c2] rounded-sm ">
      <div className="w-1/2 flex justify-center items-center">
        <Image src={math} height={160} width={140} alt="math pic"></Image>
      </div>
      <div className="w-1/2">
        <h1 className=" text-white  text-center font-bold text-lg"> {title}</h1>
      </div>
    </div>
  );
};

export default FreeExamTopicCard;
