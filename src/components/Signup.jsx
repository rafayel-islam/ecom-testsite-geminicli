import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="p-8 bg-white rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
          <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirm-password">Confirm Password</label>
          <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;