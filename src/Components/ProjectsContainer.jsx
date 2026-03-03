import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../Utils/projectData';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to pass theme down

const ProjectsContainer = () => {
  const theme = useSelector(store => store.Toggle.theme);

  // We don't define darkContentBg here as it's passed from the parent if needed by ProjectCard.
  // ProjectCard already gets the theme from its own useSelector.

  return (
    // Updated container:
    // - Removed w-screen to prevent overflow issues.
    // - Added flex-wrap and justify-center to properly arrange and center ProjectCards.
    // - Added some horizontal padding (px-4) to prevent cards from touching screen edges on small devices.
    <div className={`flex flex-wrap justify-center gap-6 p-4 md:p-6 lg:p-8 transition-colors duration-500
        ${theme ? 'bg-gradient-to-br from-[#2a2927] via-[#3b3a36] to-[#4a4843]' : 'bg-gradient-to-br from-amber-50 to-pink-50'}`}>
      {projectData.map((x) => {
        return (
          <Link to={`/projectdetails/${x.id}`} key={x.id}>
            <ProjectCard projData={x} theme={theme} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsContainer;