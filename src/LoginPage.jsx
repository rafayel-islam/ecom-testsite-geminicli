import { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-gray-200 to-blue-100">
      <div className={`container relative w-full max-w-3xl min-h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden ${isActive ? 'active' : ''}`}>
        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-700 ease-in-out ${isActive ? 'translate-x-full opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <form className="flex flex-col items-center justify-center h-full px-10 bg-white">
            <h1 className="mb-4 text-2xl font-bold">Create Account</h1>
            <div className="flex mb-6 space-x-2">
              <SocialIcon Icon={FaGooglePlusG} />
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaGithub} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
            <span className="mb-4 text-sm">or use your email for registration</span>
            <input type="text" placeholder="Enter your full name" className="input-field" />
            <input type="email" placeholder="Enter your email" className="input-field" />
            <input type="password" placeholder="Create a password" className="input-field" />
            <button className="w-full btn-primary">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700 ease-in-out ${isActive ? 'translate-x-full z-10' : 'z-10'}`}>
          <form className="flex flex-col items-center justify-center h-full px-10 bg-white">
            <h1 className="mb-3 text-2xl font-bold">Sign In</h1>
            <div className="flex mb-6 space-x-2">
              <SocialIcon Icon={FaGooglePlusG} />
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaGithub} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
            <span className="mb-3 text-sm">or use your email password</span>
            <input type="email" placeholder="Enter your email" className="input-field" />
            <input type="password" placeholder="Enter your password" className=" input-field" />
            <div className="flex items-center justify-between w-full mt-2 mb-2">
              <div>
              <input type="checkbox" id="rememberMe" className="mr-2 size-3" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 ">Remember Me</label>
              </div>
              <a href="#" className="items-center text-sm text-gray-600 hover:underline">Forget Your Password?</a>
            </div>
            
            <button className="w-full btn-primary">Sign In</button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out ${isActive ? '-translate-x-full rounded-tr-[100px] rounded-br-[100px]' : 'rounded-tl-[150px] rounded-bl-[100px]'}`}>
          <div className={`bg-gradient-to-r from-indigo-400 to-purple-600 h-full text-white relative -left-full w-[200%] transition-all duration-700 ease-in-out ${isActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
            {/* Left Panel */}
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-6 text-center transition-all duration-700 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-[200%]'}`}>
              <h1 className="mb-4 text-2xl font-bold">Welcome Back!</h1>
              <p className="mb-6 text-sm">Sign in to continue your journey</p>
              <button
                className="btn-secondary"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>
            {/* Right Panel */}
            <div className={`absolute right-0 w-1/2 h-full flex items-center justify-center flex-col px-6 text-center transition-all duration-700 ease-in-out ${isActive ? 'translate-x-[200%]' : 'translate-x-0'}`}>
              <h1 className="mb-4 text-2xl font-bold">Hello, Friend!</h1>
              <p className="mb-6 text-sm">Sign up to discover amazing features</p>
              <button
                className="btn-secondary"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors border border-gray-300 rounded-full hover:bg-gray-100">
    <Icon className="text-gray-600" />
  </a>
);

export default LoginPage;