import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { PiMoonStarsFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <header className="w-full sticky top-0 left-0 bg-white  z-50 ">
        {/* Top Bar */}
        <div className="flex justify-between items-center text-xs text-gray-700 p-2 uppercase">
          <div className="flex space-x-4">
            <Link to="/signin">Sign In</Link>
            <Link to="/tracking">Tracking Info</Link>
            <Link to="/corporate">Corporate Inquiry</Link>
            <Link to="/account">Create an Account</Link>
          </div>
          {/* Ramadan Icon */}
          <div className="flex items-center space-x-2">
            <PiMoonStarsFill className="text-green-600 text-lg" />
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="flex flex-col items-center py-0">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm uppercase">
            <Link to="/new">New</Link>
            <Link to="/sync" className="tracking-widest">Sync</Link>
            <Link to="/cast-crew" className="text-gold-500 font-light">Cast & Crew</Link>
            <Link to="/featured" className="text-red-600 font-bold">Featured</Link>
            <Link to="/collection" className="text-red-600 font-bold">Collection</Link>
          </div>

          {/* Logo */}
          <div className="my-2">
            <Link to="/">
              <img src="/J.-logo.webp" alt="J. Logo" className="h-14" />
            </Link>
          </div>

          {/* Category Links */}
          <div className="flex space-x-6 text-sm uppercase">
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/boys-girls">Boys & Girls</Link>
            <Link to="/fragrances">Fragrances</Link>
            <Link to="/makeup">Makeup</Link>
            <Link to="/skincare">Skincare</Link>
            <span className="text-red-600">New</span>
          </div>
        </nav>

        {/* Icons */}
        <div className="absolute right-5 top-5 flex space-x-4 text-xl">
          <FaShoppingCart className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
