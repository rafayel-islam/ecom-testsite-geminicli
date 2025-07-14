import React from 'react';
import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="container p-4 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Your Shopping Cart</h1>
      {
        cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b pb-6 md:pb-4 last:border-b-0">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-0 md:mr-4 mb-2 md:mb-0" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-20 text-center border rounded-md mr-4 py-2"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center md:text-right text-2xl font-bold pt-6 border-t border-gray-200">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-end mt-6 space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/shop" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-center transition-colors duration-200">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-center transition-colors duration-200">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CartPage;