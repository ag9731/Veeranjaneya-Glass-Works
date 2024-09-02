import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCarBurst, FaCarSide } from "react-icons/fa6";

const Offices = () => {
  const array = [
    {
      icon: FaLocationDot,
      title: "MANGALURU",
      address: "Behind Bhandary Height Apt Kottara Chowki Mangaluny",
      mobile: "9900005966/5961",
      tel: "Tel: 080-242003391",
    },
    {
      icon: FaLocationDot,
      title: "SHIVAMOGGA",
      address:
        "#30/2, Site No. 55 Opp. Shiva Tayer Sagara Road Shivamogga-577204",
      mobile: "9900005962/5961",
      tel: "081-82200336",
    },
    {
      title: "OUR UPCOMING BRANCHES",
      branches: [
        "HYDERABAD",
        "HUBLI",
        "HOSKOTE",
        "BANGALORE INTERNATIONAL AIRPORT ROAD",
        "MYSORE",
        "KANAKPURA ROAD",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-5">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
            <p className="text-primary font-bold uppercase text-sm sm:text-base">
              We Are Growing
            </p>
            <FaCarBurst
              className="text-primary text-xl sm:text-2xl"
              aria-hidden="true"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
               We Are Serving
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Below Locations Also
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {array.map((office, index) => {
          if (office.branches) {
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-center"
              >
                <h2 className="text-xl font-bold mb-4">{office.title}</h2>
                <ul className="list-none list-inside text-gray-700 space-y-2">
                  {office.branches.map((branch, i) => (
                    <li  key={i}>{branch}</li>
                  ))}
                </ul>
              </div>
            );
          } else {
            const Icon = office.icon; // Dynamically assign the icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-primary text-3xl" />
                  <h2 className="text-xl font-bold">{office.title}</h2>
                </div>
                <p className="text-gray-700 mb-2">{office.address}</p>
                <p className="text-gray-700 mb-2">Mobile: {office.mobile}</p>
                <p className="text-gray-700">Tel: {office.tel}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Offices;
