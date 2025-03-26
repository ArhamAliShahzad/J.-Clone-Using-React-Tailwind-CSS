import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-gray-700 py-10 px-5">
      <div className="bg-[#232323] text-white py-12 px-4 flex flex-col justify-start bg-left-top bg-cover mb-10 bg-no-repeat bg-scroll border border-none rounded-none p-2.5 text-center ">
        <h3 className="text-2xl font-semibold">BE THE FIRST</h3>
        <p className="max-w-xl mx-auto mt-2">
          New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64 md:w-96"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Need Help */}
        <div>
          <h3 className="font-semibold text-lg mb-3">NEED HELP?</h3>
          <p className="flex items-center gap-2">📞 +92 21 111 112 111</p>
          <p className="text-sm">(Mon - Sat: 9:30am - 7:30pm | Sun: 11am - 5pm)</p>
          <p className="flex items-center gap-2 mt-2">📧 eshop@junaidjamshed.com</p>
        </div>

        {/* Catalogue */}
        <div>
          <h3 className="font-semibold text-lg mb-3">CATALOGUE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/men" className="hover:text-gray-500">Men</Link></li>
            <li><Link to="/women" className="hover:text-gray-500">Women</Link></li>
            <li><Link to="/kids" className="hover:text-gray-500">Kids</Link></li>
            <li><Link to="/fragrances" className="hover:text-gray-500">Fragrances</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-3">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-gray-500">Contact Us</Link></li>
            <li><Link to="/delivery-orders" className="hover:text-gray-500">Delivery & Orders</Link></li>
            <li><Link to="/returns-exchanges" className="hover:text-gray-500">Returns & Exchanges</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-gray-500">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-500">Privacy Policy</Link></li>
            <li><Link to="/track-order" className="hover:text-gray-500">Track My Order</Link></li>
            <li><Link to="/payment-guide" className="hover:text-gray-500">Payment Guide</Link></li>
          </ul>

        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gray-500">About Us</Link></li>
            <li><Link to="/" className="hover:text-gray-500">Careers</Link></li>
            <li><Link to="/" className="hover:text-gray-500">Store Addresses</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">FOLLOW US</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaPinterest /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        &copy; {new Date().getFullYear()} J. | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
