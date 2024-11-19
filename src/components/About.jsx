import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div
     id='About'
     className='w-full container flex flex-col items-center mx-auto p-14 md:px-20 lg:px-32 overflow-hidden'
    >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
        </h1>
        
        <p className='text-gray-600 text-center max-w-80 mb-8'>Passionate About Properties, Dedicated To Your Vision</p>
        
        <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20'>
            
            <img src={assets.brand_img} alt="" className='max-w-sm sm:w-1/2'/>
            
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
                {/* 2xl:pr */}
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full lg:pr-28'>
                    <div >
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>15+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                
                <p className='my-10 max-w-lg'>Estate is an online platform where real estate trade is taking place in a much faster and newer manner. We not just help you with finding the ideal real estate, but also ensure that your buying journey is as smooth as it can be. We understand that while buying or renting a property, there are a lot of factors to be taken into consideration, like the locality, preferred area, budget, amenities, and a lot more.</p>

                <button className='bg-blue-600 hover:bg-blue-500 px-8 py-2 rounded text-white'>Learn More</button>
            </div>

        </div>

    </div>
  )
}

export default About