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

  return (
    <div className="h-[90px] w-[250px]   border  bg-[#a9d6e5] rounded-sm ">
      <div>
        <Image src={math} height={120} width={120} alt="math pic"></Image>
      </div>
      <div>
        <h1 className=" text-white"> {title}</h1>
      </div>
    </div>
  );
};

export default FreeExamTopicCard;
