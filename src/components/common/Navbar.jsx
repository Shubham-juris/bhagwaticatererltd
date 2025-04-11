import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 md:px-20 py-4 bg-black bg-opacity-40 text-white">
          <div className="text-2xl font-bold">
            <a href="/">B.</a>
          </div>
          <ul className="hidden md:flex gap-6 items-center text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 cursor-pointer">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-orange-500 cursor-pointer">
                ABOUT
              </Link>
            </li>
            <li>
              <a href="#menu" className="hover:text-orange-500 cursor-pointer">
                OUR MENU
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className="hover:text-orange-500 cursor-pointer"
              >
                RESERVATION
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 cursor-pointer"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-orange-500 cursor-pointer">
                LATEST NEWS
              </a>
            </li>
          </ul>
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
          <div className="md:hidden"></div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
