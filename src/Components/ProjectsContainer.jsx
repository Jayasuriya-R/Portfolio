import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Utils/projectData";
import { Link } from "react-router-dom";

const ProjectsContainer = () => {
  return (
    <div className="flex flex-wrap">
      {projectData.map((x) => {
        return (
          <Link to={`/projectdetails/${x.id}`} key={x.id}>
            <ProjectCard projData={x} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsContainer;
