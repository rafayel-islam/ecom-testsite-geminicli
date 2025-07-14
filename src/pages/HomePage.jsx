import React from 'react';
import Hero from '../components/Hero';
import Partner from '../components/Partner';
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

      <SectionBackground>
        <Partner />
      </SectionBackground>

      <SectionBackground>
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


