import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function ShopPage() {
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