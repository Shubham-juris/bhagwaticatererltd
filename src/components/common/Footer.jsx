import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-orange-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <FaPinterestP />
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <FaYoutube />
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm font-light">
          <li><a href="#" className="hover:text-orange-500">About</a></li>
          <li><a href="#" className="hover:text-orange-500">Reservation</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
          <li><a href="#" className="hover:text-orange-500">Policy</a></li>
        </ul>

        <p className="text-sm font-light text-gray-400 text-center md:text-right">
          © Copyright  2025.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
