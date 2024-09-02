// import React from "react";
// import banner1 from "../../../assets/banner/veeranjaneya_glass_works_bengaluru_banner2.webp";
// import { AiFillFacebook } from "react-icons/ai";

// const BannerSection = () => {
//   return (
//     <div className="relative bg-[#FFFFF0]">
//       <div className="relative">
//         {/* Banner Image */}
//         <img
//           src={banner1}
//           alt="Banner"
//           className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
//             Sri Veeranjaneya Glass Works &{" "}
//             <span className="bg-primary px-3">Windshield Care</span>
//           </h1>
//           <p className="text-sm md:text-base lg:text-lg mb-6">
//             Expert Glass Replacement for Buses, Cars, and Trucks in Bengaluru.
//             Insurance Support for Hassle-Free Service. Quality Side Glass &
//             Building Glass Solutions. Reliable, Professional Care at Sri
//             Veeranjaneya Glass Works & Windshield Care.
//           </p>
//           <button className="uppercase bg-white px-6 py-3 md:py-4 transition-all hover:bg-primary hover:text-white tracking-wider font-bold rounded text-black mb-4">
//             Contact Us
//           </button>
//           <div className="flex gap-4 justify-center">
//             <AiFillFacebook className="cursor-pointer text-2xl md:text-3xl" />
//             <AiFillFacebook className="cursor-pointer text-2xl md:text-3xl" />
//             <AiFillFacebook className="cursor-pointer text-2xl md:text-3xl" />
//             <AiFillFacebook className="cursor-pointer text-2xl md:text-3xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;


import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import banner1 from "../../../assets/banner/veeranjaneya_glass_works_bengaluru_banner2.webp";

export default function BannerSection() {
  return (
    <div className="relative bg-[#FFFFF0]">
      <div className="relative overflow-hidden">
        {/* Banner Image with Animation */}
        <img
          src={banner1}
          alt="Sri Veeranjaneya Glass Works Banner"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover animate-slow-pulse"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4 max-w-4xl">
            Sri Veeranjaneya Glass Works &{" "}
            <span className="bg-primary px-3 inline-block mt-2">
              Windshield Care
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl">
            Expert Glass Replacement for Buses, Cars, and Trucks in Bengaluru.
            Insurance Support for Hassle-Free Service. Quality Side Glass &
            Building Glass Solutions. Reliable, Professional Care at Sri
            Veeranjaneya Glass Works & Windshield Care.
          </p>
          <a href="#contact" className="hover:text-gray-400">
            <button className="uppercase bg-white px-6 py-3 md:py-4 transition-all hover:bg-primary hover:text-white tracking-wider font-bold rounded text-black mb-6">
              Contact Us
            </button>
          </a>
          <div className="flex gap-4 justify-center">
            <AiFillFacebook className="cursor-pointer text-2xl md:text-3xl hover:text-primary transition-colors duration-300" />
            <AiOutlineTwitter className="cursor-pointer text-2xl md:text-3xl hover:text-primary transition-colors duration-300" />
            <AiFillInstagram className="cursor-pointer text-2xl md:text-3xl hover:text-primary transition-colors duration-300" />
            <AiFillLinkedin className="cursor-pointer text-2xl md:text-3xl hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}