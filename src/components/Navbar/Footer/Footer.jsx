import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center md:text-start">
              Location
            </h2>
            <div className="flex items-center gap-3 justify-center flex-col md:flex-row">
              <FaMapMarkerAlt className="text-2xl mr-2" />
              <p className="text-center md:text-start">
                Sri Veeranjaneya Glass Works, Address, City, State, ZIP
              </p>
            </div>
            <div className="flex items-center flex-col gap-3 md:flex-row">
              <FaPhoneAlt className="text-2xl mr-2" />
              <p className="text-center md:text-start">+1-234-567-8901</p>
            </div>
            <div className="flex items-center flex-col gap-3 md:flex-row">
              <FaEnvelope className="text-2xl mr-2" />
              <p className="text-center md:text-start">
                contact@veeranjaneyaglassworks.com
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 flex flex-col justify-center items-center ">
            <h2 className="text-xl font-bold text-center md:text-start">
              Quick Links
            </h2>
            <ul className="flex flex-col justify-center items-center gap-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map Column */}
          <div className="w-full h-64 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4938692299124!2d77.52956117489242!3d12.940218587372248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5d566e331d%3A0x750caf018064127b!2sSri%20Veeranjaneya%20Glass%20Works!5e0!3m2!1sen!2sin!4v1725209530046!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
