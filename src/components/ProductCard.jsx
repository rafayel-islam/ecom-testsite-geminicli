import React from 'react';
import { useCart } from '../context/useCart';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price.toFixed(2)}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;