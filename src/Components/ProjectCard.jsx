import React from "react";

const ProjectCard = ({projData}) => {
    
  return (
    <div className="m-3">
      <div className="w-[25rem] h-[20rem] cursor-pointer hover:bg-gray-100 rounded-3xl p-4">
        <div className="flex">
           
    { projData.technologies?.map((x)=>{
       return (
        <img
          className="w-10 h-10 mr-2"
          src={x.icon}
        />)})
    }
        </div>
        <h1 className="py-3 my-3 font-bold font-serif text-lg">{projData.title}</h1>
      <p className="text-gray-500 font-semibold ">
        {projData.shortDesc}
      </p>
      <div className="my-4 text-center hover:text-teal-500 cursor-pointer">
      <img className="w-7 h-7 inline " src="https://img.icons8.com/?size=48&id=3245&format=png"/>
      <a href={projData.liveUrl}><span>View project</span></a>
      </div>
      </div>
       
    </div>
  );
};

export default ProjectCard;
