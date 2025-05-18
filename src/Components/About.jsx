import React from "react";
import img from "../assets/coverImg.png";
import acc from "../assets/Accenture-Logo.png";
import { tailwind,react,js,redux } from "../Utils/constants";

const About = () => {
    
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-5">
        <img className="h-8/12 w-10/12 rounded-lg" src={img} />
        <div className="flex mt-[5%]">
          <div className="px-2">
            <img className="w-25 h-25" src={react} />
          </div> 
          <div className="px-2">
            <img className="w-25 h-25" src={js}/>
          </div>
          <div className="px-2">
            <img className="w-25 h-25" src={redux}/>
          </div>
          <div className="px-2">
            <img className="w-25 h-25" src={tailwind}/>
          </div>
           
        </div>
      </div>
      <div className="col-span-7">
        <h1 className="font-bold text-6xl w-10/12 my-[3%]">
          I’m Tharindu N. I live in Sri Lanka, where I design the future.
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
          I've worked on a variety of projects over the years and I'm proud of
          the progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>
    </div>
  );
};

export default About;
