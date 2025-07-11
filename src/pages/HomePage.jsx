import React from 'react';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import SectionBackground from '../components/SectionBackground';

function HomePage() {
  return (
    <div>
      <SectionBackground>
        <Hero />
      </SectionBackground>

      <SectionBackground variant="reversed">
        <KeyFeatures />
      </SectionBackground>

      <SectionBackground>
        <Testimonial />
      </SectionBackground>

      
        <Newsletter />
      
    </div>
  );
}

export default HomePage;


