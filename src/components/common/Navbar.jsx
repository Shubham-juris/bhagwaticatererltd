import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 md:px-20 py-4  text-white">
        <div className="text-2xl font-bold">
          <a className="hover:text-orange-300 text-orange-500" href="/">Bhagwati</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-sm">
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
            <Link to="Reservation" className="hover:text-orange-500">
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

        {/* Desktop Contact Info */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <span>+39-055-123456</span>
          <span>booking@patiotime.com</span>
          <a
            href="#book"
            className="border px-4 py-1 hover:bg-orange-600 transition"
          >
            FIND A TABLE
          </a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute  top-16 w-full bg-black bg-opacity-90 text-white px-6 py-4 flex flex-col space-y-4 text-sm md:hidden transition-all duration-300">
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
          <a href="#menu" onClick={toggleMenu} className="hover:text-orange-500">
            OUR MENU
          </a>
          <a
            href="#reservation"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            RESERVATION
          </a>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-orange-500"
          >
            CONTACT
          </Link>
          <a href="#news" onClick={toggleMenu} className="hover:text-orange-500">
            LATEST NEWS
          </a>
          <hr className="border-gray-700" />
          <span>+39-055-123456</span>
          <span>booking@patiotime.com</span>
          <a
            href="#book"
            onClick={toggleMenu}
            className="border px-4 py-1 mt-2 hover:bg-orange-600 transition text-center"
          >
            FIND A TABLE
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
