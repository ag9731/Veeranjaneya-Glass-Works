import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <div className="flex flex-col justify-start gap-6">
        <div className="flex flex-col">
          <label htmlFor="user_name" className="mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="user_email"
            className="mb-2 font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 p-2 rounded-md h-32 resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter Message"
            required
          />
        </div>

        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
