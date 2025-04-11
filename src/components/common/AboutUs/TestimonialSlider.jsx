import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import bgImg from "../../../assets/AboutUs/Img.jpg";
import userImg from "../../../assets/AboutUs/Img.jpg";

const TestimonialSlider = () => {
  const testimonial = {
    quote:
      "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum aenean leo ligula. Nulla consequat massa quis enim.",
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

      {/* Content */}
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
          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
          <span className="text-sm text-gray-300">{testimonial.title}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
