import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }
    // Process payment and order (dummy logic)
    alert("Order placed successfully!");
    clearCart();
    navigate('/shop'); // Redirect to shop page after successful order
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary */}
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {
              cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <p>{item.name} x {item.quantity}</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="border-t pt-4 flex justify-between items-center text-xl font-bold">
                    <p>Total:</p>
                    <p>${getTotalPrice().toFixed(2)}</p>
                  </div>
                </div>
              )
            }
          </div>

          {/* Shipping and Payment Form */}
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">Zip</label>
                  <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">Payment Information</h2>
              <div className="mb-4">
                <label htmlFor="cardName" className="block text-gray-700 text-sm font-bold mb-2">Name on Card</label>
                <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Credit Card Number</label>
                <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="expMonth" className="block text-gray-700 text-sm font-bold mb-2">Exp Month</label>
                  <input type="text" id="expMonth" name="expMonth" value={formData.expMonth} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="MM" required />
                </div>
                <div>
                  <label htmlFor="expYear" className="block text-gray-700 text-sm font-bold mb-2">Exp Year</label>
                  <input type="text" id="expYear" name="expYear" value={formData.expYear} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="YYYY" required />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                  <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full focus:outline-none focus:shadow-outline">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;