import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from '../../assets/AboutUs/image.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50 justify-center mx-auto">
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-center mx-auto  items-center px-6 xl:px-20 py-4 h-20 bg-black bg-opacity-90 text-white">
        <div className="flex justify-between items-center w-full max-w-screen-xl">
        <div className="text-3xl font-bold flex items-center h-full">
          <a className="text-orange-500 flex item-center text-2xl md:4xl justify-center gap-2" href="/">
          <img src={logo} className="hidden md:block w-10 h-10" alt="" />
            Bhagwati <span className="text-white">Caterer</span>
          </a>
        </div>

        <ul className="hidden xl:flex gap-6 items-center text-md">
          <li>
            <Link to="/" className="hover:text-orange-500">HOME</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500">ABOUT</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-orange-500">OUR MENU</Link>
          </li>
          <li>
            <Link to="/Reservation" className="hover:text-orange-500">RESERVATION</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-orange-500">CONTACT</Link>
          </li>
          <li>
            <Link to="/Latestnews" className="hover:text-orange-500">LATEST NEWS</Link>
          </li>
        </ul>

        <div className="hidden xl:flex items-center gap-6 text-md px-4 py-2 rounded-xl">
          <div className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a
              href="tel:+39055123456"
              className="inline-flex items-center gap-2 px-6 py-2 text-white rounded-xl bg-orange-500 hover:bg-orange-600 shadow-xl"
            >
              <Phone size={16} />
              +39055123456
            </a>
          </div>
        </div>

        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-20 w-full h-[60vh] overflow-y-auto bg-black bg-opacity-90 text-white px-6 py-4 flex flex-col space-y-4 text-sm xl:hidden transition-all duration-300">
          <Link to="/" onClick={toggleMenu} className="hover:text-orange-500">HOME</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-orange-500">ABOUT</Link>
          <Link to="/menu" onClick={toggleMenu} className="hover:text-orange-500">OUR MENU</Link>
          <Link to="/Reservation" onClick={toggleMenu} className="hover:text-orange-500">RESERVATION</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-500">CONTACT</Link>
          <Link to="/Latestnews" onClick={toggleMenu} className="hover:text-orange-500">LATEST NEWS</Link>

          <hr className="border-gray-700" />

          <div className="bg-orange-500 px-4 py-2 rounded-xl space-y-2">
            <a href="tel:+39055123456" className="flex items-center gap-2 hover:underline">
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
