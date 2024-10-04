import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        {/* Dynamic icon */}
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4 -4M12 20a8 8 0 100 -16a8 8 0 000 16z"
            />
          </svg>
        </div>
        {/* Title */}
        <h1 className="text-2xl font-bold mt-12 mb-4 text-gray-800">Thank You!</h1>
        {/* Message */}
        <p className="text-gray-600 mb-4">
          Your submission has been received. We will get back to you shortly.
        </p>
        {/* Redirect button */}
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
