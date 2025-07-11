import React from 'react';

function Newsletter() {
  return (
    <section className="py-16 text-white bg-blue-600">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mb-8 text-lg">Stay up-to-date with our latest news, products, and offers.</p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col items-center justify-center sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 mb-4 text-gray-800 rounded-md sm:w-2/3 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 font-bold text-blue-600 transition duration-300 bg-white rounded-md sm:w-1/3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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