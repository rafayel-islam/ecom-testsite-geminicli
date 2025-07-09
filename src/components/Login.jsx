import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="p-8 bg-white rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Username</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
          <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;