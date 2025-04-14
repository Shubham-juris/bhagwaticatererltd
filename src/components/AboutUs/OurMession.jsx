import React from 'react';
import { FaStarOfLife } from 'react-icons/fa';
import Img from "../../assets/AboutUs/OurMission.jpg";
import bgImg from "../../assets/AboutUs/Img.jpg";

// Reusable Line with Stars Component
const LineWithStars = ({ orientation = "vertical", height = "h-64", width = "w-1.5" }) => (
  <div className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} items-center justify-center`}>
    <FaStarOfLife className="text-gray-500 mb-1" />
    <div className={`${width} ${height} bg-gray-700 relative mx-3 rounded-sm`}>
      <div className={`absolute ${orientation === "vertical"
        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"} w-2 h-2 bg-gray-500 rounded-full`} />
    </div>
    <FaStarOfLife className="text-gray-500 mt-1" />
  </div>
);

const OurMission = () => {
  return (
    <section
      className="relative bg-black text-white px-4 sm:px-6 md:px-16 py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto space-y-24">

        {/* === Our Mission Section === */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="rounded-[45%_45%_0_0] overflow-hidden shadow-lg">
              <img
                src={Img}
                alt="Our Mission - Soup and clams dish"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:flex">
            <LineWithStars height="h-120" width="w-1" />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-orange-500 uppercase tracking-wider text-sm">
              About Patiotime Cafe
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Food is the foundation of true happiness. Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean commodo.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 uppercase font-semibold text-sm mt-4">
                Online Reservation
              </button>
            </div>
          </div>
        </div>

        

        {/* === Our Philosophy Section === */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-orange-500 uppercase tracking-wider text-sm">
              Fabulous Taste Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
              Our Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Simple and balanced. Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry.
            </p>
            <p className="text-gray-300 italic leading-relaxed text-base sm:text-lg">
              “I traveled all over the world, feeling and learning the authenticity of each local specialty food...”
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 uppercase font-semibold text-sm mt-4">
                Meet Our Chefs
              </button>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:flex">
            <LineWithStars height="h-120" width="w-1" />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="rounded-[45%_45%_0_0] overflow-hidden shadow-lg">
              <img
                src={Img}
                alt="Our Philosophy - Elegant restaurant"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
