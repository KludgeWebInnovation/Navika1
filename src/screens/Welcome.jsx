
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-50 text-center p-4">
      <img
        src="/navika-mascot.png"
        alt="Navika Mascot"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome to Navika</h1>
      <p className="text-lg text-gray-700 mb-6">Let’s find your personalized learning path.</p>
      <button
        onClick={() => navigate('/assessment')}
        className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
      >
        Start
      </button>
    </div>
  );
};

export default Welcome;
