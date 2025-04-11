import React from "react";
import img from '../assets/home/img.jpg'
import img1 from '../assets/home/img1.jpg'
import img2 from '../assets/home/img2.jpg'

const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center text-white relative"
        style={{
            backgroundImage: `url(${img})`           
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60"></div>
        <div className="relative z-10 px-8 md:px-24 py-24 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-8xl font-serif relative z-10 italic">Welcome to</h2>
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
      </div>
    </>
  );
};

export default Home;
