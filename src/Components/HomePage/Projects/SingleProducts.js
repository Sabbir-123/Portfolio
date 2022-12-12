import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleProducts = () => {
    const projectDetails = useLoaderData();
    const {_id, projectId, img, projectName, projectCat, liveLink, gitLink, details, screenshot} = projectDetails;
    return (
        <div className='grid justify-center lg:px-36 px-10 mb-16 mt-5'>
             <h2 className="card-title  text-4xl">{projectName}</h2>
      <div className="grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 card card-side  border p-4 rounded-lg first-line: shadow-xl shadow-slate-600">
      <div>
      <img className='rounded-xl p-4 flex shadow-md  shadow-white h-96 w-96' src={img} alt="Movie"/>
      </div>
  
  <div className="card-body flex-1">
   
    <p>Category: {projectCat}</p>
    {
        details.map(sd=><ol>
            <li>
                - {sd}
            </li>
        </ol>)
    }
    <div className="card-actions justify-end">

                <button className="btn rounded-xl  btn-primary shadow-xl shadow-gray-700"> <a href={liveLink} >Live Demo</a></button>
                <button className="btn rounded-xl  btn-primary shadow-xl shadow-gray-700"> <a href={gitLink} >GitHub</a></button>
    </div>
    
  </div>
</div>
<div className='shadow-md shadow-white border mt-5 rounded-lg' >
    <h1 className='mt-2 text-center'>For Full View Press on Picture</h1>
<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 '>
<PhotoProvider>
{
        screenshot.map((ss,i)=><div className='grid'>
     <figure data-aos="fade-up" className='m-3 p-3 '>
   <PhotoView src={ss}>
   <img className='rounded-xl p-4 flex shadow-md shadow-white h-96 w-96' src={ss} alt="Movie"/>
   </PhotoView>
    </figure>
        </div>)
    }
</PhotoProvider>
</div>
</div>
</div>
       
    );
};

export default SingleProducts;