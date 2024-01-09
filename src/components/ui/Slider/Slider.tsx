"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import bcsPreparationTips from "@/assets/images/BCS Preliminary Preparation Tips.jpg";
import Image from "next/image";

function Arrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const TeachersCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    pauseOnHover: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "Bcs Preparation",
      image: bcsPreparationTips,
      LearningObjective: "Bcs preleminary multiple choise question",
      Topic: "BCS",
    },
    {
      id: 1,
      title: "Bcs Preparation",
      image: bcsPreparationTips,
      LearningObjective: "Bcs preleminary multiple choise question",
      Topic: "BCS",
    },
    {
      id: 1,
      title: "Bcs Preparation",
      image: bcsPreparationTips,
      LearningObjective: "Bcs preleminary multiple choise question",
      Topic: "BCS",
    },
    {
      id: 1,
      title: "Bcs Preparation",
      image: bcsPreparationTips,
      LearningObjective: "Bcs preleminary multiple choise question",
      Topic: "BCS",
    },
  ];
  return (
    <div id="projects" className="mx-10 py-24">
      <div className="flex flex-col justify-center items-center my-5 ">
        <h6 className="font-sans  text-black text-3xl font-bold uppercase mb-2  ">
          Top Teachers Courses
        </h6>
        <h6
          style={{ lineHeight: "12px" }}
          className="  text-green-700 text-lg  my-2  "
        >
          Here Are Top Teachers Courses, Checkout Them
        </h6>
      </div>

      <Slider {...settings}>
        {projects?.map((project, i) => (
          <div key={i} className="px-2 cursor-pointer">
            <div
              id="projects"
              className="relative flex w-full md:min-h-[200px] max-w-[18rem] flex-col rounded-lg bg-gray-50 bg-clip-border text-gray-700 shadow-lg border"
            >
              <Link href={`/projects/${project?.id}`}>
                <div className="relative  h-[220px]  overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <div className="flex justify-center  rounded overflow-hidden w-full">
                    <Image
                      src={project?.image}
                      width={200}
                      height={990}
                      alt="pic"
                      // layout="responsive"
                      className="transition-all duration-1000 transform hover:-translate-y-72 ease-out"
                    ></Image>
                  </div>
                </div>
              </Link>
              <div className="">
                <div className="my-1 flex items-center justify-start">
                  <h5 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-black antialiased">
                    {i + 1}. {project.title}
                  </h5>
                </div>
                <div className="my-1 flex items-center justify-start">
                  <h5 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-black antialiased">
                    {project.Topic}
                  </h5>
                </div>
              </div>

              <div className="mx-5 flex justify-center items-center">
                <Link href={`/page-details`}>
                  <button className="w-44 font-sans font-bold p-1   bg-black text-white mb-4">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center my-8">
        <button
          className=" select-none rounded bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default TeachersCourses;
