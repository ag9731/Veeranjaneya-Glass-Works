import React from "react";
import { FaCarBurst, FaCarTunnel } from "react-icons/fa6";
import AboutUsImage from "../../../assets/About/veeranjaneya_glass_works_bengaluru_AboutUsImage.webp";

export default function About() {
  return (
    <div className="container  mx-auto px-4 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8">
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-5">
            <FaCarBurst className="text-primary text-xl sm:text-2xl" />
            <p className="text-primary font-bold text-sm sm:text-base">
              About Veeranjaneya Glass Works
            </p>
          </div>
          <h1 className="text-3xl text-center md:text-start sm:text-4xl lg:text-5xl font-bold capitalize">
            Best Windshield Repair and{" "}
            <span className="font-light">Services in Bangalore.</span>
          </h1>
          <p className="text-textPrimary text-center md:text-start text-sm sm:text-base lg:text-lg leading-relaxed">
            At Veeranjaneya Glass Works Bengaluru, we are the leading experts in
            car glass replacement and windshield repair, including bus glass
            replacement. We offer convenient doorstep service and facilitate
            cashless insurance claims, helping you save both time and money.
            Trust us for prompt mobile onsite auto glass repair and replacement
            with Windshield World.
          </p>

          <div className="flex flex-col sm:flex-row  items-start sm:items-center gap-4 sm:gap-8">
            <div className="text-center ">
              <FaCarTunnel className="mx-32 md:mx-0 text-4xl  sm:text-5xl text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="uppercase text-center md:text-start font-bold text-lg sm:text-xl lg:text-2xl">
                Windshield Repair in Bengaluru
              </h2>
              <p className="text-textPrimary text-center md:text-start text-sm sm:text-base lg:text-lg leading-relaxed">
                Receive competitive quotes from skilled auto glass technicians
                at Veeranjaneya Glass Works, Bengaluru, for your windshield
                replacement. At Windshield World, our experts repair and replace
                all types of vehicle windshields. Get a free quote today.
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
            <button className="uppercase bg-primary hover:bg-primary-dark text-white font-bold rounded py-3 px-6 sm:py-4 sm:px-8 transition-colors duration-300 text-sm sm:text-base">
              Get A Quote
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src={AboutUsImage}
            alt="Veeranjaneya Glass Works Bengaluru"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
