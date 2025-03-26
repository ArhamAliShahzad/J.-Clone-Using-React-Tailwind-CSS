import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { PiMoonStarsFill } from "react-icons/pi";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      updateCartCount(parsedCart);
    }
  }, []);

  // Update cart count whenever cartItems change
  const updateCartCount = (items) => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  // Function to add to cart (could be called from product pages)
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    updateCartCount(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <header className="w-full sticky top-0 left-0 bg-white z-50">
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
          <Link to="/cart" className="relative">
            <FaShoppingCart className="cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <FaSearch className="cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Navbar;