import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

const TopTeacherCard = () => {
  return (
    <div>
      <div className="relative  cursor-pointer flex max-w-[20rem] flex-col overflow-hidden  bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5CsU8USPdbDcqWEDnE3_NWG4rEbg3NLcQQ&usqp=CAU"
            alt="teacher pic"
          />
        </div>
        <div className="p-6">
          <h4 className=" text-2xl  font-semibold  text-black">
            Mohammad Nasir
          </h4>
          <p className="mt-1  text-base   font-semibold leading-relaxed text-gray-700 flex items-center gap-1">
            <span> Math Teacher</span> <IoMdStar /> <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </p>
          <p className="mt-1    font-normal leading-relaxed text-gray-700">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-center p-6 gap-10">
          <FaFacebook className=" h-6 w-6" />
          <FaLinkedin className=" h-6 w-6" />
          <FaInstagramSquare className=" h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default TopTeacherCard;
