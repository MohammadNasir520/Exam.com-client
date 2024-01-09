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
                <div className="relative    overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white ">
                  <div className="flex justify-center  rounded w-full">
                    <Image
                      src={project?.image}
                      width={200}
                      height={300}
                      alt="pic"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </Link>
              <div className="px-3">
                <div className="my-1 flex items-center justify-start">
                  <h5 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-black antialiased">
                    {i + 1}. {project.title}
                  </h5>
                </div>
                <div className="my-1 flex items-center justify-start">
                  <h5 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-black antialiased">
                    Topic: {project.Topic}
                  </h5>
                </div>
              </div>

              <div className="mx-5 flex justify-center items-center">
                <Link href={`/page-details`}>
                  <button className="inline-flex items-center my-4 bg-[#2A6F97] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center my-8">
        <button className="inline-flex items-center  bg-[#6ebcea] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
          See All
        </button>
      </div>
    </div>
  );
};

export default TeachersCourses;
