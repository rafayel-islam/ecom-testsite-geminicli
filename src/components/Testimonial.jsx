import React, { useState } from 'react';

function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'CEO, Tech Solutions',
      quote: '"This product has revolutionized our workflow. Highly recommend for any growing business!" ',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Bob Williams',
      title: 'Freelance Designer',
      quote: '"Incredible support and a user-friendly interface. My productivity has soared since I started using it."',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      title: 'Small Business Owner',
      quote: '"A game-changer for my online store. The features are exactly what I needed, and the results are amazing."',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Lee',
      title: 'Product Manager',
      quote: '"The best investment we\'ve made this year. The ROI is undeniable, and the team is fantastic."',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 5,
      name: 'Eve Davis',
      title: 'Content Creator',
      quote: '"Simple, powerful, and effective. It\'s exactly what I needed to streamline my content creation process."',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 6,
      name: 'Frank White',
      title: 'Startup Founder',
      quote: '"As a startup, every tool counts. This one has given us a significant edge in the market."',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 7,
      name: 'Grace Taylor',
      title: 'Educator',
      quote: '"I\'ve been looking for a solution like this for ages. It\'s intuitive, comprehensive, and truly helpful."',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 8,
      name: 'Henry Wilson',
      title: 'Financial Analyst',
      quote: '"The data insights provided are invaluable. It\'s helped me make more informed decisions and achieve better results."',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 9,
      name: 'Ivy Moore',
      title: 'E-commerce Specialist',
      quote: '"From setup to daily use, everything has been seamless. A must-have for anyone in e-commerce."',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 10,
      name: 'Jack Green',
      title: 'Operations Manager',
      quote: '"Efficiency and reliability are key for us, and this product delivers on all fronts. Highly satisfied!"',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 11,
      name: 'Karen Hall',
      title: 'Customer Support Lead',
      quote: '"Our customers are happier, and our team is more productive. A win-win for everyone involved."',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 12,
      name: 'Liam King',
      title: 'Product Designer',
      quote: '"The attention to detail and user experience is phenomenal. It\'s a joy to work with."',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
  ];

  const testimonialsPerPage = 3;
  const totalGroups = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - testimonialsPerPage;
      return newIndex < 0 ? (totalGroups - 1) * testimonialsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + testimonialsPerPage;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="text-yellow-400 fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="text-gray-400 far fa-star"></i>); // Outline star
      }
    }
    return <div className="flex justify-center mb-2">{stars}</div>;
  };

  const displayedTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  return (
    <section className="py-16">
      <div className="container relative px-6 mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
              <img
                className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              {renderStars(testimonial.rating)}
              <p className="mb-4 italic text-gray-600">{testimonial.quote}</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-blue-600">{testimonial.title}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons at the bottom */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="p-3 text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;