import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 md:px-20 py-4 bg-black bg-opacity-90 text-white">
        <div className="text-3xl font-bold py-3">
          <a className="hover:text-orange-300 text-orange-500" href="/">
            Bhagwati <span className="text-white">Caterer</span>
          </a>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-md">
          <li>
            <Link to="/" className="hover:text-orange-500">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-orange-500">
              OUR MENU
            </Link>
          </li>
          <li>
            <Link to="/Reservation" className="hover:text-orange-500">
              RESERVATION
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-orange-500">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/Latestnews" className="hover:text-orange-500">
              LATEST NEWS
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6 text-md px-4 py-2 rounded-lg">
          <div className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a
              href="tel:+39055123456"
              className="inline-flex items-center gap-2 px-6 py-2 text-white rounded-lg bg-orange-500 hover:bg-orange-600 shadow-lg"
            >
              <Phone size={16} />
              +39055123456
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-20 w-full h-[60vh] overflow-y-auto bg-black bg-opacity-90 text-white px-6 py-4 flex flex-col space-y-4 text-sm md:hidden transition-all duration-300">
          <Link to="/" onClick={toggleMenu} className="hover:text-orange-500">
            HOME
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            ABOUT
          </Link>
          <Link
            to="/menu"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            OUR MENU
          </Link>
          <Link
            to="/Reservation"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            RESERVATION
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            CONTACT
          </Link>
          <Link
            to="/Latestnews"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            LATEST NEWS
          </Link>
          <hr className="border-gray-700" />

          <div className="bg-orange-500 px-4 py-2 rounded-lg space-y-2">
            <a
              href="tel:+39055123456"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={16} />
              +39-055-123456
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
