import React, { useContext, useState } from "react";

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const year = new Date().getFullYear();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#eabde6] via-[#f5d5ef] to-[#ffedfa]">
        <div className="w-full min-h-full ">
          <div className="w-[500px] h-[500px] bg-[#F7CFD8]/20 blur-[65px] absolute top-0 left-0" />

          <div className="container mx-auto pt-6 pb-[100px] relative z-10">
            {/* Header */}
            <header className="flex justify-between items-center mb-16 border-b border-gray-400">
              <div className="text-3xl text-[#4B164C] font-bold pl-[30px]">
                <img src={logo} alt="logo" className="h-[70px]" />
              </div>

              {user ? (
                <ProfileInfoCard />
              ) : (
                <button
                  className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#4B164C] mr-[100px] hover:text-grey border border-white transition-colors cursor-pointer"
                  onClick={() => setOpenAuthModal(true)}
                >
                  Login / Sign Up
                </button>
              )}
            </header>

            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-4 mb-8 md:md-0">
                <div className="flex items-center justify-left mb-2 pl-[100px]">
                  <div className="flex items-center gap-2 text-[13px] text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full border border-black-300 ">
                    <LuSparkles /> AI powered
                  </div>
                </div>

                <h1 className="text-5xl text-black font-medium mb-6 leading-tight pl-[100px]">
                  Ace Interviews with <br />
                  <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#4B164C_1%,_#D69ADE_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                    AI-Powered
                  </span>{" "}
                  Learning
                </h1>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-[17px] text-black-100 mr-0 md:mr-20 mb-6">
                  Get role-specific questions, expand answers when you need
                  them, dive deeper into concepts, and organize everything your
                  way. From preparation to mastery - your ultimate interview
                  toolkit is here.
                </h2>

                <button
                  className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#4B164C] hover:text-grey border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                  onClick={handleCTA}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-full relative z-10 ">
          <div>
            <section className="flex items-center justify-center -mt-36">
              <img
                src={HERO_IMG}
                alt="Hero Image"
                className="w-[85vw] rounded-lg"
              />
            </section>
          </div>

          <div className="w-full min-h-full">
            <div className="container mx-auto px-4  pb-20">
              <section className="mt-5">
                <h2 className="text-3xl font-medium text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#4B164C_1%,_#D69ADE_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                    Features That Make You Shine
                  </span>
                </h2>

                <div className="flex flex-col items-center gap-8">
                  {/* First 3 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {APP_FEATURES.slice(0, 3).map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                      >
                        <h3 className="text-[#AA60C8] font-bold mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray=600">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Remaining 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {APP_FEATURES.slice(3).map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                      >
                        <h3 className="text-[#AA60C8] font-semibold mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray=600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* <div className="w-full bg-gradient-to-r from-purple-700 to-pink-500 text-white py-4 mt-10 rounded-t-2xl shadow-inner"> */}
  <div className="container mx-auto px-6 pb-7 bt-70 flex flex-col md:flex-row justify-between items-center gap-4 pt-[15px] border border-[#4B164C]">
    
    {/* Left - copyright */}
    <div className="text-lg font-semibold text-[#4B164C] ">
      © {year} PrepMate
    </div>
    
    {/* Center - made with love */}
    <div className="flex items-center gap-1 text-lg font-semibold text-[#4B164C]">
      Made with <FaHeart className="text-red-500" />{" "} by Subhashini K
    </div>
    
    {/* Right - social links */}
    <div className="flex space-x-4 text-xl">
      <a
        href="https://github.com/Subhashini-K"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#4B164C]"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/subhashinik01/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#4B164C]"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>

        <Modal
          isOpen={openAuthModal}
          onClose={() => {
            setOpenAuthModal(false);
            setCurrentPage("login");
          }}
          hideHeader
        >
          <div>
            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
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

export default LandingPage;
