import React from "react";
import github from "../assets/github.png";
import linkdin from "../assets/linkdin.png";
import instagram from "../assets/instagram.png";
import ProjectsContainer from "./ProjectsContainer";
import { useSelector } from "react-redux";
import profile from "../assets/yup.png";
import profile1 from "../assets/hey.png";
import Certifications from "./Certifications";
import { certificationsData } from "../Utils/projectData";

const Home = () => {
  const theme = useSelector((store) => store.Toggle.theme);
  const num = Math.floor(Math.random() * 10);
  // Define main background and text colors consistent across all components (from Body)
  const darkMainBg = "#333"; // Deeper brown
  const lightMainBg = "#F9F5EF"; // Creamy off-white/beige
  const darkMainText = "#F4EDE4"; // Creamy off-white for dark mode text
  const lightMainText = "#3E3A36"; // Dark brownish-gray for light mode text

  // Define content background for blocks (like About/Contact inner sections)
  const darkContentBg = "#292826"; // Dark gray for content area

  return (
    <>
      <div
        className={`min-h-screen px-4 py-8 transition-colors duration-500
          ${
            theme
              ? `bg-gradient-to-br from-[${darkMainBg}] to-[#111] text-[${darkMainText}]`
              : `bg-gradient-to-br from-[${lightMainBg}] to-[#fff] text-[${lightMainText}]`
          }
          flex flex-col items-center justify-center`}
      >
        {/* Main Home Content Grid Wrapper */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 font-serif">
          {/* Left Content (Text and Social Links) */}
          <div className="md:col-span-7 flex flex-col justify-center p-4 sm:p-6 md:p-0">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 mb-4 animate-[pulse_3s_infinite]">
              Hi 👋, I’m Jayasuriya – front‑end wizard & occasional CSS magician!
            </h1>
            <p
              className={`text-base sm:text-lg font-semibold italic my-5 pointer-events-none
                ${theme ? "text-amber-200" : "text-amber-700"}`}
            >
              {
                "< Every site I touch tells a story — with code, caffeine, and questionable jokes. />"
              }
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
              I’m a front-end developer who turns caffeine and curiosity into
              clean, maintainable interfaces. My toolkit includes React.js,
              Redux, and Tailwind CSS, plus a healthy dose of stubbornness when it
              comes to fixing bugs. I love making apps that feel fast, look
              sharp, and work beautifully on phones, tablets, or whatever
              futuristic device you can think of. When I’m not debugging, I’m
              probably building another Netflix clone just because I can – ask me
              about it, I dare you.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Jayasuriya-R"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  className={`w-12 h-12 rounded-full p-2 transition-all duration-200 transform hover:scale-110
                    ${
                      theme
                        ? "bg-[#A47551] hover:bg-[#C8A97E]"
                        : "bg-[#D9B382] hover:bg-[#C9973E]"
                    }`}
                  src={github}
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jayasuriya-r/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {" "}
                {/* Updated href to your LinkedIn */}
                <img
                  className={`w-12 h-12 rounded-lg p-2 transition-colors duration-200
                    ${
                      theme
                        ? "bg-[#A47551] hover:bg-[#C8A97E]"
                        : "bg-[#D9B382] hover:bg-[#C9973E]"
                    }`}
                  src={linkdin}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {" "}
                {/* Placeholder for Instagram, update yourusername */}
                <img
                  className={`w-12 h-12 rounded-xl p-2 transition-colors duration-200
                    ${
                      theme
                        ? "bg-[#A47551] hover:bg-[#C8A97E]"
                        : "bg-[#D9B382] hover:bg-[#C9973E]"
                    }`}
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          
          <div className="md:col-span-5 mt-10 md:mt-0 flex justify-center md:justify-end items-center p-4 sm:p-6 md:p-0">
            <img
              className="w-full max-w-sm rounded-2xl shadow-lg shadow-pink-400/50 transform transition-transform duration-500 hover:scale-105"
              src={num > 5 ? profile1 : profile} // Using placeholder image for now
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Section for ProjectsContainer */}
      <div
        className={`px-4 py-8 transition-colors duration-500 flex flex-col items-center
          ${
            theme
              ? `bg-[${darkMainBg}] text-[${darkMainText}]` // Maintain background consistency
              : `bg-[${lightMainBg}] text-[${lightMainText}]`
          }`}
      >
        <div className="w-full max-w-6xl mx-auto">
          {" "}
          {/* This ensures the ProjectsContainer is centered and max-width aligned */}
          <ProjectsContainer />
        </div>
        <div className="w-full px-4 sm:px-8 lg:px-16 py-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center tracking-tight">
            Certifications
          </h1>
          <hr className="my-4 mx-auto w-10/12 border-t-4 border-gray-300 rounded-full" />

          <div className="flex flex-col gap-6">
            {certificationsData.map((x, index) => (
              <Certifications key={index} data={x} isDarkMode={theme} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
