import React from "react";
import MENUS from "../../assets/restro/menu1.avif";
import img2 from "../../assets/menu/Img11.avif";

const StartersBeverages = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-cover bg-center h-64 relative" style={{ backgroundImage: `url(${MENUS})` }}>
        <div className="absolute inset-0 bg-opacity-60 flex items-end p-4">
          <div>
            <p className="text-sm text-orange-400">Recommended</p>
            <h3 className="text-xl font-bold">SPRING MENUS</h3>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center h-64 relative" style={{ backgroundImage: `url(${img2})` }}>
        <div className="absolute inset-0 bg-opacity-60 flex items-end p-4">
          <div>
            <p className="text-sm text-orange-400">Event</p>
            <h3 className="text-xl font-bold">DESSERTS MENUS</h3>
          </div>
        </div>
      </div>

      <div>
        <p className="text-orange-500 text-sm uppercase">United Kingdom</p>
        <h3 className="text-lg font-bold mt-2 mb-1">London</h3>
        <p className="text-sm text-gray-400 mb-2">Come, feel joy & taste excellence in every bite.</p>
        <p className="text-sm">32 St. Stephen, London EC2Y 105</p>
        <p className="text-sm mb-2">+39 055 123 4567</p>
        <p className="text-sm">
          Mon – Thu: 10:00 am – 01:00 am
          <br />
          Fri – Sun: 10:00 am – 02:00 am
        </p>
        <a href="#map" className="text-orange-400 text-sm mt-2 inline-block">GET DIRECTIONS</a>
      </div>
    </div>
  );
};

export default StartersBeverages;
