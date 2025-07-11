import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaMoneyBillWave, FaGem, FaTags, FaCalendarCheck, FaBoxOpen, FaGift, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaShippingFast className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders, making your shopping experience even more convenient.',
  },
  {
    icon: <FaHeadset className="w-12 h-12 text-blue-600 mb-4" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions.',
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Secure Payments',
    description: 'We use top-tier encryption to ensure your payment details are always safe and secure.',
  },
  {
    icon: <FaMoneyBillWave className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Money-Back Guarantee',
    description: 'Not satisfied? We offer a 30-day money-back guarantee on all our products, no questions asked.',
  },
  {
    icon: <FaGem className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Quality Products',
    description: 'We source the best products to ensure you receive top-notch quality and value.',
  },
  {
    icon: <FaTags className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Best Prices',
    description: 'We offer competitive prices to give you the best deal possible on all our items.',
  },
  {
    icon: <FaCalendarCheck className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Daily Deals',
    description: 'Check back every day for new and exciting deals on a wide range of products.',
  },
  {
    icon: <FaBoxOpen className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Easy Returns',
    description: "Our hassle-free return policy makes it easy to send back items that don't meet your needs.",
  },
  {
    icon: <FaGift className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Gift Cards',
    description: 'The perfect gift for any occasion. Available in various denominations.',
  },
  {
    icon: <FaStar className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Customer Reviews',
    description: 'Read what other customers have to say about our products and service.',
  },
];

const featuresRow1 = features.slice(0, 3);
const featuresRow2 = features.slice(3, 6);
const featuresRow3 = features.slice(6, 10);

const FeatureCard = ({ feature, index }) => (
  <div
    key={index}
    className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs"
  >
    {feature.icon}
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

function KeyFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Key Features</h2>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {featuresRow1.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {featuresRow2.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {featuresRow3.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
