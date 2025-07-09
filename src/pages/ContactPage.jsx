import React from 'react';

function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12095.73730088559!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bdae1d%3A0x89c25a22a3bdae1d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">123 Main Street, Anytown, USA 12345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;