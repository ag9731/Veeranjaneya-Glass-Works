import React from "react";
import {
  FaLocationDot,
  FaBlenderPhone,
  FaCarBurst,
  FaEnvelopeOpenText,
  FaSquareWhatsapp,
} from "react-icons/fa6";

export default function Address() {
  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Main Address",
      content:
        "Sy. No. 12, Pantarapalya Village Kengeri Hobli, Near Pes Nice Road Toll, Bangalore 560039.",
    },
    {
      icon: FaEnvelopeOpenText,
      title: "Email Address",
      content: "windshieldcare6@gmail.com",
    },
    {
      icon: FaSquareWhatsapp,
      title: "WhatsApp",
      content: "+91 9632297988",
    },
    {
      icon: FaBlenderPhone,
      title: "Phone Us",
      content: "+91-7090906009",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-[#f5f7fa] mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col  gap-6 lg:w-1/2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaCarBurst
                className="text-primary text-2xl"
                aria-hidden="true"
              />
              <p className="text-primary font-bold uppercase">CONTACT INFO</p>
            </div>
            <h1 className="text-3xl text-center md:text-start sm:text-4xl lg:text-5xl font-bold capitalize">
              Don't Hesitate To
              <span className="font-light"> Contact Us</span>
            </h1>
            <p className="text-gray-600 text-center md:text-start">
              Windshield Glass Solution is the best windshield expert in
              Bangalore. We repair and replace car windshields with reasonable
              prices and 100% guarantee.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="border p-6 flex flex-col items-center gap-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <info.icon
                    className="text-primary text-4xl"
                    aria-hidden="true"
                  />
                  <h2 className="text-xl font-bold text-center">
                    {info.title}
                  </h2>
                  <p className="text-center text-gray-600">{info.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
