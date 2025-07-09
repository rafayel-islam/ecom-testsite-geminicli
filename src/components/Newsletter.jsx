import React from 'react';

function Newsletter() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">Stay up-to-date with our latest news, products, and offers.</p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-2/3 p-3 rounded-md text-gray-800 mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full sm:w-1/3 bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;