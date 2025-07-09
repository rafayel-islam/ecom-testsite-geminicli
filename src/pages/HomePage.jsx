import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';

function HomePage() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Newsletter />
    </div>
  );
}

export default HomePage;