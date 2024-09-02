import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import service1 from "../../../assets/Services/veeranjaneya glass works/1.webp";
import service2 from "../../../assets/Services/veeranjaneya glass works/2.webp";
import service3 from "../../../assets/Services/veeranjaneya glass works/3.webp";
import service4 from "../../../assets/Services/veeranjaneya glass works/4.webp";
import service5 from "../../../assets/Services/veeranjaneya glass works/5.webp";
import service6 from "../../../assets/Services/veeranjaneya glass works/6.webp";
import { FaCarBurst } from "react-icons/fa6";

export default function Gallery() {
  const images = [
    { src: service1, alt: "Service 1" },
    { src: service2, alt: "Service 2" },
    { src: service3, alt: "Service 3" },
    { src: service4, alt: "Service 4" },
    { src: service5, alt: "Service 5" },
    { src: service6, alt: "Service 6" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-5 mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
            <p className="text-primary font-bold uppercase text-sm sm:text-base">
              Photo Gallery
            </p>
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Our Recent Latest
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Photo Gallery
            </h2>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="flex items-center justify-between w-full px-4">
              <button
                className="text-white hover:text-gray-300 transition-colors duration-300"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <div className="relative w-full max-w-4xl mx-4">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="max-w-full max-h-[80vh] mx-auto object-contain"
                />
              </div>
              <button
                className="text-white hover:text-gray-300 transition-colors duration-300"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
