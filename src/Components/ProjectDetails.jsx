import React from "react";
import { projectData } from "../Utils/projectData";
import github from '../assets/github.png'
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { projId } = useParams();
  const numericId = parseInt(projId, 10);

  const project = projectData.find((p) => p.id === numericId);

  if (!project) {
    return <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>;
  }

  return (
    <div className="flex font-serif">
      <div className="flex-row w-7/12">
        <div className=" font-bold text-4xl w-9/12 mb-3">
          <h1>{project.title}</h1>
        </div>
        <div className="flex my-3">
          <img className="w-10/12 h-80" src={project.coverImg} />
        </div>
        <div className="font-bold text-3xl font-serif flex my-5">
          <div className="py-1">Technologies used -</div>
          <div className="flex px-3">
            {project.technologies?.map((x, idx) => (
              <img key={idx} className="w-10 h-10 mr-2" src={x.icon} />
            ))}
          </div>
        </div>
        <div className="text-2xl text-gray-500 my-3 w-[80rem]">
          <p>{project.detailedDesc}</p>
        </div>
      </div>

      <div className="my-9 w-[30rem]">
        <h1 className="font-bold text-3xl my-3">Features</h1>
        {project.features.map((i, idx) => (
          <li key={idx} className="text-xl pb-1">{i}</li>
        ))}
        <h1 className="my-4 font-extrabold text-lg">{project.efficiency}</h1>

        <div className="my-4 text-center flex items-center">
          <img className='w-15 h-15 mx-2 rounded-full bg-gray-200 hover:bg-gray-300' src={github}/>    
          <img className="w-7 h-7 inline" src="https://img.icons8.com/?size=48&id=3245&format=png" />
          <a href={project.liveUrl}><span className=" hover:text-teal-500 cursor-pointer">View project</span></a>
        </div>
      </div>
    </div>
  );
};


export default ProjectDetails;
