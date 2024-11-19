import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

function Testimonials() {
  return (
    <div 
    className='w-full container mx-auto my-20 py-4 px-6 overflow-hidden'
    id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
        <p className='text-gray-600 text-center max-w-80 mb-8 mx-auto'>Real Stories from those who found Home with Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((test)=>(
                <div 
                key={test.name}
                className='text-center max-w-80 border px-8 py-12 shadow-lg rounded'>
                    <img className='w-20 h-20 rounded-full mb-4 mx-auto' src={test.image} alt={test.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{test.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{test.title}</p>
                    <div className='flex justify-center gap-1 mb-4'>
                        {Array.from({length: test.rating}, (item,index)=>(
                            <img key={index} src={assets.star_icon} alt="stars" />
                        ))}
                        {/*  alternate code
                        {Array.from({length: test.rating}, ()=>(
                            <img key={test.name} src={assets.star_icon} alt="stars" />
                        ))} */}
                    </div>
                    <p className='text-gray-600'>{test.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials