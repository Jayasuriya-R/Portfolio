import React from "react";
import { useSelector } from "react-redux"; // Added for theme
import { useParams, Link } from "react-router-dom"; // Added Link for Project Not Found page
import { projectData } from "../Utils/projectData";
import github from '../assets/github.png'; // Make sure this path is correct

const ProjectDetails = () => {
  const { projId } = useParams();
  const numericId = parseInt(projId, 10);
  const theme = useSelector((store) => store.Toggle.theme); // Get theme from Redux

  // Define colors consistent with the overall theme
  // These should ideally be defined in your tailwind.config.js for cleaner class names
  // But keeping them here as per your "no need to add any other stuffs" request.
  const darkMainBg = "#333";
  const lightMainBg = "#F9F5EF";
  const darkMainText = "#F4EDE4";
  const lightMainText = "#3E3A36";
  const darkContentBg = "#292826";
  const lightContentBg = "#FFF8F0";
  const darkAccentText = "text-amber-300"; // For links/highlights
  const lightAccentText = "text-amber-700";
  const darkHoverAccentText = "hover:text-amber-200";
  const lightHoverAccentText = "hover:text-amber-800";

  const project = projectData.find((p) => p.id === numericId);

  // Styled Project Not Found message - made theme-responsive
  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-serif
          ${theme ? `bg-[${darkMainBg}] text-[${darkMainText}]` : `bg-[${lightMainBg}] text-[${lightMainText}]`}`}
      >
        <div
          className={`p-6 sm:p-10 rounded-3xl shadow-lg text-center
            ${theme ? `bg-[${darkContentBg}]` : `bg-[${lightContentBg}]`}`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className={`${theme ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            The project you are looking for does not exist.
          </p>
          {/* Added a link back to projects page for better UX */}
          <p className={`${theme ? 'text-gray-300' : 'text-gray-700'} text-lg mt-2`}>
            Go back to <Link to="/projects" className={`${theme ? darkAccentText : lightAccentText} underline`}>Projects</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    // Main container for the details page - responsive and theme-aware
    <div
      className={`min-h-screen p-4 sm:p-6 md:p-8 font-serif flex justify-center items-start pt-20 sm:pt-24 md:pt-28
        ${theme ? `bg-[${darkMainBg}] text-[${darkMainText}]` : `bg-[${lightMainBg}] text-[${lightMainText}]`}`}
    >
      {/* Central content wrapper for fixed width and centering */}
      <div className={`w-full max-w-6xl mx-auto rounded-3xl shadow-lg p-4 sm:p-6 md:p-8
        ${theme ? `bg-[${darkContentBg}]` : `bg-[${lightContentBg}]`}`}>

        {/* This div was 'flex-row w-7/12'. Changed to flex-col for mobile, lg:flex-row for desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8"> {/* Added gap for spacing between columns */}

          {/* Left Column - Main Content (Title, Image, Technologies, Detailed Description) */}
          {/* Originally 'w-7/12'. Made it flex-grow on small, and 2/3 on large */}
          <div className="flex-grow lg:w-2/3">
            {/* Title - Originally 'font-bold text-4xl w-9/12 mb-3' */}
            <div className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
              <h1>{project.title}</h1>
            </div>

            {/* Cover Image - Originally 'flex my-3' and 'w-10/12 h-80' */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-auto max-h-[400px] object-cover" src={project.coverImg} alt={`${project.title} Cover`} />
            </div>

            {/* Technologies used - Originally 'font-bold text-3xl font-serif flex my-5' */}
            <div className="font-bold text-xl sm:text-2xl md:text-3xl flex flex-wrap items-center my-5">
              <div className="py-1 mr-2">Technologies used -</div>
              <div className="flex flex-wrap gap-2"> {/* Added gap for spacing between icons */}
                {project.technologies?.map((x, idx) => (
                  <img
                    key={idx}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1 border
                      ${theme ? 'border-amber-400 bg-gray-700' : 'border-amber-700 bg-gray-200'}`}
                    src={x.icon}
                    alt={x.name || `tech-icon-${idx}`}
                  />
                ))}
              </div>
            </div>

            {/* Detailed Description - Originally 'text-2xl text-gray-500 my-3 w-[80rem]' */}
            <div className={`text-base sm:text-lg md:text-xl my-3 leading-relaxed whitespace-pre-line
              ${theme ? 'text-[#E0E0E0]' : 'text-gray-700'}`}> {/* Adjusted text color for theme */}
              <p>{project.detailedDesc}</p>
            </div>
          </div>

          {/* Right Column - Features & Links */}
          {/* Originally 'my-9 w-[30rem]'. Changed to be flexible within its container. */}
          <div className={`lg:w-1/3 p-4 sm:p-6 rounded-2xl shadow-inner my-0 lg:my-0
            ${theme ? 'bg-[#3B3A36]' : 'bg-[#F0E8D8]'}`}> {/* Consistent secondary content background */}
            <h1 className="font-bold text-2xl sm:text-3xl mb-3">Features</h1>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-6">
              {project.features.map((i, idx) => (
                <li key={idx} className="text-base sm:text-lg pb-1">{i}</li>
              ))}
            </ul>
            {/* Added conditional rendering for efficiency if it exists */}
            {project.efficiency && (
              <h1 className="my-4 font-extrabold text-lg sm:text-xl">{project.efficiency}</h1>
            )}

            {/* Links Section - Originally 'my-4 text-center flex items-center' */}
            <div className="mt-6 flex flex-col space-y-4"> {/* Stack links vertically with spacing */}
              {/* GitHub Link */}
              {project.githubUrl && ( // Only show if githubUrl exists
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-full border-2 font-medium text-base sm:text-lg transition-all duration-200
                    ${
                      theme
                        ? `border-amber-400 ${darkAccentText} hover:bg-amber-300 hover:text-[${darkContentBg}]`
                        : `border-amber-700 ${lightAccentText} hover:bg-amber-700 hover:text-white`
                    }`}
                >
                  <img className='w-6 h-6 mr-2' src={github} alt="GitHub" />
                  <span>View Code on GitHub</span>
                </a>
              )}

              {/* Live Project Link */}
              {project.liveUrl && ( // Only show if liveUrl exists
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-full border-2 font-medium text-base sm:text-lg transition-all duration-200
                    ${
                      theme
                        ? `border-amber-400 ${darkAccentText} hover:bg-amber-300 hover:text-black`
                        : `border-amber-700 ${lightAccentText} hover:bg-amber-700 hover:text-white`
                    }`}
                >
                  <img className="w-6 h-6 mr-2" src="https://img.icons8.com/?size=48&id=3245&format=png" alt="External Link" />
                  <span>View Live Project</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;