import React from "react";
import another from "../../Assets/another.jpg";
import ZZ from "../../Assets/ZZ.jpg";
import LIco from "../../Assets/LIco.png";
import FIco from "../../Assets/FIco.png";
import GIco from "../../Assets/GIco.png";


const Profile = () => {
  return (
    <div>
      <div className="card-body shadow-xl shadow-gray-500">
       <div className="lg:flex">
       <div className="avatar p-10 lg:justify-end " >
          <div data-aos="zoom-out-up" className="w-36  shadow-xl  shadow-yellow-600 rounded-full ring ring-warning ring-offset-warning ring-offset-2">
            <img  src={another} alt=""/>
          </div>
        </div>
        <div className=" shadow-xl shadow-blue-900 flex-1 rounded-xl p-3 w-86 lg:w-96 bg-slate-900 App">
        <h1 data-aos="flip-down" className="text-3xl mb-2 p-2">Who am I ?</h1>
            <div className=" shadow-md shadow-gray-700 rounded-xl lg:p-6 p-3 bg-black App">
                <h1 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="lg:text-lg">I'm a very passionate MERN Developer who loves connecting with people for developing and solving things that matter. 
I enjoy coding and learning new technology, that's why it enriches my knowledge and accoutre my skills for working and adds some extra value to this Development sector. 
</h1>
                
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card-actions justify-center ">
                    <div>
                        <a href={'https://www.linkedin.com/in/sabbir-02-ahmed/'}>
                        <img className="h-12 rounded-lg" src={LIco} alt="" />
                        </a>
                        
                    </div>
                    <div>
                        <a href={'https://github.com/Sabbir-123'}>
                        <img className="h-12 rounded-lg" src={GIco} alt="" />
                        </a>
                        
                    </div>
                    <div>
                        <a href={'https://www.facebook.com/sabbir.97.ahmed/'}>
                        <img className="h-12 rounded-lg" src={FIco} alt="" />
                        </a>
                        
                    </div>
      <div>
      <a
          href={
            "https://drive.google.com/file/d/1-9a-pMDrNwNwoZlDfxYDcVKZ-ntMdP6V/view?usp=share_link"
          }
          className="btn btn-primary btn-md rounded-xl"
        >
          Resume
        </a>

       
      </div>
      
      </div>
            </div>
           
        </div>
       </div>
      
      </div>

      
    </div>
  );
};

export default Profile;
