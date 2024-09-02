import React, { useRef } from "react";
import { FaCarBurst, FaCarSide, FaTicket } from "react-icons/fa6";
import img1 from "../../../assets/About/veeranjaneya_glass_works_bengaluru_AboutUsImage.webp";
import emailjs from "@emailjs/browser";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {

    
  return (
    <div className="mt-24  ">
      <div className="flex flex-col md:flex-row  items-center container mx-auto">
        {/* Left Section */}
        <div className="flex-1 m-5">
          <img
            src={img1}
            alt=""
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex items-center justify-center md:justify-start gap-5">
            <FaCarBurst className="fill-primary text-2xl" />
            <p className="text-primary font-bold uppercase">what we offer</p>
            <FaCarBurst className="fill-primary text-2xl" />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-center md:text-start">
              Get More Updates
            </h1>
            <h1 className="text-3xl text-center md:text-start">Contact Us</h1>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
