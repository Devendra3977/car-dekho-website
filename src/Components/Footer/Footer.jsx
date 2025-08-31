import React from "react";
import { FaCarSide, FaFacebook, FaInstagram, FaLinkedin, FaTags, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { RiCarLine } from "react-icons/ri";
import appStoreImg from '../../assets/images/appstore.png'
import playStoreImg from '../../assets/images/playstore.avif'
import bikeDekhoLogo from '../../assets/images/bikedekho.svg'
import ruppyLogo from '../../assets/images/footer-rupyyLogo.svg'
import zigWheelsLogo from '../../assets/images/footer-zwLogo.svg'
import insuranceDekhoLogo from '../../assets/images/footer-IdLogo.svg'
import revvLogo from '../../assets/images/Revv_Logo.svg'
import logo from '../../assets/images/logo.svg';
import MobileFooter from "../MobileFooter/MobileFooter";

const Footer = () => {
  return (<>
    <footer className="hidden md:block">
      <div className="h-auto w-full py-6 px-0 lg:px-[9vw] flex flex-wrap justify-between items-center py-10 border-t border-gray-300 ">
        <div className="flex flex-row justify-center items-center gap-1 ">
          <div>
            <FiAward className="text-5xl text-gray-700"/>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">India's # 1</h1>
            <p className="text-base text-gray-400">Largest Auto portal</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div>
            <FaCarSide  className="text-5xl text-gray-700"/>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">Car Sold</h1>
            <p className="text-base text-gray-400">Every 4 minutes</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div>
            <FaTags  className="text-5xl text-gray-700"/>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">Offers</h1>
            <p className="text-base text-gray-400">Stay updated pay less</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div>
            <RiCarLine  className="text-5xl text-gray-700"/>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">Compare</h1>
            <p className="text-base text-gray-400">Decode the right car</p>
          </div>
        </div>
      </div>
      <div>
        {/*main footer */}
        <div className="h-auto w-full py-6 px-0 lg:px-[9vw] flex flex-wrap justify-between py-10 border-t border-b border-gray-300">
            <div className="flex flex-col justify-start  gap-1 text-gray-400 text-sm gap-2 w-1/4">
               <p className="text-gray-800 font-semibold mb-3">ABOUT CARDEKHO</p>
               <p className="cursor-pointer">About</p>
               <p className="cursor-pointer">Careers With Us</p>
               <p className="cursor-pointer">Terms & Conditions</p>
               <p className="cursor-pointer">Privacy Policy</p>
               <p className="cursor-pointer">Corporate Policies</p>
               <p className="cursor-pointer">Investors</p>
               <p className="cursor-pointer">FAQs</p>
            </div>
            <div className="flex flex-col gap-1 items-start text-gray-400 text-sm gap-2 w-1/4">
               <p className="text-gray-800 font-semibold mb-3">CONNECT WITH US</p>
               <p className="cursor-pointer">Feedback</p>
               <p className="cursor-pointer">Contact Us</p>
               <p className="cursor-pointer">Advertise with Us</p>
               <p className="cursor-pointer">Become Partner Dealer</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 text-gray-400 text-sm gap-2 w-1/4">
               <p className="text-gray-800 font-semibold mb-3">OTHERS</p>
               <p className="cursor-pointer">TrucksDekho</p>
               <p className="cursor-pointer">TyreDekho</p>
               <p className="cursor-pointer">TractorsDekho</p>
               <p className="cursor-pointer">Ginar Vision Fund</p>
               <p className="cursor-pointer">Emergency Response</p>
               <p className="cursor-pointer">Car Sales Trends</p>
            </div>
             <div className="flex flex-col gap-1 justify-start items-start text-gray-400 text-sm gap-2 w-1/4">
               <p className="text-gray-800 font-semibold mb-3">EXPERIENCE CARDEKHO APP</p>
               <div className="flex flex wrap gap-4 mb-6">
                <img src={appStoreImg} alt="footer images" className="cursor-pointer"/>
                <img src={playStoreImg} alt="footer images" className="cursor-pointer"/>
               </div>
               <p className="text-gray-800 font-semibold mb-2">CARDEKHO GROUP VENTURES</p>
               <div className="flex flex-wrap gap-4">
                <img src={bikeDekhoLogo} alt="footer images" className="cursor-pointer"/>
                <img src={ruppyLogo} alt="footer images" className="cursor-pointer"/>
                <img src={zigWheelsLogo} alt="footer images" className="cursor-pointer"/>
                <img src={insuranceDekhoLogo} alt="footer images" className="cursor-pointer"/>
                <img src={revvLogo} alt="footer images" className="cursor-pointer"/>
               </div>
            </div>
        </div>
        {/* copyright section */}
        <div className="h-auto w-full py-6 px-0 lg:px-[9vw] flex flex-wrap justify-between py-5">
            <div>
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} CarDekho. All rights reserved.</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-xl">
                <h2 className=" text-base font-bold">Connect: </h2>
                <FaFacebook className="cursor-pointer"/>
                <FaInstagram className="cursor-pointer"/>
                <FaTwitter className="cursor-pointer"/>
                <FaYoutube className="cursor-pointer"/>
                <FaLinkedin className="cursor-pointer"/>
            </div>
        </div>
      </div>
    </footer>
    {/* mobile footer starts from here */}
    <footer className="block md:hidden">
     <div className="w-full py-6 px-[6vw] border-b border-gray-400">
        <img src={logo} alt="" className="h-7"/>
        <div className="flex justify-start items-center gap-5 text-xl py-4">
                <FaFacebook className="cursor-pointer"/>
                <FaInstagram className="cursor-pointer"/>
                <FaTwitter className="cursor-pointer"/>
                <FaYoutube className="cursor-pointer"/>
                <FaLinkedin className="cursor-pointer"/>
        </div>
        <p>suppot@cardekho.com</p>
     </div>
     <MobileFooter/>
      <div className="w-full py-6 px-[6vw] border-t border-b border-gray-400">
        <h3 className="text-base">Download CarDekho App</h3>
        <span className="text-gray-400 text-sm">10M+ downloads. 4.6 star rating</span>
        <div className="flex flex wrap gap-3 mb-2 mt-3">
                <img src={appStoreImg} alt="footer images" className="cursor-pointer"/>
                <img src={playStoreImg} alt="footer images" className="cursor-pointer"/>
        </div>
     </div>
     <p className="py-6 text-center text-gray-400 text-sm">© {new Date().getFullYear()} CarDekho. All rights reserved.</p>
    </footer>
    </>
  );
};

export default Footer;
