import React from 'react';
import { Link } from 'react-router-dom';

const LostPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="text-center space-y-6 px-4 w-full max-w-screen-md">
        {/* Decorative Icon */}
        <div className="text-8xl font-bold animate-pulse text-blue-500">404</div>
        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 text-lg font-medium rounded-md bg-blue-600 hover:bg-blue-500 transition-all"
          >
            Go to Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 text-lg font-medium rounded-md border-2 border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
      {/* Decorative Animation */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vw] max-w-[40rem] max-h-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 blur-[150px] opacity-50"></div>
      </div>
    </div>
  );
};

export default LostPage;
