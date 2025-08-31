import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import leftMenuImage from "../../assets/images/leftMenuImg.svg";
import aiChatImg from "../../assets/images/aiChatImg.svg";
import { VscAccount, VscSearch } from "react-icons/vsc";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown, MdMic, MdOutlineLocationOn } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar1 = () => {
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [locationMenu, setLocationMenu] = useState(false);

  return (
    <nav>
      <div className="lg:fixed lg:top-0 lg:left-0 lg:z-100 px-[4vw] md:px-[5vw] lg:px-[9vw] lg:pt-4 pb-1 lg:py-4 w-full border-b border-gray-200 flex flex-wrap justify-between items-center bg-white">
        {/* left menu icon for mobile view */}
        <div className="flex md:hidden absolute top-4 left-5">
          <RxHamburgerMenu
            className="text-xl"
            onClick={() => {
              setOpenLeftMenu(!openLeftMenu);
            }}
          />
        </div>
        {/* right menu icon 1 for mobile view */}
        <div className="flex md:hidden absolute top-4 right-15">
          <MdOutlineLocationOn
            className="text-2xl"
            onClick={() => {
              setLocationMenu(!locationMenu);
            }}
          />
        </div>
        {/* right menu icon 2 for mobile view */}
        <div className="flex md:hidden absolute top-4 right-6">
          <VscAccount
            className="text-2xl"
            onClick={() => {
              setProfileMenu(!profileMenu);
            }}
          />
        </div>
        {/* main containt for desktop */}
        <img
          src={logo}
          alt="mian web logo"
          className="h-6 lg:h-10 mb-4 lg:mb-0 pl-8 lg:pl-0"
        />
        <div className="border border-gray-300 rounded-full overflow-hidden flex justify-center items-center">
          <select className="px-3 lg:px-5 py-2 lg:font-bold text-sm focus:outline-none border-r border-gray-300">
            <option>All</option>
            <option>New</option>
            <option>Old</option>
          </select>
          <AiOutlineSearch className="text-2xl inline mx-3" />
          <input
            type="text"
            placeholder="Search or Ask a Question"
            className="px-1 lg:px-2 py-2 focus:outline-none w-[210px] md:w-[300px] lg:w-[400px] placeholder-gray-500 placeholder:font-semibold text-sm lg:text-base"
          />
          <MdMic className="text-2xl mr-3 text-gray-400  lg:hidden" />
        </div>
        <div className="md:flex hidden flex-wrap justify-between items-center space-x-8">
          <select className="focus:outline-none underline text-sm text-gray-500">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <button className="cursor-pointer">
            <AiOutlineHeart className="text-2xl" />
          </button>
          <button className="flex justify-center items-center gap-3 cursor-pointer">
            <VscAccount className="text-xl" /> Login / Register
          </button>
        </div>
      </div>
      {/* Left Menu for Mobile view */}
      {openLeftMenu && (
        <div className="fixed inset-0 z-50">
          {/* Overlay (background) */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenLeftMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="h-screen w-[75%] bg-white absolute top-0 left-0 z-50">
            <div className="w-full py-6 pl-6 bg-blue-100">
              <img src={logo} alt="" className="h-7" />
            </div>

            <div className="flex flex-col justify-center items-center text-gray-800 py-3">
              <div className="flex flex-row justify-between items-center py-2 w-full active:bg-gray-200">
                <span className="text-xl font-semibold pl-4">New Cars</span>
                <MdArrowDropDown className="mr-4 text-3xl" />
              </div>
              <div className="flex flex-row justify-between items-center py-2 w-full active:bg-gray-200">
                <span className="text-xl font-semibold pl-4">Used Cars</span>
                <MdArrowDropDown className="mr-4 text-3xl" />
              </div>
              <div className="flex flex-row justify-between items-center py-2 w-full active:bg-gray-200">
                <span className="text-xl font-semibold pl-4">
                  News & Reviews
                </span>
                <MdArrowDropDown className="mr-4 text-3xl" />
              </div>
              <div className="flex flex-row justify-between items-center py-2 w-full active:bg-gray-200">
                <span className="text-xl font-semibold pl-4">Video</span>
                <MdArrowDropDown className="mr-4 text-3xl" />
              </div>
              <div className="flex flex-row justify-start items-center gap-2 py-2 w-full active:bg-gray-200">
                <span className="text-xl font-semibold pl-4">
                  Ask Al.CarDekho{" "}
                </span>
                <img src={aiChatImg} alt="" className="h-7" />
              </div>
            </div>

            <div className="w-full">
              <img src={leftMenuImage} alt="" className="h-auto" />
            </div>
          </div>
        </div>
      )}
      {/* right profile menu for right menu */}
      {profileMenu && (
        <div className="fixed inset-0 z-50">
          {/* Overlay (background) */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setProfileMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="h-screen w-[75%] bg-white absolute top-0 right-0 z-50">
            <div className="w-full py-4 px-4 bg-blue-100">
              <p className="text-base font-semibold">
                Login or Register for best CarDekho experience
              </p>
              <button className="px-8 py-1 mt-3 text-white bg-red-500 rounded shadow shadow-red-200 active:bg-red-400">
                Login
              </button>
            </div>

            <div className="flex flex-col justify-center items-center text-gray-800 py-3">
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">My Orders</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">Shortlisted Vehicles</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">My Activity</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">Notification</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">My Veichels</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">My Garage</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">Manage Consents</span>
              </div>
              <div className="flex flex-row justify-start items-center py-2 w-full active:bg-gray-200">
                <span className="text-base font-semibold pl-4">Settings</span>
              </div>
              <div className="flex flex-row justify-between items-center py-2 w-full">
                <span className="text-base font-semibold pl-4">Language</span>
               <div className="mr-4">
                 <select className="underline focus:outline-none">
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
               </div>
              </div>
               
            </div>
          </div>
        </div>
      )}

      {/* Right Menu for Mobile Menu */}
      {locationMenu && (
        <div className="fixed inset-0 z-50">
          {/* Overlay (background) */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setProfileMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="h-screen w-full bg-white absolute top-0 right-0 z-50 px-[4vw] pt-[50px] flex flex-col justify-start items-center">
            <p className="text-gray-600 font-semibold text-sm">
              We need your city to customize your experience
            </p>
            <input
              type="text"
              placeholder="Type your city, e.g. Jaipur, New Delhi"
              className="px-5 py-3 mt-5 w-full border focus:border-none focus:bg-blue-100 rounded placeholder:text-gray-400 active:outline-none focus:outline-none"
            />
            <div onClick={()=>setLocationMenu(!locationMenu)} className="absolute top-3 right-7 border border-gray-300 bg-gray-100 px-2 rounded ">
                <span className="text-xl">X</span>
            </div>
         
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
