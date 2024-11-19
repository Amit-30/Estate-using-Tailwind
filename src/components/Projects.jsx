import React, { useEffect, useRef, useState } from 'react'
import { projectsData } from '../assets/assets'

function Projects() {

  const projectRef = useRef()
  
  const handleWheel = (e) => {
    if(window.innerWidth>=640){
        e.preventDefault();
        projectRef.current.scrollLeft += e.deltaY;
    }
    
  }
  useEffect(()=>{
    projectRef.current.addEventListener('wheel', handleWheel)

    return () => projectRef.current.removeEventListener('wheel', handleWheel);
  },[])

  return (
    <div 
    className='w-full container mx-auto my-28 pt-10 py-4 px-6 md:px-20 lg:px-32 overflow-hidden'
    id='Projects'>
        
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
        
        <p className='text-gray-600 text-center max-w-80 mb-8 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>


        {/* Project slider container */}

        <div
        ref={projectRef} 
        className='overflow-x-scroll no-scrollbar'>
            <div 
            className='flex gap-1 transition-transform duration-500 ease-in-out sm:gap-8'
            >
                {projectsData.map((project)=>(
                    <div 
                    key={project.title}
                    className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title}
                        className='mb-14' />

                        <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                            
                            <div className=' bg-white w-3/4 px-2 py-2 shadow-md text-center'>
                                <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                <p className='text-sm text-gray-500'>{project.price} | {project.location}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects