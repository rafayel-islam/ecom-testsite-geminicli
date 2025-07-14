import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useCart } from '../context/useCart';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const getNavLinkClass = ({ isActive }) =>
    `my-2 text-lg font-medium md:my-0 md:text-sm ${
      isOpen
        ? `text-white hover:text-blue-300`
        : `${isActive ? 'text-blue-700' : 'text-gray-700'} hover:text-blue-500`
    } md:mx-4`;

  const getButtonLinkClass = ({ isActive }) =>
    `px-4 py-2 mt-2 text-sm font-medium transition-colors duration-300 transform rounded-md md:mt-0 md:ml-4 ${
      isOpen
        ? 'text-white border border-white hover:bg-white hover:text-black'
        : `${isActive ? 'bg-blue-700 text-white' : 'text-white bg-blue-600'} hover:bg-blue-500 focus:outline-none focus:bg-blue-500`
    }`;

  const getCartLinkClass = ({ isActive }) =>
    `relative px-4 py-2 mt-2 text-sm font-medium transition-colors duration-300 transform rounded-md md:mt-0 md:ml-4 ${
      isOpen
        ? 'text-white hover:bg-gray-700'
        : `${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700'} hover:bg-gray-200 focus:outline-none focus:bg-gray-200`
    }`;

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <NavLink className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" to="/" onClick={handleLinkClick}>Logo</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 z-50" aria-label="toggle menu">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu for mobile and desktop */}
        <div
          className={`
            ${isOpen ? 'fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center' : 'hidden'}
            md:flex md:items-center md:flex-1 md:static md:bg-transparent md:z-auto
          `}
        >
          <div className="flex flex-col text-center md:flex-row md:mx-6 md:flex-1 md:justify-center">
            <NavLink className={getNavLinkClass} to="/" onClick={handleLinkClick}>Home</NavLink>
            <NavLink className={getNavLinkClass} to="/shop" onClick={handleLinkClick}>Shop</NavLink>
            <NavLink className={getNavLinkClass} to="/about" onClick={handleLinkClick}>About</NavLink>
            <NavLink className={getNavLinkClass} to="/contact" onClick={handleLinkClick}>Contact</NavLink>
            <NavLink className={getNavLinkClass} to="/privacy-policy" onClick={handleLinkClick}>Privacy Policy</NavLink>
          </div>

          <div className="flex flex-col text-center md:flex-row md:ml-auto">
            <NavLink to="/login" className={getButtonLinkClass} onClick={handleLinkClick}>Login/SignUp</NavLink>
            <NavLink to="/cart" className={getCartLinkClass} onClick={handleLinkClick}>
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className={isOpen ? 'ml-2' : 'absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'}>{getTotalItems()}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
