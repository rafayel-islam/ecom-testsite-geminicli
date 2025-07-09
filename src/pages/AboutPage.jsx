import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
          <p className="text-lg md:text-xl">Innovating for a better future.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At [Your Company Name], our mission is to empower individuals and businesses through cutting-edge technology and exceptional service. We strive to create innovative solutions that simplify lives, foster connections, and drive progress in a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="John Doe"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-blue-600">CEO & Founder</p>
              <p className="text-gray-600 mt-2">Visionary leader with a passion for innovation.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Jane Smith"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-blue-600">Chief Technology Officer</p>
              <p className="text-gray-600 mt-2">Expert in scalable architectures and emerging technologies.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mike Johnson"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-blue-600">Head of Marketing</p>
              <p className="text-gray-600 mt-2">Driving growth with creative and data-driven strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join us on our journey to redefine the future.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;