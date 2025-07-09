import React from 'react';
import ProductCard from '../components/ProductCard';

function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest model with advanced features.',
      price: 799.99,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'Powerful and sleek for professionals.',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Running Shoes',
      description: 'Comfortable and durable for your daily runs.',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Desk Lamp',
      description: 'Modern design with adjustable brightness.',
      price: 49.99,
      image: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      description: 'Soft cotton, perfect for everyday wear.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      name: 'Gaming Headset',
      description: 'Immersive sound for an ultimate gaming experience.',
      price: 119.99,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      name: 'Smartwatch',
      description: 'Track your fitness and stay connected.',
      price: 199.99,
      image: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      name: 'Backpack',
      description: 'Durable and spacious for all your adventures.',
      price: 69.99,
      image: 'https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      name: 'Coffee Maker',
      description: 'Brew your perfect cup every morning.',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      name: 'Sunglasses',
      description: 'Stylish and protective eyewear.',
      price: 39.99,
      image: 'https://images.pexels.com/photos/185767/pexels-photo-185767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Shop Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;