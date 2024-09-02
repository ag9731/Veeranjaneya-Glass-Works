import React, { useState } from "react";
import { FaCarBurst, FaCarSide } from "react-icons/fa6";
import service2 from "../../../assets/Services/veeranjaneya glass works/2.webp";
import service1 from "../../../assets/Services/veeranjaneya glass works/1.webp";
import service3 from "../../../assets/Services/veeranjaneya glass works/3.webp";
import service4 from "../../../assets/Services/veeranjaneya glass works/4.webp";
import service5 from "../../../assets/Services/veeranjaneya glass works/5.webp";
import service6 from "../../../assets/Services/veeranjaneya glass works/6.webp";


const ServiceCard = ({
  service,
  index,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <div
    className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative">
      <img
        src={service.image}
        alt={service.service}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <service.icon className="text-3xl sm:text-4xl text-primary" />
      <h3 className="text-lg sm:text-xl font-bold capitalize text-center">
        {service.service}
      </h3>
      <button className="bg-primary hover:bg-primary-dark text-white font-bold rounded py-2 px-4 sm:py-3 sm:px-6 transition-colors duration-300 text-sm sm:text-base uppercase tracking-wider">
        Get A Quote
      </button>
      {hoveredIndex === index && (
        <p className="text-center text-sm sm:text-base mt-2">{service.desc}</p>
      )}
    </div>
  </div>
);

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const services = [
    {
      icon: FaCarSide,
      image: service1,
      service: "Door Step Service.",
      desc: "We offer door step service",
    },
    {
      icon: FaCarSide,
      image: service2,
      service: "Rear Glass Change",
      desc: "Specialized rear windshield replacement services",
    },
    {
      icon: FaCarSide,
      image: service3,
      service: "Damage Assessment",
      desc: "Thorough evaluation of glass damage and repair options",
    },
    {
      icon: FaCarSide,
      image: service4,
      service: "Glass Fitting",
      desc: "Precise fitting of new glass for optimal performance",
    },
    {
      icon: FaCarSide,
      image: service5,
      service: "Glass Cleaning",
      desc: "Professional cleaning for crystal clear visibility",
    },
    {
      icon: FaCarSide,
      image: service6,
      service: "Window Repair",
      desc: "Expert repairs for minor window and glass damage",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
            <p className="text-primary font-bold uppercase text-sm sm:text-base">
              What we do
            </p>
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Glass Repair Services
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Repair First, Replace Later
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              hoveredIndex={hoveredIndex}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}