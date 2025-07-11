import React from 'react';
import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      {
        cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded-md mr-4"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-2xl font-bold mt-8">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
            <div className="flex justify-end mt-4">
              <Link to="/checkout" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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