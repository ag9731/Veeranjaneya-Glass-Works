import React, { useState } from "react";
import { FaCarBurst, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Veeranjaneya Glass Works?",
    answer:
      "Veeranjaneya Glass Works specializes in high-quality glass repair and replacement services.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling us directly or through our online booking system.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide emergency glass repair services 24/7.",
  },
  {
    question: "What types of glass do you work with?",
    answer:
      "We handle all types of glass including automotive, residential, and commercial glass.",
  },
  {
    question: "Are your services covered by insurance?",
    answer:
      "Yes, we work with most insurance companies to ensure your repair costs are covered.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container mx-auto mt-10 px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <FaCarBurst className="fill-primary text-2xl mb-2" />
          <p className="text-primary font-bold">
            About Veeranjaneya Glass Works
          </p>
          <h1 className="text-5xl font-bold text-center mt-4">
            Frequently Asked <br />
            <span className="font-light">Questions</span>
          </h1>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                {openIndex === index ? (
                  <FaCircleMinus className="text-2xl" />
                ) : (
                  <FaCirclePlus className="text-2xl" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
