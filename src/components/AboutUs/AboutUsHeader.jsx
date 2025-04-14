import React from 'react';
import BgImg from "../../assets/AboutUs/Img.jpg"; 

const AboutUsHeader = () => {
  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[60vh] overflow-hidden flex items-center justify-center">
      <img
        src={BgImg}
        alt="About Us background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide animate-fade-in">
          ABOUT US
        </h1>
      </div>
    </section>
  );
};

export default AboutUsHeader;
