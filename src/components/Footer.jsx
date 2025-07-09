import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">[Your Company Name]</h3>
          <p className="text-sm leading-relaxed">
            We are dedicated to providing the best products and services to our customers. Our mission is to innovate and lead in our industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition duration-300">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition duration-300">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street, Anytown, USA</li>
            <li><i className="fas fa-phone mr-2"></i> +1 (123) 456-7890</li>
            <li><i className="fas fa-envelope mr-2"></i> info@example.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-facebook-f text-2xl"></i></a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-linkedin-in text-2xl"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;