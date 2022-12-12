import React from "react";

import Profile from "./Profile";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
}
const handleType = () => {
    console.log(`Done after 5 loops!`)
}
  return (
    <div>
      <div>
      <div className="App text-white">
        <h1
          className="text-5xl pt-8 pb-3 text-white"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Hi, It's Sabbir Ahmed
        </h1>
      <span data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="grid justify-center">
      <h1 className='lg:text-5xl md:text-3xl text-2xl font-semibold md:text-left'>A
                    <span className='lg:text-4xl md:text-3xl text-2xl font-semibold mt-4 top-font ml-5'>
                        <Typewriter
                            words={['Web Developer.', 'MERN Stack Developer.', 'React Developer.']}
                            loop={100}
                            cursor
                            cursorStyle='।'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                
                </h1>
      </span>
      </div>
      <div className="lg:px-36 px-10">
        <div className="card w-full border rounded-lg">
          <div className="flex">
            <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="dots-wrapper flex p-2">
              <div id="dot-1" class="browser-dot"></div>
              <div id="dot-2" class="browser-dot"></div>
              <div id="dot-3" class="browser-dot"></div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex-1">
              <ul  className="lg:flex justify-end lg:gap-4 mt-2 pr-2 mx-auto grid ">
                <li><Link to={'/'}>Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to={'/blog'}>Blog</Link></li>
              </ul>
            </div>
          </div>
          <hr />
          <Profile></Profile>
         
          
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default Navbar;
