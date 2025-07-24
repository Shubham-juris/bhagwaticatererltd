import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import bgImg from '../../assets/AboutUs/Img.jpg';
import userImg from "../../assets/AboutUs/Img.jpg";

const TestimonialSlider = () => {
  const testimonial = {
    quote:
      "At Patiotime Cafe, every dish is a reflection of our love for quality food and exceptional service. It's not just about taste, it's about creating experiences that linger long after the last bite.",
    name: "Patio Time",
    title: "Cafe Owner",
    img: userImg,
  };

  return (
    <section
      className="relative text-white py-24 px-6"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FaQuoteLeft className="text-4xl text-orange-500 mx-auto mb-6" />
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
          {testimonial.quote}
        </p>
        <div className="flex flex-col items-center">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg mb-3"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
