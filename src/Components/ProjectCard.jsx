import React from "react";
import { useSelector } from "react-redux";

const ProjectCard = ({ projData }) => {
  const theme = useSelector((store) => store.Toggle.theme);

  // Define colors consistent with the overall theme
  // These are for the card's background and text, so they should be 'content' colors
  const darkCardBg = "#3B3A36"; // Similar to the experience card in About, or a slightly lighter darkContentBg
  const darkCardText = "#F4EDE4"; // Creamy off-white for main text
  const darkCardHoverBg = "#4A4945"; // Slightly lighter for hover effect

  const lightCardBg = "#FFF8F0"; // Creamy off-white for light card background
  const lightCardText = "#3E3A36"; // Dark brownish-gray for main text
  const lightCardHoverBg = "#F0E8D8"; // Slightly darker for hover effect

  return (
    <div className="m-3 flex justify-center">
      <div
        className={`w-full sm:w-[22rem] md:w-[25rem] h-auto cursor-pointer rounded-3xl p-6 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg
          ${
            theme
              ? `bg-[${darkCardBg}] text-[${darkCardText}] hover:bg-[${darkCardHoverBg}]`
              : `bg-[${lightCardBg}] text-[${lightCardText}] hover:bg-[${lightCardHoverBg}]`
          }
        `}
      >
        {/* Tech Icons */}
        <div className="flex flex-wrap mb-3">
          {projData.technologies?.map((tech, index) => (
            <img
              key={index}
              className="w-8 h-8 mr-2 mb-2"
              src={tech.icon}
              alt={tech.name || "tech-icon"}
            />
          ))}
        </div>

        {/* Project Title */}
        <h1 className="py-2 font-bold font-serif text-lg">{projData.title}</h1>

        {/* Short Description */}
        <p
          className={`text-sm font-medium leading-relaxed
            ${theme ? "text-amber-200" : "text-gray-600"}`} // Keeping existing color for description
        >
          {projData.shortDesc}
        </p>

        {/* View Project Link */}
        <div className="mt-4 text-center">
          <a
            href={projData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors
              ${
                theme
                  ? "text-amber-300 hover:text-amber-200" // Consistent amber for links
                  : "text-amber-700 hover:text-amber-800" // Consistent amber for links
              }`}
          >
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=48&id=3245&format=png"
              alt="external-link"
            />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;