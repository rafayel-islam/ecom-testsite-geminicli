
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/Professioal Full Stack Website Developer.png';

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 lg:w-5/12 text-center md:text-left mb-12 md:mb-0">
            <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Best Quality Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              We Print What <br /> You Want!
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Click here to browse our collection of high-quality, custom-printable products.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Shop Now
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Right Column: Image in Circle */}
          <div className="md:w-1/2 lg:w-6/12 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 flex items-center justify-center">
              <img
                src={heroImage}
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
