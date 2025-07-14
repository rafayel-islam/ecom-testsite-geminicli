import React from 'react';

function Partner() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Placeholder */}
          <div className="md:w-1/2 lg:w-5/12">
            <img className="w-full h-auto rounded-lg shadow-lg" src="https://img.freepik.com/free-vector/business-partners-handshake_74855-5222.jpg?w=996&t=st=1720963353~exp=1720963953~hmac=e8a7574d1b4e54188355a726472e3e6b6e0a7e5b1b0b3b7e3b1b1b1b1b1b1b1b" alt="Business Partnership" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Become a Partner and Grow Your Business</h2>
            <p className="mt-6 text-lg text-gray-600">
              Join our vibrant community of partners and unlock new opportunities. We provide the platform, you bring the expertise. Let's build success together.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block px-10 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg transform hover:scale-105">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
