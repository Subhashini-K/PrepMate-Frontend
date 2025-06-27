import React, { useState } from 'react'

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import {LuSparkles} from 'react-icons/lu'
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import Modal from '../components/Modal';

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
    <div className='bg-gradient-to-br from-[#eabde6] via-[#f5d5ef] to-[#ffedfa]'>
      <div className='w-full min-h-full '>
      <div className='w-[500px] h-[500px] bg-[#F7CFD8]/20 blur-[65px] absolute top-0 left-0' />

      <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
        {/* Header */}
         <header className='flex justify-between items-center mb-16'>
          <div className='text-5xl text-[#4B164C] font-bold'>
            PrepMate
          </div>
          <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#4B164C] hover:text-grey border border-white transition-colors cursor-pointer' onClick={() => setOpenAuthModal(true)} > 
            Login / Sign Up
          </button>
         </header>

         {/* Hero Content */}
         <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:md-0'>
            <div className='flex items-center justify-left mb-2'>
              <div className='flex items-center gap-2 text-[13px] text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full border border-black-300 '>
                <LuSparkles /> AI powered
              </div>
            </div>

            <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>
              Ace Interviews with <br/>
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#4B164C_1%,_#D69ADE_100%)] bg-[length:200%_200%] animate-text-shine font-semibold'> 
                AI-Powered
                </span> {" "}
              Learning
            </h1>
          </div>

          <div className='w-full md:w-1/2'>
            <h2 className='text-[17px] text-black-100 mr-0 md:mr-20 mb-6'>
              Get role-specific questions, expand answers when you need them, 
              dive deeper into concepts, and organize everything your way. 
              From preparation to mastery - your ultimate interview toolkit is here.
            </h2>

            <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#4B164C] hover:text-grey border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer' onClick={handleCTA}>
              Get Started
            </button>
          </div>
         </div>
      </div>
      </div>

      <div className='w-full min-h-full relative z-10 '>
        <div>
          <section className='flex items-center justify-center -mt-36'>
            <img 
             src={HERO_IMG} 
             alt="Hero Image" 
             className='w-[80vw] rounded-lg'
             />
          </section>
        </div>

        <div className='w-full min-h-full mt-10'>
          <div className='container mx-auto px-4 pt-10 pb-20'>
            <section className='mt-5'>
              <h2 className='text-3xl font-medium text-center mb-12'>
                Features That Make You Shine
              </h2>

              <div className='flex flex-col items-center gap-8'>
                {/* First 3 cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                  {APP_FEATURES.slice(0,3).map((feature) => (
                    <div 
                      key={feature.id}
                      className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-[#7F55B1]-100 transition border border-amber-100'
                      >
                     <h3 className='text-[#4B164C] font-bold mb-3'>
                      {feature.title}
                     </h3>
                     <p className='text-gray=600'>
                      {feature.description}
                     </p>
                </div>
                 ))}
              </div>

              {/* Remaining 2 cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {APP_FEATURES.slice(3).map((feature) => (
                  <div 
                   key={feature.id}
                   className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                   >
                    <h3 className='text-base font-semibold mb-3'>
                      {feature.title}
                    </h3>
                    <p className='text-gray=600'>
                      {feature.description}
                    </p>
              </div>
               ))}
          </div>
        </div>
        </section>
      </div>
    </div>

   <div className='text-m text-secondary text-center p-5 mt-5'>
    Made with ❤️💜 from Subhashini
   </div>
   </div>
      <Modal 
       isOpen={openAuthModal}
       onClose={()=> {
        setOpenAuthModal(false);
        setCurrentPage("login");
       }}
       hideHeader
       >
        <div>
          {currentPage === "login" && (
           <Login setCurrentPage={setCurrentPage}/>
           )}
           {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
           )}
        </div>
       </Modal>
   </div>

    </>
  );
};

export default LandingPage