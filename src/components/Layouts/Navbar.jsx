import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30'>
        <div className='container mx-auto flex items-center justify-between px-4'>
            <Link to="/dashboard" className='ml-6'>
             <h2 className='text-lg md:text-xl font-medium text-purple-600 leading-5'>
                PrepMate
             </h2>
             </Link>
           
           <div className='mr-6'>
             <ProfileInfoCard/>
             </div>
        </div>
    </div>
  )
}

export default Navbar