import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/useCart';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container p-8 mx-auto text-red-500">Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate('/checkout');
  };

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="container p-8 mx-auto my-10 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="md:flex">
        <div className="p-6 md:w-1/2">
          <img src={product.image} alt={product.name} className="object-cover w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <div>
            <h1 className="mb-3 text-4xl font-extrabold text-gray-900">{product.name}</h1>
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">Specifications</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="mb-6 text-5xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center mb-6">
              <button
                className="px-4 py-2 text-xl font-bold text-gray-700 bg-gray-200 rounded-l-lg hover:bg-gray-300"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="px-6 py-2 text-xl font-bold text-gray-900 bg-gray-100">{quantity}</span>
              <button
                className="px-4 py-2 text-xl font-bold text-gray-700 bg-gray-200 rounded-r-lg hover:bg-gray-300"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <div className="flex space-x-4">
              <button
                className="flex-1 px-6 py-4 text-xl font-bold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="flex-1 px-6 py-4 text-xl font-bold text-blue-600 transition duration-300 ease-in-out transform bg-transparent border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Sections */}
      <div className="p-6 mt-10 border-t border-gray-200">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Product Details</h2>

        {/* Description */}
        <div className="mb-6">
          <h3 className="mb-2 text-2xl font-semibold text-gray-800">Description</h3>
          <p className="text-lg leading-relaxed text-gray-700">{product.description}</p>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">Specifications</h3>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warranty */}
        {product.warranty && (
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">Warranty</h3>
            <p className="text-lg text-gray-700">{product.warranty}</p>
          </div>
        )}

        {/* Video */}
        {product.videoUrl && (
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">Product Video</h3>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src={product.videoUrl}
                title="Product Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;