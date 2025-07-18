import React from "react";
import img from "../assets/coverImg.png";

import { useSelector } from "react-redux";
import { projectData } from "../Utils/projectData";

const About = () => {
  const theme = useSelector((store) => store.Toggle.theme);

  // Define the deeper brown and dark content background colors
  const darkMainBg = "#333"; // Approximate deeper brown
  const darkContentBg = "#292826"; // Dark gray for content area

  return (
    <div
      className={`px-4 py-8 transition duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 ${
        theme
          ? `bg-[${darkMainBg}] text-[#F4EDE4]` // Updated dark earthy theme
          : "bg-[#F9F5EF] text-[#3E3A36]" // Light earthy theme (no change here)
      }`}
    >
      {/* Left Column */}
      <div className="md:col-span-5 flex flex-col items-center">
        <div
          className={`rounded-lg w-full max-w-md shadow-md ${
            theme ? `bg-[${darkContentBg}] p-6` : "bg-white p-6"
          }`}
        >
          <img className="rounded-lg w-full" src={img} alt="Profile" />
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          {projectData?.[1]?.technologies?.map((x, i) => (
            <img key={i} className="w-12 h-12" src={x.icon} alt={`tech-${i}`} />
          ))}
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a href="/Jayasuriya_Resume_2025.pdf" download>
            <button
              className={`px-4 py-2 rounded-full border-2 font-medium text-lg transition-all
                ${
                  theme
                    ? "border-amber-400 text-amber-300 hover:bg-amber-300 hover:text-[#2F2E2C]"
                    : "border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                }`}
            >
              Check out my resume
            </button>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-7">
        <div
          className={`${
            theme
              ? `bg-[${darkContentBg}] rounded-3xl shadow-md p-6`
              : "bg-[#FFF8F0] rounded-3xl border shadow-md p-6"
          }`}
        >
          <h1 className="font-bold text-3xl sm:text-4xl mb-6">
            "I’m Jayasuriya, coding from the heart of Coimbatore"
          </h1>

          {/* Experience Card */}
          <div
            className={`ml-1 mb-6 p-6 rounded-3xl border shadow-md ${
              theme
                ? "bg-[#3B3A36] border-[#5C5B57]"
                : "bg-[#FFF8F0] border-[#E0D3C2]"
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                className="w-7 h-7 mr-3"
                src="https://img.icons8.com/?size=48&id=ltnGW6hH3LJQ&format=png"
                alt="work"
              />
              <span className="text-lg font-bold">Work</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white dark:bg-[#292826] p-2 rounded-full shadow-md">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png"
                  className="w-full h-full object-contain"
                  alt="Accenture"
                />
              </div>
              <div>
                <span className="font-bold">Accenture</span>
                <div className="text-sm text-gray-400 dark:text-gray-300">
                  Associate Software Engineer
                  <span className="ml-4 text-gray-400">2023 - 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Paragraph */}
          <p className="text-lg leading-relaxed">
            During my time at Accenture, I’ve had the opportunity to contribute
            to a range of enterprise-level applications, focusing on building
            scalable and performant front-end solutions using technologies like
            React.js, Redux, and Tailwind CSS. My work has centered on enhancing
            user experience, improving application performance, and delivering
            modular, maintainable code. These experiences have strengthened my
            ability to solve complex problems while maintaining a user-centric
            approach to development.
            <br />
            <br />
            Alongside my professional work, I’ve developed several personal
            projects that showcase my enthusiasm for modern web development.
            These include fully functional clones of platforms like Netflix,
            YouTube, and Swiggy, where I applied best practices in responsive
            design, clean component architecture, and intuitive UI/UX. These
            projects not only reflect my technical capabilities but also my
            passion for continuous learning and building polished, real-world
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
