import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";

const Projects = () => {
  const theme = useSelector((store) => store.Toggle.theme);

  // Define the deeper brown and dark content background colors consistent with About & Contact
  const darkMainBg = "#4E3C2B"; // Approximate deeper brown
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
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Things I’ve Built to Leave My Mark on the Tech Universe
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-serif leading-relaxed
            ${theme ? "text-[#E0E0E0]" : "text-gray-700"}`}
        >
          Over the years, I’ve crafted a diverse range of projects—from sleek
          front-end interfaces to full-stack web. Each project reflects my
          commitment to creating seamless, user-friendly experiences with clean,
          efficient code. Many of these projects are open-source and available
          for anyone to explore, contribute to, or build upon. If any of my work
          sparks your interest, I invite you to dive into the code, share your
          ideas, or suggest improvements. I believe collaboration is key to
          growth and innovation, and I’m always excited to connect with fellow
          developers, exchange feedback, and push boundaries together.
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