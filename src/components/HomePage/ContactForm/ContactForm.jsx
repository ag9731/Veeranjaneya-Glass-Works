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
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col justify-start gap-8">
        <div className="flex flex-col">
          <label>Name</label>
          
          <input
            type="text"
            className="border border-slate-950 p-2 cursor-auto"
            name="user_name"
            placeholder="Enter Name"
          />
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            className="border border-slate-950 p-2"
            name="user_email"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex flex-col">
            
          <label>Message</label>
          <textarea className="border border-slate-950 p-2" name="message" placeholder="Enter Message"/>
        </div>

        <div className="flex justify-center md:justify-start">
          <input
            className="uppercase cursor-pointer bg-primary px-10 transition-all hover:bg-primary text-white tracking-wider font-bold rounded py-3"
            type="submit"
            value="Send"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
