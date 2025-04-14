import React from "react";
import img from "../assets/home/img.jpg";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";``
import img4 from "../assets/home/img3.jpg";
import img3 from "../assets/home/img4.jpg";
import MENUS from "../assets/restro/menu1.avif";
import img5 from "../assets/menu/menu2.avif";

const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60"></div>
        <div className="relative z-10 px-8 md:px-24 py-24 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-8xl font-serif relative z-10 italic">
            Welcome to
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-5 font-bold">
            <span className="text-orange-600">Bhagwati</span>{" "}
            <span className="text-white">Caterer</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 relative z-10 max-w-2xl">
            We serve food, harmony, and laughter. Making delicious food and
            providing a wonderful eating experience since 1998.
          </p>
          <div className="mt-10 flex gap-6">
            <button className="border-b-2 border-white hover:border-orange-600 transition duration-300">
              VIEW MENUS
            </button>
            <button className="border-b-2 border-white hover:border-orange-600 transition duration-300">
              BOOK A TABLE
            </button>
          </div>
        </div>
        <div className="bg-black text-white px-6 md:px-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-6xl font-serif mt-5 font-semibold">
              Selected Menus
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-30">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img1}
                alt="Dish 1"
                className="w-full h-80 object-cover mt-20"
              />
              <img
                src={img2}
                alt="Dish 2"
                className="w-full h-120 object-cover"
              />
            </div>

            <div>
              <h3 className="text-orange-500 text-3xl font-semibold mb-6 border-b-2 border-orange-500 inline-block pb-1">
                STARTERS
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Purple Corn Tostada</span>
                    <span>$36</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Ricotta, goat cheese, beetroot and datterini.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Bruno's Scribble</span>
                    <span>$30</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Culatello, Spalla Cotta, Mortadella, Culacciona.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Fresh Oysters Dozen</span>
                    <span>$59</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Our selection of fresh oysters, limes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-30">
            <div>
              <h3 className="text-orange-500 text-3xl font-semibold mb-6 border-b-2 border-orange-500 inline-block pb-1">
                BEBERAGES
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Purple Corn Tostada</span>
                    <span>$36</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Ricotta, goat cheese, beetroot and datterini.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Bruno's Scribble</span>
                    <span>$30</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Culatello, Spalla Cotta, Mortadella, Culacciona.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-lg font-serif">
                    <span>Fresh Oysters Dozen</span>
                    <span>$59</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Our selection of fresh oysters, limes.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img5}
                alt="Dish 2"
                className="w-full h-120 object-cover"
              />
              <img
                src={MENUS}
                alt="Dish 1"
                className="w-full h-80 object-cover mt-20"
              />
            </div>
          </div>
        </div>
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
                <button className="mt-2 text-sm text-orange-500 border-b-2 border-orange-500 hover:text-orange-300">
                  Discover More
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-orange-500 text-lg font-semibold uppercase mb-6">
                Main Courses
              </h3>

              {[
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
              ].map((item, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">
                      {item.name}{" "}
                      {item.badge && (
                        <span
                          className={`text-xs ml-2 px-2 py-0.5 rounded uppercase font-bold ${
                            item.badge === "Recommended"
                              ? "bg-orange-500 text-black"
                              : "bg-orange-300 text-black"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </h4>
                    <span className="text-white font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-16 bg-black">
          <div className="text-orange-500 text-4xl mb-4">“</div>
          <p className="text-lg max-w-2xl mx-auto">
            Food is the foundation of true happiness. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit aenean commodo.
          </p>
          <p className="mt-4 text-sm text-gray-400 font-medium">Alice Wayne</p>
          <p className="text-xs text-gray-500">Blogger</p>
        </div>

        {/* Visit & Reservation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0f0f15] text-white">
          <div className="relative">
            <img
              src={img3}
              alt="Reservation"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 p-10 text-white flex flex-col justify-center">
              <p className="text-xs text-orange-400 uppercase font-semibold">
                Find the restrurent
              </p>
              <h2 className="text-2xl font-bold mb-4">visit us</h2>
              <p className="text-sm mb-2">
                Northern end of the oversese passengers terminal,Circule Quey.
              </p>
              <p className="text-sm font-bold mt-4">open hours</p>
              <p className="text-sm">Mon-Tue:10:00am - 01:00am</p>
              <p className="text-sm">Fri-sun:10:00am - 02:00am</p>
              <button className="mt-4 text-orange-400 text-xs border-b border-orange-400">
                get directions
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={img4}
              alt="Reservation"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 p-10 text-white flex flex-col justify-center">
              <p className="text-xs text-orange-400 uppercase font-semibold">
                Book a Table
              </p>
              <h2 className="text-2xl font-bold mb-4">Reservation</h2>
              <p className="text-sm mb-2">
                Planning a romantic dinner for two or a communal meal with
                family or friends? Book a table now.
              </p>
              <p className="text-sm font-bold mt-4">BOOKING</p>
              <p className="text-sm">Email: booking@patiotime.com</p>
              <p className="text-sm">Call Us: +39 059 1234567</p>
              <button className="mt-4 text-orange-400 text-xs border-b border-orange-400">
                Online Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
