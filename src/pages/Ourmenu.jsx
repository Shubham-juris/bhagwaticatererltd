import React from "react";
import img from "../assets/menu/menu1.jpg";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";

const Ourmenu = () => {
  return (
    <>
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[60vh] overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt="About Us background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide animate-fade-in">
            OUR MENU
          </h1>
        </div>
      </section>
      <div className="bg-black text-white px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 mt-10">
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
              src={img2}
              alt="Dish 2"
              className="w-full h-120 object-cover"
            />
            <img
              src={img1}
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
                  <span className="text-white font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-18">
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
      </div>
    </>
  );
};

export default Ourmenu;
