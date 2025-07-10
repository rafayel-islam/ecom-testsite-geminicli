import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();

  const getNavLinkClass = ({ isActive }) =>
    `my-1 text-sm font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'} hover:text-blue-500 md:mx-4 md:my-0`;

  const getButtonLinkClass = ({ isActive }) =>
    `px-4 py-2 mt-2 text-sm font-medium ${isActive ? 'bg-blue-700 text-white' : 'text-white bg-blue-600'} transition-colors duration-300 transform rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 md:mt-0 md:ml-4`;

  const getSignupLinkClass = ({ isActive }) =>
    `px-4 py-2 mt-2 text-sm font-medium ${isActive ? 'border-blue-700 text-blue-700' : 'text-blue-600 border border-blue-600'} transition-colors duration-300 transform rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white md:mt-0 md:ml-4`;

  const getCartLinkClass = ({ isActive }) =>
    `relative px-4 py-2 mt-2 text-sm font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700'} transition-colors duration-300 transform rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200 md:mt-0 md:ml-4`;

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <NavLink className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" to="/">Logo</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu and Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:flex-1`}>
          <div className="flex flex-col md:flex-row md:mx-6 md:flex-1 md:justify-center">
            <NavLink className={getNavLinkClass} to="/">Home</NavLink>
            <NavLink className={getNavLinkClass} to="/shop">Shop</NavLink>
            <NavLink className={getNavLinkClass} to="/about">About</NavLink>
            <NavLink className={getNavLinkClass} to="/contact">Contact</NavLink>
            <NavLink className={getNavLinkClass} to="/privacy-policy">Privacy Policy</NavLink>
          </div>

          <div className="flex flex-col md:flex-row md:ml-auto">
            <NavLink to="/login" className={getButtonLinkClass}>Login/SignUp</NavLink>
            <NavLink to="/cart" className={getCartLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{getTotalItems()}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;