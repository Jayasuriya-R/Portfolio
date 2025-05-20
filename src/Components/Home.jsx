import React from "react";
import github from "../assets/github.png";
import linkdin from "../assets/linkdin.png";
import instagram from "../assets/instagram.png";
import Contact from "./Contact";
import ProjectsContainer from "./ProjectsContainer";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 mb-[8%] font-serif">
        <div className="col-span-7">
          <h1 className="font-bold text-6xl mt-[6%] mb-4">
            Hi👋, I’m a Front-End Developer
          </h1>
          <p className="text-lg font-bold font-serif text-gray-400 my-5">
           { "< Every website is a story — crafted with code, designed with passion,and brought to life through innovation./>"}
          </p>
          <p className="text-2xl font-serif text-gray-700 mb-[5%]">
            I am a front-end developer with expertise in React.js and modern web
            technologies. I have hands-on experience in building responsive,
            scalable, and user-centric web applications using frameworks like
            React, Redux, and libraries like Tailwind CSS. I enjoy translating
            complex ideas into seamless, intuitive user interfaces. With a
            strong focus on clean code, reusability, and performance, I strive
            to create high-quality front-end solutions that align with industry
            standards.
          </p>
          <div className="flex">
            <img
              className="w-15 h-15 mx-2 rounded-full bg-gray-200 hover:bg-gray-300"
              src={github}
            />
            <img
              className="w-15 h-15 mx-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              src={linkdin}
            />
            <img
              className="w-15 h-15 mx-2 bg-gray-200 rounded-xl hover:bg-gray-300"
              src={instagram}
            />
            
          </div>
        </div>

        <div className="col-span-5 mt-[10%] ml-[5%]">
          <img
            className="w-10/12 h-10/12 rounded-2xl"
            src="https://reactfolio.tharindu.dev/homepage.jpg"
          />
        </div>
      </div>
      <div lassName="flex">
        <ProjectsContainer />
      </div>
    </>
  );
};

export default Home;
