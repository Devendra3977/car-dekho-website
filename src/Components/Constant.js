import MahindraScorpioP1 from '../assets/images/MahindraScorpio.avif';
import HyundaiCretaP2 from '../assets/images/HyundaiCreta.avif';
import TataNexonP3 from '../assets/images/TataNexon.avif';
import MahindraTharROXXP4 from '../assets/images/MahindraTharROXX.avif';
import MarutiFRONXP5 from '../assets/images/MarutiFRONX.avif';
import MahindraXUV700P6 from '../assets/images/MahindraXUV700.avif';
import MahindraBoleroP7 from '../assets/images/MahindraBolero.avif';
import TataPunchP8 from '../assets/images/TataPunch.avif';
import ToyotaFortunerP9 from '../assets/images/ToyotaFortuner.avif';
import MarutiBrezzaP10 from '../assets/images/ToyotaFortuner.avif';

// electric
import MahindraBE6P1 from '../assets/images/MahindraBE6.avif';
import TataHarrierEVP2 from '../assets/images/TataHarrierEV.avif';
import MGWindsorEVP3 from '../assets/images/MGWindsorEV.avif';
import MahindraXEV9eP4 from '../assets/images/MahindraXEV9e.avif';
import MGCometEVP5 from '../assets/images/MGCometEV.avif';

// upcomming
import MarutiEscudoP1 from '../assets/images/MarutiEscudo.avif';
import VinFastVF6P2 from '../assets/images/VinFastVF6.avif';
import VinFastVF7P3 from '../assets/images/VinFastVF7.avif';
import MahindraTharFaceliftP4 from '../assets/images/MahindraTharFacelift.avif';
import BMWiX2025P5 from '../assets/images/BMWiX2025.avif';
import NissanPatrolP6 from '../assets/images/NissanPatrol.avif';
import TataPunch2025P7 from '../assets/images/TataPunch2025.avif';
import AudiA5P8 from '../assets/images/AudiA5.avif';

// Import all images of brand logo
import honda from "../assets/images/honda.avif";
import mahindra from "../assets/images/mahindra.avif";
import hyundai from "../assets/images/hyundai.avif";
import toyota from "../assets/images/toyota.avif";
import kia from "../assets/images/kia.avif";
import tata from "../assets/images/tata.avif";
import maruti from "../assets/images/maruti.avif";
import mg from "../assets/images/mg.avif";
import skoda from "../assets/images/skoda.avif";
import jeep from "../assets/images/jeep.avif";
import renault from "../assets/images/renault.avif";
import nissan from "../assets/images/nissan.avif";

// Import all city images
import ahmedabad from "../assets/images/ahmedabad.svg";
import bangalore from "../assets/images/bangalore.svg";
import chennai from "../assets/images/chennai.svg";
import delhiNcr from "../assets/images/delhi-ncr.svg";
import gurgaon from "../assets/images/gurgaon.svg";
import hyderabad from "../assets/images/hyderabad.svg";
import jaipur from "../assets/images/jaipur.svg";
import kolkata from "../assets/images/kolkata.svg";
import mumbai from "../assets/images/mumbai.svg";
import newDelhi from "../assets/images/new-delhi.svg";
import noida from "../assets/images/noida.svg";
import pune from "../assets/images/pune.svg";



// addImageBanner


export const mostSearchedCars = [
  {
    name: "Mahindra Scorpio",
    startingPrice: 13.77,
    maxPrice: 17.72,
    image: MahindraScorpioP1,
  },
  {
    name: "Hyundai Creta",
    startingPrice: 11.11,
    maxPrice: 20.50,
    image: HyundaiCretaP2,
  },
  {
    name: "Tata Nexon",
    startingPrice: 8.0,
    maxPrice: 15.60,
    image: TataNexonP3,
  },
  {
    name: "Mahindra Thar ROXX",
    startingPrice: 12.99,
    maxPrice: 23.39,
    image: MahindraTharROXXP4,
  },
  {
    name: "Maruti FRONX",
    startingPrice: 7.58,
    maxPrice: 13.06,
    image: MarutiFRONXP5,
  },
  {
    name: "Mahindra XUV700",
    startingPrice: 14.49,
    maxPrice: 25.14,
    image: MahindraXUV700P6,
  },
  {
    name: "Mahindra Bolero",
    startingPrice: 9.81,
    maxPrice: 10.93,
    image: MahindraBoleroP7,
  },
  {
    name: "Tata Punch",
    startingPrice: 6.0,
    maxPrice: 10.32,
    image: TataPunchP8,
  },
  {
    name: "Toyota Fortuner",
    startingPrice: 36.05,
    maxPrice: 52.34,
    image: ToyotaFortunerP9,
  },
  {
    name: "Maruti Brezza",
    startingPrice: 8.69,
    maxPrice: 14.14,
    image: MarutiBrezzaP10,
  },
];

// imports


// extend array
export const electricCars = [
  {
    name: "Mahindra BE 6",
    startingPrice: 18.90,
    maxPrice: 27.79,
    image: MahindraBE6P1,
    category: "Electric",
  },
  {
    name: "Tata Harrier EV",
    startingPrice: 21.49,
    maxPrice: 30.23,
    image: TataHarrierEVP2,
    category: "Electric",
  },
  {
    name: "MG Windsor EV",
    startingPrice: 14.0,
    maxPrice: 18.39,
    image: MGWindsorEVP3,
    category: "Electric",
  },
  {
    name: "Mahindra XEV 9e",
    startingPrice: 21.90,
    maxPrice: 31.25,
    image: MahindraXEV9eP4,
    category: "Electric",
  },
  {
    name: "MG Comet EV",
    startingPrice: 7.50,
    maxPrice: 9.56,
    image: MGCometEVP5,
    category: "Electric",
  },
];

//upcomming
export const upcomingCars = [
  {
    name: "Maruti Escudo",
    startingPrice: 9.75,
    maxPrice: 9.75,
    image: MarutiEscudoP1,
    category: "Upcoming",
    launchDate: "Sep 3, 2025",
  },
  {
    name: "VinFast VF6",
    startingPrice: 25.0,
    maxPrice: 25.0,
    image: VinFastVF6P2,
    category: "Electric",
    launchDate: "Sep 6, 2025",
  },
  {
    name: "VinFast VF7",
    startingPrice: 50.0,
    maxPrice: 50.0,
    image: VinFastVF7P3,
    category: "Electric",
    launchDate: "Sep 6, 2025",
  },
  {
    name: "Mahindra Thar Facelift",
    startingPrice: 12.0,
    maxPrice: 12.0,
    image: MahindraTharFaceliftP4,
    category: "Facelift",
    launchDate: "Sep 25, 2025",
  },
  {
    name: "BMW iX 2025",
    startingPrice: 145.0, // 1.45 Cr in Lakhs
    maxPrice: 145.0,
    image: BMWiX2025P5,
    category: "Electric, Facelift",
    launchDate: "Oct 14, 2025",
  },
  {
    name: "Nissan Patrol",
    startingPrice: 200.0, // 2 Cr in Lakhs
    maxPrice: 200.0,
    image: NissanPatrolP6,
    category: "SUV",
    launchDate: "Oct 15, 2025",
  },
  {
    name: "Tata Punch 2025",
    startingPrice: 6.0,
    maxPrice: 6.0,
    image: TataPunch2025P7,
    category: "Facelift",
    launchDate: "Oct 15, 2025",
  },
  {
    name: "Audi A5",
    startingPrice: 50.0,
    maxPrice: 50.0,
    image: AudiA5P8,
    category: "Sedan",
    launchDate: "Oct 15, 2025",
  },
];



// Array of objects of brand logos
export const carBrands = [
  { name: "Honda", image: honda, category: "brandLogo" },
  { name: "Mahindra", image: mahindra, category: "brandLogo" },
  { name: "Hyundai", image: hyundai, category: "brandLogo" },
  { name: "Toyota", image: toyota, category: "brandLogo" },
  { name: "Kia", image: kia, category: "brandLogo" },
  { name: "Tata", image: tata, category: "brandLogo" },
  { name: "Maruti", image: maruti, category: "brandLogo" },
  { name: "MG", image: mg, category: "brandLogo" },
  { name: "Skoda", image: skoda, category: "brandLogo" },
  { name: "Jeep", image: jeep, category: "brandLogo" },
  { name: "Renault", image: renault, category: "brandLogo" },
  { name: "Nissan", image: nissan, category: "brandLogo" },
];

// array of nearByCities
export const nearByCities = [
  { cityName: "Ahmedabad", carInfo: "Used cars in", cityImage: ahmedabad },
  { cityName: "Bangalore", carInfo: "Used cars in", cityImage: bangalore },
  { cityName: "Chennai", carInfo: "Used cars in", cityImage: chennai },
  { cityName: "Delhi NCR", carInfo: "Used cars in", cityImage: delhiNcr },
  { cityName: "Gurgaon", carInfo: "Used cars in", cityImage: gurgaon },
  { cityName: "Hyderabad", carInfo: "Used cars in", cityImage: hyderabad },
  { cityName: "Jaipur", carInfo: "Used cars in", cityImage: jaipur },
  { cityName: "Kolkata", carInfo: "Used cars in", cityImage: kolkata },
  { cityName: "Mumbai", carInfo: "Used cars in", cityImage: mumbai },
  { cityName: "New Delhi", carInfo: "Used cars in", cityImage: newDelhi },
  { cityName: "Noida", carInfo: "Used cars in", cityImage: noida },
  { cityName: "Pune", carInfo: "Used cars in", cityImage: pune },
];




