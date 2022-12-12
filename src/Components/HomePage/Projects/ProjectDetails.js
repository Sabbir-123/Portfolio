import React from 'react';
import { Link, NavLink } from "react-router-dom";
const ProjectDetails = ({project}) => {
    return (
        <div>
        <div key={project.projectId}>
          <div  className="card rounded-lg border card-compact w-80 w- bg-base-100 shadow-lg shadow-gray-200">
            <figure data-aos="fade-up" className='m-3 p-3 rounded-lg border shadow-md shadow-white'>
              <img className='rounded  shadow-md shadow-white' src={project.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.projectName}</h2>
              <h2 className="text-lg">Category: {project.projectCat}</h2>
              <h2 className="text-md">{project.details[1]}</h2>
              <div className="card-actions justify-center">
                <button className="btn rounded-xl  btn-primary shadow-xl shadow-gray-700"> <Link to={`project/${project._id}`} >Details</Link></button>
                <button className="btn rounded-xl  btn-primary shadow-xl shadow-gray-700"> <a href={project.liveLink} >Live Demo</a></button>
                <button className="btn rounded-xl  btn-primary shadow-xl shadow-gray-700"> <a href={project.gitLink} >GitHub</a></button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ProjectDetails;