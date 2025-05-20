import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";

const Projects = () => {
  return (
    <>
      <div className="w-10/12 font-serif">
        <h1 className="font-bold text-6xl my-[6%]">
          Things I’ve Built to Leave My Mark on the Tech Universe
        </h1>
        <p className="text-2xl font-serif text-gray-700 mb-[5%]">
          Over the years, I’ve crafted a diverse range of projects—from sleek
          front-end interfaces to full-stack web. Each
          project reflects my commitment to creating seamless, user-friendly
          experiences with clean, efficient code. Many of these projects are
          open-source and available for anyone to explore, contribute to, or
          build upon. If any of my work sparks your interest, I invite you to
          dive into the code, share your ideas, or suggest improvements. I
          believe collaboration is key to growth and innovation, and I’m always
          excited to connect with fellow developers, exchange feedback, and push
          boundaries together.
        </p>
      </div>
      <div className="flex ">
        <ProjectsContainer />
      </div>
    </>
  );
};

export default Projects;
