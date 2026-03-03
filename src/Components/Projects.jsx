import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";

const Projects = () => {
  const theme = useSelector((store) => store.Toggle.theme);

  // Define the deeper brown and dark content background colors consistent with About & Contact
  const darkMainBg = "#333"; // Approximate deeper brown
  const darkContentBg = "#292826"; // Dark gray for content area

  return (
    // Main container for the Projects section
    <div
      className={`min-h-screen px-4 py-8 transition duration-300 flex flex-col items-center
        ${
          theme
            ? `bg-[${darkMainBg}] text-[#F4EDE4]` // Dark earthy theme
            : "bg-[#F9F5EF] text-[#3E3A36]" // Light earthy theme
        }`}
    >
      {/* Content wrapper for the heading and introductory paragraph */}
      <div
        className={`w-full max-w-5xl lg:max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl shadow-lg transition duration-300 text-center mb-10
          ${
            theme
              ? `bg-[${darkContentBg}] text-[#F4EDE4]`
              : "bg-[#FFF8F0] text-[#3E3A36]"
          }`}
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-amber-400 animate-[pulse_3s_infinite]">
          Projects I've Built While Pretending to Sleep
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-serif leading-relaxed
            ${theme ? "text-[#E0E0E0]" : "text-gray-700"}`}
        >
          Over the years, I’ve whipped up everything from sleek front‑end widgets to
          full-stack contraptions—mostly fueled by strong coffee and stronger
          curiosity. Each project is a playground for clean code, sharp UX, and
          maybe a few inside jokes in the comments. Most of them are open-source
          (because sharing is caring), so feel free to poke around, submit a PR,
          or just raise an eyebrow. Collaboration makes code better, so if
          anything here sparks an idea—or a critique—let’s connect and break
          stuff together (in a good way).
        </p>
      </div>

      {/* Projects Container (assuming it handles its own internal layout/responsiveness) */}
      <div className="w-full max-w-6xl"> {/* This max-w will control the grid of project cards */}
        <ProjectsContainer theme={theme} darkContentBg={darkContentBg} />
      </div>
    </div>
  );
};

export default Projects;