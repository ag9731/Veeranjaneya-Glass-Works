import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/veeranjaneya_glass_works_logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "What We Offer", href: "#what-we-offer" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ's", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-slate-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              className="w-16 h-16 mr-2"
              alt="Veeranjaneya Glass Works Bengaluru logo"
            />
            <h1 className="text-center uppercase font-bold text-sm sm:text-base">
              Sri Veeranjaneya <br />
              Glass Works
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="uppercase text-sm hover:text-primary transition-colors duration-300"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get A Quote Button */}
          <div className="hidden sm:block">
            <a href="#contact">
              <button className="uppercase bg-primary px-4 font-bold rounded py-2 text-white hover:bg-primary-dark transition-colors duration-300">
                Get A Quote
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="uppercase text-sm hover:text-primary transition-colors duration-300"
                >
                  <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact">
                  <button className="uppercase bg-primary px-4 font-bold rounded py-2 text-white hover:bg-primary-dark transition-colors duration-300 w-full">
                    Get A Quote
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
