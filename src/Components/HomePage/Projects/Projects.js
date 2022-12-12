import React, { useEffect, useState } from "react";
import s2 from "../../../Assets/s2.png"
import s3 from "../../../Assets/s3.png"
import s4 from "../../../Assets/s4.png"

import ProjectDetails from "./ProjectDetails";
const Projects = () => {
    const [projects, setProject] = useState([]);

    useEffect(()=>{
        fetch('https://portfolio-omega-six-52.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])

  return (
    <div className="grid justify-center lg:px-36 px-10 mb-16 mt-5">
        <h1 id="projects" className="text-4xl text-center my-5">Projects</h1>
        <div data-aos="zoom-in-up" className="grid  lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 ">
      {projects.map(project => <ProjectDetails key={project.projectId} project={project}> </ProjectDetails>)}
    </div>
    </div>
  );
};

export default Projects;
