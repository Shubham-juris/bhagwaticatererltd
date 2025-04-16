import React from "react";
import img from "../assets/menu/menu1.jpg";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/menu/Img11.avif";
import MENUS from "../assets/restro/menu1.avif";
import menu2 from "../assets/menu/menu2.avif";
const MenuItem = ({ name, desc, price, badge }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold">
        {name}
        {badge && (
          <span
            className={`text-xs ml-2 px-2 py-0.5 rounded uppercase font-bold ${
              badge === "Recommended"
                ? "bg-orange-500 text-black"
                : "bg-orange-300 text-black"
            }`}
          >
            {badge}
          </span>
        )}
      </h4>
      <span className="text-white font-semibold">{price}</span>
    </div>
    <p className="text-sm text-gray-400 mt-1">{desc}</p>
  </div>
);

const Ourmenu = () => {
  const mainCourses = [
    {
      name: "Ebony MB4 Rib Fillet Steak",
      desc: "Truffle mash, charred baby cos, pico de gallo, pepper sauce.",
      price: "$58",
    },
    {
      name: "Flank Steak",
      desc: "Served medium rare, chips, house salad, mushroom sauce.",
      price: "$35",
      badge: "Recommended",
    },
    {
      name: "Crispy Skin Chicken",
      desc: "Ricotta, radicchio, peach & prosciutto salad, cabernet jus.",
      price: "$33",
    },
    {
      name: "Pan Fried Barramundi",
      desc: "Barley, quinoa, grilled zucchini, corn & tomato salsa.",
      price: "$36",
      badge: "Seasonal",
    },
    {
      name: "Beer Battered Fish & Chips",
      desc: "Atlantic cod fillet, chips, salad, tartare, lemon.",
      price: "$33",
    },
    {
      name: "Blue Eyed Cod",
      desc: "Mussels, lobster bisque, heirloom tomato & summer herbs.",
      price: "$49",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] xl:h-[60vh] overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt="Menu Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-wide animate-fade-in">
            OUR MENU
          </h1>
        </div>
      </section>

      {/* Starters Section */}
      <div className="bg-black text-white px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img1}
              alt="Dish 1"
              className="w-full h-[20rem] object-cover mt-20"
            />
            <img
              src={img2}
              alt="Dish 2"
              className="w-full h-[30rem] object-cover"
            />
          </div>

          <div>            
            <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
              <span>STARTERS</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
            </h3>
            
            <div className="space-y-6">
              <MenuItem
                name="Purple Corn Tostada"
                price="$36"
                desc="Ricotta, goat cheese, beetroot and datterini."
              />
              <MenuItem
                name="Bruno's Scribble"
                price="$30"
                desc="Culatello, Spalla Cotta, Mortadella, Culacciona."
              />
              <MenuItem
                name="Fresh Oysters Dozen"
                price="$59"
                desc="Our selection of fresh oysters, limes."
              />
            </div>
          </div>
        </div>

        {/* Beverages Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-28">
          <div>            
            <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
              <span>BEVERAGES</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
            </h3>
            <div className="space-y-6">
              <MenuItem
                name="Purple Corn Tostada"
                price="$36"
                desc="Ricotta, goat cheese, beetroot and datterini."
              />
              <MenuItem
                name="Bruno's Scribble"
                price="$30"
                desc="Culatello, Spalla Cotta, Mortadella, Culacciona."
              />
              <MenuItem
                name="Fresh Oysters Dozen"
                price="$59"
                desc="Our selection of fresh oysters, limes."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={img3}
              alt="Dish 2"
              className="w-full h-[30rem] object-cover"
            />
            <img
              src={menu2}
              alt="Dish 1"
              className="w-full h-[20rem] object-cover mt-20"
            />
          </div>
        </div>
      </div>

      {/* Main Courses Section */}
      <div className="min-h-screen bg-black text-white px-6 py-12 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={img}
              alt="Fresh Salmon Tart"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded">
              <p className="text-orange-500 uppercase text-sm font-semibold">
                Seasonal Dishes
              </p>
              <h2 className="text-2xl font-bold">Fresh Salmon Tart</h2>
              <button className="group relative text-orange-500 text-sm font-semibold mb-6 pb-1 inline-block">
                <span>Discover More</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
              </button>
            </div>
          </div>

          <div>            
            <h3 className="group relative text-orange-500 text-lg font-semibold mb-6 pb-1 inline-block">
              <span>Main Courses</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
            </h3>
            {mainCourses.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* Additional Starters Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img1}
              alt="Dish 1"
              className="w-full h-[20rem] object-cover mt-20"
            />
            <img
              src={MENUS}
              alt="Dish 2"
              className="w-full h-[30rem] object-cover"
            />
          </div>

          <div>
            
            <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
              <span>STARTERS</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
            </h3>
            <div className="space-y-6">
              <MenuItem
                name="Purple Corn Tostada"
                price="$36"
                desc="Ricotta, goat cheese, beetroot and datterini."
              />
              <MenuItem
                name="Bruno's Scribble"
                price="$30"
                desc="Culatello, Spalla Cotta, Mortadella, Culacciona."
              />
              <MenuItem
                name="Fresh Oysters Dozen"
                price="$59"
                desc="Our selection of fresh oysters, limes."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmenu;
