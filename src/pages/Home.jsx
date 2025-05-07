import React from "react";
import img from "../assets/home/img.jpg";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";

import MENUS from "../assets/restro/menu1.avif";
import img5 from "../assets/menu/menu2.avif";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import VisitReservation from "../components/Home/VisitAndReservation";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Outstanding service and exceptional food quality. The experience here is always unforgettable.",
      author: "Patio Time",
      title: "Cafe Owner"
    },
    {
      id: 2,
      text: "Exceptional dining experiences that leave a lasting impression. The attention to detail and quality of ingredients makes this place stand out among the rest.",
      author: "Maria Johnson",
      title: "Food Critic"
    },
    {
      id: 3,
      text: "From the ambiance to the service, everything about this restaurant exudes excellence. Their signature dishes are nothing short of culinary masterpieces.",
      author: "James Peterson",
      title: "Executive Chef"
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="py-24 text-left">
              <h2 className="text-4xl md:text-8xl font-serif italic">Welcome to</h2>
              <h1 className="text-5xl md:text-7xl font-serif mb-5 font-bold">
                <span className="text-orange-600">Bhagwati</span>{" "}
                <span className="text-white">Caterers</span>
              </h1>
              <p className="w-full justify-start flex text-lg md:text-xl mt-6 max-w-2xl ">
                We serve food, harmony, and laughter. Making delicious food and
                providing a wonderful eating experience since 1998.
              </p>
              <div className="mt-10 flex flex-col md:flex-row justify-start gap-6">
                <a href="/menu" className="group relative pb-1">
                  <span>VIEW MENUS</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
                </a>
                <a href="/reservation" className="group relative pb-1">
                  <span>BOOK A TABLE</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto"> {/* <- This is the key wrapper */}
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-6xl font-serif mt-5 font-semibold">
              Selected Menus
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-10">
              At Fire & Flavor, we don’t just serve food – we serve experiences
              that sizzle. Our menu is a tribute to bold spices, fiery flavors,
              and dishes that dare to go beyond the ordinary.
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
        </div>
      </div>


      <div className=" bg-black text-white px-6 py-12 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
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
                        className={`text-xs ml-2 px-2 py-0.5 rounded uppercase font-bold ${item.badge === "Recommended"
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
      </div>

      <div className="w-full bg-black text-white">
        <div
          className="w-full h-64 bg-cover  flex justify-center mx-auto bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="relative py-6 px-4 flex flex-col items-center">
          <div className="absolute top-10 text-orange-500">
            <Quote size={36} />
          </div>
          <div className="max-w-3xl mx-auto text-center mt-4 px-4">
            <p className="text-xl font-serif mb-6 mt-8">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex flex-col items-center">
              <h4 className="font-medium text-lg">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-gray-400 text-sm">
                {testimonials[currentTestimonial].title}
              </p>
            </div>
          </div>
          <div className="flex  justify-between w-full max-w-7xl mt-8">
            <div className="w-24 border-t border-gray-700 mt-3"></div>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-600'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="w-24 border-t border-gray-700 mt-3"></div>
          </div>
          <div className="flex max-w-7xl justify-between w-full absolute top-1/2 px-4">
            <button
              onClick={prevTestimonial}
              className="bg-black/30 p-2 rounded-full text-white hover:bg-black/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-black/30 p-2 rounded-full text-white hover:bg-black/50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <VisitReservation />
    </>
  );
}