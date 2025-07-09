import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Welcome to Our Store',
      description: 'Discover amazing products and great deals.',
    },
    {
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'New Arrivals Every Week',
      description: 'Stay updated with the latest trends.',
    },
    {
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Unbeatable Prices',
      description: 'Shop now and save big!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;