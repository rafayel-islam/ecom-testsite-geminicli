import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/useCart';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto p-8 text-red-500">Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-8 my-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-6">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-5xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Sections */}
      <div className="mt-10 p-6 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h2>
        
        {/* Description */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Description</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Warranty</h3>
            <p className="text-gray-700 text-lg">{product.warranty}</p>
          </div>
        )}

        {/* Video */}
        {product.videoUrl && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Product Video</h3>
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