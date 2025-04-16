import React from "react";
import img from "../assets/restro/img1.jpg";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/menu/Img11.avif";
import MENUS from "../assets/restro/menu1.avif";
 
const Reservation = () => {
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
            Reservation
          </h1>
        </div>
      </section>
      <div className="bg-black text-white px-4 md:px-20 py-16" id="reservation">
        <div className="text-center mb-12">
          <p className="text-sm py-2 text-orange-500 uppercase">
            Online Reservation
          </p>
          <h2 className="text-4xl md:text-4xl font-bold py-6">Book A Table</h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Closed Sunday night, Monday & Tuesday. Due to the small amount of
            no-shows, all bookings must now be secured with a credit card which
            will be charged $20 if you do not show up or for late booking.
          </p>
        </div>

        <form className="space-y-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="bg-black border border-gray-700 p-2">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4+ Persons</option>
            </select>
            <input
              type="date"
              className="bg-black border border-gray-700 p-2"
            />
            <input
              type="time"
              className="bg-black border border-gray-700 p-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-gray-700 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-black border border-gray-700 p-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bg-black border border-gray-700 p-2"
            />
          </div>
          <textarea
            rows="3"
            placeholder="Special Requests"
            className="w-full bg-black border border-gray-700 p-2"
          ></textarea>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
            BOOK A TABLE NOW
          </button>
        </form>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-cover bg-center h-64 relative"
            style={{ backgroundImage: `url(${MENUS})` }}
          >
            <div className="absolute inset-0 bg-opacity-60 flex items-end p-4">
              <div>
                <p className="text-sm text-orange-400">Recommended</p>
                <h3 className="text-xl font-bold">SPRING MENUS</h3>
              </div>
            </div>
          </div>

          <div
            className="bg-cover bg-center h-64 relative"
            style={{ backgroundImage: `url(${img2})` }}
          >
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
            <p className="text-sm text-gray-400 mb-2">
              Come, feel joy & taste excellence in every bite.
            </p>
            <p className="text-sm">32 St. Stephen, London EC2Y 105</p>
            <p className="text-sm mb-2">+39 055 123 4567</p>
            <p className="text-sm">
              Mon – Thu: 10:00 am – 01:00 am
              <br />
              Fri – Sun: 10:00 am – 02:00 am
            </p>
            <a
              href="#map"
              className="text-orange-400 text-sm mt-2 inline-block"
            >
              GET DIRECTIONS
            </a>
          </div>
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
            <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
              <span>STARTERS</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
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
           
            <h3 className="group relative text-orange-500 text-3xl font-semibold mb-6 pb-1 inline-block">
              <span>BEVERAGES</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
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
              src={MENUS}
              alt="Dish 1"
              className="w-full h-80 object-cover mt-20"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
