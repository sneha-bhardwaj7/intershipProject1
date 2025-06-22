import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="w-20 h-6 bg-gray-300 rounded-sm" />

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-sm font-semibold text-black">
        <li className="cursor-pointer hover:text-brown-600">Home</li>
        <li className="cursor-pointer hover:text-brown-600">Category</li>
        <li className="cursor-pointer hover:text-brown-600">Blog</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-2xl text-[#5E2B00]">
        <FiSearch className="cursor-pointer hover:scale-110 transition-transform" />
        <FiUser className="cursor-pointer hover:scale-110 transition-transform" />
        <FiShoppingCart className="cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </nav>
  );
};

export default Navbar;
