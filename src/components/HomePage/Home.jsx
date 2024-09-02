// Home.jsx
import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import About from "./About/About";
import Services from "./Services/Services";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Faq from "./Faq/Faq";
import Address from "./Address/Address";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <section id="about">
        <About />
      </section>
      <section id="what-we-offer">
        <WhatWeOffer />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="address">
        <Address />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </div>
  );
};

export default Home;
