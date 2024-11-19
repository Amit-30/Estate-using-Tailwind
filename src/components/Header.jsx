import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div 
     id='Header'
     className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
     style={{backgroundImage: "url('/header_img.png')"}}
    >
        <Navbar/>
        
        <div className='container mx-auto text-center text-white py-4 px-6 md:px-20 lg:px-32'>
            
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore Homes that fits your Dreams</h2>

            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded hover:bg-gray-500'>Projects</a>
                <a href="#Contact" className='bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
            
        </div>
    </div>
  )
}

export default Header