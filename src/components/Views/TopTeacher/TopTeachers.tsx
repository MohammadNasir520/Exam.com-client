import React from "react";
import TopTeacherCard from "./TopTeacherCard/TopTeacherCard";

const TopTeachers = () => {
  return (
    <div className="my-7 p-4">
      <div className="flex flex-col justify-center items-center my-7 ">
        <h1 className="text-2xl font-bold my-2">Top Teachers</h1>
        <p>Here are our Top Teachers</p>
      </div>
      <TopTeacherCard></TopTeacherCard>
    </div>
  );
};

export default TopTeachers;
