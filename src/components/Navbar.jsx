import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

function Navbar() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() =>{
    if (showMobileMenu) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return ()=>{
        document.body.style.overflow = 'auto';
    }
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            
            <img src={assets.logo} alt="estate-logo" />
        
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className=' hover:text-gray-300 cursor-pointer '>Home</a>
                <a href="#About" className=' hover:text-gray-300 cursor-pointer'>About</a>
                <a href="#Projects" className=' hover:text-gray-300 cursor-pointer'>Projects</a>
                <a href="#Testimonials" className=' hover:text-gray-300 cursor-pointer'>Testimonials</a>    
            </ul>
            
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

            <img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={()=>setShowMobileMenu(prev=>!prev)}/>
        
        </div>
        {/* Mobile-Menu right-0*/}
        <div className={`md:hidden ${showMobileMenu ? ' w-full fixed' : 'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}>
            
            <div className='flex justify-end p-6'>
                <img src={assets.cross_icon} alt="" className='w-6 cursor-pointer' onClick={()=>setShowMobileMenu(prev=>!prev)}/>
            </div>
            
            <ul className='flex flex-col items-center p-5 mt-5 text-lg font-medium'>
                {/*inline block & rounded-full in a tag */}
                <a onClick={()=>setShowMobileMenu(prev=>!prev)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=>setShowMobileMenu(prev=>!prev)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>setShowMobileMenu(prev=>!prev)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=>setShowMobileMenu(prev=>!prev)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar