import React from 'react';
import {assets} from '../assets/assets';

function Footer() {
  return (
    <div 
    className='w-full pt-10 px-6 md:px-20 lg:px-32 bg-gray-900 overflow-hidden'
    id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full mb-8 md:w-1/3 md:mb-0'>
              <img src={assets.logo_dark} alt="" />
              <p className='text-gray-400 mt-4'>Estate is an online platform where real estate trade is taking place in a much faster and newer manner.</p>
            </div>
            <div className='w-full mb-8 md:w-1/5 md:mb-0'>
              <h3 className='text-white text-xl font-bold mb-4'>Company</h3>
              <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Projects" className='hover:text-white'>Projects</a>
                <a href="#Testimonials" className='hover:text-white'>Testimonials</a>
              </ul>
            </div>
            <div className='w-full md:w-1/3'>
              <h3 className='text-white text-xl font-bold mb-4'>Subscribe to our Newslettera</h3>
              <p className='text-gray-400 mt-4 max-w-80'>The latest news, articles & resources, sent to your inbox </p>
              <div className='flex gap-2 mt-2'>
                <input type="email" placeholder='Email' 
                className='p-2 rounded border border-gray-700 bg-gray-800 text-gray-400 w-full md:w-auto focus:outline-none'/>
                <button className='py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-500'>Subscribe</button>
              </div>
            </div>
        </div>
        <div className='text-center border-t border-gray-700 mt-10 py-4 text-gray-400'>
          Copyright 2024 &copy; Estate. All rights reserved
        </div>
    </div>
  )
}

export default Footer