import React from "react";
import img1 from "../../assets/home/img1.jpg";
import img2 from "../../assets/menu/Img11.avif";
import MENUS from "../../assets/restro/menu1.avif";

const ReservationMenus = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 mt-30">
        <div className="grid grid-cols-2 gap-4">
          <img src={img1} alt="Dish 1" className="w-full h-80 object-cover mt-20" />
          <img src={img2} alt="Dish 2" className="w-full h-120 object-cover" />
        </div>

        <div>
          <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
            <span>STARTERS</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
          </h3>
          <div className="space-y-6">
            <MenuItem title="Purple Corn Tostada" price="$36" desc="Ricotta, goat cheese, beetroot and datterini." />
            <MenuItem title="Bruno's Scribble" price="$30" desc="Culatello, Spalla Cotta, Mortadella, Culacciona." />
            <MenuItem title="Fresh Oysters Dozen" price="$59" desc="Our selection of fresh oysters, limes." />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-30">
        <div>
          <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
            <span>BEVERAGES</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
          </h3>
          <div className="space-y-6">
            <MenuItem title="Purple Corn Tostada" price="$36" desc="Ricotta, goat cheese, beetroot and datterini." />
            <MenuItem title="Bruno's Scribble" price="$30" desc="Culatello, Spalla Cotta, Mortadella, Culacciona." />
            <MenuItem title="Fresh Oysters Dozen" price="$59" desc="Our selection of fresh oysters, limes." />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={img2} alt="Dish 2" className="w-full h-120 object-cover" />
          <img src={MENUS} alt="Dish 1" className="w-full h-80 object-cover mt-20" />
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ title, price, desc }) => (
  <div>
    <div className="flex justify-between text-lg font-serif">
      <span>{title}</span>
      <span>{price}</span>
    </div>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default ReservationMenus;
