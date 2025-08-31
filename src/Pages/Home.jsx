import React from 'react'
import Navbar1 from '../Components/Navbar1/Navbar1'
import Navbar2 from '../Components/Navbar2/Navbar2'
import Hero from '../Components/Hero/Hero'
import CarCollections from '../Components/CarCollections/CarCollections'
import { mostSearchedCars } from "../Components/Constant";
import { electricCars } from "../Components/Constant";
import { upcomingCars } from "../Components/Constant";
import addImageBanner from '../assets/images/addImageBanner.jpeg';
import addImageBanner2 from '../assets/images/addImageBanner2.webp';
import AddImageBanner from '../Components/AddImageBanner/AddImageBanner';
import BrandLogo from '../Components/BrandLogo/BrandLogo'
import NearByCities from '../Components/NearByCities/NearByCities'
import Footer from '../Components/Footer/Footer'
import MobileVideoSection from '../Components/MobileVideoSection/MobileVideoSection'
import { useMediaQuery } from 'react-responsive'
import FindRightCar from '../Components/FindRightCar/FindRightCar'


const Home = () => {
      const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className='mt-4 lg:mt-[125px]'>
      <Navbar1 />
      <Navbar2 />
      <Hero/>
      {isMobile ? <FindRightCar/> : ''}
      <AddImageBanner image={addImageBanner}/>
      <CarCollections heading="The most searched cars" cars={mostSearchedCars}/>
      <CarCollections heading="Electric Cars" cars={electricCars}/>
      <CarCollections heading="Upcomming Cars" cars={upcomingCars}/>
      <AddImageBanner image={addImageBanner}/>
      <CarCollections heading="Latest Cars" cars={upcomingCars}/>
      <AddImageBanner image={addImageBanner2}/>
      <CarCollections heading="Trusted Used cars by Budget" cars={upcomingCars}/>
      <BrandLogo/>
      {isMobile ? <MobileVideoSection/> : ''}
      <NearByCities/>
      <Footer/>
    </div>
  )
}

export default Home
