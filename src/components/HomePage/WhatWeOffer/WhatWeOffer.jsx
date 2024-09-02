import React from "react";
import { FaCarBurst, FaCarSide, FaTicket } from "react-icons/fa6";

export default function WhatWeOffer() {
  const services = [
    { title: "Bus Glass Replacement", icon: FaTicket },
    { title: "Cars Glass Replacement", icon: FaTicket },
    { title: "Truck Glass Replacement", icon: FaTicket },
    { title: "Side Glass Replacement", icon: FaTicket },
  ];

  return (
    <div className="bg-[#F5F7FA] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center"
              >
                <service.icon className="text-4xl sm:text-5xl text-primary mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  {service.title}
                </h2>
              </div>
            ))}

            <div className="mt-4 md:hidden sm:mt-6 flex items-center justify-center md:justify-start">
              <button className="uppercase bg-primary hover:bg-primary-dark text-white font-bold rounded py-3 px-6 sm:py-4 sm:px-8 transition-colors duration-300 text-sm sm:text-base">
                Get A Quote
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8 justify-center">
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-5">
              <FaCarBurst className="text-primary text-xl sm:text-2xl" />
              <p className="text-primary  font-bold uppercase text-sm sm:text-base">
                what we offer
              </p>
            </div>
            <h1 className="text-3xl text-center md:text-start sm:text-4xl lg:text-5xl font-medium capitalize">
              Car and Bus Windshield & Glass Replacement and
              <span className="font-light"> Repair Services</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-start sm:items-center gap-4 sm:gap-6">
              <FaCarSide className="text-3xl sm:text-4xl lg:text-5xl text-primary flex-shrink-0" />
              <p className="text-textPrimary text-center md:text-start text-sm sm:text-base lg:text-lg leading-relaxed">
                Windshield Glass Expert offers top-notch solutions for
                windshield chip repair, crack repair, and windshield
                replacement.
              </p>
            </div>
            <div className="mt-4 sm:mt-6 hidden md:block flex items-center justify-center md:justify-start">
              <button className="uppercase bg-primary hover:bg-primary-dark text-white font-bold rounded py-3 px-6 sm:py-4 sm:px-8 transition-colors duration-300 text-sm sm:text-base">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
