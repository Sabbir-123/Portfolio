import React from 'react';

const Skills = () => {

    const skills = [
        {
            skillName: 'HTML-5',
            percent : '95%'
        },
        {
            skillName: 'CSS-3',
            percent : '95%'
        },
        {
            skillName: 'Bootstrap',
            percent : '90%'
        },
        {
            skillName: 'Tailwind CSS',
            percent : '90%'
        },
        {
            skillName: 'React.js',
            percent : '90%'
        }
    ]
    const otherSkills = [
        {
            skillName: 'Java Script',
            percent : '80%'
        },
        {
            skillName: 'Node.js',
            percent : '70%'
        },
        {
            skillName: 'Express.js',
            percent : '70%'
        },
        {
            skillName: 'MongoDB',
            percent : '70%'
        },
        {
            skillName: 'JWT',
            percent : '50%'
        }
    ]
    return (
        <div id='skills'  className='lg:px-36 px-10 mb-16 mt-5'>
            <div>
                <h1 className='text-4xl text-center font-semibold  '>Skills</h1>
          </div>
            <div className=" grid  md:grid-cols-2 gap-7 mt-5 mb-8">

                <div className='md:w-11/12 ' data-aos="fade-right" data-aos-duration="2000">
                    <h3 className='mt-5 mb-8 text-2xl font-semibold   lg:text-start text-center'>Front-End Skill</h3>
                    {
                        skills.map((skill, index) => <div
                            key={index}
                            className='mb-3'
                        >
                            <p className='my-2 monoster-fonts text-md '> {skill.skillName}</p>
                            <div class="w-full  bg-gray-700 rounded-full ">
                                <div class=" p-2  bg-gradient text-xs font-medium bg-gray-300  text-center  leading-none rounded-l-full" style={{ width: `${skill.percent}` }}> <p className='flex  justify-end mr-5'>{skill.percent}</p> </div>
                            </div>
                        </div>)
                    }
               </div>
                <div className='md:w-11/12 mb-3 lg:mx-auto' data-aos="fade-left" data-aos-duration="2000">
                    <h3 className='mt-5 mb-8 text-2xl font-semibold   text-center lg:text-start '>Backend Skills</h3>
                    {
                        otherSkills.map((skill, index) => <div
                            key={index}
                            className='mb-3'
                            >
                            <p className='my-2 monoster-fonts text-md   '> {skill.skillName}</p>
                            <div class="w-full bg-gray-700 rounded-full">
                                <div class=" p-2 bg-gradient text-xs font-medium  bg-gray-300 text-center  leading-none rounded-l-full" style={{ width: `${skill.percent}` }}> <p className='flex justify-end mr-5 text-black text-md '>{skill.percent}</p> </div>
                            </div>
                        </div>)
                    }
                </div>

               
            </div>
       </div>
    );
};

export default Skills;