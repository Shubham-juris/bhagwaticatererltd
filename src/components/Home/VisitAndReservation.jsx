import { useState } from 'react';
import img4 from "../../assets/home/img3.jpg";
import img3 from "../../assets/home/img4.jpg";

export default function VisitReservation() {
  const [isVisitHovered, setIsVisitHovered] = useState(false);
  const [isReserveHovered, setIsReserveHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      {/* Visit Us Section */}
      <div
        className="relative h-96 md:h-auto overflow-hidden"
        onMouseEnter={() => setIsVisitHovered(true)}
        onMouseLeave={() => setIsVisitHovered(false)}
      >
        <div className="absolute inset-0 transition-opacity duration-500">
          <img
            src={img3}
            alt="Restaurant exterior location"
            className={`h-full w-full object-cover transition-opacity duration-500 ${isVisitHovered ? 'opacity-40' : 'opacity-0'}`}
          />
          <div className={`absolute inset-0 ${isVisitHovered ? 'bg-gray/10' : 'bg-black'}`}></div>
        </div>

        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center items-center text-center">
          <p className="text-xs uppercase tracking-wider text-orange-500 font-medium mb-4">
            Find the restaurant
          </p>
          <h2 className="text-4xl font-serif mb-6">VISIT US</h2>
          <p className="text-sm mb-4 max-w-md">
            Northern end of the Overseas Passenger Terminal, Circular Quay, Sydney NSW 2000, Australia
          </p>
          <div className="mt-6">
            <h3 className="uppercase text-sm font-bold mb-2">Open Hours</h3>
            <p className="text-sm mb-1">Mon — Thu: 10:00 am — 01:00 am</p>
            <p className="text-sm">Fri — Sun: 10:00 am — 02:00 am</p>
          </div>
          <div className="mt-8">
            <button
              aria-label="Get Directions"
              className="text-xs uppercase font-medium text-orange-500 border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors duration-300"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* Reservation Section */}
      <div
        className="relative h-96 md:h-auto overflow-hidden"
        onMouseEnter={() => setIsReserveHovered(true)}
        onMouseLeave={() => setIsReserveHovered(false)}
      >
        <div className="absolute inset-0 transition-opacity duration-500">
          <img
            src={img4}
            alt="Restaurant interior with tables"
            className={`h-full w-full object-cover transition-opacity duration-500 ${isReserveHovered ? 'opacity-40' : 'opacity-0'}`}
          />
          <div className={`absolute inset-0 ${isReserveHovered ? 'bg-black/40' : 'bg-black'}`}></div>
        </div>

        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center items-center text-center">
          <p className="text-xs uppercase tracking-wider text-orange-500 font-medium mb-4">
            Book a table
          </p>
          <h2 className="text-4xl font-serif mb-6">RESERVATION</h2>
          <p className="text-sm mb-4 max-w-md">
            Planning a romantic dinner for two or a communal meal with family or friends? Book a table now.
          </p>
          <div className="mt-6">
            <h3 className="uppercase text-sm font-bold mb-2">Booking</h3>
            <p className="text-sm mb-1">Email: booking@patiotime.com</p>
            <p className="text-sm">Call us: +39 055 1234567</p>
          </div>
          <div className="mt-8">
            <button
              aria-label="Make an Online Reservation"
              className="text-xs uppercase font-medium text-orange-500 border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors duration-300"
            >
              Online Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
