import React from "react";
import github from "../assets/github.png";
import linkdin from "../assets/linkdin.png";
import instagram from "../assets/instagram.png";
import ProjectsContainer from "./ProjectsContainer";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((store) => store.Toggle.theme);

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
              ? `bg-[${darkMainBg}] text-[${darkMainText}]`
              : `bg-[${lightMainBg}] text-[${lightMainText}]`
          }
          flex flex-col items-center justify-center`}
      >
        {/* Main Home Content Grid Wrapper */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 font-serif">
          {/* Left Content (Text and Social Links) */}
          <div className="md:col-span-7 flex flex-col justify-center p-4 sm:p-6 md:p-0">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 mb-4">
              Hi👋, I’m a Front-End Developer
            </h1>
            <p
              className={`text-base sm:text-lg font-semibold italic my-5
                ${theme ? "text-amber-200" : "text-amber-700"}`} 
            >
              {"< Every website is a story — crafted with code, designed with passion, and brought to life through innovation. />"}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
              I am a front-end developer with expertise in React.js and modern web
              technologies. I have hands-on experience in building responsive,
              scalable, and user-centric web applications using frameworks like
              React, Redux, and libraries like Tailwind CSS. I enjoy translating
              complex ideas into seamless, intuitive user interfaces. With a
              strong focus on clean code, reusability, and performance, I strive
              to create high-quality front-end solutions that align with industry
              standards.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/Jayasuriya-R" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> {/* Updated href to your GitHub */}
                <img
                  className={`w-12 h-12 rounded-full p-2 transition-colors duration-200
                    ${
                      theme
                        ? "bg-[#A47551] hover:bg-[#C8A97E]" // Dark theme social icon background
                        : "bg-[#D9B382] hover:bg-[#C9973E]" // Light theme social icon background
                    }`}
                  src={github}
                  alt="GitHub"
                />
              </a>
              <a href="https://www.linkedin.com/in/jayasuriya-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* Updated href to your LinkedIn */}
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
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> {/* Placeholder for Instagram, update yourusername */}
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

          {/* Right Content (Image) */}
          <div className="md:col-span-5 mt-10 md:mt-0 flex justify-center md:justify-end items-center p-4 sm:p-6 md:p-0">
            <img
              className="w-full max-w-sm rounded-2xl shadow-lg shadow-[#C9973E]/50"
              src="https://reactfolio.tharindu.dev/homepage.jpg" // Using placeholder image for now
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
        <div className="w-full max-w-6xl mx-auto"> {/* This ensures the ProjectsContainer is centered and max-width aligned */}
          <ProjectsContainer />
        </div>
      </div>
    </>
  );
};

export default Home;