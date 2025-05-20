import React from "react";
import img from "../assets/coverImg.png";
import acc from "../assets/Accenture-Logo.png";

import { projectData } from "../Utils/projectData";
const About = () => {
  console.log(projectData.technologies);
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-5">
        <img className="h-8/12 w-10/12 rounded-lg" src={img} />
        <div className="flex mt-[5%] ml-5">
          {projectData[1].technologies?.map((x) => {
            return <img className="w-25 h-25 mr-3" src={x.icon} />;
          })}
        </div>
        <div className="text-center w-10/12 mt-5">
          <a href="/Jayasuriya_Resume_2025.pdf" download>
            <button className="px-3 py-2 border-2 font-medium text-lg border-purple-600 rounded-full hover:bg-purple-600 hover:text-white">
              Check out my resume
            </button>
          </a>
        </div>
      </div>
      <div className="col-span-7">
        <h1 className="font-bold text-5xl w-10/12 my-[3%]">
          "I’m Jayasuriya, coding from the heart of Coimbatore"
        </h1>
        <div className="ml-8 my-[3%] w-8/12 h-[16rem] border-2 border-gray-200 rounded-3xl">
          <div>
            <img
              className="w-8 h-8 inline mt-3 mb-4 ml-6"
              src="https://img.icons8.com/?size=48&id=ltnGW6hH3LJQ&format=png"
            />
            <span className="ml-4 mt-3 text-lg font-bold text-gray-600">
              Work
            </span>
          </div>
          <div className="mt-[7%] ml-[3%] flex">
            <div className="p-2 w-14 h-14 ml-4 bg-white shadow-2xl rounded-full">
              <img src={acc} className="w-10 h-10 " />
            </div>
            <div className="font-bold text-gray-600 text-lg ml-2">
              <span>Acenture</span>
              <div className="flex ">
                <p className="font-light">Associate Software Engineer</p>
                <span className="font-semibold ml-10 text-gray-400">
                  2025 - present
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-serif w-10/12 text-gray-700 my-[5%]">
          I've had the opportunity to work on diverse projects during my time at
          Accenture, where I contributed to building and maintaining
          enterprise-level applications with a focus on performance,
          scalability, and user experience. Alongside my professional journey,
          I've also developed several personal projects — from web apps to UI
          experiments — that reflect my passion for clean code and modern
          design. Many of these personal projects are open-source and available
          for others to explore or contribute to. If you're interested, feel
          free to dive into the code, share feedback, or suggest improvements. I
          believe in continuous learning through collaboration and am always
          open to new ideas, challenges, and ways to grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
